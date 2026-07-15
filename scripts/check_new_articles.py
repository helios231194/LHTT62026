#!/usr/bin/env python3
import os
import sys
import json
import urllib.request
from datetime import datetime
from pathlib import Path

# Thêm cấu hình encoding cho UTF-8
try:
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
except:
    pass

PROJECT_DIR = Path(__file__).resolve().parent.parent
ENV_FILE = PROJECT_DIR / '.env.local'
CACHE_FILE = PROJECT_DIR / 'src/data/last_article_check.json'

def load_env():
    env = {}
    if ENV_FILE.exists():
        with open(ENV_FILE, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):
                    key, val = line.split('=', 1)
                    env[key.strip()] = val.strip()
    return env

def fetch_articles(base_url, token):
    url = f"{base_url}/api/blog_posts:list?sort=-published_at&pageSize=200&page=1&appends=image,author_avatar&filter[status]=published"
    req = urllib.request.Request(url)
    req.add_header('Authorization', f'Bearer {token}')
    req.add_header('Content-Type', 'application/json')
    
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            return data.get('data', [])
    except Exception as e:
        print(f"Lỗi gọi API NocoBase: {e}", file=sys.stderr)
        return []

def main():
    env = load_env()
    base_url = env.get('NOCOBASE_BASE_URL', 'https://lht.gun.hmz.one')
    token = env.get('NOCOBASE_TOKEN', '')
    
    if not token:
        print("Lỗi: Không tìm thấy NOCOBASE_TOKEN trong .env.local")
        sys.exit(1)
        
    articles = fetch_articles(base_url, token)
    if not articles:
        print("Không thể tải danh sách bài viết từ CMS.")
        sys.exit(0)
        
    # Lấy thông tin cache cũ
    last_check = {}
    if CACHE_FILE.exists():
        try:
            with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                last_check = json.load(f)
        except Exception:
            pass
            
    last_known_time = last_check.get('last_time', '1970-01-01T00:00:00.000Z')
    
    new_articles = []
    max_time = last_known_time
    
    for art in articles:
        # Sử dụng updatedAt hoặc published_at làm mốc thời gian cập nhật
        update_time = art.get('updatedAt') or art.get('published_at') or '1970-01-01T00:00:00.000Z'
        if update_time > last_known_time:
            new_articles.append({
                'id': art.get('id'),
                'title': art.get('title'),
                'slug': art.get('slug'),
                'updatedAt': update_time,
                'published_at': art.get('published_at')
            })
        if update_time > max_time:
            max_time = update_time

    # Lưu lại mốc thời gian lớn nhất vừa quét được
    CACHE_DIR = CACHE_FILE.parent
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump({'last_time': max_time, 'checked_at': datetime.now().isoformat()}, f, indent=2)

    # In kết quả phát hiện bài viết mới
    if new_articles:
        print(f"🎉 PHÁT HIỆN {len(new_articles)} BÀI VIẾT MỚI/CẬP NHẬT:")
        for idx, art in enumerate(new_articles, 1):
            print(f"  {idx}. {art['title']} (slug: {art['slug']}, Cập nhật lúc: {art['updatedAt']})")
    else:
        print("Không có bài viết mới nào kể từ lần quét trước.")

if __name__ == '__main__':
    main()

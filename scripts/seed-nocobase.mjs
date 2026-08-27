#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'src/data');

const NOCOBASE_URL = process.env.NOCOBASE_BASE_URL || 'http://localhost:13000';
const USERNAME = process.env.INIT_ROOT_USERNAME || 'nocobase';
const PASSWORD = process.env.INIT_ROOT_PASSWORD || 'admin123';
const MINIO_BASE_URL = 'https://minio.agentic.io.vn/linhoatam';

function normalizeUrl(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/uploads/')) {
    return `${MINIO_BASE_URL}/${url.replace('/uploads/', '')}`;
  }
  return url;
}

function normalizeAttachments(arr) {
  if (!arr) return [];
  if (Array.isArray(arr)) {
    return arr.map(item => ({
      ...item,
      url: normalizeUrl(item.url || item.preview || item.filename),
      preview: item.preview ? normalizeUrl(item.preview) : undefined
    }));
  }
  return arr;
}

async function apiRequest(endpoint, options = {}, token = '') {
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  const res = await fetch(`${NOCOBASE_URL}${endpoint}`, {
    ...options,
    headers
  });

  const text = await res.text();
  try {
    const json = JSON.parse(text);
    return { ok: res.ok, status: res.status, data: json };
  } catch (e) {
    return { ok: res.ok, status: res.status, data: text };
  }
}

async function main() {
  console.log('====================================================');
  console.log(`  🚀 NocoBase v2.2.0-alpha.9 Seed & Migration Script`);
  console.log(`  Connecting to: ${NOCOBASE_URL}`);
  console.log('====================================================\n');

  // 1. Authenticate
  console.log('🔑 Step 1: Authenticating as Root Admin...');
  let token = process.env.NOCOBASE_TOKEN;
  if (!token) {
    let loginRes = await apiRequest('/api/auth:signIn', {
      method: 'POST',
      body: JSON.stringify({ account: USERNAME, password: PASSWORD })
    });

    if (!loginRes.ok) {
      loginRes = await apiRequest('/api/auth:signIn', {
        method: 'POST',
        body: JSON.stringify({ account: 'admin@nocobase.com', password: PASSWORD })
      });
    }

    if (!loginRes.ok) {
      console.error('❌ Authentication failed:', loginRes.data);
      process.exit(1);
    }

    token = loginRes.data.data?.token || loginRes.data.token;
  }
  console.log('✅ Authentication successful! Token acquired.\n');

  // 2. Define Collections
  const collections = [
    {
      name: 'blog_posts',
      title: 'Bài Viết Kiến Thức (Blog)',
      fields: [
        { name: 'title', type: 'string', uiSchema: { title: 'Tiêu đề' } },
        { name: 'slug', type: 'string', uiSchema: { title: 'Slug URL' } },
        { name: 'excerpt', type: 'text', uiSchema: { title: 'Tóm tắt' } },
        { name: 'content', type: 'text', uiSchema: { title: 'Nội dung (Markdown)' } },
        { name: 'author', type: 'string', uiSchema: { title: 'Tác giả' } },
        { name: 'category', type: 'string', uiSchema: { title: 'Danh mục' } },
        { name: 'tags', type: 'json', uiSchema: { title: 'Tags' } },
        { name: 'status', type: 'string', uiSchema: { title: 'Trạng thái (published/draft)' } },
        { name: 'read_time', type: 'integer', uiSchema: { title: 'Thời gian đọc (phút)' } },
        { name: 'published_at', type: 'date', uiSchema: { title: 'Ngày xuất bản' } },
        { name: 'pinned', type: 'boolean', uiSchema: { title: 'Ghim bài viết' } },
        { name: 'image', type: 'json', uiSchema: { title: 'Ảnh đại diện' } },
        { name: 'author_avatar', type: 'json', uiSchema: { title: 'Avatar tác giả' } }
      ]
    },
    {
      name: 'homepage',
      title: 'Cấu Hình Trang Chủ & Master Linh',
      fields: [
        { name: 'name', type: 'string', uiSchema: { title: 'Tên Master' } },
        { name: 'bio', type: 'text', uiSchema: { title: 'Tiểu sử' } },
        { name: 'hero_title', type: 'text', uiSchema: { title: 'Hero Title' } },
        { name: 'hero_desc', type: 'text', uiSchema: { title: 'Hero Description' } },
        { name: 'workshop_title', type: 'text', uiSchema: { title: 'Tiêu đề Workshop' } },
        { name: 'workshop_desc', type: 'text', uiSchema: { title: 'Mô tả Workshop' } },
        { name: 'workshop_tags', type: 'json', uiSchema: { title: 'Tags Workshop' } },
        { name: 'community_title', type: 'text', uiSchema: { title: 'Tiêu đề Cộng đồng' } },
        { name: 'community_desc', type: 'text', uiSchema: { title: 'Mô tả Cộng đồng' } },
        { name: 'credentials', type: 'json', uiSchema: { title: 'Chứng chỉ / Danh hiệu' } },
        { name: 'values', type: 'json', uiSchema: { title: 'Giá trị cốt lõi' } },
        { name: 'avatar', type: 'json', uiSchema: { title: 'Ảnh chân dung' } },
        { name: 'community_qr', type: 'json', uiSchema: { title: 'QR Cộng đồng' } },
        { name: 'book_cover', type: 'json', uiSchema: { title: 'Bìa sách' } },
        { name: 'logo', type: 'json', uiSchema: { title: 'Logo' } },
        { name: 'hero_bg', type: 'json', uiSchema: { title: 'Ảnh nền Hero' } },
        { name: 'philosophy_img', type: 'json', uiSchema: { title: 'Ảnh Triết lý' } },
        { name: 'community_banner', type: 'json', uiSchema: { title: 'Banner Cộng đồng' } },
        { name: 'destiny_pdf_cover', type: 'json', uiSchema: { title: 'Bìa Hồ sơ vận mệnh' } },
        { name: 'strategy_pdf_cover', type: 'json', uiSchema: { title: 'Bìa Chiến lược' } },
        { name: 'consulting_tier1_img', type: 'json', uiSchema: { title: 'Ảnh Tư vấn Tier 1' } },
        { name: 'consulting_tier2_img', type: 'json', uiSchema: { title: 'Ảnh Tư vấn Tier 2' } },
        { name: 'consulting_tier3_img', type: 'json', uiSchema: { title: 'Ảnh Tư vấn Tier 3' } },
        { name: 'consulting_tier4_img', type: 'json', uiSchema: { title: 'Ảnh Tư vấn Tier 4' } },
        { name: 'speaker_hero_img', type: 'json', uiSchema: { title: 'Ảnh Hero Diễn giả' } },
        { name: 'tiktok_embed_code', type: 'text', uiSchema: { title: 'Mã nhúng TikTok' } }
      ]
    },
    {
      name: 'personal_products',
      title: 'Sản Phẩm & Gói Tư Vấn Cá Nhân',
      fields: [
        { name: 'name', type: 'string', uiSchema: { title: 'Tên gói/sản phẩm' } },
        { name: 'slug', type: 'string', uiSchema: { title: 'Slug' } },
        { name: 'badge', type: 'string', uiSchema: { title: 'Huy hiệu' } },
        { name: 'tagline', type: 'string', uiSchema: { title: 'Tagline' } },
        { name: 'description', type: 'text', uiSchema: { title: 'Mô tả ngắn' } },
        { name: 'long_description', type: 'text', uiSchema: { title: 'Mô tả chi tiết' } },
        { name: 'price', type: 'string', uiSchema: { title: 'Giá' } },
        { name: 'benefits', type: 'text', uiSchema: { title: 'Lợi ích (ngăn cách bằng |)' } },
        { name: 'cta_label', type: 'string', uiSchema: { title: 'Nhãn nút CTA' } },
        { name: 'href', type: 'string', uiSchema: { title: 'Đường dẫn liên kết' } },
        { name: 'theme', type: 'string', uiSchema: { title: 'Chủ đề (light/dark)' } },
        { name: 'featured', type: 'boolean', uiSchema: { title: 'Nổi bật' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự hiển thị' } },
        { name: 'image', type: 'json', uiSchema: { title: 'Hình ảnh' } }
      ]
    },
    {
      name: 'business_products',
      title: 'Giải Pháp & Cố Vấn Doanh Nghiệp',
      fields: [
        { name: 'name', type: 'string', uiSchema: { title: 'Tên giải pháp' } },
        { name: 'slug', type: 'string', uiSchema: { title: 'Slug' } },
        { name: 'badge', type: 'string', uiSchema: { title: 'Huy hiệu' } },
        { name: 'tagline', type: 'string', uiSchema: { title: 'Tagline' } },
        { name: 'description', type: 'text', uiSchema: { title: 'Mô tả' } },
        { name: 'long_description', type: 'text', uiSchema: { title: 'Mô tả chi tiết' } },
        { name: 'price', type: 'string', uiSchema: { title: 'Giá' } },
        { name: 'benefits', type: 'text', uiSchema: { title: 'Lợi ích (ngăn cách |)' } },
        { name: 'cta_label', type: 'string', uiSchema: { title: 'Nhãn nút CTA' } },
        { name: 'href', type: 'string', uiSchema: { title: 'Liên kết' } },
        { name: 'theme', type: 'string', uiSchema: { title: 'Chủ đề (light/dark)' } },
        { name: 'featured', type: 'boolean', uiSchema: { title: 'Nổi bật' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự hiển thị' } },
        { name: 'image', type: 'json', uiSchema: { title: 'Hình ảnh' } }
      ]
    },
    {
      name: 'testimonials',
      title: 'Đánh Giá Khách Hàng / Học Viên',
      fields: [
        { name: 'name', type: 'string', uiSchema: { title: 'Họ tên' } },
        { name: 'position', type: 'string', uiSchema: { title: 'Chức vụ' } },
        { name: 'company', type: 'string', uiSchema: { title: 'Công ty / Tổ chức' } },
        { name: 'quote', type: 'text', uiSchema: { title: 'Lời nhận xét' } },
        { name: 'rating', type: 'integer', uiSchema: { title: 'Đánh giá (Số sao)' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự' } },
        { name: 'category', type: 'string', uiSchema: { title: 'Phân loại' } },
        { name: 'image', type: 'json', uiSchema: { title: 'Avatar' } }
      ]
    },
    {
      name: 'stats',
      title: 'Số Liệu Thống Kê',
      fields: [
        { name: 'label', type: 'string', uiSchema: { title: 'Nhãn' } },
        { name: 'subLabel', type: 'string', uiSchema: { title: 'Nhãn phụ' } },
        { name: 'value', type: 'string', uiSchema: { title: 'Giá trị' } },
        { name: 'icon', type: 'string', uiSchema: { title: 'Icon' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự' } }
      ]
    },
    {
      name: 'partners',
      title: 'Đối Tác & Báo Chí',
      fields: [
        { name: 'name', type: 'string', uiSchema: { title: 'Tên đối tác' } },
        { name: 'logo_url', type: 'string', uiSchema: { title: 'URL Logo' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự' } },
        { name: 'width', type: 'integer', uiSchema: { title: 'Chiều rộng' } },
        { name: 'height', type: 'integer', uiSchema: { title: 'Chiều cao' } }
      ]
    },
    {
      name: 'speaker_events',
      title: 'Sự Kiện Diễn Thuyết',
      fields: [
        { name: 'title', type: 'string', uiSchema: { title: 'Tên sự kiện' } },
        { name: 'location', type: 'string', uiSchema: { title: 'Địa điểm' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự' } },
        { name: 'image', type: 'json', uiSchema: { title: 'Hình ảnh' } }
      ]
    },
    {
      name: 'speaker_assets',
      title: 'Tài Liệu Diễn Giả',
      fields: [
        { name: 'credential_pdf_url', type: 'string', uiSchema: { title: 'PDF Hồ sơ năng lực' } },
        { name: 'proposal_url', type: 'string', uiSchema: { title: 'PDF Proposal' } },
        { name: 'hero_image', type: 'string', uiSchema: { title: 'Ảnh chính' } },
        { name: 'topics_options', type: 'json', uiSchema: { title: 'Danh sách chủ đề' } }
      ]
    },
    {
      name: 'customer_screenshots',
      title: 'Feedback Ảnh Tin Nhắn',
      fields: [
        { name: 'caption', type: 'string', uiSchema: { title: 'Chú thích' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự' } },
        { name: 'visible', type: 'boolean', uiSchema: { title: 'Hiển thị' } },
        { name: 'image', type: 'json', uiSchema: { title: 'Hình ảnh' } }
      ]
    },
    {
      name: 'workshops',
      title: 'Lịch Workshop',
      fields: [
        { name: 'title', type: 'string', uiSchema: { title: 'Tên Workshop' } },
        { name: 'date', type: 'string', uiSchema: { title: 'Ngày tổ chức' } },
        { name: 'type', type: 'string', uiSchema: { title: 'Hình thức' } },
        { name: 'category', type: 'string', uiSchema: { title: 'Phân loại (personal/business)' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự' } },
        { name: 'image', type: 'json', uiSchema: { title: 'Ảnh minh họa' } }
      ]
    },
    {
      name: 'book_feedbacks',
      title: 'Cảm Nhận Độc Giả Sách',
      fields: [
        { name: 'caption', type: 'string', uiSchema: { title: 'Chú thích' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự' } },
        { name: 'image', type: 'json', uiSchema: { title: 'Hình ảnh' } }
      ]
    },
    {
      name: 'book_videos',
      title: 'Video Độc Giả Sách',
      fields: [
        { name: 'title', type: 'string', uiSchema: { title: 'Tiêu đề' } },
        { name: 'youtube_url', type: 'string', uiSchema: { title: 'YouTube URL' } },
        { name: 'sort_order', type: 'integer', uiSchema: { title: 'Thứ tự' } }
      ]
    },
    {
      name: 'facebook_posts',
      title: 'Bài Viết Truyền Thông',
      fields: [
        { name: 'title', type: 'string', uiSchema: { title: 'Tiêu đề' } },
        { name: 'content', type: 'text', uiSchema: { title: 'Nội dung' } },
        { name: 'excerpt', type: 'text', uiSchema: { title: 'Tóm tắt' } },
        { name: 'url', type: 'string', uiSchema: { title: 'Link bài viết' } },
        { name: 'post_url', type: 'string', uiSchema: { title: 'Link bài viết chi tiết' } },
        { name: 'status', type: 'string', uiSchema: { title: 'Trạng thái' } },
        { name: 'published_at', type: 'string', uiSchema: { title: 'Ngày đăng' } },
        { name: 'thumbnail', type: 'json', uiSchema: { title: 'Thumbnail' } }
      ]
    },
    {
      name: 'destiny_profile',
      title: 'Hồ Sơ Vận Mệnh',
      fields: [
        { name: 'hero_title', type: 'text', uiSchema: { title: 'Hero Title' } },
        { name: 'hero_desc', type: 'text', uiSchema: { title: 'Hero Description' } },
        { name: 'avatar', type: 'json', uiSchema: { title: 'Avatar' } },
        { name: 'destiny_pdf_cover', type: 'json', uiSchema: { title: 'Bìa Hồ sơ vận mệnh' } },
        { name: 'strategy_pdf_cover', type: 'json', uiSchema: { title: 'Bìa Bản đồ chiến lược' } }
      ]
    },
    {
      name: 'leads',
      title: 'Danh Sách Khách Hàng Đăng Ký (CRM Leads)',
      fields: [
        { name: 'name', type: 'string', uiSchema: { title: 'Họ tên' } },
        { name: 'email', type: 'string', uiSchema: { title: 'Email' } },
        { name: 'phone', type: 'string', uiSchema: { title: 'Số điện thoại' } },
        { name: 'message', type: 'text', uiSchema: { title: 'Nội dung chi tiết' } },
        { name: 'source', type: 'string', uiSchema: { title: 'Nguồn đăng ký' } },
        { name: 'package', type: 'string', uiSchema: { title: 'Gói quan tâm' } },
        { name: 'content_summary', type: 'text', uiSchema: { title: 'Tóm tắt' } },
        { name: 'tag', type: 'string', uiSchema: { title: 'Tag phân loại' } }
      ]
    }
  ];

  // 3. Create Collections & Fields
  console.log('📦 Step 2: Creating Collections and Schemas in NocoBase...');
  for (const col of collections) {
    const checkRes = await apiRequest(`/api/collections:get?filterByTk=${col.name}`, {}, token);
    if (!checkRes.ok || !checkRes.data?.data) {
      console.log(`  ➕ Creating collection: ${col.name} (${col.title})`);
      const createRes = await apiRequest('/api/collections:create', {
        method: 'POST',
        body: JSON.stringify({
          name: col.name,
          title: col.title,
          fields: col.fields
        })
      }, token);

      if (!createRes.ok) {
        console.warn(`  ⚠️ Could not create collection ${col.name}:`, createRes.data);
      }
    } else {
      console.log(`  ✔️ Collection exists: ${col.name}`);
    }
  }

  // 4. Seed Data
  console.log('\n🌱 Step 3: Seeding Default Data and MinIO Image Attachments...');

  const dataFiles = [
    { file: 'homepage.json', collection: 'homepage', isSingular: true },
    { file: 'destiny_profile.json', collection: 'destiny_profile', isSingular: true },
    { file: 'speaker_assets.json', collection: 'speaker_assets', isSingular: true },
    { file: 'personal_products.json', collection: 'personal_products', isSingular: false },
    { file: 'business_products.json', collection: 'business_products', isSingular: false },
    { file: 'testimonials.json', collection: 'testimonials', isSingular: false },
    { file: 'stats.json', collection: 'stats', isSingular: false },
    { file: 'partners.json', collection: 'partners', isSingular: false },
    { file: 'speaker_events.json', collection: 'speaker_events', isSingular: false },
    { file: 'customer_screenshots.json', collection: 'customer_screenshots', isSingular: false },
    { file: 'workshops.json', collection: 'workshops', isSingular: false },
    { file: 'book_feedbacks.json', collection: 'book_feedbacks', isSingular: false },
    { file: 'book_videos.json', collection: 'book_videos', isSingular: false },
    { file: 'facebook_posts.json', collection: 'facebook_posts', isSingular: false }
  ];

  for (const item of dataFiles) {
    const filePath = path.join(DATA_DIR, item.file);
    if (!fs.existsSync(filePath)) continue;

    try {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      if (item.isSingular) {
        const normalized = {};
        for (const [k, v] of Object.entries(content)) {
          normalized[k] = Array.isArray(v) && v[0]?.url ? normalizeAttachments(v) : v;
        }
        await apiRequest(`/api/${item.collection}:create`, {
          method: 'POST',
          body: JSON.stringify(normalized)
        }, token);
        console.log(`  ✅ Seeded singular config: ${item.collection}`);
      } else if (Array.isArray(content)) {
        for (const record of content) {
          const normalized = {};
          for (const [k, v] of Object.entries(record)) {
            normalized[k] = Array.isArray(v) && v[0]?.url ? normalizeAttachments(v) : v;
          }
          await apiRequest(`/api/${item.collection}:create`, {
            method: 'POST',
            body: JSON.stringify(normalized)
          }, token);
        }
        console.log(`  ✅ Seeded ${content.length} records into: ${item.collection}`);
      }
    } catch (e) {
      console.warn(`  ⚠️ Error seeding ${item.file}:`, e.message);
    }
  }

  // Seed Blog Posts from news.ts if available
  try {
    const newsPath = path.join(DATA_DIR, 'news.ts');
    if (fs.existsSync(newsPath)) {
      const newsContent = fs.readFileSync(newsPath, 'utf-8');
      const match = newsContent.match(/export const newsArticles: NewsArticle\[\] = (\[[\s\S]*?\]);/);
      if (match) {
        const articles = eval(match[1]);
        for (const art of articles) {
          await apiRequest('/api/blog_posts:create', {
            method: 'POST',
            body: JSON.stringify({
              title: art.title,
              slug: art.slug,
              excerpt: art.summary,
              content: art.content,
              author: 'Master Hoàng Mai Linh',
              category: art.category || 'he-dieu-hanh-ca-nhan',
              tags: ['Thực chiến', 'Số học ứng dụng'],
              status: 'published',
              read_time: 5,
              published_at: new Date().toISOString(),
              pinned: false,
              image: [{
                url: normalizeUrl(art.imageUrl),
                filename: path.basename(art.imageUrl || 'banner.jpg')
              }]
            })
          }, token);
        }
        console.log(`  ✅ Seeded ${articles.length} blog posts into blog_posts collection`);
      }
    }
  } catch (e) {
    console.warn('  ⚠️ Note parsing news.ts:', e.message);
  }

  // 5. Grant Anonymous Public Access Permissions
  console.log('\n🔓 Step 4: Granting Public Read Permissions for Frontend...');
  try {
    for (const col of collections) {
      await apiRequest(`/api/roles/anonymous/resources/${col.name}/actions`, {
        method: 'POST',
        body: JSON.stringify({
          name: 'list',
          scope: 'all'
        })
      }, token);
      await apiRequest(`/api/roles/anonymous/resources/${col.name}/actions`, {
        method: 'POST',
        body: JSON.stringify({
          name: 'get',
          scope: 'all'
        })
      }, token);
    }
    await apiRequest('/api/roles/anonymous/resources/leads/actions', {
      method: 'POST',
      body: JSON.stringify({
        name: 'create',
        scope: 'all'
      })
    }, token);
    console.log('✅ Public permissions configured for all collections.');
  } catch (e) {
    console.warn('⚠️ Note configuring roles:', e.message);
  }

  console.log('\n🎉 ALL DONE! NocoBase v2.2.0-alpha.9 is fully populated and ready.');
  console.log('====================================================\n');
}

main().catch(console.error);

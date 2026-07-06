---
name: seo-advanced-nextjs
description: >
  Advanced SEO for Next.js 2025/2026. Covers Dynamic Sitemap, Canonical,
  Structured Data (Person/LocalBusiness/FAQPage/BreadcrumbList),
  Local SEO Vietnam, Keyword Intent Mapping, AI Overviews (AIO),
  Core Web Vitals, and E-E-A-T content strategy. Triggers on "SEO",
  "sitemap", "schema", "structured data", "meta tags", "local SEO",
  "ranking", "Google", "search optimization", "canonical".
allowed-tools: Read, Write, Glob, Grep, Bash
---

# SEO Advanced — Next.js 2025/2026

> **Triết lý cốt lõi:** Google xếp hạng *trải nghiệm thực tế*, không phải từ khóa. E-E-A-T + Tốc độ + Cấu trúc = Hiển thị bền vững.

---

## LAYER 1 — Phân tích trước khi làm

Trước khi tối ưu bất cứ thứ gì, phải trả lời:

| Câu hỏi | Tại sao quan trọng |
|---|---|
| Persona tìm kiếm từ khóa nào? | Tránh tối ưu sai intent |
| Trang nào đang xếp hạng thấp? | Ưu tiên nguồn lực |
| Có keyword cannibalization không? | Nhiều trang cạnh tranh nhau = Google phạt |
| Sitemap đã động chưa? | Thiếu sitemap = chậm index bài mới |
| Canonical đã đặt chưa? | Nếu không có = rủi ro duplicate content |

---

## LAYER 2 — Technical SEO (Next.js App Router)

### 2.1 Dynamic Sitemap — app/sitemap.ts

Tạo file `src/app/sitemap.ts` — Next.js sẽ tự phục vụ tại `/sitemap.xml`:

```typescript
import { getArticles } from '@/lib/nocobase';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

const STATIC_ROUTES = [
  '', '/giai-phap-lanh-dao', '/phat-trien-ban-than',
  '/master-hoang-mai-linh', '/linh-hoa-tam', '/kien-thuc',
  '/speaker', '/workshop-chien-luoc', '/workshop-ca-nhan',
  '/cong-dong', '/lien-he', '/sach', '/phuong-phap',
  '/webinar', '/ho-so-van-menh',
];

export default async function sitemap() {
  const { data: articles } = await getArticles({ pageSize: 500 });

  const staticUrls = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const articleUrls = articles.map((article) => ({
    url: `${SITE_URL}/kien-thuc/${article.slug || article.id}`,
    lastModified: new Date(article.updatedAt || article.published_at),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticUrls, ...articleUrls];
}
```

### 2.2 Robots.txt — app/robots.ts

```typescript
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/admin/'] },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
```

### 2.3 Canonical Tag — Ngăn Duplicate Content

```typescript
// Trong generateMetadata mọi trang
alternates: {
  canonical: `https://linhhoatam.com/kien-thuc/${article.slug}`,
},
```

### 2.4 JSON-LD Security — Chống XSS

```typescript
// WRONG: dễ bị XSS
JSON.stringify(jsonLd)

// CORRECT: escape ký tự nguy hiểm
JSON.stringify(jsonLd)
  .replace(/</g, '\\u003c')
  .replace(/>/g, '\\u003e')
  .replace(/&/g, '\\u0026')
```

---

## LAYER 3 — Structured Data Schema

### 3.1 Person Schema (Trang Master)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hoàng Mai Linh",
  "jobTitle": "Master Thần số học & Cố vấn Lãnh đạo",
  "url": "https://linhhoatam.com/master-hoang-mai-linh",
  "sameAs": [
    "https://www.facebook.com/linhhoatam"
  ],
  "knowsAbout": ["Thần số học", "Tư vấn CEO", "Phát triển bản thân"],
  "worksFor": {
    "@type": "Organization",
    "name": "Linh Hoa Tâm"
  }
}
```

### 3.2 LocalBusiness Schema (Layout chính)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Linh Hoa Tâm",
  "description": "Trung tâm Tư vấn Thần số học & Phát triển Lãnh đạo",
  "url": "https://linhhoatam.com",
  "telephone": "+84-967-623-456",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "78/1 Phan Đình Phùng, Phú Thọ Hòa",
    "addressLocality": "Tân Phú",
    "addressRegion": "TP.HCM",
    "postalCode": "700000",
    "addressCountry": "VN"
  }
}
```

### 3.3 BreadcrumbList Schema (Mỗi trang con)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://linhhoatam.com" },
    { "@type": "ListItem", "position": 2, "name": "Kiến thức", "item": "https://linhhoatam.com/kien-thuc" },
    { "@type": "ListItem", "position": 3, "name": "Tên bài viết" }
  ]
}
```

### 3.4 FAQPage Schema (Mỗi bài blog)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Câu hỏi thường gặp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Câu trả lời trực tiếp 40-60 từ..."
      }
    }
  ]
}
```

---

## LAYER 4 — Keyword Intent Mapping

| Intent | Từ khóa mẫu | Trang |
|---|---|---|
| Awareness | "thần số học là gì", "số học ngày sinh" | /kien-thuc, blog |
| Consideration | "review linh hoa tâm", "tư vấn có hiệu quả không" | testimonials, /lien-he |
| Decision | "đặt lịch tư vấn CEO", "học thần số học" | /lien-he, /workshop |
| Local | "tư vấn CEO tphcm", "thần số học tân phú" | LocalBusiness Schema |

---

## LAYER 5 — Local SEO Vietnam

- **NAP nhất quán:** Name/Address/Phone khớp 100% giữa website, Google Maps, Facebook
- **Từ khóa địa phương:** Chèn "TP.HCM", "Tân Phú" vào meta description
- **LocalBusiness Schema:** Bắt buộc với địa chỉ, giờ làm việc, SĐT
- **Google Business Profile:** Cập nhật ảnh, bài đăng định kỳ
- **Reviews:** Phản hồi đánh giá Google Maps kịp thời

---

## LAYER 6 — AI Overviews (AIO) — Google Discover

1. **FAQ Section** trong mỗi bài blog → kích hoạt FAQPage Schema
2. **Đoạn trả lời trực tiếp** ngay đầu bài (40-60 từ)
3. **Dữ liệu cụ thể:** số liệu, năm, tên người thay vì câu mơ hồ
4. **Cập nhật `dateModified`** trong Article Schema → tín hiệu freshness
5. **Author credentials** rõ ràng → tăng E-E-A-T

---

## LAYER 7 — Core Web Vitals (Next.js)

| Metric | Mục tiêu | Next.js Action |
|---|---|---|
| LCP | < 2.5s | `priority` cho hero image |
| INP | < 200ms | Server Components, dynamic() |
| CLS | < 0.1 | width/height hoặc fill cho Image |
| TTFB | < 800ms | ISR revalidate thay SSR |
| Font | Không shift | next/font thay CDN |

---

## LAYER 8 — Checklist 14 điểm

| # | Hạng mục | Status |
|---|---|---|
| 1 | title riêng biệt mỗi trang (50-60 ký tự) | |
| 2 | meta description 150-160 ký tự, có CTA | |
| 3 | Chỉ 1 h1 duy nhất mỗi trang | |
| 4 | Canonical URL chính xác | |
| 5 | Open Graph đầy đủ (title/desc/image 1200x630) | |
| 6 | sitemap.xml động từ CMS | |
| 7 | robots.txt cho phép Googlebot | |
| 8 | Article Schema trong trang blog | |
| 9 | LocalBusiness Schema ở layout chính | |
| 10 | Person Schema ở trang Master | |
| 11 | BreadcrumbList Schema mỗi trang con | |
| 12 | JSON-LD escape XSS-safe | |
| 13 | Ảnh hero dùng priority | |
| 14 | next/font thay vì CDN | |

---

## Script

| Script | Mục đích | Lệnh |
|---|---|---|
| `scripts/seo_checker.py` | Kiểm tra meta, OG, h1, alt | `python scripts/seo_checker.py <path>` |

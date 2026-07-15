import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { KnowledgeClient } from '@/components/sections/knowledge/KnowledgeClient';
import { getArticles } from '@/lib/nocobase';
import { getProfile } from '@/lib/local-db';

// ISR: Next.js tự gọi lại NocoBase sau 5 phút (300 giây) để tối ưu hiệu năng và Core Web Vitals (TTFB)

export const metadata: Metadata = {
  title: 'Kiến Thức | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
  description:
    'Bài viết chuyên sâu về lãnh đạo, vận hành doanh nghiệp, phát triển bản thân và ra quyết định theo chu kỳ. Cập nhật định kỳ hàng tuần từ Master Hoàng Mai Linh.',
  alternates: {
    canonical: 'https://linhhoatam.com/kien-thuc',
  },
  openGraph: {
    title: 'Kiến Thức | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
    description:
      'Bài viết chuyên sâu về lãnh đạo, vận hành doanh nghiệp, phát triển bản thân và ra quyết định theo chu kỳ.',
    url: 'https://linhhoatam.com/kien-thuc',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kiến thức Linh Hoa Tâm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiến Thức | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
    description:
      'Bài viết chuyên sâu về lãnh đạo, vận hành doanh nghiệp, phát triển bản thân và ra quyết định theo chu kỳ.',
    images: ['/og-image.png'],
  },
};

// XSS-safe JSON-LD serialization
function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export default async function KienThucPage() {
  // Fetch toàn bộ bài published lúc build — không call API lúc browser render
  const [ { data: articles }, profile ] = await Promise.all([
    getArticles({ pageSize: 200 }),
    getProfile(),
  ]);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteUrl}/kien-thuc#blog`,
    name: 'Kiến Thức | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
    description: 'Bài viết chuyên sâu về lãnh đạo, vận hành doanh nghiệp, phát triển bản thân và ra quyết định theo chu kỳ. Cập nhật định kỳ hàng tuần từ Master Hoàng Mai Linh.',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://linhhoatam.com/#organization',
      name: 'Linh Hoa Tâm'
    },
    url: `${siteUrl}/kien-thuc`
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Kiến thức', item: `${siteUrl}/kien-thuc` },
    ],
  };

  const jsonLd = [blogSchema, breadcrumbSchema];

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(jsonLd),
        }}
      />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        {/* Articles được pre-fetched server-side, truyền xuống client để filter/search */}
        <KnowledgeClient initialArticles={articles} initialProfile={profile} />
      </main>
      <Footer />
    </>
  );
}

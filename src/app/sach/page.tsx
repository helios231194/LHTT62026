import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Book Sections
import { BookHero } from '@/components/sections/sach/BookHero';
import { BookContent } from '@/components/sections/sach/BookContent';
import { BookCombos } from '@/components/sections/sach/BookCombos';
import { BookDetails } from '@/components/sections/sach/BookDetails';
import { BookFeedback } from '@/components/sections/sach/BookFeedback';
import { BookCorporate } from '@/components/sections/sach/BookCorporate';
import { getProfile, getBookFeedbacks, getBookVideos } from '@/lib/local-db';


export const metadata: Metadata = {
  title: 'Sách Sức Mạnh Ẩn Sau Con Số - Thuật Số Học Ứng Dụng',
  description: 'Khám phá "Sức Mạnh Ẩn Sau Con Số" của tác giả Hoàng Mai Linh - cuốn sách Thuật Số Học Ứng Dụng hướng dẫn thấu hiểu bản thân, đọc vị nhân sự dành cho Lãnh đạo.',
  alternates: {
    canonical: 'https://linhhoatam.com/sach',
  },
  openGraph: {
    title: 'Sách Sức Mạnh Ẩn Sau Con Số | Thuật Số Học Ứng Dụng',
    description: 'Giải mã năng lực lãnh đạo qua Sức Mạnh Ẩn Sau Con Số. Cuốn sách gối đầu giường về Thuật Số Học từ Master Coach Hoàng Mai Linh.',
    url: 'https://linhhoatam.com/sach',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Sách Sức Mạnh Ẩn Sau Con Số' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sách Sức Mạnh Ẩn Sau Con Số | Thuật Số Học Ứng Dụng',
    description: 'Giải mã năng lực lãnh đạo qua Sức Mạnh Ẩn Sau Con Số.',
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

export default async function BookPage() {
  const profile = await getProfile();
  const feedbacks = await getBookFeedbacks();
  const videos = await getBookVideos();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${siteUrl}/sach#book`,
    name: 'Sức Mạnh Ẩn Sau Con Số',
    author: {
      '@type': 'Person',
      '@id': 'https://linhhoatam.com/#person-hoang-mai-linh',
      name: 'Hoàng Mai Linh'
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://linhhoatam.com/#organization',
      name: 'Linh Hoa Tâm'
    },
    image: `${siteUrl}/og-image.png`,
    url: `${siteUrl}/sach`,
    bookFormat: 'PrintBook',
    inLanguage: 'vi',
    description: 'Cuốn sách khai mở tư duy bản thân qua các con số thuật số học ứng dụng.'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Sách Sức Mạnh Ẩn Sau Con Số', item: `${siteUrl}/sach` },
    ],
  };

  const jsonLd = [bookSchema, breadcrumbSchema];

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(jsonLd),
        }}
      />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue overflow-hidden">
        <BookHero initialProfile={profile} />
        <BookContent />
        <BookCombos />
        <BookFeedback initialFeedbacks={feedbacks.data} initialVideos={videos.data} />
        <BookDetails initialProfile={profile} />
        <BookCorporate />
      </main>
      <Footer />
    </>
  );
}

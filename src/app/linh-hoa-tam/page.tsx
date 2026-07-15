import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LHTBrand } from '@/components/sections/linh-hoa-tam/LHTBrand';
import { LHTVision } from '@/components/sections/linh-hoa-tam/LHTVision';
import { LHTValues } from '@/components/sections/linh-hoa-tam/LHTValues';
import { LHTIndicators } from '@/components/sections/linh-hoa-tam/LHTIndicators';
import { LHTEcosystem } from '@/components/sections/linh-hoa-tam/LHTEcosystem';
import { LHTDifference } from '@/components/sections/linh-hoa-tam/LHTDifference';


export const metadata: Metadata = {
  title: 'Về Linh Hoa Tâm – Numerology for Leaders | Thuật Số Học Ứng Dụng',
  description: 'Linh Hoa Tâm là đơn vị tiên phong tại Việt Nam ứng dụng Thuật Số Học như công cụ tham vấn chiến lược cho lãnh đạo. Hệ thống 7 chỉ số vận mệnh.',
  alternates: {
    canonical: 'https://linhhoatam.com/linh-hoa-tam',
  },
  openGraph: {
    title: 'Về Linh Hoa Tâm – Numerology for Leaders | Thuật Số Học Ứng Dụng',
    description: 'Linh Hoa Tâm là đơn vị tiên phong tại Việt Nam ứng dụng Thuật Số Học như công cụ tham vấn chiến lược cho lãnh đạo.',
    url: 'https://linhhoatam.com/linh-hoa-tam',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Về Linh Hoa Tâm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Về Linh Hoa Tâm – Numerology for Leaders | Thuật Số Học Ứng Dụng',
    description: 'Linh Hoa Tâm là đơn vị tiên phong tại Việt Nam ứng dụng Thuật Số Học như công cụ tham vấn chiến lược cho lãnh đạo.',
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

export default function LinhHoaTamPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/linh-hoa-tam#webpage`,
    name: 'Về Linh Hoa Tâm – Numerology for Leaders | Thuật Số Học Ứng Dụng',
    description: 'Linh Hoa Tâm là đơn vị tiên phong tại Việt Nam ứng dụng Thuật Số Học như công cụ tham vấn chiến lược cho lãnh đạo. Hệ thống 7 chỉ số vận mệnh.',
    url: `${siteUrl}/linh-hoa-tam`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.brand-description', '.vision-section']
    },
    about: {
      '@type': 'Organization',
      '@id': 'https://linhhoatam.com/#organization'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Về Linh Hoa Tâm', item: `${siteUrl}/linh-hoa-tam` },
    ],
  };

  const jsonLd = [webPageSchema, breadcrumbSchema];

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
        <LHTBrand />
        <LHTVision />
        <LHTValues />
        <LHTIndicators />
        <LHTEcosystem />
        <LHTDifference />
      </main>
      <Footer />
    </>
  );
}

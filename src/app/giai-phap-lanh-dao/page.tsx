import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LeaderHero } from '@/components/sections/leader/LeaderHero';
import { LeaderProblems } from '@/components/sections/leader/LeaderProblems';
import { LeaderDestinyProfile } from '@/components/sections/leader/LeaderDestinyProfile';
import { LeaderStrategyMap } from '@/components/sections/leader/LeaderStrategyMap';
import { LeaderConsulting } from '@/components/sections/leader/LeaderConsulting';
import { LeaderTestimonials } from '@/components/sections/leader/LeaderTestimonials';
import { LeaderTopics } from '@/components/sections/leader/LeaderTopics';
import { AboutDifference } from '@/components/sections/about/AboutDifference';
import { getProfile } from '@/lib/local-db';


export const metadata: Metadata = {
  title: 'Cố Vấn Chiến Lược Cho CEO & Founder | Linh Hoa Tâm',
  description: 'Hệ thống tham vấn chiến lược cho CEO và Lãnh đạo. Giúp ra quyết định đúng thời điểm, tối ưu nhân sự. Tham vấn 1:1 cùng Master Hoàng Mai Linh. Đăng ký ngay!',
  alternates: {
    canonical: 'https://linhhoatam.com/giai-phap-lanh-dao',
  },
  openGraph: {
    title: 'Cố Vấn Chiến Lược Cho CEO & Founder | Linh Hoa Tâm',
    description: 'Hệ thống phân tích chiến lược giúp CEO ra quyết định đúng thời điểm, đặt đúng người và mở rộng đúng giai đoạn.',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Giải pháp Lãnh đạo – Linh Hoa Tâm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giải pháp Lãnh đạo – Tham vấn 1:1 | Linh Hoa Tâm',
    description: 'Hệ thống phân tích chiến lược cho CEO – 3.500+ giờ tham vấn.',
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

export default async function GiaiPhapLanhDaoPage() {
  const profile = await getProfile();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/giai-phap-lanh-dao#service`,
    name: 'Cố vấn chiến lược cho CEO & Founder - Linh Hoa Tâm',
    provider: {
      '@type': 'Organization',
      '@id': 'https://linhhoatam.com/#organization',
      name: 'Linh Hoa Tâm'
    },
    description: 'Hệ thống cố vấn chiến lược và phân tích chu kỳ vận hành doanh nghiệp ứng dụng Thuật Số Học dành riêng cho CEO, Founder, Lãnh đạo cấp cao.',
    areaServed: { '@type': 'Country', name: 'Vietnam' },
    serviceType: 'Business Consulting',
    audience: {
      '@type': 'Audience',
      audienceType: 'CEO, Founder, Lãnh đạo cấp cao'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Giải Pháp Lãnh Đạo', item: `${siteUrl}/giai-phap-lanh-dao` },
    ],
  };

  const jsonLd = [serviceSchema, breadcrumbSchema];

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
        {/* SECTION 1 – HERO */}
        <LeaderHero />
        
        {/* SECTION 2 – 3 VẤN ĐỀ CỤ THỂ */}
        <LeaderProblems />
        
        {/* SECTION 3 – HỒ SƠ VẬN MỆNH */}
        <LeaderDestinyProfile />
        
        {/* SECTION 4 – BẢN ĐỒ CHIẾN LƯỢC 2026 */}
        <LeaderStrategyMap initialProfile={profile} />
        
        {/* SECTION 4 – THAM VẤN 1:1 – 3 CẤP ĐỘ */}
        <LeaderConsulting initialProfile={profile} />
        
        {/* SECTION 5 – CHIA SẺ TỪ LÃNH ĐẠO */}
        <LeaderTestimonials />
        
        {/* SECTION 6 – LINH HOA TÂM VS. THỊ TRƯỜNG */}
        <AboutDifference />
        
        {/* SECTION 7 – CHUYÊN ĐỀ LÃNH ĐẠO */}
        <LeaderTopics />
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomeHero } from '@/components/sections/home/HomeHero';
import { TrustBar } from '@/components/sections/home/TrustBar';
import { WhatIsNumerology } from '@/components/sections/home/WhatIsNumerology';
import { TargetAudience } from '@/components/sections/home/TargetAudience';
import { FeaturedProducts } from '@/components/sections/home/FeaturedProducts';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { WebinarBanner } from '@/components/sections/home/WebinarBanner';
import { CommunityBanner } from '@/components/sections/home/CommunityBanner';
import { MasterProfilePreview } from '@/components/sections/home/MasterProfilePreview';
import { HomeCTA } from '@/components/sections/home/HomeCTA';
import { RepresentativeSection } from '@/components/sections/home/RepresentativeSection';
import { TikTokEmbed } from '@/components/sections/home/TikTokEmbed';
import { getProfile, getStats, getTestimonials, getBusinessProducts, getPartners } from '@/lib/local-db';

// Cập nhật cache mỗi 10 giây - tối ưu SEO Google và cập nhật nhanh

export const metadata: Metadata = {
  title: 'Linh Hoa Tâm | Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo',
  description: 'Thuật số học ứng dụng cho CEO và Lãnh đạo tại Linh Hoa Tâm. Hỗ trợ ra quyết định chiến lược đúng thời điểm, đặt đúng người, rẽ đúng hướng. Đăng ký ngay!',
  alternates: {
    canonical: 'https://linhhoatam.com',
  },
  openGraph: {
    title: 'Linh Hoa Tâm | Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo',
    description: 'Tư vấn chiến lược cho CEO & Lãnh đạo bằng Thần Số Học. Hơn 2.000 khách hàng thành công và 3.500 giờ tham vấn.',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Linh Hoa Tâm – Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linh Hoa Tâm - Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo',
    description: 'Một quyết định đúng thời điểm có thể thay đổi cả năm vận hành.',
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

export default async function Home() {
  const profile = await getProfile();
  const { data: stats } = await getStats();
  const { data: testimonials } = await getTestimonials();
  const { data: businessProducts } = await getBusinessProducts();
  const { data: partners } = await getPartners();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';
  
  // 1. WebPage Speakable Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/#webpage`,
    name: 'Linh Hoa Tâm | Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo',
    description: 'Linh Hoa Tâm – đơn vị tiên phong ứng dụng Thuật Số Học như công cụ tham vấn chiến lược cho CEO, Founder và lãnh đạo cấp cao tại Việt Nam.',
    url: siteUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.hero-description', '.key-stats']
    },
    about: {
      '@id': 'https://linhhoatam.com/#person-hoang-mai-linh'
    }
  };

  // 2. FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Thuật Số Học Ứng Dụng là gì?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Thuật Số Học Ứng Dụng là hệ thống phân tích hành vi và cấu trúc vận hành cá nhân, giúp CEO và lãnh đạo ra quyết định có căn cứ và hành động đúng thời điểm. Kết quả đo được bằng quyết định, bằng người, bằng tiền.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quyết định này nên đưa ra vào thời điểm nào trong chu kỳ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dựa trên chu kỳ vận hành cá nhân và tổ chức, Thuật Số Học Xác định thời điểm tối ưu để ra quyết định quan trọng và thời điểm nên giữ lực, tránh các bước đi tốn kém trong giai đoạn chưa thuận lợi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Người này phù hợp vai gì nhất trong cấu trúc tổ chức?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Thuật Số Học phân tích 7 chỉ số cốt lõi để xác định cấu trúc năng lượng, điểm mạnh và điểm mù của từng cá nhân – từ đó xác định vai trò phù hợp nhất trong đội ngũ và tránh giữ sai người trong vị trí quan trọng.',
        },
      },
      {
        '@type': 'Question',
        name: 'Giai đoạn này nên mở rộng, giữ lực, hay tái cấu trúc?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Thay vì quyết định dựa cảm tính, lãnh đạo có thể dựa vào các chỉ số chu kỳ để định hướng đúng: Mở rộng khi vào giai đoạn tăng trưởng, giữ lực khi cần củng cố nội bộ, tái cấu trúc khi đang ở đáy chu kỳ – tránh đước sai lầm chiến lược tốn kém.',
        },
      },
    ],
  };

  // 3. AggregateRating + Review Schema
  const reviewList = testimonials.map((item) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: item.name },
    reviewBody: item.quote,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
  }));

  const localBusinessRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://linhhoatam.com/#organization',
    name: 'Linh Hoa Tâm',
    description: 'Thuật Số Học Ứng Dụng – Tham vấn chiến lược cho CEO và lãnh đạo',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: String(testimonials.length || 6),
      bestRating: '5',
      worstRating: '5',
    },
    review: reviewList.slice(0, 10),
  };

  const jsonLd = [webPageSchema, faqSchema, localBusinessRatingSchema];

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <main className="flex flex-col min-h-screen bg-ice-white pt-16">
        {/* Section 1 - Hero */}
        <HomeHero initialProfile={profile} />
        
        {/* Section 2 - Trust Bar */}
        <TrustBar initialStats={stats} initialPartners={partners} />
        
        {/* Section 3 - What is Numerology */}
        <WhatIsNumerology />
        
        {/* Section 4 - Target Audience */}
        <TargetAudience />
        
        {/* Section 5 - Featured Products */}
        <FeaturedProducts products={businessProducts} />
        
        {/* Section 6 - Testimonials */}
        <Testimonials initialTestimonials={testimonials} />
        
        {/* Section 7 - Workshop */}
        <WebinarBanner initialProfile={profile} />
        
        {/* Section 8 - Community */}
        <CommunityBanner initialProfile={profile} />
        
        {/* Section 9 - Profile Preview */}
        <MasterProfilePreview initialProfile={profile} />
        
        {/* Section 10 - CTA */}
        <HomeCTA />

        {/* Section 11 - Trưởng Đại Diện */}
        <RepresentativeSection />

        {/* Section 12 - TikTok */}
        <TikTokEmbed />
      </main>
      <Footer />
    </>
  );
}

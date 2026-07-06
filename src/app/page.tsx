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
export const revalidate = 10;

export const metadata: Metadata = {
  title: 'Linh Hoa Tâm | Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo',
  description: 'Thuật số học ứng dụng cho CEO và Lãnh đạo tại Linh Hoa Tâm. Hỗ trợ ra quyết định chiến lược đúng thời điểm, đặt đúng người, rẽ đúng hướng. Đăng ký ngay!',
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

export default async function Home() {
  const profile = await getProfile();
  const { data: stats } = await getStats();
  const { data: testimonials } = await getTestimonials();
  const { data: businessProducts } = await getBusinessProducts();
  const { data: partners } = await getPartners();

  return (
    <>
      <Header />
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

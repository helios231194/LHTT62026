import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RepresentHero } from '@/components/sections/represent/RepresentHero';
import { RepresentBenefits } from '@/components/sections/represent/RepresentBenefits';
import { RepresentRoadmap } from '@/components/sections/represent/RepresentRoadmap';
import { RepresentList } from '@/components/sections/represent/RepresentList';
import { RepresentWhyUs } from '@/components/sections/represent/RepresentWhyUs';
import { RepresentCTA } from '@/components/sections/represent/RepresentCTA';


export const metadata: Metadata = {
  title: 'Trưởng Đại Diện | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
  description: 'Trở thành Master Thuật Số Học Ứng Dụng chính thức tại địa phương của bạn. Khám phá lộ trình chuyên nghiệp và vị thế độc quyền cùng Linh Hoa Tâm.',
  alternates: {
    canonical: 'https://linhhoatam.com/truong-dai-dien',
  },
  openGraph: {
    title: 'Trưởng Đại Diện | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
    description: 'Trở thành Master Thuật Số Học Ứng Dụng chính thức tại địa phương của bạn.',
    url: 'https://linhhoatam.com/truong-dai-dien',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Trở thành trưởng đại diện Linh Hoa Tâm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trưởng Đại Diện | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
    description: 'Trở thành Master Thuật Số Học Ứng Dụng chính thức tại địa phương của bạn.',
    images: ['/og-image.png'],
  },
};

export default function RepresentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        {/* SECTION 1 - HERO */}
        <RepresentHero />
        
        {/* SECTION 2 - VỊ THẾ VÀ LỢI ÍCH */}
        <RepresentBenefits />
        
        {/* SECTION 3 - LỘ TRÌNH 3 BƯỚC */}
        <RepresentRoadmap />
        
        {/* SECTION 4 - DANH SÁCH TRƯỞNG ĐẠI DIỆN HIỆN TẠI */}
        <RepresentList />
        
        {/* SECTION 5 - TẠI SAO CHỌN LINH HOA TÂM */}
        <RepresentWhyUs />
        
        {/* SECTION 6 - CTA CUỐI TRANG */}
        <RepresentCTA />
      </main>
      <Footer />
    </>
  );
}

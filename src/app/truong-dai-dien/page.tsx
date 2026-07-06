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

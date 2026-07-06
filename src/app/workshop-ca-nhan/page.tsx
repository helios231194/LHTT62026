import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PersonalWorkshopHero } from '@/components/sections/personal-workshop/PersonalWorkshopHero';
import { PersonalWorkshopUpcoming } from '@/components/sections/personal-workshop/PersonalWorkshopUpcoming';
import { PersonalWorkshopForm } from '@/components/sections/personal-workshop/PersonalWorkshopForm';
import { PersonalWorkshopBenefits } from '@/components/sections/personal-workshop/PersonalWorkshopBenefits';
import { PersonalWorkshopTopics } from '@/components/sections/personal-workshop/PersonalWorkshopTopics';
import { PersonalWorkshopHistory } from '@/components/sections/personal-workshop/PersonalWorkshopHistory';
import { PersonalWorkshopStats } from '@/components/sections/personal-workshop/PersonalWorkshopStats';
import { PersonalWorkshopSpeaker } from '@/components/sections/personal-workshop/PersonalWorkshopSpeaker';
import { PersonalWorkshopFAQ } from '@/components/sections/personal-workshop/PersonalWorkshopFAQ';
import { PersonalWorkshopCTA } from '@/components/sections/personal-workshop/PersonalWorkshopCTA';

export const metadata: Metadata = {
  title: 'Workshop Thấu Hiểu Bản Thân & Sự Nghiệp | Linh Hoa Tâm',
  description: 'Tham gia Workshop cá nhân về Thuật Số Học Ứng Dụng để thấu hiểu bản thân, kiến tạo cuộc sống, gia đình và định hướng sự nghiệp hạnh phúc. Đăng ký ngay!',
  alternates: { canonical: 'https://linhhoatam.com/workshop-ca-nhan' },
  openGraph: {
    title: 'Workshop Thấu Hiểu Bản Thân & Sự Nghiệp | Linh Hoa Tâm',
    description: 'Tham gia Workshop cá nhân về Thuật Số Học Ứng Dụng để thấu hiểu bản thân, kiến tạo cuộc sống.',
    type: 'website',
    locale: 'vi_VN',
  },
};

export default function WorkshopCaNhanPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        {/* SECTION 1 – HERO */}
        <PersonalWorkshopHero />
        
        {/* SECTION 2 – WORKSHOP SẮP TỚI */}
        <PersonalWorkshopUpcoming />
        
        {/* SECTION 3 – FORM Đăng Ký */}
        <PersonalWorkshopForm />
        
        {/* SECTION 4 – NHẬN ĐƯỢC GÌ SAU ĐĂNG KÝ */}
        <PersonalWorkshopBenefits />
        
        {/* SECTION 5 – CÁC CHỦ ĐỀ WORKSHOP */}
        <PersonalWorkshopTopics />
        
        {/* SECTION 6 – LỊCH SỬ WORKSHOP ĐÃ TỔ CHỨC */}
        <PersonalWorkshopHistory />
        
        {/* SECTION 7 – CON SỐ THỰC TẾ */}
        <PersonalWorkshopStats />
        
        {/* SECTION 8 & 9 – ĐĂNG KÝ NHẬN THÔNG BÁO & DIỄN GIẢ */}
        <PersonalWorkshopSpeaker />
        
        {/* SECTION 10 – CÂU HỎI THƯỜNG GẶP */}
        <PersonalWorkshopFAQ />
        
        {/* SECTION 11 – CTA CUỐI TRANG */}
        <PersonalWorkshopCTA />
      </main>
      <Footer />
    </>
  );
}

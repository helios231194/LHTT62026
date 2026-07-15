import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WorkshopHero } from '@/components/sections/workshop/WorkshopHero';
import { WorkshopUpcoming } from '@/components/sections/workshop/WorkshopUpcoming';
import { WorkshopContent } from '@/components/sections/workshop/WorkshopContent';
import { WorkshopRegisterForm } from '@/components/sections/workshop/WorkshopRegisterForm';
import { WorkshopBenefits } from '@/components/sections/workshop/WorkshopBenefits';
import { WorkshopTopics } from '@/components/sections/workshop/WorkshopTopics';
import { WorkshopHistory } from '@/components/sections/workshop/WorkshopHistory';
import { WorkshopStats } from '@/components/sections/workshop/WorkshopStats';
import { WorkshopSpeaker } from '@/components/sections/workshop/WorkshopSpeaker';
import { WorkshopFAQ } from '@/components/sections/workshop/WorkshopFAQ';
import { WorkshopCTA } from '@/components/sections/workshop/WorkshopCTA';
import { getProfile, getWorkshops } from '@/lib/local-db';


export const metadata: Metadata = {
  title: 'Workshop Chiến Lược Cho Lãnh Đạo | Linh Hoa Tâm',
  description: 'Đăng ký Workshop Chiến lược - Thuật Số Học Ứng Dụng dành cho CEO và Lãnh đạo. Tối ưu hóa vận hành, quản trị nhân sự và ra quyết định đột phá cùng Master!',
  alternates: { canonical: 'https://linhhoatam.com/workshop-chien-luoc' },
  openGraph: {
    title: 'Workshop Chiến Lược Cho Lãnh Đạo | Linh Hoa Tâm',
    description: 'Đăng ký Workshop Chiến lược - Thuật Số Học Ứng Dụng dành cho CEO và Lãnh đạo.',
    type: 'website',
    locale: 'vi_VN',
  },
};

function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export default async function WorkshopChienLuocPage() {
  const profile = await getProfile();
  const workshops = await getWorkshops('business');

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd([
            {
              '@context': 'https://schema.org',
              '@type': 'Course',
              name: 'Workshop Chiến Lược – Thuật Số Học Ứng Dụng Cho Lãnh Đạo',
              description: 'Workshop chuyên sâu về Thuật Số Học Ứng Dụng dành riêng cho CEO, Founder và Lãnh đạo doanh nghiệp do Master Hoàng Mai Linh trực tiếp dẫn dắt.',
              url: 'https://linhhoatam.com/workshop-chien-luoc',
              provider: { '@id': 'https://linhhoatam.com/#organization' },
              instructor: { '@id': 'https://linhhoatam.com/#person-hoang-mai-linh' },
              educationalLevel: 'Professional',
              teaches: ['Thuật Số Học Ứng Dụng', 'Ra quyết định chiến lược', 'Lãnh đạo bản thân'],
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'onsite',
                location: { '@type': 'Place', name: 'TP. Hồ Chí Minh, Việt Nam' },
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://linhhoatam.com' },
                { '@type': 'ListItem', position: 2, name: 'Workshop Chiến Lược', item: 'https://linhhoatam.com/workshop-chien-luoc' },
              ],
            },
          ]),
        }}
      />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        {/* SECTION 1 – HERO */}
        <WorkshopHero />
        
        {/* SECTION 2 – WORKSHOP SẮP TỚI */}
        <WorkshopUpcoming />
        
        {/* SECTION 3 – NỘI DUNG */}
        <WorkshopContent />
        
        {/* SECTION 4 – FORM ĐĂNG KÝ */}
        <WorkshopRegisterForm />
        
        {/* SECTION 5 – SAU KHI ĐĂNG KÝ BẠN NHẬN ĐƯỢC */}
        <WorkshopBenefits />
        
        {/* SECTION 6 – CÁC CHỦ ĐỀ WORKSHOP CHIẾN LƯỢC */}
        <WorkshopTopics />
        
        {/* SECTION 7 – LỊCH SỬ WORKSHOP ĐÃ TỔ CHỨC */}
        <WorkshopHistory initialWorkshops={workshops.data} />
        
        {/* SECTION 8 – CON SỐ THỰC TẾ */}
        <WorkshopStats />
        
        {/* SECTION 9 – ĐĂNG KÝ NHẬN THÔNG BÁO & DIỄN GIẢ */}
        <WorkshopSpeaker initialProfile={profile} />
        
        {/* SECTION 10 – CÂU HỎI THƯỜNG GẶP */}
        <WorkshopFAQ />
        
        {/* SECTION 11 – CTA CUỐI TRANG */}
        <WorkshopCTA />
      </main>
      <Footer />
    </>
  );
}

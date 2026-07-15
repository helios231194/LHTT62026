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
import { getProfile, getWorkshops } from '@/lib/local-db';


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

// XSS-safe JSON-LD serialization
function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export default async function WorkshopCaNhanPage() {
  const profile = await getProfile();
  const workshops = await getWorkshops('personal');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${siteUrl}/workshop-ca-nhan#course`,
    name: 'Workshop Thấu Hiểu Bản Thân & Sự Nghiệp – Linh Hoa Tâm',
    description: 'Chương trình học/workshop chuyên sâu về Thuật Số Học Ứng Dụng giúp định hướng nghề nghiệp, thấu hiểu cấu trúc năng lượng bản thân để kiến tạo cuộc sống hạnh phúc.',
    url: `${siteUrl}/workshop-ca-nhan`,
    provider: {
      '@type': 'Organization',
      '@id': 'https://linhhoatam.com/#organization',
      name: 'Linh Hoa Tâm'
    },
    instructor: {
      '@type': 'Person',
      '@id': 'https://linhhoatam.com/#person-hoang-mai-linh',
      name: 'Hoàng Mai Linh'
    },
    educationalLevel: 'Professional',
    teaches: ['Thuật Số Học Ứng Dụng', 'Thấu hiểu bản thân', 'Định hướng sự nghiệp', 'Chu kỳ cuộc đời'],
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      location: {
        '@type': 'Place',
        name: 'TP. Hồ Chí Minh, Việt Nam'
      }
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Workshop Thấu Hiểu Bản Thân & Sự Nghiệp', item: `${siteUrl}/workshop-ca-nhan` },
    ],
  };

  const jsonLd = [courseSchema, breadcrumbSchema];

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
        <PersonalWorkshopHistory initialWorkshops={workshops.data} />
        
        {/* SECTION 7 – CON SỐ THỰC TẾ */}
        <PersonalWorkshopStats />
        
        {/* SECTION 8 & 9 – ĐĂNG KÝ NHẬN THÔNG BÁO & DIỄN GIẢ */}
        <PersonalWorkshopSpeaker initialProfile={profile} />
        
        {/* SECTION 10 – CÂU HỎI THƯỜNG GẶP */}
        <PersonalWorkshopFAQ />
        
        {/* SECTION 11 – CTA CUỐI TRANG */}
        <PersonalWorkshopCTA />
      </main>
      <Footer />
    </>
  );
}

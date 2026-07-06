import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Method Sections
import { MethHero } from '@/components/sections/phuong-phap/MethHero';
import { MethOverview } from '@/components/sections/phuong-phap/MethOverview';
import { MethIndicators } from '@/components/sections/phuong-phap/MethIndicators';
import { MethApplication } from '@/components/sections/phuong-phap/MethApplication';

export const metadata: Metadata = {
  title: 'Phương pháp Thuật Số Học Ứng Dụng | Linh Hoa Tâm',
  description: 'Hệ thống phân tích hành vi và cấu trúc vận hành cá nhân, giúp CEO và doanh nghiệp ra quyết định có căn cứ và hành động đúng thời điểm.',
  openGraph: {
    title: 'Phương pháp Thuật Số Học Ứng Dụng | Linh Hoa Tâm',
    description: 'Từ con số đến quyết định: quy trình khám phá bản thân và ra quyết định thực tế.',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function MethodPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        <MethHero />
        <MethOverview />
        <MethIndicators />
        <MethApplication />
      </main>
      <Footer />
    </>
  );
}

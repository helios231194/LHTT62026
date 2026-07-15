import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WebinarHero } from '@/components/sections/webinar/WebinarHero';
import { WebinarContent } from '@/components/sections/webinar/WebinarContent';
import { WebinarForm } from '@/components/sections/webinar/WebinarForm';
import { WebinarBenefits } from '@/components/sections/webinar/WebinarBenefits';
import { WebinarMaster } from '@/components/sections/webinar/WebinarMaster';
import { WebinarFAQ } from '@/components/sections/webinar/WebinarFAQ';
import { WebinarCTA } from '@/components/sections/webinar/WebinarCTA';


export const metadata: Metadata = {
  title: 'Webinar Tham vấn Chiến lược Miễn phí | Linh Hoa Tâm',
  description: '4 sai lầm hệ thống khiến người làm nhiều mà kết quả không tăng. Tham gia webinar chiến lược miễn phí cùng Master Hoàng Mai Linh – chuyên gia Thuật Số Học hàng đầu Việt Nam. Đăng ký ngay hôm nay.',
  openGraph: {
    title: 'Webinar Miễn phí – Chiến lược Tham vấn | Linh Hoa Tâm',
    description: '4 sai lầm khiến CEO làm nhiều nhưng kết quả không tăng. Tham gia miễn phí.',
    type: 'website',
    locale: 'vi_VN',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Webinar Miễn phí – Linh Hoa Tâm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webinar Chiến lược Miễn phí | Linh Hoa Tâm',
    description: '4 sai lầm khiến CEO làm nhiều nhưng kết quả không tăng.',
    images: ['/og-image.png'],
  },
};

export default function WebinarPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        <WebinarHero />
        <WebinarContent />
        <WebinarForm />
        <WebinarBenefits />
        <WebinarMaster />
        <WebinarFAQ />
        <WebinarCTA />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LHTBrand } from '@/components/sections/linh-hoa-tam/LHTBrand';
import { LHTVision } from '@/components/sections/linh-hoa-tam/LHTVision';
import { LHTValues } from '@/components/sections/linh-hoa-tam/LHTValues';
import { LHTIndicators } from '@/components/sections/linh-hoa-tam/LHTIndicators';
import { LHTEcosystem } from '@/components/sections/linh-hoa-tam/LHTEcosystem';
import { LHTDifference } from '@/components/sections/linh-hoa-tam/LHTDifference';

export const metadata: Metadata = {
  title: 'Về Linh Hoa Tâm – Numerology for Leaders | Thuật Số Học Ứng Dụng',
  description: 'Linh Hoa Tâm là đơn vị tiên phong tại Việt Nam ứng dụng Thuật Số Học như công cụ tham vấn chiến lược cho lãnh đạo. Hệ thống 7 chỉ số vận mệnh.',
};

export default function LinhHoaTamPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        <LHTBrand />
        <LHTVision />
        <LHTValues />
        <LHTIndicators />
        <LHTEcosystem />
        <LHTDifference />
      </main>
      <Footer />
    </>
  );
}

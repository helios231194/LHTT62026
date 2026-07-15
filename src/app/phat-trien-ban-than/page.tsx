import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PersonalHero } from '@/components/sections/personal/PersonalHero';
import { PersonalEntryProduct } from '@/components/sections/personal/PersonalEntryProduct';
import { PersonalCoaching } from '@/components/sections/personal/PersonalCoaching';
import { PersonalWhyMaster } from '@/components/sections/personal/PersonalWhyMaster';
import { PersonalTestimonials } from '@/components/sections/personal/PersonalTestimonials';
import { PersonalBook } from '@/components/sections/personal/PersonalBook';
import { PersonalCTA } from '@/components/sections/personal/PersonalCTA';
import { getPersonalProducts, getProfile } from '@/lib/local-db';



export const metadata: Metadata = {
  title: 'Phát Triển Bản Thân Bằng Thuật Số Học | Linh Hoa Tâm',
  description: 'Thấu hiểu cấu trúc năng lượng bản thân để có những quyết định đúng đắn. Xác định thời điểm nên tiến, nên giữ trong sự nghiệp & tài chính. Đăng ký tư vấn!',
  alternates: {
    canonical: 'https://linhhoatam.com/phat-trien-ban-than',
  },
  openGraph: {
    title: 'Phát Triển Bản Thân Bằng Thuật Số Học | Linh Hoa Tâm',
    description: 'Hiểu rõ bản thân qua Thuật Số Học: Biết đúng thời điểm tiến, giữ và chuyển hướng trong cuộc sống.',
    type: 'website',
    locale: 'vi_VN',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Phát triển Bản thân – Linh Hoa Tâm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phát triển Bản thân – Thuật Số Học | Linh Hoa Tâm',
    description: 'Hiểu rõ bản thân – ra quyết định đúng thời điểm.',
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

export default async function PhatTrienBanThanPage() {
  const { data: products } = await getPersonalProducts();
  const profile = await getProfile();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/phat-trien-ban-than#service`,
    name: 'Dịch vụ coaching 1:1 chuyên sâu - Linh Hoa Tâm',
    provider: {
      '@type': 'Organization',
      '@id': 'https://linhhoatam.com/#organization',
      name: 'Linh Hoa Tâm'
    },
    description: 'Coaching 1:1 chuyên sâu cùng Master Hoàng Mai Linh ứng dụng Thuật Số Học. Nhận diện cấu trúc năng lượng, giải quyết các khó khăn trong phát triển bản thân, định hướng sự nghiệp, cải thiện các mối quan hệ.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: '6800000',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/phat-trien-ban-than`
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Phát Triển Bản Thân', item: `${siteUrl}/phat-trien-ban-than` },
    ],
  };

  const jsonLd = [serviceSchema, breadcrumbSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(jsonLd),
        }}
      />
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        {/* SECTION 1 – HERO */}
        <PersonalHero />
        
        {/* SECTION 2 – FILE LUẬN GIẢI CÁ NHÂN */}
        <PersonalEntryProduct initialProfile={profile} />
        
        {/* SECTION 3 – COACHING 1:1 CÁ NHÂN – 8 DỊCH VỤ */}
        <PersonalCoaching initialProducts={products} />
        
        {/* SECTION 4 – TẠI SAO NÊN LÀM VIỆC VỚI MASTER */}
        <PersonalWhyMaster />
        
        {/* SECTION 5 – PHẢN HỒI TỪ KHÁCH HÀNG CÁ NHÂN */}
        <PersonalTestimonials />
        
        {/* SECTION 6 – SÁCH SỨC MẠNH ẨN SAU CON SỐ */}
        <PersonalBook initialProfile={profile} />
        
        {/* SECTION 7 – CTA CUỐI TRANG */}
        <PersonalCTA />
      </main>
      <Footer />
    </>
  );
}

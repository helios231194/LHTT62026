import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactFAQ } from '@/components/sections/contact/ContactFAQ';
import { ContactMap } from '@/components/sections/contact/ContactMap';


export const metadata: Metadata = {
  title: 'Liên Hệ | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
  description: 'Đăng ký tư vấn chiến lược cá nhân hóa cùng Linh Hoa Tâm. Chúng tôi cung cấp các giải pháp chuyên sâu về lãnh đạo, quản trị và phát triển bản thân.',
  alternates: {
    canonical: 'https://linhhoatam.com/lien-he',
  },
  openGraph: {
    title: 'Liên Hệ | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
    description: 'Đăng ký tư vấn chiến lược cá nhân hóa cùng Linh Hoa Tâm.',
    url: 'https://linhhoatam.com/lien-he',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Liên hệ Linh Hoa Tâm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liên Hệ | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
    description: 'Đăng ký tư vấn chiến lược cá nhân hóa cùng Linh Hoa Tâm.',
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

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteUrl}/lien-he#webpage`,
    name: 'Liên Hệ | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
    description: 'Đăng ký tư vấn chiến lược cá nhân hóa cùng Linh Hoa Tâm. Chúng tôi cung cấp các giải pháp chuyên sâu về lãnh đạo, quản trị và phát triển bản thân.',
    url: `${siteUrl}/lien-he`,
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://linhhoatam.com/#organization'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Liên hệ', item: `${siteUrl}/lien-he` },
    ],
  };

  const jsonLd = [contactPageSchema, breadcrumbSchema];

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
        {/* SECTION 1 & 2 - GIỚI THIỆU & FORM LIÊN HỆ */}
        <ContactForm />
        
        {/* SECTION 3 - CÂU HỎI THƯỜNG GẶP */}
        <ContactFAQ />
        
        {/* SECTION 4 - BẢN ĐỒ & GIỜ LÀM VIỆC */}
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}

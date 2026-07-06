import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PageTransition } from "@/components/ui/PageTransition";

const poppins = localFont({ 
  src: [
    { path: "../../public/fonts/FONT/FZ Poppins-Light.ttf", weight: '300', style: 'normal' },
    { path: "../../public/fonts/FONT/FZ Poppins-Regular.ttf", weight: '400', style: 'normal' },
    { path: "../../public/fonts/FONT/FZ Poppins-Medium.ttf", weight: '500', style: 'normal' },
    { path: "../../public/fonts/FONT/FZ Poppins-SemiBold.ttf", weight: '600', style: 'normal' },
    { path: "../../public/fonts/FONT/FZ Poppins-Bold.ttf", weight: '700', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

export const metadata: Metadata = {
  title: "Linh Hoa Tâm | Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo",
  description: "Linh Hoa Tâm – đơn vị tiên phong ứng dụng Thuật Số Học như công cụ tham vấn chiến lược cho CEO, Founder và lãnh đạo cấp cao tại Việt Nam.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Linh Hoa Tâm | Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo",
    description: "Tư vấn chiến lược cho CEO & Lãnh đạo bằng Thần Số Học. Hơn 2.000 khách hàng thành công và 3.500 giờ tham vấn.",
    locale: 'vi_VN',
    type: 'website',
    siteName: 'Linh Hoa Tâm',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/LOGO-07.png`, width: 1200, height: 630, alt: 'Linh Hoa Tâm' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@linhhoatam',
    title: "Linh Hoa Tâm | Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo",
    description: "Tư vấn chiến lược cho CEO & Lãnh đạo bằng Thần Số Học.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// XSS-safe JSON-LD serialization
function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

// LocalBusiness Schema (Local SEO — TP.HCM)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://linhhoatam.com/#organization',
  name: 'Linh Hoa Tâm',
  alternateName: 'LinhHoaTam',
  description: 'Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo. Đơn vị tiên phong ứng dụng Thuật Số Học như công cụ tham vấn chiến lược cho CEO, Founder và lãnh đạo cấp cao tại Việt Nam.',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/LOGO-07.png` },
  image: `${SITE_URL}/LOGO-07.png`,
  telephone: '+84-967-623-456',
  email: 'linhhoatam11@gmail.com',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '78/1 Phan Đình Phùng, Phú Thọ Hòa',
    addressLocality: 'Tân Phú',
    addressRegion: 'TP.HCM',
    postalCode: '700000',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.7769,
    longitude: 106.6295,
  },
  areaServed: { '@type': 'Country', name: 'Vietnam' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+84-967-623-456',
    contactType: 'customer service',
    areaServed: 'VN',
    availableLanguage: 'Vietnamese',
  },
  sameAs: [
    'https://www.tiktok.com/@linhhoatam11',
    'https://www.facebook.com/linhhoatam',
  ],
  founder: {
    '@type': 'Person',
    '@id': 'https://linhhoatam.com/#person-hoang-mai-linh',
    name: 'Hoàng Mai Linh',
    jobTitle: 'Nhà tham vấn chiến lược – Chuyên gia Thuật Số Học Ứng Dụng',
    url: `${SITE_URL}/master-hoang-mai-linh`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={poppins.variable}>
      <body className="font-poppins antialiased bg-ice-white text-dark-blue overflow-x-hidden w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessSchema) }}
        />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

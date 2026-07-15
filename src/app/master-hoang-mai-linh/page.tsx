import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MasterHero } from '@/components/sections/master/MasterHero';
import { MasterPhilosophy } from '@/components/sections/master/MasterPhilosophy';
import { MasterStats } from '@/components/sections/master/MasterStats';
import { MasterRoles } from '@/components/sections/master/MasterRoles';
import { MasterCredential } from '@/components/sections/master/MasterCredential';
import { MasterCTA } from '@/components/sections/master/MasterCTA';
import { getProfile } from '@/lib/local-db';


export const metadata: Metadata = {
  title: 'Master Hoàng Mai Linh | Cố Vấn Thuật Số Học Cho CEO',
  description: 'Master Hoàng Mai Linh - Hơn 3500 giờ cố vấn chiến lược cho CEO và Lãnh đạo bằng Thuật Số Học. Tác giả sách Sức Mạnh Ẩn Sau Con Số. Đặt lịch tham vấn ngay!',
  alternates: { canonical: 'https://linhhoatam.com/master-hoang-mai-linh' },
  openGraph: {
    title: 'Master Hoàng Mai Linh | Cố Vấn Thuật Số Học Cho CEO',
    description: 'Hơn 3.500 giờ tham vấn CEO, Founder. Tác giả sách, diễn giả Forbes Women Vietnam.',
    type: 'profile',
    locale: 'vi_VN',
    images: [
      {
        url: '/og-image-master.png',
        width: 1200,
        height: 630,
        alt: 'Master Hoàng Mai Linh – Linh Hoa Tâm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master Hoàng Mai Linh – Chuyên gia Thuật Số Học',
    description: '3.500+ giờ tham vấn CEO | Tác giả Sức Mạnh Ẩn Sau Con Số | Diễn giả Forbes Women Vietnam.',
    images: ['/og-image-master.png'],
  },
};

function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export default async function MasterPage() {
  const profile = await getProfile();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                '@id': 'https://linhhoatam.com/#person-hoang-mai-linh',
                name: 'Hoàng Mai Linh',
                alternateName: 'Master Hoàng Mai Linh',
                image: 'https://linhhoatam.com/og-image-master.png',
                jobTitle: 'Chuyên gia Thuật Số Học Ứng Dụng – Nhà tham vấn chiến lược',
                description: 'Hơn 3.500 giờ tham vấn CEO, Founder và lãnh đạo cấp cao từ nhiều ngành. Tác giả sách "Sức Mạnh Ẩn Sau Con Số", diễn giả tại Prudential Vietnam, Forbes Women Vietnam, Đại học Kinh tế Quốc dân.',
                knowsAbout: [
                  'Thuật Số Học Ứng Dụng',
                  'Tham vấn chiến lược CEO',
                  'Phát triển lãnh đạo',
                  'Quản trị nhân sự',
                  'Numerology',
                ],
                award: 'Doanh nhân tiêu biểu vì cộng đồng',
                hasCredential: {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'Doanh nhân tiêu biểu vì cộng đồng',
                },
                hasOccupation: {
                  '@type': 'Occupation',
                  name: 'Nhà tham vấn chiến lược',
                },
                author: {
                  '@type': 'Book',
                  '@id': 'https://linhhoatam.com/sach#book',
                  name: 'Sức Mạnh Ẩn Sau Con Số',
                  inLanguage: 'vi',
                  url: 'https://linhhoatam.com/sach',
                },
                worksFor: {
                  '@type': 'Organization',
                  '@id': 'https://linhhoatam.com/#organization',
                  name: 'Linh Hoa Tâm',
                  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com',
                },
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com'}/master-hoang-mai-linh`,
                sameAs: [
                  'https://www.tiktok.com/@linhhoatam11',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': 'Trang chủ', 'item': process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com' },
                  { '@type': 'ListItem', 'position': 2, 'name': 'Master Hoàng Mai Linh', 'item': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com'}/master-hoang-mai-linh` }
                ]
              }
            ]),
          }}
        />
        <MasterHero initialProfile={profile} />
        <MasterPhilosophy initialProfile={profile} />
        <MasterStats />
        <MasterRoles />
        <MasterCredential />
        <MasterCTA />
      </main>
      <Footer />
    </>
  );
}

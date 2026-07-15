import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CommunityHero } from '@/components/sections/community/CommunityHero';
import { CommunityInside } from '@/components/sections/community/CommunityInside';
import { CommunityWhy } from '@/components/sections/community/CommunityWhy';
import { CommunityMembers } from '@/components/sections/community/CommunityMembers';
import { CommunityPreview } from '@/components/sections/community/CommunityPreview';
import { CommunityStats } from '@/components/sections/community/CommunityStats';
import { CommunityCTA } from '@/components/sections/community/CommunityCTA';
import { getProfile } from '@/lib/local-db';


export const metadata: Metadata = {
  title: 'Cộng đồng Linh Hoa Tâm | 20.900+ Lãnh đạo',
  description: 'Tham gia không gian độc quyền của 20.900+ chủ doanh nghiệp và cá nhân đang ứng dụng Thuật Số Học.',
  alternates: {
    canonical: 'https://linhhoatam.com/cong-dong',
  },
  openGraph: {
    title: 'Cộng đồng Linh Hoa Tâm | 20.900+ Lãnh đạo',
    description: 'Tham gia không gian độc quyền của 20.900+ chủ doanh nghiệp và cá nhân đang ứng dụng Thuật Số Học.',
    url: 'https://linhhoatam.com/cong-dong',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Cộng đồng Linh Hoa Tâm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cộng đồng Linh Hoa Tâm | 20.900+ Lãnh đạo',
    description: 'Tham gia không gian độc quyền của 20.900+ chủ doanh nghiệp và cá nhân đang ứng dụng Thuật Số Học.',
    images: ['/og-image.png'],
  },
};

export default async function CongDongPage() {
  const profile = await getProfile();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        <CommunityHero initialProfile={profile} />
        <CommunityInside />
        <CommunityWhy />
        <CommunityMembers />
        <CommunityPreview />
        <CommunityStats />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}

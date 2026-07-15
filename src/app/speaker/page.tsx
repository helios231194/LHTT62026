import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SpeakerHero } from '@/components/sections/speaker/SpeakerHero';
import { SpeakerClients } from '@/components/sections/speaker/SpeakerClients';
import { SpeakerStats } from '@/components/sections/speaker/SpeakerStats';
import { SpeakerStyle } from '@/components/sections/speaker/SpeakerStyle';
import { SpeakerTopics } from '@/components/sections/speaker/SpeakerTopics';
import { SpeakerTestimonials } from '@/components/sections/speaker/SpeakerTestimonials';
import { SpeakerProcess } from '@/components/sections/speaker/SpeakerProcess';
import { SpeakerForm } from '@/components/sections/speaker/SpeakerForm';
import { SpeakerCredential } from '@/components/sections/speaker/SpeakerCredential';
import { getPartners, getSpeakerEvents, getTestimonials, getSpeakerAssets, getProfile } from '@/lib/local-db';


export const metadata: Metadata = {
  title: 'Mời Speaker | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
  description: 'Mời Master Hoàng Mai Linh diễn giả chiến lược về Thuật Số Học Ứng Dụng trong lãnh đạo và vận hành doanh nghiệp. Tải Credential PDF và gửi yêu cầu hợp tác.',
  alternates: { canonical: 'https://linhhoatam.com/speaker' },
  openGraph: {
    title: 'Mời Speaker | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
    description: 'Mời Master Hoàng Mai Linh diễn giả chiến lược về Thuật Số Học Ứng Dụng trong lãnh đạo và vận hành doanh nghiệp.',
    url: 'https://linhhoatam.com/speaker',
  },
};

function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export default async function SpeakerPage() {
  const { data: partners } = await getPartners();
  const { data: events } = await getSpeakerEvents();
  const { data: testimonials } = await getTestimonials('speaker');
  const speakerAssets = await getSpeakerAssets();
  const profile = await getProfile();

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd([
            {
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'Mời Diễn Giả – Master Hoàng Mai Linh',
              description: 'Đặt lịch mời Master Hoàng Mai Linh làm diễn giả chiến lược về Thuật Số Học Ứng Dụng trong lãnh đạo và vận hành doanh nghiệp.',
              url: 'https://linhhoatam.com/speaker',
              organizer: { '@id': 'https://linhhoatam.com/#organization' },
              performer: { '@id': 'https://linhhoatam.com/#person-hoang-mai-linh' },
              eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
              eventStatus: 'https://schema.org/EventScheduled',
              location: { '@type': 'Place', name: 'Toàn quốc, Việt Nam' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://linhhoatam.com' },
                { '@type': 'ListItem', position: 2, name: 'Mời Speaker', item: 'https://linhhoatam.com/speaker' },
              ],
            },
          ]),
        }}
      />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        {/* SECTION 1 - HERO */}
        <SpeakerHero heroImage={profile?.speaker_hero_img?.[0]} />
        
        {/* SECTION 2 - ĐÃ DIỄN GIẢ TẠI */}
        <SpeakerClients initialPartners={partners} initialEvents={events} />
        
        {/* SECTION 3 - SỐ LIỆU & THÀNH TỰU */}
        <SpeakerStats />
        
        {/* SECTION 4 - PHONG CÁCH DIỄN GIẢI */}
        <SpeakerStyle />
        
        {/* SECTION 5 - CÁC CHUYÊN ĐỀ NỔI BẬT */}
        <SpeakerTopics />
        
        {/* SECTION 6 - PHẢN HỒI TỪ ĐƠN VỊ ĐÃ MỜI */}
        <SpeakerTestimonials initialTestimonials={testimonials} />
        
        {/* SECTION 7 - QUY TRÌNH LÀM VIỆC */}
        <SpeakerProcess />
        
        {/* SECTION 8 - FORM MỜI SPEAKER */}
        <SpeakerForm topicsOptions={speakerAssets.topics_options} />
        
        {/* SECTION 9 - TẢI CREDENTIAL */}
        <SpeakerCredential pdfUrl={speakerAssets.credential_pdf_url} />
      </main>
      <Footer />
    </>
  );
}

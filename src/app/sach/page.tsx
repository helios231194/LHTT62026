import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Book Sections
import { BookHero } from '@/components/sections/sach/BookHero';
import { BookContent } from '@/components/sections/sach/BookContent';
import { BookCombos } from '@/components/sections/sach/BookCombos';
import { BookDetails } from '@/components/sections/sach/BookDetails';
import { BookFeedback } from '@/components/sections/sach/BookFeedback';
import { BookCorporate } from '@/components/sections/sach/BookCorporate';

export const metadata: Metadata = {
  title: 'Sách Sức Mạnh Ẩn Sau Con Số - Thuật Số Học Ứng Dụng',
  description: 'Khám phá "Sức Mạnh Ẩn Sau Con Số" của tác giả Hoàng Mai Linh - cuốn sách Thuật Số Học Ứng Dụng hướng dẫn thấu hiểu bản thân, đọc vị nhân sự dành cho Lãnh đạo.',
  openGraph: {
    title: 'Sách Sức Mạnh Ẩn Sau Con Số | Thuật Số Học Ứng Dụng',
    description: 'Giải mã năng lực lãnh đạo qua Sức Mạnh Ẩn Sau Con Số. Cuốn sách gối đầu giường về Thuật Số Học từ Master Coach Hoàng Mai Linh.',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue overflow-hidden">
        <BookHero />
        <BookContent />
        <BookCombos />
        <BookFeedback />
        <BookDetails />
        <BookCorporate />
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactFAQ } from '@/components/sections/contact/ContactFAQ';
import { ContactMap } from '@/components/sections/contact/ContactMap';

export const metadata: Metadata = {
  title: 'Liên Hệ | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
  description: 'Đăng ký tư vấn chiến lược cá nhân hóa cùng Linh Hoa Tâm. Chúng tôi cung cấp các giải pháp chuyên sâu về lãnh đạo, quản trị và phát triển bản thân.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
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

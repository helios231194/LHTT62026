import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Điều khoản dịch vụ | Linh Hoa Tâm',
  description: 'Các điều khoản sử dụng dịch vụ và quy định đặt lịch tham vấn tại Linh Hoa Tâm.',
  alternates: {
    canonical: 'https://linhhoatam.com/dieu-khoan-dich-vu',
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20 bg-ice-white text-oxford-blue">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-oxford-blue/5">
          <h1 className="text-3xl md:text-4xl font-black mb-8 border-b-2 border-cyan-azure/20 pb-4 text-oxford-blue">
            Điều Khoản Dịch Vụ
          </h1>
          <p className="text-sm text-slate-500 mb-6 font-medium">Cập nhật lần cuối ngày: 06/07/2026</p>
          
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
            <p>
              Chào mừng bạn đến với các chương trình tham vấn và đào tạo tại <strong>Linh Hoa Tâm</strong>. Khi bạn truy cập website hoặc đặt lịch hẹn sử dụng các dịch vụ tư vấn của chúng tôi, bạn đồng ý tuân thủ các quy định và điều khoản dưới đây.
            </p>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">1. Quy định về đặt lịch tham vấn</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mọi yêu cầu tham vấn cá nhân (1:1) hoặc doanh nghiệp cần được đăng ký trước qua website hoặc Hotline chính thức của Linh Hoa Tâm.</li>
              <li>Lịch hẹn chỉ được xác nhận chính thức sau khi bộ phận trợ lý của chúng tôi liên hệ trực tiếp và gửi email/tin nhắn xác nhận thời gian cụ thể.</li>
              <li>Để đảm bảo chất lượng phân tích chuyên môn của buổi gặp mặt, quý khách vui lòng cung cấp thông tin ngày sinh và câu hỏi chi tiết trước tối thiểu 24 giờ diễn ra buổi hẹn.</li>
            </ul>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">2. Quy định về hoãn, hủy hoặc thay đổi lịch hẹn</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nếu quý khách không thể tham dự đúng giờ hẹn, vui lòng thông báo cho Linh Hoa Tâm trước ít nhất 12 giờ để chúng tôi sắp xếp lại khung giờ phù hợp.</li>
              <li>Trong trường hợp hủy lịch hẹn đột xuất không báo trước hoặc báo trước dưới 4 giờ mà không có lý do bất khả kháng, lịch hẹn đó có thể bị từ chối chuyển lịch hoặc thu thêm phí vận hành theo quy định của trung tâm.</li>
            </ul>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">3. Trách nhiệm chuyên môn và bảo mật</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Linh Hoa Tâm cam kết thực hiện việc tham vấn dựa trên nghiên cứu khoa học số học ứng dụng, trải nghiệm thực tiễn và đạo đức nghề nghiệp cao nhất. Các giải pháp mang tính định hướng, tư vấn và gợi ý giải quyết vấn đề. Quý khách hàng tự chịu trách nhiệm cuối cùng đối với mọi quyết định cá nhân và kinh doanh của mình.</li>
              <li>Toàn bộ thông tin trao đổi, hồ sơ bản đồ số học cá nhân và nội dung chi tiết của các buổi tham vấn 1:1 được giữ bí mật tuyệt đối giữa chuyên gia tham vấn và khách hàng.</li>
            </ul>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">4. Bản quyền nội dung và sở hữu trí tuệ</h2>
            <p>
              Toàn bộ nội dung đăng tải trên website (bài viết kiến thức, hình ảnh, cấu trúc, tài liệu đính kèm) và tác phẩm sách <em>&quot;Sức Mạnh Ẩn Sau Con Số&quot;</em> thuộc quyền sở hữu trí tuệ duy nhất của Linh Hoa Tâm và tác giả Hoàng Mai Linh. Nghiêm cấm mọi hành vi sao chép, phân phối hoặc tái bản nội dung dưới bất kỳ hình thức nào mà không có sự đồng ý bằng văn bản của chúng tôi.
            </p>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">5. Điều chỉnh điều khoản</h2>
            <p>
              Linh Hoa Tâm có quyền sửa đổi, bổ sung các điều khoản dịch vụ này bất cứ lúc nào để phù hợp với quy định của pháp luật và hoạt động thực tế. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải công khai trên website.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Chính sách bảo mật | Linh Hoa Tâm',
  description: 'Chính sách bảo mật thông tin cá nhân của khách hàng tại Linh Hoa Tâm theo quy định pháp luật Việt Nam.',
  alternates: {
    canonical: 'https://linhhoatam.com/chinh-sach-bao-mat',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20 bg-ice-white text-oxford-blue">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-oxford-blue/5">
          <h1 className="text-3xl md:text-4xl font-black mb-8 border-b-2 border-cyan-azure/20 pb-4 text-oxford-blue">
            Chính Sách Bảo Mật Thông Tin
          </h1>
          <p className="text-sm text-slate-500 mb-6 font-medium">Cập nhật lần cuối ngày: 06/07/2026</p>
          
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
            <p>
              Chào mừng bạn đến với <strong>Linh Hoa Tâm</strong>. Chúng tôi hiểu rằng thông tin cá nhân của bạn là vô cùng nhạy cảm và quan trọng. Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin của bạn khi bạn sử dụng dịch vụ tham vấn, đăng ký workshop hoặc gửi yêu cầu liên hệ trên website của chúng tôi.
            </p>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">1. Thông tin chúng tôi thu thập</h2>
            <p>Khi bạn đăng ký nhận tham vấn hoặc tham gia các chương trình đào tạo của Linh Hoa Tâm, chúng tôi có thể thu thập các thông tin sau:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Họ và tên đầy đủ.</li>
              <li>Số điện thoại và địa chỉ Email.</li>
              <li>Thông tin ngày tháng năm sinh (để phục vụ chuyên môn phân tích Thuật Số Học).</li>
              <li>Nội dung hoặc câu hỏi bạn cần tham vấn chi tiết.</li>
            </ul>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">2. Mục đích sử dụng thông tin</h2>
            <p>Chúng tôi chỉ sử dụng thông tin của bạn vào các mục đích hợp pháp sau:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Liên hệ xác nhận lịch hẹn tham vấn cá nhân hoặc tham dự workshop.</li>
              <li>Phân tích thông tin ngày sinh để chuẩn bị hồ sơ tham vấn chuyên môn trước buổi gặp mặt.</li>
              <li>Gửi các tài liệu học tập, kiến thức ứng dụng hoặc thông báo sự kiện mới nếu có sự đồng ý của bạn.</li>
              <li>Cải thiện trải nghiệm sử dụng trang web của khách hàng.</li>
            </ul>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">3. Bảo mật thông tin cá nhân</h2>
            <p>
              Linh Hoa Tâm cam kết bảo mật tuyệt đối dữ liệu cá nhân của bạn. Chúng tôi áp dụng các biện pháp an ninh mạng, mã hóa kết nối SSL/HTTPS và quản lý truy cập nội bộ chặt chẽ để phòng ngừa việc truy cập, thay đổi hoặc tiết lộ thông tin trái phép. Chúng tôi cam kết <strong>không bao giờ bán, trao đổi hoặc cho thuê</strong> thông tin cá nhân của bạn cho bên thứ ba.
            </p>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">4. Quyền của khách hàng đối với dữ liệu</h2>
            <p>Bạn có toàn quyền kiểm soát dữ liệu cá nhân của mình, bao gồm:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Yêu cầu truy xuất hoặc sao chép dữ liệu hiện tại chúng tôi đang lưu trữ.</li>
              <li>Yêu cầu chỉnh sửa, cập nhật thông tin cá nhân khi có sai lệch.</li>
              <li>Yêu cầu xóa bỏ hoàn toàn thông tin cá nhân của bạn khỏi hệ thống lưu trữ của chúng tôi bất kỳ lúc nào bằng cách liên hệ qua email hoặc số hotline.</li>
            </ul>

            <h2 className="text-xl font-bold text-oxford-blue mt-8">5. Liên hệ với chúng tôi</h2>
            <p>Nếu bạn có bất kỳ câu hỏi nào liên quan đến Chính sách bảo mật này, xin vui lòng liên hệ:</p>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <strong>Văn phòng Linh Hoa Tâm</strong><br />
              Địa chỉ: 78/1 Phan Đình Phùng, Phú Thọ Hòa, Tân Phú, TP.HCM<br />
              Hotline: 0967 623 456 | 0918 683 139<br />
              Email: linhhoatam11@gmail.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

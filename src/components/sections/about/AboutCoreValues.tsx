'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const values = [
  {
    title: 'Chính xác',
    content: 'Mọi phân tích dựa trên hệ thống 7 chỉ số cụ thể, được đối chiếu với chu kỳ vận hành thực tế của từng người. Khách hàng nhận hồ sơ PDF 100 trang trở lên, có thể dùng làm tài liệu tham chiếu trong họp chiến lược.'
  },
  {
    title: 'Ứng dụng',
    content: 'Mỗi buổi làm việc kết thúc bằng 3 hành động trong 90 ngày, 3 mục tiêu trọng tâm và 1 giới hạn cần thiết lập ngay. Hơn 2.000 khách hàng đã đi qua quy trình này.'
  },
  {
    title: 'Cá nhân hóa',
    content: 'Mỗi bản đồ được xây theo đúng ngày tháng năm sinh, vai trò thực tế và giai đoạn đang ở. Hai người cùng ngày sinh nhưng khác vai trò sẽ nhận hai bản phân tích hoàn toàn khác nhau.'
  },
  {
    title: 'Chuyển hóa thực',
    content: 'Kết quả đo được trong vận hành: quyết định nhân sự rõ hơn, thời điểm đầu tư chính xác hơn, cách phân quyền hợp lý hơn.'
  }
];

export function AboutCoreValues() {
  return (
    <section className="py-24 bg-ice-white text-oxford-blue">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Giá Trị Cốt Lõi</h2>
            <div className="w-24 h-1 bg-blaze-orange mx-auto"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white p-8 border border-light-gray h-full hover:border-blaze-orange hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md">
                <h3 className="text-2xl font-bold text-blaze-orange mb-6">{v.title}</h3>
                <p className="text-cyan-azure leading-relaxed">
                  {v.content}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

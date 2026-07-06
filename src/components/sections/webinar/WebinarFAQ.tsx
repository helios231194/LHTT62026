'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const faqs = [
  {
    q: 'Webinar này có hoàn toàn miễn phí không?',
    a: 'Có. Không có phí ẩn, không yêu cầu mua bất cứ thứ gì để tham gia.'
  },
  {
    q: 'Nếu không tham dự live được thì sao?',
    a: 'Bạn có thể đăng ký để nhận thông báo buổi tiếp theo. Lịch webinar được tổ chức hàng tuần.'
  },
  {
    q: 'Webinar này dành cho ai?',
    a: 'Chủ doanh nghiệp, lãnh đạo, quản lý và cá nhân đang ở giai đoạn cần ra quyết định quan trọng về sự nghiệp hoặc cuộc sống.'
  },
  {
    q: 'Tôi chưa biết gì về Thuật Số Học thì có tham gia được không?',
    a: 'Hoàn toàn được. Buổi học được thiết kế để ai cũng hiểu và áp dụng được ngay, không cần kiến thức nền trước.'
  }
];

export function WebinarFAQ() {
  return (
    <section className="py-24 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue text-center mb-16">
              Câu hỏi thường gặp
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-white border border-light-gray p-8 hover:border-blaze-orange transition-colors">
                  <h4 className="text-xl font-bold text-oxford-blue mb-4 flex items-start gap-4">
                    <span className="text-blaze-orange">Q.</span>
                    {faq.q}
                  </h4>
                  <div className="text-lg text-cyan-azure leading-relaxed pl-8 border-l-2 border-light-gray ml-2">
                    {faq.a}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const reasons = [
  {
    title: 'Nhận suất đăng ký Webinar sớm nhất',
    desc: 'Các sự kiện miễn phí thường hết chỗ trong 24h, thành viên group luôn có link đăng ký trước.'
  },
  {
    title: 'Tài liệu độc quyền',
    desc: 'Các file PDF tự luận giải, template quản trị nhân sự theo số học được tặng định kỳ.'
  },
  {
    title: 'Kết nối trực tiếp với Master',
    desc: 'Nơi duy nhất Master tương tác trả lời câu hỏi miễn phí ngoài phiên coaching trả phí.'
  },
  {
    title: 'Cộng đồng chất lượng',
    desc: 'Học hỏi từ kinh nghiệm ứng dụng thực tế của hơn 20.000 lãnh đạo và cá nhân khác.'
  }
];

export function CommunityWhy() {
  return (
    <section className="py-24 bg-ice-white text-oxford-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tại sao bạn nên có mặt trong Group ngay lúc này?</h2>
            <div className="w-24 h-1 bg-blaze-orange mx-auto"></div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white border border-light-gray p-8 h-full flex flex-col hover:border-blaze-orange transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-blaze-orange/10 flex items-center justify-center text-blaze-orange font-bold text-xl mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-cyan-azure leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

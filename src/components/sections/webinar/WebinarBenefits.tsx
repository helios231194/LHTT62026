'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const benefits = [
  {
    title: 'Link tham gia Zoom',
    desc: 'Gửi qua email và SMS ngay lập tức',
  },
  {
    title: 'Tài liệu chuẩn bị trước',
    desc: 'PDF 3 câu hỏi tự đánh giá theo Thuật Số Học Ứng Dụng. Điền trước khi tham dự để buổi học giải quyết đúng vấn đề.',
  },
  {
    title: 'Nhắc lịch tự động',
    desc: '24 giờ và 1 giờ trước khi bắt đầu',
  },
  {
    title: 'Ưu đãi đặc biệt',
    desc: 'Dành riêng cho người tham dự live, không áp dụng xem lại',
    highlight: true
  }
];

export function WebinarBenefits() {
  return (
    <section className="py-24 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue text-center mb-16">
            Ngay sau khi đăng ký, bạn sẽ nhận được
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((bene, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className={`p-8 border h-full flex flex-col justify-center text-center transition-colors duration-300 ${bene.highlight ? 'bg-oxford-blue text-white border-oxford-blue shadow-lg hover:shadow-xl' : 'bg-white border-light-gray text-oxford-blue hover:shadow-md'}`}>
                <h3 className={`text-xl font-bold mb-4 ${bene.highlight ? 'text-blaze-orange' : 'text-oxford-blue'}`}>{bene.title}</h3>
                <p className={`font-medium leading-relaxed object-cover ${bene.highlight ? 'text-white/80' : 'text-cyan-azure'}`}>
                  {bene.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

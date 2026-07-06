'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Link2, FileType2, BellRing, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Link2,
    title: 'Link Zoom',
    desc: 'Gửi qua email và SMS ngay lập tức để bạn dễ dàng lưu lại.'
  },
  {
    icon: FileType2,
    title: 'Tài liệu chuẩn bị',
    desc: 'PDF câu hỏi tự đánh giá theo Thuật Số Học Ứng Dụng để làm quen.'
  },
  {
    icon: BellRing,
    title: 'Nhắc lịch tự động',
    desc: 'Nhận thông báo tự động 24 giờ và 1 giờ trước khi bắt đầu.'
  },
  {
    icon: Sparkles,
    title: 'Ưu đãi độc quyền',
    desc: 'Dành riêng cho người tham dự live đến cuối buổi workshop.'
  }
];

export function WorkshopBenefits() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6">
              Ngay sau khi đăng ký, <br className="hidden md:block"/>
              <span className="text-blaze-orange">bạn sẽ nhận được.</span>
            </h2>
            <div className="w-16 h-1.5 bg-cyan-azure mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-[#F8FAFC] rounded-[2rem] p-8 text-center border border-slate-100 h-full hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blaze-orange/10 hover:border-blaze-orange/30 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-blaze-orange group-hover:border-blaze-orange transition-colors duration-500">
                    <Icon className="w-8 h-8 text-cyan-azure group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-3 leading-snug group-hover:text-blaze-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="w-8 h-1 bg-slate-200 mx-auto rounded-full mb-4 group-hover:bg-blaze-orange/50 transition-colors duration-300" />
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  );
}

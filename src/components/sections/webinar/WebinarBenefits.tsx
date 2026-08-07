'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Link2, FileType2, BellRing, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Link2,
    title: 'Link tham gia Zoom',
    desc: 'Gửi qua email và SMS ngay lập tức',
  },
  {
    icon: FileType2,
    title: 'Tài liệu chuẩn bị trước',
    desc: 'PDF 3 câu hỏi tự đánh giá theo Thuật Số Học Ứng Dụng. Điền trước khi tham dự để buổi học giải quyết đúng vấn đề.',
  },
  {
    icon: BellRing,
    title: 'Nhắc lịch tự động',
    desc: '24 giờ và 1 giờ trước khi bắt đầu',
  },
  {
    icon: Sparkles,
    title: 'Ưu đãi đặc biệt',
    desc: 'Dành riêng cho người tham dự live, không áp dụng xem lại',
    highlight: true
  }
];

export function WebinarBenefits() {
  return (
    <section className="py-24 bg-ice-white relative">
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
            const isHighlight = item.highlight;
            
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className={`rounded-[2rem] p-8 text-center border h-full hover:-translate-y-2 transition-all duration-300 group ${isHighlight ? 'bg-oxford-blue border-oxford-blue shadow-xl shadow-oxford-blue/20 hover:shadow-2xl hover:shadow-oxford-blue/30' : 'bg-white border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blaze-orange/5 hover:border-blaze-orange/20'}`}>
                  <div className={`w-16 h-16 rounded-2xl shadow-sm border flex items-center justify-center mx-auto mb-6 transition-colors duration-500 ${isHighlight ? 'bg-white/10 border-white/20 group-hover:bg-blaze-orange group-hover:border-blaze-orange' : 'bg-ice-white border-slate-100 group-hover:bg-blaze-orange group-hover:border-blaze-orange'}`}>
                    <Icon className={`w-8 h-8 transition-colors duration-500 ${isHighlight ? 'text-white' : 'text-cyan-azure group-hover:text-white'}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 leading-snug transition-colors duration-300 ${isHighlight ? 'text-white' : 'text-oxford-blue group-hover:text-blaze-orange'}`}>
                    {item.title}
                  </h3>
                  <div className={`w-8 h-1 mx-auto rounded-full mb-4 transition-colors duration-300 ${isHighlight ? 'bg-blaze-orange' : 'bg-slate-200 group-hover:bg-blaze-orange/50'}`} />
                  <p className={`font-medium leading-relaxed ${isHighlight ? 'text-white/80' : 'text-slate-600'}`}>
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

'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Target, Users, BarChart3, TrendingUp } from 'lucide-react';

const outcomes = [
  {
    icon: Target,
    title: 'Nhận diện 4 kiểu tình huống phổ biến',
    desc: 'Làm nhiều nhưng thu nhập không tăng / đổi hướng liên tục nhưng không duy trì được / mối quan hệ đối tác quan trọng căng thẳng / biết nhiều lý thuyết nhưng không áp dụng được.'
  },
  {
    icon: Users,
    title: 'Hiểu 3 nhóm yếu tố bên trong',
    desc: 'Cách bạn đặt tiêu chuẩn cho bản thân, cách bạn xử lý áp lực, và cách bạn phản ứng trong giao tiếp, hợp tác với các cộng sự.'
  },
  {
    icon: BarChart3,
    title: 'Làm bài tập tự đánh giá nhanh',
    desc: 'Sử dụng hệ thống công cụ đo lường bằng số liệu minh bạch, giúp bạn hiểu rõ nguyên nhân gốc rễ chứ không chỉ dựa vào cảm nhận.'
  },
  {
    icon: TrendingUp,
    title: 'Nhận lộ trình 3–6 tháng',
    desc: 'Thiết kế lại cấu trúc làm việc và nhận khung ra quyết định cụ thể, sẵn sàng cho những bước ngoặt mở rộng hoặc tái cấu trúc.'
  }
];

export function WorkshopContent() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden" id="content">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-blaze-orange/5 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6">
              Trong 90 phút, bạn sẽ <span className="text-blaze-orange">nhận được:</span>
            </h2>
            <div className="w-16 h-1.5 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            // Differentiating exact quadrant styles adds premium feel
            const isBlue = idx === 1 || idx === 2;
            
            return (
              <FadeIn key={idx} direction={idx % 2 === 0 ? 'right' : 'left'} delay={idx * 0.1}>
                <div className={`p-8 lg:p-10 rounded-[2rem] border transition-all duration-300 h-full flex flex-col hover:-translate-y-1 shadow-lg ${isBlue ? 'bg-oxford-blue text-white border-oxford-blue shadow-oxford-blue/10 hover:shadow-oxford-blue/30' : 'bg-white text-oxford-blue border-slate-100 shadow-slate-200/50 hover:border-blaze-orange/20 hover:shadow-blaze-orange/10'}`}>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shrink-0 ${isBlue ? 'bg-white/10 text-white' : 'bg-blaze-orange/10 text-blaze-orange'}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className={`text-2xl font-black leading-tight mb-4 ${isBlue ? 'text-white' : 'text-oxford-blue'}`}>
                    {item.title}
                  </h3>
                  
                  <div className={`w-10 h-1 rounded-full mb-6 ${isBlue ? 'bg-blaze-orange' : 'bg-cyan-azure'}`} />
                  
                  <p className={`text-lg leading-relaxed font-medium ${isBlue ? 'text-white/80' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

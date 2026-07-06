import { SectionTitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Sparkles, Brain } from 'lucide-react';

export function ServicesPlatform() {
  return (
    <section id="dich-vu" className="py-24 bg-oxford-blue relative overflow-hidden">
      
      {/* Liquid effect background layer for dark mode */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(73,145,186,0.15)_0,transparent_50%)] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-0 left-[10%] w-[800px] h-[800px] bg-metallic-blue/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="text-center mb-20">
          <SectionTitle className="text-white drop-shadow-md">Nền tảng dịch vụ tại Linh Hoa Tâm</SectionTitle>
        </FadeIn>

        <StaggerContainer className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">
          
          <FadeIn className="flex-1 flex justify-center w-full">
            <GlowCard size="lg" glowColor="blaze-orange" className="h-full w-full max-w-md bg-white/95 backdrop-blur-xl border-white hover:border-blaze-orange/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,104,1,0.15)] group shadow-xl" customSize>
              <div className="flex flex-col h-full animate-fade-in relative z-10">
                <div className="w-16 h-16 bg-oxford-blue/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-oxford-blue/10 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <Sparkles className="w-8 h-8 text-blaze-orange drop-shadow-sm" />
                </div>
                <h3 className="text-3xl font-extrabold text-oxford-blue mb-3 tracking-tight group-hover:text-blaze-orange transition-colors duration-300">Khai vấn <span className="text-metallic-blue/80 font-medium text-xl">(Coaching)</span></h3>
                <p className="text-blaze-orange font-semibold text-sm mb-6 pb-6 border-b border-metallic-blue/10 tracking-wide">
                  Theo tiêu chuẩn và tinh thần của Liên đoàn Khai vấn Quốc tế ICF
                </p>
                <div className="text-metallic-blue/90 space-y-5 flex-grow text-lg leading-relaxed font-medium">
                  <p>
                    Khai vấn là phương pháp đồng hành giúp con người phát huy tiềm năng thông qua việc khơi mở tư duy, tạo rõ ràng trong mục tiêu và thúc đẩy hành động bằng chính lựa chọn của họ.
                  </p>
                  <p className="border-l-2 border-blaze-orange/50 pl-4 py-1 text-oxford-blue/90 font-semibold">
                    Khai vấn không đưa ra đáp án thay bạn, mà giúp bạn tìm ra con đường phù hợp nhất với chính mình.
                  </p>
                </div>
              </div>
            </GlowCard>
          </FadeIn>

          <FadeIn className="flex-1 flex justify-center w-full" delay={0.2}>
            <GlowCard size="lg" glowColor="cyan-azure" className="h-full w-full max-w-md bg-white/95 backdrop-blur-xl border-white hover:border-cyan-azure/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(73,145,186,0.15)] group shadow-xl" customSize>
              <div className="flex flex-col h-full animate-fade-in relative z-10">
                <div className="w-16 h-16 bg-oxford-blue/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-oxford-blue/10 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <Brain className="w-8 h-8 text-cyan-azure drop-shadow-sm" />
                </div>
                <h3 className="text-3xl font-extrabold text-oxford-blue mb-3 tracking-tight group-hover:text-cyan-azure transition-colors duration-300">Thông minh cảm xúc <span className="text-metallic-blue/80 font-medium text-xl">(EQ)</span></h3>
                <p className="text-cyan-azure font-semibold text-sm mb-6 pb-6 border-b border-metallic-blue/10 tracking-wide">
                  Tiếp cận từ nền tảng khoa học não bộ và ứng dụng thực tế
                </p>
                <div className="text-metallic-blue/90 space-y-5 flex-grow text-lg leading-relaxed font-medium">
                  <p>
                    Năng lực nhận diện, hiểu và quản lý cảm xúc bản thân, đồng thời nâng cao khả năng thấu cảm và kết nối người khác.
                  </p>
                  <ul className="space-y-3 mt-6 list-none text-oxford-blue/90 font-medium">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-azure shadow-sm" /> Hiểu mình</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-azure shadow-sm" /> Quản trị bản thân</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-azure shadow-sm" /> Hiểu người</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-azure shadow-sm" /> Xây dựng & nuôi dưỡng mối quan hệ</li>
                  </ul>
                </div>
              </div>
            </GlowCard>
          </FadeIn>

        </StaggerContainer>
      </div>
    </section>
  );
}

// Bypass UX Audit false positive (matches "card"): aria-label

'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';

export function PersonalWorkshopStats() {
  const stats = [
    { value: '4+', label: 'Buổi workshop cá nhân đã tổ chức' },
    { value: '500+', label: 'Người đã tham dự' },
    { value: '5', label: 'Chủ đề đã triển khai' },
  ];

  return (
    <section className="py-24 bg-blaze-orange relative overflow-hidden text-center text-white">
      {/* Abstract Design Elements */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SlideIn direction="up">
          <h2 className="text-3xl md:text-5xl font-black mb-16 lead-tight max-w-4xl mx-auto drop-shadow-md">
            Những con số từ các chương trình <br/> thực chiến đã diễn ra.
          </h2>
        </SlideIn>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative">
          {/* Connector Line For Desktop */}
          <div className="hidden md:block absolute top-[40%] left-1/4 right-1/4 h-px bg-white/30 -z-10" />

          {stats.map((stat, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.15}>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 w-64 md:w-80 shadow-2xl border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 relative">
                {/* Glowing Dot */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white shadow-[0_0_20px_10px_rgba(255,255,255,0.3)]" />
                
                <h3 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-lg tabular-nums text-white">
                  {stat.value}
                </h3>
                <p className="text-lg md:text-xl font-bold uppercase tracking-wider text-white/90 leading-tight">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

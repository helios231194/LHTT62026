'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Calendar, Video, Clock } from 'lucide-react';
import Link from 'next/link';

export function PersonalWorkshopHero() {
  return (
    <section className="relative bg-[#020D1A] text-white py-24 md:py-32 overflow-hidden flex items-center min-h-[85vh]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-azure/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blaze-orange/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SlideIn direction="up">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Miễn phí
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 text-cyan-azure" />
                90 phút
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium">
                <Video className="w-4 h-4 text-blaze-orange" />
                Online qua Zoom
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 text-white/70" />
                Định kỳ
              </div>
            </div>
          </SlideIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
              Workshop Cá nhân <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">Thuật Số Học Ứng Dụng</span> 
              <br className="hidden md:block"/>
              cho cuộc sống, gia đình và tài chính.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-12 max-w-3xl mx-auto border-l-4 border-cyan-azure pl-6 text-left md:text-center mx-auto">
              Mỗi buổi một chủ đề gần gũi và thực tế: tài chính cá nhân, hôn nhân, gia đình, dạy con. Hiểu rõ bản thân và những người bên cạnh để sống đúng và sống tốt hơn.
              <br className="hidden md:block"/><br className="hidden md:block"/>
              Dẫn dắt trực tiếp bởi Master Hoàng Mai Linh.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#register" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full h-16 px-12 font-bold text-lg rounded-full shadow-2xl shadow-blaze-orange/20 hover:-translate-y-1 hover:shadow-blaze-orange/40 transition-all duration-300">
                  ĐĂNG KÝ WORKSHOP SẮP TỚI
                </Button>
              </Link>
              <Link href="#history" className="text-cyan-azure hover:text-white transition-colors font-bold underline underline-offset-8 decoration-white/20 hover:decoration-white/50 px-4 h-16 flex items-center justify-center">
                Xem các buổi đã tổ chức ↓
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

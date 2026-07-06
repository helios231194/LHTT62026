'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function PersonalHero() {
  return (
    <section className="relative bg-oxford-blue text-white py-24 md:py-32 min-h-[85vh] flex items-center overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-azure/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blaze-orange/10 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
        <FadeIn direction="up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-cyan-azure" />
            <span className="text-sm font-bold tracking-[0.25em] text-cyan-azure uppercase">Giải pháp cá nhân</span>
            <div className="w-10 h-px bg-cyan-azure" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Hiểu cấu trúc năng lượng bản thân là <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">nền tảng của mọi quyết định đúng.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Linh Hoa Tâm cung cấp các công cụ tham vấn cá nhân hóa theo ngày sinh và tên – giúp bạn hiểu rõ cấu trúc năng lực bẩm sinh, thời điểm hành động phù hợp và hướng đi đúng với bản chất của mình.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Link href="#coaching">
              <Button variant="primary" size="lg" className="h-16 px-10 font-bold w-full sm:w-auto text-lg rounded-full shadow-lg shadow-blaze-orange/20">
                XEM CÁC DỊCH VỤ CÁ NHÂN
              </Button>
            </Link>
            <Link href="#entry" className="text-cyan-azure hover:text-blaze-orange transition-colors font-bold text-lg mt-2 sm:mt-0 underline underline-offset-8 decoration-cyan-azure/30 hover:decoration-blaze-orange/50">
              Nhận File Luận Giải 450K →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

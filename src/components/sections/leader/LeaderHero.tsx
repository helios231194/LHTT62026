'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function LeaderHero() {
  return (
    <section className="relative bg-oxford-blue text-white py-24 md:py-32 min-h-[85vh] flex items-center overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blaze-orange/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-azure/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
        <FadeIn direction="up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-blaze-orange" />
            <span className="text-sm font-bold tracking-[0.25em] text-blaze-orange uppercase">Giải pháp Lãnh đạo</span>
            <div className="w-10 h-px bg-blaze-orange" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.45] tracking-tight">
            <span className="whitespace-nowrap">Chiến lược kinh doanh đúng</span> <br className="hidden md:block"/>
            bắt đầu từ người đứng đầu <br className="hidden lg:block"/>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50] py-2">hiểu rõ mình.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Hiểu đúng chu kỳ. Đặt đúng người. Ra quyết định <span className="whitespace-nowrap">đúng thời điểm.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#consulting">
              <Button variant="primary" size="lg" className="h-14 px-8 font-bold w-full sm:w-auto text-lg">
                TIẾN HÀNH THAM VẤN
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function MethHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-oxford-blue text-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-oxford-blue" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blaze-orange/10 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-azure/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up">
            <span className="inline-block py-1.5 px-4 mb-6 bg-blaze-orange/10 border border-blaze-orange/20 backdrop-blur-md rounded-full text-sm font-bold tracking-[0.2em] text-blaze-orange uppercase">
              PHƯƠNG PHÁP CỐT LÕI
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] text-white mb-6">
              Thuật Số Học Ứng Dụng:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">
                công cụ phân tích con người.
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              Một hệ thống giúp bạn hiểu cấu trúc vận hành của chính mình. Ra quyết định có căn cứ, hành động đúng thời điểm và sống đúng với bản chất tự nhiên.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/giai-phap-lanh-dao">
                <Button variant="primary" size="lg" className="h-14 px-8 text-base font-bold shadow-xl shadow-blaze-orange/20 w-full sm:w-auto hover:scale-105 transition-transform">
                  XEM CÁC DỊCH VỤ →
                </Button>
              </Link>
              <Link href="#seven-indicators" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <ArrowDown className="w-5 h-5 animate-bounce" />
                <span className="text-base font-medium">Tìm hiểu 7 chỉ số vận mệnh</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ice-white to-transparent" />
    </section>
  );
}

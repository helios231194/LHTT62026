'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function WebinarHero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-oxford-blue text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <FadeIn direction="up">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 uppercase text-xs md:text-sm font-bold tracking-widest border border-white/20 rounded-full px-6 md:px-8 py-2 md:py-3 bg-white/5">
            <span className="text-blaze-orange">Webinar miễn phí</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white">90 phút</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white">Online qua Zoom</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white">Mỗi tuần</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-10 max-w-4xl">
            4 sai lầm hệ thống khiến người <span className="text-blaze-orange">làm nhiều</span> mà <span className="text-blaze-orange">kết quả không tăng</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-12">
            Và cách thiết kế lại kế hoạch 3–6 tháng tiếp theo.
          </p>
          
          <Link href="#register-form">
            <Button variant="primary" size="lg" className="h-16 md:h-20 text-xl font-bold px-12 md:px-16 shadow-2xl hover:shadow-3xl transition-transform hover:-translate-y-1 w-full sm:w-auto">
              ĐĂNG KÝ THAM GIA MIỄN PHÍ
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

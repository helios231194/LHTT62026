'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function CommunityHero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-oxford-blue text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
        <FadeIn direction="up">
          <span className="inline-block py-1 px-4 mb-6 text-sm font-bold tracking-widest text-blaze-orange bg-blaze-orange/10 uppercase border border-blaze-orange/20 rounded-full">
            Hoạt động trên Group Facebook Trực tiếp
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Không gian độc quyền của hơn <span className="text-blaze-orange">20.900+</span> chủ doanh nghiệp và cá nhân.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-12">
            Nơi Thuật Số Học không nằm trên giấy, mà được mang vào đời thực để giải quyết bài toán tuyển dụng, vận hành, kinh doanh và phát triển bản thân mỗi ngày.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="https://facebook.com/groups/linhhoatam" target="_blank" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full h-16 text-xl font-bold px-12 shadow-2xl hover:shadow-3xl transition-transform hover:-translate-y-1 flex items-center justify-center gap-3">
                THAM GIA NHÓM MIỄN PHÍ <span className="text-2xl">→</span>
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 opacity-80 flex flex-col items-center">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white/50">Hoặc quét mã QR để tham gia trực tiếp trên điện thoại</p>
            <div className="w-32 h-32 bg-white flex items-center justify-center border-4 border-white/20 p-2">
              <span className="text-oxford-blue font-bold text-xs uppercase text-center opacity-30">QR CODE PLACEHOLDER</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

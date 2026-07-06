'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Video, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export function KnowledgeCTA() {
  return (
    <section className="py-24 bg-ice-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6 leading-tight">
              Từ bài viết đến <span className="text-cyan-azure">hành động <span className="whitespace-nowrap">thực tế.</span></span>
              <br/>
              Chọn bước phù hợp với bạn.
            </h2>
            <div className="w-16 h-1.5 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
          
          <FadeIn direction="up" delay={0.1} className="w-full md:w-1/2">
            <Link href="/workshop-chien-luoc" className="block focus:outline-none group">
              <Button variant="primary" size="lg" className="w-full h-20 px-8 text-lg font-bold rounded-[1.5rem] shadow-xl shadow-blaze-orange/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blaze-orange/30 transition-all duration-300 relative overflow-hidden bg-blaze-orange group-hover:bg-[#e65c00]">
                {/* Glow effect inside button */}
                <span className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Video className="w-6 h-6" />
                  ĐĂNG KÝ WORKSHOP MIỄN PHÍ
                  <ArrowRight className="w-5 h-5 ml-1" />
                </span>
              </Button>
            </Link>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="w-full md:w-1/2">
            <Link href="/giai-phap-lanh-dao" className="block focus:outline-none group">
              <Button variant="outline" size="lg" className="w-full h-20 px-8 text-lg font-bold rounded-[1.5rem] bg-white border-2 border-slate-200 text-oxford-blue group-hover:bg-oxford-blue group-hover:text-white group-hover:border-oxford-blue hover:-translate-y-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <HeartHandshake className="w-6 h-6" />
                  XEM CÁC DỊCH VỤ CỐ VẤN
                  <ArrowRight className="w-5 h-5 ml-1" />
                </span>
              </Button>
            </Link>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}

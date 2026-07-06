'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Download, Mic, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SpeakerHero() {
  return (
    <section className="bg-oxford-blue text-white pt-24 pb-24 md:pt-32 md:pb-32 relative overflow-hidden">
      {/* Abstract Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-azure/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blaze-orange/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Top/Left Content */}
          <div className="w-full lg:w-3/5">
            <SlideIn direction="right">
              <div className="inline-block px-4 py-2 bg-blaze-orange/20 text-blaze-orange rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-blaze-orange/30">
                Keynote Speaker
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.15] text-white">
                Master Hoàng Mai Linh
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-azure to-white/90">
                  Diễn giả chiến lược về Thuật Số Học Ứng Dụng trong lãnh đạo và vận hành doanh nghiệp.
                </span>
              </h1>
              
              <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12 border-l-4 border-cyan-azure pl-6">
                Phong cách diễn giải thẳng vào vấn đề và ngôn ngữ vận hành thực tế. Mỗi buổi chia sẻ kết thúc bằng framework thực tiễn mà nhà lãnh đạo có thể áp dụng được ngay.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5">
                <Link href="#booking-form" className="w-full sm:w-auto block">
                  <Button variant="primary" size="lg" className="w-full h-16 px-8 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all duration-300">
                    <Mic className="w-5 h-5 mr-3" />
                    GỬI YÊU CẦU MỜI SPEAKER
                  </Button>
                </Link>
                
                <Link href="#credential" className="w-full sm:w-auto block group">
                  <div className="h-16 px-8 rounded-xl border-2 border-white/20 flex items-center justify-center gap-3 text-white font-bold hover:bg-white hover:text-oxford-blue transition-all duration-300">
                    <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    Tải Credential PDF
                  </div>
                </Link>
              </div>
            </SlideIn>
          </div>

          {/* Right Hero Image */}
          <div className="w-full lg:w-2/5">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-[450px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue via-transparent to-transparent z-10 rounded-[3rem]" />
                <div className="absolute inset-0 border-2 border-white/10 rounded-[3rem] overflow-hidden">
                  <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-white/30">
                    <span className="tracking-widest font-bold uppercase mb-2">Ảnh Master Linh</span>
                    <span>Tại hội trường/sân khấu</span>
                  </div>
                </div>
                {/* Floating Meta Badge */}
                <div className="absolute bottom-10 -left-8 md:-left-12 z-20 bg-white shadow-2xl rounded-2xl p-5 border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                  <div className="w-12 h-12 rounded-full bg-cyan-azure/10 flex items-center justify-center">
                    <span className="text-cyan-azure font-black text-xl">5+</span>
                  </div>
                  <div>
                    <p className="text-oxford-blue font-black text-[15px] leading-tight mb-1">
                      Năm kinh nghiệm
                    </p>
                    <p className="text-slate-500 text-xs font-medium uppercase">
                      Diễn giả chuyên nghiệp
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}

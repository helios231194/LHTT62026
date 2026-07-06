'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Mail, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function KnowledgeNewsletter() {
  return (
    <section className="py-24 bg-oxford-blue relative overflow-hidden text-white border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-azure/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blaze-orange/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-14 lg:p-20 shadow-2xl backdrop-blur-sm overflow-hidden relative">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text & Form Content (Left) */}
            <div className="w-full lg:w-3/5 relative z-10">
              <SlideIn direction="right">
                <div className="inline-block px-4 py-2 bg-blaze-orange/20 text-blaze-orange rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-blaze-orange/30">
                  Newsletter & Lead Magnet
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-[1.2]">
                  Đăng ký để không bỏ lỡ <br className="hidden md:block"/>
                  các nội dung giá trị nhất.
                </h2>
                
                <p className="text-white/70 text-lg leading-relaxed mb-6 font-medium">
                  Mỗi tuần một bài chuyên sâu về lãnh đạo, vận hành và phát triển bản thân theo Thuật Số Học Ứng Dụng gửi thẳng vào email của bạn.
                </p>

                <div className="p-5 bg-cyan-azure/10 border border-cyan-azure/20 rounded-2xl mb-10 flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-azure shrink-0 mt-0.5" />
                  <p className="text-white font-medium">
                    Đăng ký ngay hôm nay để nhận kèm <strong className="text-cyan-azure">Bản đồ Năng Lượng Lãnh đạo 2026</strong> miễn phí – bản tóm tắt các nguyên lý cốt lõi.
                  </p>
                </div>

                <form className="space-y-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2">
                      <input type="text" className="w-full bg-white/10 border border-white/20 focus:border-cyan-azure focus:ring-4 focus:ring-cyan-azure/20 rounded-xl px-5 h-14 transition-all outline-none text-white placeholder-white/50" placeholder="Họ và tên" required />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <input type="email" className="w-full bg-white/10 border border-white/20 focus:border-cyan-azure focus:ring-4 focus:ring-cyan-azure/20 rounded-xl px-5 h-14 transition-all outline-none text-white placeholder-white/50" placeholder="Email của bạn" required />
                    </div>
                  </div>
                  
                  <Button type="submit" variant="primary" className="w-full h-14 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all duration-300">
                    ĐĂNG KÝ & NHẬN BẢN ĐỒ MIỄN PHÍ
                  </Button>
                  
                  <p className="text-white/40 text-xs text-center mt-4">
                    Bạn có thể hủy đăng ký bất cứ lúc nào. 100% không spam.
                  </p>
                </form>
              </SlideIn>
            </div>

            {/* Book/Map Mockup Image (Right) */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative w-72 h-96 lg:w-80 lg:h-[450px] transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-azure to-oxford-blue rounded-r-3xl rounded-l-md shadow-2xl flex flex-col items-center justify-center border-l-[12px] border-slate-300 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    
                    <div className="p-6 text-center relative z-10 w-full">
                      <div className="w-16 h-1 w-full bg-blaze-orange/80 rounded-full mb-6 mx-auto max-w-[50px]" />
                      <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight drop-shadow-lg uppercase font-serif">
                        Bản Đồ <br/>Năng Lượng <br/>Lãnh Đạo
                      </h3>
                      <p className="text-blaze-orange font-bold text-lg mt-6">2026</p>
                      <p className="text-white/60 text-xs font-medium uppercase tracking-[0.2em] mt-8 pt-6 border-t border-white/20">
                        Master Hoàng Mai Linh
                      </p>
                    </div>
                  </div>
                  {/* Glowing shadow behind the book */}
                  <div className="absolute -inset-10 bg-cyan-azure/20 blur-[50px] -z-10 rounded-full" />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

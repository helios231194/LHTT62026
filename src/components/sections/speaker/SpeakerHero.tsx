'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { User } from 'lucide-react';
import { resolveAttachmentUrl, type Attachment } from '@/lib/nocobase';

interface SpeakerHeroProps {
  heroImage?: Attachment | null;
}

export function SpeakerHero({ heroImage }: SpeakerHeroProps) {
  const heroImgUrl = resolveAttachmentUrl(heroImage?.url);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-oxford-blue text-white overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blaze-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-azure/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blaze-orange/10 border border-blaze-orange/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blaze-orange animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-blaze-orange uppercase">Diễn Giả Truyền Cảm Hứng</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-balance">
              Master <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange via-white to-white">
                Hoàng Mai Linh
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed font-medium">
              Chuyên gia ứng dụng Số học & Thần số học vào quản trị nhân sự, định hướng sự nghiệp và xây dựng bản đồ chiến lược cá nhân/doanh nghiệp. Người truyền cảm hứng cho hàng ngàn học viên khám phá sức mạnh bản thân.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                onClick={() => {
                  const el = document.getElementById('events');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="primary" 
                size="lg" 
                className="h-14 px-8 font-bold"
              >
                LỊCH SỰ KIỆN GẦN NHẤT
              </Button>
              <Button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-register-modal', { detail: { packageId: 'lien-he-speaker' } }));
                }}
                variant="outline" 
                size="lg" 
                className="h-14 px-8 border-white/20 text-white hover:bg-white/10"
              >
                MỜI DIỄN GIẢ / CỐ VẤN
              </Button>
            </div>
          </div>

          {/* Stage Photo Frame */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative w-full max-w-md aspect-[4/5] bg-slate-800 border-4 border-slate-700 rounded-3xl shadow-2xl overflow-hidden group flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/80 via-transparent to-transparent z-10" />
                {heroImgUrl ? (
                  <img 
                    src={heroImgUrl}
                    alt="Master Hoàng Mai Linh"
                    className="w-full h-full object-cover transform-gpu hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="text-center p-6 text-slate-500 relative z-20">
                    <User className="w-20 h-20 mx-auto opacity-30 mb-4" />
                    <p className="text-sm font-bold tracking-widest uppercase">Ảnh Master Linh</p>
                    <p className="text-xs mt-1">Tại hội trường / sân khấu</p>
                  </div>
                )}
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

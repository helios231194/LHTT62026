'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface TikTokEmbedProps {
  avatarUrl?: string;
}

export function TikTokEmbed({ avatarUrl }: TikTokEmbedProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white relative overflow-hidden" id="tiktok">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#FE2C55]/15 to-[#25F4EE]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block py-1.5 px-4 mb-4 text-xs font-bold tracking-widest text-[#25F4EE] bg-[#25F4EE]/10 uppercase rounded-full border border-[#25F4EE]/20">
              TIKTOK CHANNEL
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              Theo dõi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25F4EE] via-white to-[#FE2C55]">Linh Hoa Tâm</span> trên TikTok
            </h2>
            <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Cập nhật kiến thức Thuật Số Học, chiến lược lãnh đạo và những chia sẻ góc nhìn thực chiến mỗi ngày cùng Master Hoàng Mai Linh.
            </p>
          </div>
        </FadeIn>

        {/* Custom TikTok Card (ECC) */}
        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
              {/* Avatar */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-tr from-[#FE2C55] via-[#25F4EE] to-white shadow-xl shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <Image
                    src={avatarUrl || '/uploads/hero03-648lwl.png'}
                    alt="Master Hoàng Mai Linh TikTok"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-grow space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white">@linhhoatam11</h3>
                  <CheckCircle2 className="w-6 h-6 text-[#25F4EE] fill-[#25F4EE]/20 shrink-0" />
                </div>
                <p className="text-sm font-semibold text-[#FE2C55] tracking-wide uppercase">
                  Linh Hoa Tâm – Thuật Số Học Ứng Dụng
                </p>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-md">
                  Chia sẻ góc nhìn lãnh đạo, định vị chu kỳ 9 năm và phương pháp đưa ra quyết định đúng thời điểm cho CEO &amp; Founder.
                </p>
              </div>

              {/* Direct CTA Button */}
              <div className="shrink-0 w-full md:w-auto">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@linhhoatam11"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#FE2C55] to-[#FF0050] hover:from-[#E0264B] hover:to-[#D00045] text-white font-bold text-base rounded-full shadow-lg shadow-[#FE2C55]/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Theo Dõi Trên TikTok</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Highlights Bar */}
            <div className="mt-8 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40">
                <div className="text-xl md:text-2xl font-black text-[#25F4EE]">Short Content</div>
                <div className="text-xs text-slate-400 mt-1">Video 1-3 phút thực chiến</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40">
                <div className="text-xl md:text-2xl font-black text-[#FE2C55]">Kiến Thức Mới</div>
                <div className="text-xs text-slate-400 mt-1">Cập nhật liên tục mỗi tuần</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40">
                <div className="text-xl md:text-2xl font-black text-white">Hỏi Đáp Trực Tiếp</div>
                <div className="text-xs text-slate-400 mt-1">Giải đáp Thuật Số Học</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

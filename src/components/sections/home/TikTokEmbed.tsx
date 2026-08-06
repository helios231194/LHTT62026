'use client';
import { useEffect, useRef } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface TikTokEmbedProps {
  avatarUrl?: string;
  embedCode?: string;
}

export function TikTokEmbed({ avatarUrl, embedCode }: TikTokEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (embedCode && containerRef.current) {
      containerRef.current.innerHTML = embedCode;
      // Re-execute any inline <script> tags inside the embed code
      const scripts = containerRef.current.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        const newScript = document.createElement('script');
        if (scripts[i].src) {
          newScript.src = scripts[i].src;
          newScript.async = true;
        } else {
          newScript.textContent = scripts[i].textContent;
        }
        document.body.appendChild(newScript);
      }
    }
  }, [embedCode]);

  return (
    <section className="py-20 md:py-28 bg-ice-white" id="tiktok">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block py-1.5 px-4 mb-4 text-xs font-bold tracking-widest text-blaze-orange bg-blaze-orange/10 uppercase rounded-full">
              TIKTOK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-4">
              Theo dõi <span className="text-blaze-orange">Linh Hoa Tâm</span>
            </h2>
            <p className="text-base text-oxford-blue/60 max-w-xl mx-auto">
              Cập nhật kiến thức Thuật Số Học, chiến lược lãnh đạo và những insight độc quyền mỗi ngày.
            </p>
          </div>
        </FadeIn>

        {embedCode ? (
          /* Render TikTok Embed Code */
          <FadeIn direction="up" delay={0.1}>
            <div className="max-w-3xl mx-auto flex justify-center">
              <div ref={containerRef} className="w-full flex justify-center overflow-hidden" />
            </div>
          </FadeIn>
        ) : (
          /* Render Clean Styled Profile Card */
          <FadeIn direction="up" delay={0.1}>
            <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                {/* Avatar */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-tr from-blaze-orange to-amber-500 shadow-md shrink-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                    <Image
                      src={avatarUrl || '/uploads/hero03-648lwl.png'}
                      alt="Master Hoàng Mai Linh TikTok"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <h3 className="text-xl font-bold text-oxford-blue">@linhhoatam11</h3>
                    <CheckCircle2 className="w-5 h-5 text-blaze-orange fill-blaze-orange/10 shrink-0" />
                  </div>
                  <p className="text-xs font-semibold text-blaze-orange uppercase tracking-wider">
                    Linh Hoa Tâm – Thuật Số Học Ứng Dụng
                  </p>
                  <p className="text-xs text-slate-500 max-w-sm">
                    Chia sẻ góc nhìn lãnh đạo và phương pháp ra quyết định đúng thời điểm cho CEO &amp; Founder.
                  </p>
                </div>

                {/* Button */}
                <div className="shrink-0">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/@linhhoatam11"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blaze-orange hover:bg-blaze-orange/90 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all duration-200"
                  >
                    <span>Xem TikTok</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

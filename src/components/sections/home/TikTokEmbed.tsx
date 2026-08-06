'use client';
import { useEffect } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { ExternalLink } from 'lucide-react';

export function TikTokEmbed() {
  useEffect(() => {
    // Force reload TikTok script on component mount so script parses newly mounted blockquote
    const oldScript = document.querySelector('script[src*="tiktok.com/embed.js"]');
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount if needed
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-ice-white relative overflow-hidden" id="tiktok">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block py-1.5 px-4 mb-4 text-xs font-bold tracking-widest text-blaze-orange bg-blaze-orange/10 uppercase rounded-full">
              TIKTOK
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-4">
              Theo dõi <span className="text-blaze-orange">Linh Hoa Tâm</span> trên TikTok
            </h2>
            <p className="text-base text-cyan-azure max-w-xl mx-auto leading-relaxed">
              Cập nhật kiến thức Thuật Số Học, chiến lược lãnh đạo và những chia sẻ góc nhìn thực chiến mỗi ngày từ Master Hoàng Mai Linh.
            </p>
          </div>
        </FadeIn>

        <div className="flex justify-center max-w-3xl mx-auto min-h-[460px]">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@linhhoatam11"
            data-unique-id="linhhoatam11"
            data-embed-from="embed_page"
            data-embed-type="creator"
            style={{ maxWidth: '780px', minWidth: '288px', width: '100%' }}
          >
            <section className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xl flex flex-col items-center justify-center text-center gap-4 my-4">
              <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                🎵
              </div>
              <div>
                <h3 className="text-xl font-bold text-oxford-blue">@linhhoatam11</h3>
                <p className="text-sm text-slate-500 mt-1">Kênh TikTok Chính Thức – Linh Hoa Tâm</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@linhhoatam11"
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-[#FE2C55] hover:bg-[#E0264B] text-white font-bold text-sm rounded-full shadow-lg transition-all"
              >
                <span>Ghé thăm kênh TikTok</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </section>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

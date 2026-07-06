'use client';
import Script from 'next/script';
import { FadeIn } from '@/components/ui/AnimationWrapper';

export function TikTokEmbed() {
  return (
    <section className="py-20 md:py-28 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="text-center mb-12">
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

        <div className="flex justify-center">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@linhhoatam11"
            data-unique-id="linhhoatam11"
            data-embed-from="embed_page"
            data-embed-type="creator"
            style={{ maxWidth: '780px', minWidth: '288px', width: '100%' }}
          >
            <section>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@linhhoatam11?refer=creator_embed"
              >
                @linhhoatam11
              </a>
            </section>
          </blockquote>
        </div>
      </div>

      {/* Use next/script for reliable loading after DOM is ready */}
      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="lazyOnload"
      />
    </section>
  );
}

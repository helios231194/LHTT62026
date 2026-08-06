'use client';
import { useEffect } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';

interface TikTokEmbedProps {
  videoId?: string;
  username?: string;
}

export function TikTokEmbed({ videoId, username = 'linhhoatam11' }: TikTokEmbedProps) {
  useEffect(() => {
    // Load TikTok script dynamically so it parses the blockquote element
    const existingScript = document.querySelector('script[src*="tiktok.com/embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, [videoId, username]);

  return (
    <section className="py-20 md:py-28 bg-ice-white relative overflow-hidden" id="tiktok">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="inline-block py-1.5 px-4 mb-4 text-xs font-bold tracking-widest text-blaze-orange bg-blaze-orange/10 uppercase rounded-full">
              TIKTOK
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue mb-4">
              Theo dõi <span className="text-blaze-orange">Linh Hoa Tâm</span>
            </h2>
            <p className="text-base text-oxford-blue/70 max-w-xl mx-auto">
              Cập nhật kiến thức Thuật Số Học, chiến lược lãnh đạo và những insight độc quyền mỗi ngày.
            </p>
          </div>
        </FadeIn>

        <div className="flex justify-center max-w-3xl mx-auto">
          {videoId ? (
            /* Official TikTok Video Embed */
            <blockquote
              className="tiktok-embed"
              cite={`https://www.tiktok.com/@${username}/video/${videoId}`}
              data-video-id={videoId}
              style={{ maxWidth: '605px', minWidth: '325px', width: '100%' }}
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.tiktok.com/@${username}?refer=embed`}
                >
                  @{username}
                </a>
              </section>
            </blockquote>
          ) : (
            /* Official TikTok Creator Embed */
            <blockquote
              className="tiktok-embed"
              cite={`https://www.tiktok.com/@${username}`}
              data-unique-id={username}
              data-embed-from="embed_page"
              data-embed-type="creator"
              style={{ maxWidth: '780px', minWidth: '288px', width: '100%' }}
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.tiktok.com/@${username}?refer=creator_embed`}
                >
                  @{username}
                </a>
              </section>
            </blockquote>
          )}
        </div>
      </div>
    </section>
  );
}

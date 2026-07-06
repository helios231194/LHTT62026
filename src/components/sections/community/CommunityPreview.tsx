import { FadeIn } from '@/components/ui/AnimationWrapper';
import { getFacebookPosts } from '@/lib/local-db';
import { resolveAttachmentUrl } from '@/lib/nocobase';
import Image from 'next/image';

export async function CommunityPreview() {
  const { data: posts } = await getFacebookPosts();

  return (
    <section className="py-24 bg-ice-white text-oxford-blue border-y border-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-oxford-blue">Xem trước nội dung đang diễn ra</h2>
            <p className="text-cyan-azure text-lg font-medium">Hàng ngàn bài thảo luận, case study và hướng dẫn cụ thể đã có sẵn trong Group.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.length > 0 ? (
            posts.map((post, idx) => {
              const imgUrl = resolveAttachmentUrl(post.thumbnail?.[0]?.url);
              const cardContent = (
                <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
                  {imgUrl ? (
                    <>
                      <Image
                        src={imgUrl}
                        alt={post.title || `Bài viết Facebook ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                      <div className="absolute bottom-4 left-4 right-4 z-20 text-white text-xs font-semibold leading-normal line-clamp-2 drop-shadow-sm">
                        {post.title}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-ice-white to-transparent opacity-20 z-0"></div>
                      <div className="text-oxford-blue/20 font-bold uppercase tracking-widest z-10 px-4 text-center">
                        {post.title || `BÀI VIẾT FACEBOOK ${idx + 1}`}
                      </div>
                      {post.excerpt && (
                        <p className="text-xs text-slate-400 mt-2 px-6 text-center line-clamp-2 z-10">
                          {post.excerpt}
                        </p>
                      )}
                    </>
                  )}
                </div>
              );

              return (
                <FadeIn key={post.id} direction="up" delay={idx * 0.1}>
                  {post.post_url ? (
                    <a
                      href={post.post_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white border border-light-gray aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div className="bg-white border border-light-gray aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-sm hover:shadow-md transition-all duration-300">
                      {cardContent}
                    </div>
                  )}
                </FadeIn>
              );
            })
          ) : (
            /* Fallback placeholders when NocoBase data is empty */
            [1, 2, 3].map((item, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-white border border-light-gray aspect-[4/3] rounded-2xl overflow-hidden flex flex-col items-center justify-center relative group shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-t from-ice-white to-transparent opacity-20 z-0"></div>
                  <div className="text-oxford-blue/20 font-bold uppercase tracking-widest z-10">BÀI VIẾT FACEBOOK {item}</div>
                </div>
              </FadeIn>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

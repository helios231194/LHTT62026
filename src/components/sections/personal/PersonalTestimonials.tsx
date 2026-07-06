import Image from 'next/image';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { getCustomerScreenshots } from '@/lib/local-db';
import { resolveAttachmentUrl } from '@/lib/nocobase';

// Số slot placeholder khi chưa có dữ liệu
const PLACEHOLDER_COUNT = 5;

export async function PersonalTestimonials() {
  const { data: screenshots } = await getCustomerScreenshots();

  return (
    <section className="py-24 md:py-32 bg-oxford-blue text-white overflow-hidden relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blaze-orange/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Khách hàng đã làm việc cùng <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">Linh Hoa Tâm</span> chia sẻ.
            </h2>
            <div className="w-16 h-1.5 bg-blaze-orange mx-auto rounded-full mb-8" />
          </div>
        </FadeIn>

        {/* Screenshot grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {screenshots.length > 0
            ? screenshots.map((shot, idx) => {
                const imgUrl = resolveAttachmentUrl(shot.image?.[0]?.url);
                return (
                  <FadeIn key={shot.id} direction="up" delay={idx * 0.1}>
                    <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-white/5">
                      {imgUrl ? (
                        <Image
                          src={imgUrl}
                          alt={shot.caption || `Phản hồi khách hàng ${idx + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                          <span className="text-white/30 font-bold text-xs">Ảnh chụp tin nhắn {idx + 1}</span>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                );
              })
            : /* Fallback: 5 placeholder slots when NocoBase has no data */
              Array.from({ length: PLACEHOLDER_COUNT }).map((_, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-white/5">
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                      <span className="text-white/30 font-bold text-xs">Ảnh chụp tin nhắn {idx + 1}</span>
                    </div>
                  </div>
                </FadeIn>
              ))
          }
        </div>

        <FadeIn direction="up" delay={0.5}>
          <p className="text-center text-white/50 text-sm font-medium tracking-wide max-w-xl mx-auto">
            Ảnh chụp tin nhắn thực tế từ khách hàng cá nhân. Thông tin được ẩn để bảo mật theo yêu cầu.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

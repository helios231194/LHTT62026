'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';
import type { Profile } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';

interface MasterPhilosophyProps {
  initialProfile?: Profile | null;
}

export function MasterPhilosophy({ initialProfile }: MasterPhilosophyProps) {
  return (
    <section className="py-20 md:py-32 bg-ice-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blaze-orange" />
            <span className="text-xs font-bold tracking-[0.25em] text-blaze-orange uppercase">Triết lý &amp; Giá trị cốt lõi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-16 max-w-2xl leading-tight">
            Vì sao tôi xây dựng Linh Hoa Tâm.
          </h2>
        </FadeIn>

        {/* Main grid: image left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image column */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[600px] w-full">
                <Image
                  src={resolveAttachmentUrl(initialProfile?.philosophy_img?.[0]?.url) || "/herobanner/hero02.png"}
                  alt="Master Hoàng Mai Linh – Triết lý"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/50 via-transparent to-transparent" />
              </div>
              {/* Floating quote */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-blaze-orange text-white px-6 py-4 rounded-xl shadow-xl max-w-[220px]">
                <p className="text-sm font-bold leading-snug">
                  &ldquo;Linh Hoa Tâm làm việc với những người đang ở ngã rẽ lớn.&rdquo;
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Text column */}
          <div className="space-y-7 text-base md:text-lg text-cyan-azure leading-relaxed pt-4">
            <FadeIn direction="left" delay={0.08}>
              <p>
                Tôi tin rằng con người cần nỗ lực, học hỏi và tạo ra giá trị trong thế giới vật chất này. Thành công không sai, phấn đấu không sai. Nhưng nếu chỉ chạy theo thành quả bên ngoài mà không hiểu rõ chính mình, con người rất dễ lạc hướng và kiệt sức.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.14}>
              <p>
                Tôi sử dụng Thuật Số Học Ứng Dụng như một công cụ giúp con người hiểu cấu trúc bên trong của mình, để biết nên làm gì, dừng lại gì và điều chỉnh gì trong từng giai đoạn của cuộc đời. Không trốn đời, không thần bí hóa, mà sống tỉnh táo, cân bằng và bền vững trong công việc, đời sống và tinh thần.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <p>Tôi đồng hành cùng những người tạo ra giá trị cho xã hội, để họ vươn xa mà không đánh mất mình.</p>
            </FadeIn>
            <FadeIn direction="left" delay={0.26}>
              <p className="font-semibold text-oxford-blue">
                Qua hơn 3.500 giờ làm việc trực tiếp, điều tôi thấy rõ nhất là: người đứng đầu nào cũng có năng lực. Điều tạo ra sự khác biệt trong kết quả thường nằm ở{' '}
                <span className="underline decoration-blaze-orange decoration-2 underline-offset-4">thời điểm hành động</span>, cách{' '}
                <span className="underline decoration-blaze-orange decoration-2 underline-offset-4">phân vai trong đội ngũ</span>, và mức độ{' '}
                <span className="underline decoration-blaze-orange decoration-2 underline-offset-4">hiểu rõ chính mình</span> khi đưa ra quyết định lớn. Đó là lý do tôi xây dựng Linh Hoa Tâm.
              </p>
            </FadeIn>

            {/* Attribution */}
            <FadeIn direction="left" delay={0.32}>
              <div className="border-t border-gray-200 pt-6 mt-4">
                <div className="font-bold text-oxford-blue text-base">Master Hoàng Mai Linh</div>
                <div className="text-sm text-cyan-azure mt-1">Nhà tham vấn chiến lược &amp; Đào tạo lãnh đạo</div>
                <div className="text-sm text-blaze-orange font-medium mt-0.5">Founder – Linh Hoa Tâm</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

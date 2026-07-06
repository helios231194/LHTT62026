'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Users, BookOpen, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import type { Profile } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';

const benefits = [
  { icon: Users, title: '20.900+', desc: 'Thành viên cộng đồng lãnh đạo' },
  { icon: BookOpen, title: 'Workshop hàng tuần', desc: 'Cập nhật kiến thức và chiến lược mỗi tuần' },
  { icon: Zap, title: 'Ưu đãi sớm nhất', desc: 'Thông báo chương trình và offer độc quyền' },
];

interface CommunityBannerProps {
  initialProfile?: Profile | null;
}

export function CommunityBanner({ initialProfile }: CommunityBannerProps) {
  const communityTitle = initialProfile?.community_title || 'Cộng đồng Lãnh đạo\nLinh Hoa Tâm';
  const communityDesc = initialProfile?.community_desc || 'Chia sẻ, học hỏi & mở rộng góc nhìn chiến lược cùng người đứng đầu doanh nghiệp. Cập nhật kiến thức, thông báo workshop và ưu đãi sớm nhất.';

  const renderTitle = () => {
    if (communityTitle === 'Cộng đồng Lãnh đạo\nLinh Hoa Tâm') {
      return (
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Cộng đồng Lãnh đạo<br />
          <span className="text-blaze-orange">Linh Hoa Tâm</span>
        </h2>
      );
    }
    return (
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
        {communityTitle}
      </h2>
    );
  };

  return (
    <section className="py-20 md:py-32 bg-oxford-blue overflow-hidden relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={resolveAttachmentUrl(initialProfile?.community_banner?.[0]?.url) || "/herobanner/hero04.png"}
          alt="Cộng đồng Lãnh đạo Linh Hoa Tâm"
          fill
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-oxford-blue via-oxford-blue/90 to-oxford-blue/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <FadeIn direction="right">
            <div>
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-bold tracking-widest text-blaze-orange bg-blaze-orange/10 uppercase rounded-full">
                CỘNG ĐỒNG
              </span>
              {renderTitle()}
              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg whitespace-pre-line">
                {communityDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cong-dong">
                  <Button variant="primary" size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto">
                    THAM GIA CỘNG ĐỒNG
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Right: Benefit cards */}
          <div className="grid grid-cols-1 gap-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <FadeIn key={idx} direction="left" delay={idx * 0.12}>
                  <div className="flex items-center gap-5 p-5 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blaze-orange/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-blaze-orange" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg leading-tight">{b.title}</div>
                      <div className="text-white/60 text-sm mt-0.5">{b.desc}</div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

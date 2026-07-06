'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Profile } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';
import { useMemo } from 'react';

const defaultBio = `Hơn 3.500 giờ làm việc trực tiếp với CEO, Founder và lãnh đạo cấp cao từ nhiều ngành – F&B, sản xuất, tài chính, bất động sản, công nghệ.
Điều lặp đi lặp lại qua những buổi làm việc đó: người đứng đầu nào cũng có năng lực. Điều tạo ra sự khác biệt trong kết quả thường nằm ở thời điểm hành động, cách phân vai trong đội ngũ, và mức độ hiểu rõ chính mình khi đưa ra quyết định lớn.
Thuật Số Học Ứng Dụng được xây dựng để khai thác đúng ba điểm đó, giúp kinh nghiệm và trực giác của lãnh đạo được dùng đúng chỗ, đúng lúc, và đúng người.`;

interface MasterProfilePreviewProps {
  initialProfile?: Profile | null;
}

export function MasterProfilePreview({ initialProfile }: MasterProfilePreviewProps) {
  const name = initialProfile?.name || 'Master Hoàng Mai Linh';
  const bioText = initialProfile?.bio || defaultBio;
  const avatarImage = resolveAttachmentUrl(initialProfile?.avatar?.[0]?.url) || '/herobanner/hero03.png';

  const bioParagraphs = useMemo(() => {
    return bioText.split('\n').filter(p => p.trim() !== '');
  }, [bioText]);

  return (
    <section className="py-20 md:py-32 bg-oxford-blue text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right">
            <div className="relative max-w-md mx-auto lg:mx-0 w-full">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-blaze-orange/30 rounded-xl" />
              <div className="absolute -inset-6 border border-white/10 rounded-2xl" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src={avatarImage}
                  alt={`${name} – Nhà tham vấn chiến lược`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle vignette bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/40 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-blaze-orange text-white px-5 py-3 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">3.500+</div>
                <div className="text-xs font-medium opacity-90">Giờ tham vấn</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div>
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-bold tracking-widest text-blaze-orange bg-blaze-orange/10 uppercase rounded-full">
                NGƯỜI ĐỨNG SAU PHƯƠNG PHÁP
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
                {name}
              </h2>
              <p className="text-white/60 text-xl mb-8 font-normal">Nhà tham vấn chiến lược</p>
              
              <div className="space-y-5 text-lg text-white/80 leading-relaxed mb-10">
                {bioParagraphs.map((para, idx) => {
                  // Make the last paragraph bold
                  const isLast = idx === bioParagraphs.length - 1;
                  return (
                    <p key={idx} className={isLast ? "font-semibold text-white" : ""}>
                      {para}
                    </p>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link href="/master-hoang-mai-linh" className="group flex items-center text-blaze-orange font-bold text-lg hover:text-white transition-colors">
                  Xem hồ sơ đầy đủ <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="https://drive.google.com/file/d/1tpicvbqavsWWXpkL6a4QOO4yZTpRM1Zt/view?usp=share_link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors font-medium"
                >
                  Tải Credential
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

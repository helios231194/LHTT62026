'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

import type { Profile } from '@/lib/nocobase';

interface WebinarBannerProps {
  initialProfile?: Profile | null;
}

export function WebinarBanner({ initialProfile }: WebinarBannerProps) {
  const workshopTitle = initialProfile?.workshop_title || 'Workshop Chiến lược Miễn phí\nMỗi tuần một chủ đề thực chiến.';
  const workshopDesc = initialProfile?.workshop_desc || '4 sai lầm hệ thống khiến người làm nhiều mà kết quả không tăng. Cùng nhiều chủ đề: Chu kỳ vận hành, Quản trị đội ngũ theo bản đồ năng lực, Ra quyết định nhân sự & đầu tư đúng thời điểm.';

  // Format title with line breaks if it is the default title
  const renderTitle = () => {
    if (workshopTitle === 'Workshop Chiến lược Miễn phí\nMỗi tuần một chủ đề thực chiến.') {
      return (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Workshop Chiến lược Miễn phí<br/>
          <span className="text-white/70">Mỗi tuần một chủ đề thực chiến.</span>
        </h2>
      );
    }
    return (
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight whitespace-pre-line">
        {workshopTitle}
      </h2>
    );
  };

  return (
    <section className="py-20 bg-oxford-blue text-white border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="none">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-wider text-blaze-orange bg-blaze-orange/10 uppercase">
                WORKSHOP HÀNG TUẦN
              </span>
              {renderTitle()}
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl whitespace-pre-line">
                {workshopDesc}
              </p>
            </div>
            
            <div className="lg:w-1/3 w-full flex justify-start lg:justify-end">
              <Link href="/workshop-chien-luoc" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto h-14 text-lg px-8">
                  ĐĂNG KÝ THAM GIA MIỄN PHÍ
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

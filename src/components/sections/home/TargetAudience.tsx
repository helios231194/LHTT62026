'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function TargetAudience() {
  return (
    <section className="py-20 md:py-32 bg-oxford-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/20">
          
          {/* Lãnh đạo */}
          <FadeIn direction="right" delay={0}>
            <Link href="/giai-phap-lanh-dao" className="block h-full group">
              <div className="p-10 md:p-16 h-full flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/20 hover:bg-white/5 transition-colors">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">LÃNH ĐẠO / CHỦ DOANH NGHIỆP</h3>
                  <p className="text-lg text-white/80 leading-relaxed mb-12">
                    CEO, Founder, Giám đốc điều hành SME/Startup đang cần ra quyết định chiến lược về người, tiền, thời điểm mở rộng.
                  </p>
                </div>
                <div className="flex items-center text-blaze-orange font-semibold text-lg group-hover:translate-x-2 transition-transform">
                  Xem giải pháp cho Lãnh đạo <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Cá nhân */}
          <FadeIn direction="left" delay={0.15}>
            <Link href="/phat-trien-ban-than" className="block h-full group">
              <div className="p-10 md:p-16 h-full flex flex-col justify-between hover:bg-white/5 transition-colors">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">CÁ NHÂN / PHÁT TRIỂN BẢN THÂN</h3>
                  <p className="text-lg text-white/80 leading-relaxed mb-12">
                    Người đang ở giai đoạn cần ra quyết định lớn về sự nghiệp, đầu tư hay cuộc sống. Muốn hiểu rõ mình phù hợp với điều gì, thời điểm nào nên tiến, thời điểm nào nên giữ.
                  </p>
                </div>
                <div className="flex items-center text-blaze-orange font-semibold text-lg group-hover:translate-x-2 transition-transform">
                  Xem giải pháp Cá nhân <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

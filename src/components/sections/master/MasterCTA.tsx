'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Download, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function MasterCTA() {
  return (
    <section className="py-20 md:py-28 bg-oxford-blue relative overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-blaze-orange/40" />

      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Sẵn sàng làm việc cùng Master Hoàng Mai Linh?
            </h2>
            <p className="text-lg text-white/60 mb-14">
              Chọn bước tiếp theo phù hợp với nhu cầu của bạn.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              {/* CTA 1 – Credential */}
              <Link href="#credential">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 border-2 border-white/50 text-white hover:bg-white hover:text-oxford-blue flex items-center gap-2 font-bold backdrop-blur-sm w-full sm:w-auto"
                >
                  <Download className="w-5 h-5" />
                  TẢI CREDENTIAL (PDF)
                </Button>
              </Link>

              {/* CTA 2 – Book consultation */}
              <Link href="/giai-phap-lanh-dao">
                <Button variant="primary" size="lg" className="h-14 px-8 flex items-center gap-2 font-bold w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  ĐẶT LỊCH THAM VẤN 1:1
                </Button>
              </Link>
            </div>

            {/* CTA 3 – Speaker */}
            <div className="mt-8">
              <Link
                href="/speaker"
                className="inline-flex items-center gap-2 text-white/60 hover:text-blaze-orange transition-colors font-medium text-base"
              >
                MỜI MASTER LÀM SPEAKER <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-white/30 mt-3">
                File PDF sẽ được gửi vào email của bạn ngay lập tức.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

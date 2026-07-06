'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function HomeCTA() {
  return (
    <section className="py-24 md:py-32 bg-ice-white text-oxford-blue text-center border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            Bước tiếp theo rõ ràng hơn khi bạn biết mình đang ở đâu.
          </h2>
          <p className="text-lg md:text-xl text-cyan-azure max-w-3xl mx-auto leading-relaxed mb-12">
            Nhận bản đồ cá nhân hóa theo tên và ngày sinh. Phân tích chu kỳ vận hành, vai trò phù hợp và 3 hành động ưu tiên trong 90 ngày tiếp theo. Dành cho cả lãnh đạo doanh nghiệp lẫn cá nhân đang đứng trước quyết định quan trọng.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Link href="/giai-phap-lanh-dao">
              <Button variant="primary" size="lg" className="h-16 px-10 text-xl font-bold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
                ĐẶT BẢN ĐỒ CHIẾN LƯỢC CỦA TÔI
              </Button>
            </Link>
            <Link href="/workshop-chien-luoc" className="text-cyan-azure hover:text-blaze-orange font-medium underline underline-offset-4 transition-colors">
              Hoặc đăng ký workshop miễn phí để tìm hiểu trước →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

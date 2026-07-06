'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function WebinarCTA() {
  return (
    <section className="py-24 bg-oxford-blue text-white text-center border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 max-w-4xl mx-auto leading-tight">
            Một buổi 90 phút có thể <span className="text-blaze-orange">thay đổi cách bạn nhìn nhận</span> cả năm phía trước.
          </h2>
          
          <Link href="#register-form">
            <Button variant="primary" size="lg" className="h-20 px-16 text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all w-full sm:w-auto">
              ĐĂNG KÝ THAM GIA MIỄN PHÍ
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

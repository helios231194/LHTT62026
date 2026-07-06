'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

export function ContactHero() {
  return (
    <section className="relative w-full py-20 bg-oxford-blue text-white text-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <span className="inline-block py-1 px-4 mb-6 text-sm font-bold tracking-widest text-blaze-orange bg-blaze-orange/10 uppercase">
            Kết nối với chúng tôi
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Linh Hoa Tâm luôn ở đây <span className="text-blaze-orange">lắng nghe bạn.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Dù bạn cần tham vấn chiến lược cho doanh nghiệp, gỡ rối định hướng cá nhân hay mời Master làm diễn giả. Hãy chọn vấn đề của bạn ở bên dưới.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

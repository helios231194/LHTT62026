'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function WebinarMaster() {
  return (
    <section className="py-24 bg-ice-white text-oxford-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-oxford-blue border border-white/10 p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <FadeIn direction="right">
                <div className="aspect-[4/5] bg-white/5 border border-white/20 flex items-center justify-center p-6 relative">
                  <div className="text-center">
                    <span className="text-white/20 font-bold tracking-widest uppercase">Master Image Placeholder</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blaze-orange/20 blur-xl rounded-full"></div>
                </div>
              </FadeIn>
            </div>
            
            <div className="md:col-span-7">
              <FadeIn direction="left" delay={0.2}>
                <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-wider text-blaze-orange bg-blaze-orange/10 uppercase">
                  Chuyên gia dẫn dắt buổi học
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Master Hoàng Mai Linh
                </h2>
                <div className="w-16 h-1 bg-blaze-orange mb-8"></div>
                
                <div className="space-y-6 text-lg text-oxford-blue/80 leading-relaxed font-medium mb-8">
                  <p className="text-oxford-blue/80 leading-relaxed font-medium mb-8">
                    <strong className="text-oxford-blue">Nhà tham vấn chiến lược, Founder Linh Hoa Tâm.</strong>
                  </p>
                  <p>
                    Hơn 3.500 giờ làm việc trực tiếp với CEO, Founder và lãnh đạo cấp cao. Tác giả sách Sức Mạnh Ẩn Sau Con Số. Diễn giả tại Prudential, Shinhan Life, Forbes Women Vietnam.
                  </p>
                  <p className="border-l-4 border-blaze-orange pl-4 text-oxford-blue">
                    <strong className="text-blaze-orange uppercase tracking-wider text-sm block mb-1">Phong cách dẫn dắt:</strong> 
                    Thẳng vào vấn đề, không lý thuyết. Mỗi buổi kết thúc bằng hành động cụ thể bạn có thể áp dụng ngay.
                  </p>
                </div>
                
                <Link href="/master-hoang-mai-linh" className="inline-flex items-center text-metallic-blue hover:text-blaze-orange transition-colors font-bold underline underline-offset-4">
                  Xem hồ sơ đầy đủ <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function CommunityCTA() {
  return (
    <section className="py-24 bg-oxford-blue text-white text-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 max-w-4xl mx-auto leading-tight">
            Sẵn sàng tham gia vào hệ sinh thái năng lượng của Linh Hoa Tâm?
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <Link href="https://facebook.com/groups/linhhoatam" target="_blank" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="h-20 px-16 text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all w-full sm:w-auto flex items-center justify-center gap-3">
                THAM GIA NHÓM MIỄN PHÍ <span className="text-2xl">→</span>
              </Button>
            </Link>
            
            <div className="mt-8 flex flex-col items-center">
              <div className="w-40 h-40 bg-white flex items-center justify-center border-4 border-white/20 p-2 mb-4">
                <span className="text-oxford-blue font-bold text-sm uppercase text-center opacity-30">QR CODE<br/>CỘNG ĐỒNG</span>
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-white/50">Quét mã để mở trên điện thoại</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

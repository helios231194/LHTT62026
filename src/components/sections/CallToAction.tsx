import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="py-24 bg-oxford-blue relative overflow-hidden text-center text-ice-white border-t border-cyan-azure/20">
      {/* Liquid Glass dynamic radial gradients using brand colors */}
      <div className="absolute inset-0 z-0 bg-oxford-blue">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,104,1,0.15)_0,transparent_70%)] rounded-full blur-[80px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-azure/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <StaggerContainer className="max-w-4xl mx-auto relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-md">
              Bắt đầu hành trình phát triển <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-yellow-500">từ bên trong ngay hôm nay</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto text-ice-white/80 leading-relaxed">
              Khi bạn đủ hiểu mình, bạn sẽ biết cách phát triển đúng hướng và tạo ra những thay đổi bền vững trong cuộc sống. Linh Hoa Tâm sẵn sàng đồng hành cùng bạn trên hành trình đó.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="#chuong-trinh">
                  <button className="relative overflow-hidden group px-8 py-4 bg-blaze-orange text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(255,104,1,0.4)] w-full sm:w-auto">
                    <span className="relative z-10">Tìm hiểu chương trình</span>
                    <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                  </button>
                </Link>
                <Link href="#lien-he">
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-blaze-orange hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto">
                    Liên hệ tư vấn
                  </button>
                </Link>
             </div>
          </FadeIn>
        </StaggerContainer>
      </div>
    </section>
  );
}

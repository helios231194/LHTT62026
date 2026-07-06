'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight, UserCircle, Briefcase } from 'lucide-react';
import Link from 'next/link';

export function PersonalWorkshopCTA() {
  return (
    <section className="py-24 md:py-32 bg-ice-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-oxford-blue mb-6 leading-tight">
              Từ kiến thức đến <span className="text-cyan-azure">hành động <span className="whitespace-nowrap">thực tế</span></span>
              <br className="hidden md:block"/>
              chọn bước phù hợp với bạn.
            </h2>
            <div className="w-16 h-1.5 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          
          {/* Card 1: 1:1 Coaching */}
          <FadeIn direction="right" delay={0.1}>
            <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden border border-slate-100 h-full flex flex-col group hover:-translate-y-2 hover:shadow-cyan-azure/10 hover:border-cyan-azure/30 transition-all duration-500">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-azure/5 rounded-full blur-3xl group-hover:bg-cyan-azure/10 transition-colors duration-500" />
              
              <div className="w-20 h-20 rounded-2xl bg-cyan-azure/10 flex items-center justify-center mb-8 relative z-10">
                <UserCircle className="w-10 h-10 text-cyan-azure" />
              </div>
              
              <h3 className="text-3xl font-black text-oxford-blue mb-6 relative z-10">
                Coaching 1:1 cá nhân
              </h3>
              
              <p className="text-slate-600 font-medium text-lg leading-relaxed mb-12 relative z-10 flex-1">
                Làm việc trực tiếp với Master để nhận bản đồ cá nhân hóa hoàn toàn theo ngày sinh và tên. Giải quyết triệt để các rắc rối hiện tại của cá nhân.
              </p>
              
              <Link href="/phat-trien-ban-than" className="relative z-10 block mt-auto">
                <Button variant="primary" size="lg" className="w-full h-16 text-lg font-bold rounded-xl shadow-lg shadow-blaze-orange/20 hover:-translate-y-1 hover:shadow-blaze-orange/40 transition-all duration-300">
                  XEM DỊCH VỤ CÁ NHÂN
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Card 2: Workshop Chiến Lược */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-oxford-blue rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden h-full flex flex-col group hover:-translate-y-2 hover:shadow-cyan-azure/20 transition-all duration-500 text-white">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-azure/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-8 relative z-10 backdrop-blur-sm border border-white/5">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-black text-white mb-6 relative z-10">
                Workshop Chiến lược
              </h3>
              
              <p className="text-white/70 font-medium text-lg leading-relaxed mb-12 relative z-10 flex-1">
                Nếu bạn là lãnh đạo doanh nghiệp, muốn áp dụng Thuật Số Học Ứng Dụng vào việc ra quyết định kinh doanh, xem thêm các chủ đề chiến lược tại trang Workshop Chiến lược.
              </p>
              
              <Link href="/workshop-chien-luoc" className="relative z-10 block mt-auto">
                <Button variant="outline" size="lg" className="w-full h-16 text-lg font-bold rounded-xl bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-cyan-azure hover:border-white transition-all duration-300">
                  XEM WORKSHOP CHIẾN LƯỢC
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Briefcase, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export function WorkshopCTA() {
  return (
    <section className="py-24 md:py-32 bg-oxford-blue text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-cyan-azure/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SlideIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              Muốn đi sâu hơn sau workshop? <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">Đây là bước tiếp theo.</span>
            </h2>
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Lãnh đạo */}
          <FadeIn direction="right" delay={0.1}>
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 md:p-14 border border-white/10 flex flex-col items-center text-center h-full hover:bg-white/10 hover:border-blaze-orange/30 transition-all duration-300 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-blaze-orange flex items-center justify-center mb-8 shadow-lg shadow-blaze-orange/20">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Tham vấn 1:1 riêng</h3>
              <p className="text-white/70 font-medium mb-10 leading-relaxed text-lg">
                Xây bản đồ chiến lược cá nhân hóa hoàn toàn theo vai trò và chu kỳ của riêng bạn tại doanh nghiệp.
              </p>
              <Link href="/giai-phap-lanh-dao" className="mt-auto w-full">
                <Button variant="primary" size="lg" className="w-full h-16 text-lg font-bold rounded-xl shadow-xl shadow-blaze-orange/20">
                  XEM DỊCH VỤ LÃNH ĐẠO →
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Card 2: Cá nhân */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 md:p-14 border border-white/10 flex flex-col items-center text-center h-full hover:bg-white/10 hover:border-cyan-azure/30 transition-all duration-300 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-cyan-azure flex items-center justify-center mb-8 shadow-lg shadow-cyan-azure/20">
                <HeartHandshake className="w-8 h-8 text-oxford-blue" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Workshop Cá nhân</h3>
              <p className="text-white/70 font-medium mb-10 leading-relaxed text-lg">
                Tìm hiểu thêm các chủ đề tài chính cá nhân, hôn nhân, gia đình tại trang Workshop Cá nhân.
              </p>
              <Link href="/workshop-ca-nhan" className="mt-auto w-full">
                <Button variant="outline" size="lg" className="w-full h-16 text-lg font-bold rounded-xl border-white/20 text-white hover:bg-white hover:text-oxford-blue">
                  XEM WORKSHOP CÁ NHÂN →
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

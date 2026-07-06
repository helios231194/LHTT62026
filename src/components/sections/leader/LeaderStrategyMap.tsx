'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, FileText, Target, Map } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function LeaderStrategyMap() {
  return (
    <section className="py-24 md:py-32 bg-oxford-blue text-white relative overflow-hidden">
      {/* Abstract Backgrounds */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blaze-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-azure/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <FadeIn direction="up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-blaze-orange" />
                <span className="text-sm font-bold tracking-[0.2em] text-blaze-orange uppercase">Sản phẩm chiến lược</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.15] tracking-tight text-balance">
                Bản đồ Quyết Định <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                  Chiến Lược Lãnh Đạo 2026
                </span>
              </h2>

              <p className="text-lg text-white/80 mb-8 leading-relaxed text-pretty">
                Tài sản chiến lược được cá nhân hóa hoàn toàn. Dùng làm tài liệu tham chiếu 
                cốt lõi trong họp chiến lược, tuyển dụng cấp quản lý, quyết định đầu tư và mở chi nhánh.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'PDF cá nhân hóa 100+ trang chi tiết',
                  'Phân tích sâu 7 chỉ số vận mệnh của người đứng đầu',
                  'Bản đồ dự báo chu kỳ cá nhân chi tiết năm 2026',
                  'Lộ trình phân bổ nguồn lực dựa trên 4 trụ cột'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blaze-orange shrink-0" />
                    <span className="text-white/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 mb-10">
                <div className="flex flex-col">
                  <span className="text-sm text-white/60 mb-1 uppercase tracking-widest font-bold">Chi phí đầu tư</span>
                  <span className="text-4xl font-black text-blaze-orange">3.800.000 VNĐ</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('open-register-modal', { detail: { packageId: 'goi-ban-do' } }));
                  }}
                  variant="primary" 
                  size="lg" 
                  className="h-14 px-8 font-bold w-full sm:w-auto"
                >
                  NHẬN BẢN ĐỒ CHIẾN LƯỢC 2026 CỦA TÔI
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual Image/Mockup */}
          <div className="lg:w-1/2 w-full">
            <FadeIn direction="up" delay={0.2}>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 z-10" />
                {/* Placeholder graphic for the 100+ page PDF strategy map */}
                <div className="absolute inset-0 flex items-center justify-center bg-oxford-blue/50 backdrop-blur-md">
                  <div className="text-center relative z-20">
                    <Map className="w-24 h-24 mx-auto text-blaze-orange/50 mb-4 group-hover:scale-110 transition-transform duration-700" />
                    <div className="text-2xl font-bold tracking-widest text-white/50">MOCKUP 100+ TRANG PDF</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

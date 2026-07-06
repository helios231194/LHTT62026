'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, UserCheck, FileText } from 'lucide-react';
import Link from 'next/link';

export function PersonalEntryProduct() {
  return (
    <section className="py-24 md:py-32 bg-ice-white relative overflow-hidden" id="entry">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-azure/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Left Content: The PDF Mockup Area */}
          <div className="lg:w-5/12 w-full">
            <FadeIn direction="right">
              <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-100 group">
                <div className="absolute inset-0 bg-gradient-to-br from-oxford-blue/5 to-transparent z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-50">
                  <FileText className="w-24 h-24 text-blaze-orange mb-6 group-hover:scale-110 transition-transform duration-700" />
                  <div className="text-2xl font-black text-oxford-blue tracking-tight mb-2">LUẬN GIẢI VẬN MỆNH</div>
                  <div className="text-blaze-orange font-bold tracking-widest text-sm uppercase mb-6">PDF 100+ TRANG</div>
                  <div className="space-y-2 opacity-50 blur-[1px]">
                    <div className="w-48 h-2 bg-slate-300 rounded-full mx-auto" />
                    <div className="w-32 h-2 bg-slate-300 rounded-full mx-auto" />
                    <div className="w-56 h-2 bg-slate-300 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content */}
          <div className="lg:w-7/12 w-full">
            <FadeIn direction="left" delay={0.2}>
              <div className="inline-block px-4 py-1.5 bg-blaze-orange/10 text-blaze-orange rounded-full text-sm font-bold tracking-wider uppercase mb-6">
                Bước khởi đầu hoàn hảo
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-oxford-blue mb-4 leading-tight">
                File Luận giải Vận mệnh <span className="text-blaze-orange">Cá nhân</span>
              </h2>

              <div className="text-3xl font-black text-blaze-orange mb-8">450.000 VNĐ</div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                <h3 className="text-xl font-bold text-oxford-blue mb-6 border-b border-gray-100 pb-4">Bạn sẽ nhận được trong file:</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Phân tích đầy đủ 7 chỉ số vận mệnh chính và 12 chỉ số phụ – hiểu rõ bản thân ở tầng sâu nhất',
                    'Biểu đồ Sinh Đồ, Danh Đồ và Công Việc – nhìn thấy bức tranh tổng thể về con người bạn',
                    'Các mốc Đại vận trong cuộc đời – những thời điểm đỉnh cao và thử thách cần chuẩn bị',
                    'Định hướng sự nghiệp phù hợp với bộ số vận mệnh của bạn',
                    'Màu sắc, con số may mắn và lời khuyên cụ thể cho từng chỉ số',
                    'Vận trình Năm cá nhân – biết năm nay nên tập trung vào điều gì'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-blaze-orange shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-oxford-blue mb-6 border-b border-gray-100 pb-4 mt-8 flex items-center gap-2">
                  <UserCheck className="text-blaze-orange" />
                  Phù hợp với bạn nếu:
                </h3>
                <ul className="space-y-4">
                  {[
                    'Muốn hiểu rõ điểm mạnh bẩm sinh và cách phát huy tốt nhất',
                    'Đang đứng trước quyết định về sự nghiệp, hướng đi hoặc môi trường làm việc',
                    'Muốn có nền tảng để bắt đầu hành trình tự phát triển bản thân có hệ thống',
                    'Chưa sẵn sàng cho coaching 1:1 nhưng muốn có cái nhìn toàn diện về mình trước'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-azure mt-2.5 shrink-0" />
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link href="#buy-450k" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="h-16 px-10 font-bold w-full text-lg rounded-full shadow-xl shadow-blaze-orange/20 hover:-translate-y-1 transition-transform">
                    NHẬN FILE LUẬN GIẢI 450K NGAY
                  </Button>
                </Link>
                <Link href="#entry" className="hidden sm:block text-cyan-azure hover:text-blaze-orange font-bold transition-colors underline underline-offset-4 ml-4">
                  Xem chi tiết file luận giải →
                </Link>
                {/* Mobile secondary link */}
                <Link href="#entry" className="sm:hidden text-cyan-azure hover:text-blaze-orange font-bold transition-colors mt-2">
                  Xem chi tiết file luận giải →
                </Link>
              </div>

            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

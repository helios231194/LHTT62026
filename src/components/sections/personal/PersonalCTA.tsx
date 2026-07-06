'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function PersonalCTA() {
  return (
    <section className="py-24 md:py-32 bg-oxford-blue text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-blaze-orange/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Giai đoạn nào cũng có <br className="hidden md:block"/>
              một bước phù hợp để <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">bắt đầu.</span>
            </h2>
            <p className="text-xl text-white/80 font-medium leading-relaxed max-w-3xl mx-auto">
              Chọn sản phẩm phù hợp với giai đoạn bạn đang ở. Nếu chưa biết bắt đầu từ đâu, 
              <strong> File Hồ Sơ Số 450K</strong> là điểm khởi đầu tốt nhất để bạn có 
              bức tranh toàn cảnh về mình trước khi đi sâu hơn.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Box 1 */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/10 flex flex-col items-center text-center h-full hover:bg-white/10 hover:border-blaze-orange/30 transition-all duration-300">
              <span className="text-sm font-bold text-blaze-orange uppercase tracking-widest mb-6">Bước khởi đầu</span>
              <h3 className="text-2xl font-bold text-white mb-8">Bắt đầu từ đây</h3>
              <Link href="#entry" className="mt-auto w-full">
                <Button variant="primary" size="lg" className="w-full h-14 font-bold rounded-xl shadow-lg shadow-blaze-orange/20">
                  NHẬN FILE LUẬN GIẢI 450K
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Box 2 */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/10 flex flex-col items-center text-center h-full hover:bg-white/10 hover:border-blaze-orange/30 transition-all duration-300">
              <span className="text-sm font-bold text-cyan-azure uppercase tracking-widest mb-6">Giải quyết trọng điểm</span>
              <h3 className="text-2xl font-bold text-white mb-8">Làm việc trực tiếp</h3>
              <Link href="#coaching" className="mt-auto w-full">
                <Button variant="outline" size="lg" className="w-full h-14 font-bold rounded-xl border-white/20 text-white hover:bg-white hover:text-oxford-blue">
                  ĐẶT LỊCH COACHING 1:1
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Box 3 */}
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/10 flex flex-col items-center text-center h-full hover:bg-white/10 hover:border-blaze-orange/30 transition-all duration-300">
              <span className="text-sm font-bold text-cyan-azure uppercase tracking-widest mb-6">Gặp vấn đề rối rắm</span>
              <h3 className="text-2xl font-bold text-white mb-8">Chưa chắc chọn gói nào</h3>
              <Link href="/lien-he" className="mt-auto w-full">
                <Button variant="outline" size="lg" className="w-full h-14 font-bold rounded-xl border-white/20 text-white hover:bg-white hover:text-oxford-blue">
                  LIÊN HỆ TƯ VẤN MIỄN PHÍ
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

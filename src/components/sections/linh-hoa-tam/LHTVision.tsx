'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Eye, Target } from 'lucide-react';

export function LHTVision() {
  return (
    <section className="py-20 md:py-32 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blaze-orange" />
            <span className="text-xs font-bold tracking-[0.25em] text-blaze-orange uppercase">Tầm nhìn &amp; Sứ mệnh</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Tầm nhìn */}
          <FadeIn direction="right">
            <div className="bg-oxford-blue text-white rounded-2xl p-8 md:p-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blaze-orange/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blaze-orange" />
                </div>
                <h2 className="text-2xl font-black text-white tracking-wide">TẦM NHÌN</h2>
              </div>
              <p className="text-white/70 leading-relaxed text-base flex-1">
                Trở thành đơn vị tham vấn chiến lược hàng đầu tại Việt Nam ứng dụng Thuật Số Học như một công cụ khoa học, logic và đo được. Nơi người lãnh đạo và cá nhân có thể tìm thấy nền tảng vững để ra quyết định quan trọng, thay vì dựa hoàn toàn vào kinh nghiệm hay cảm tính.
              </p>
            </div>
          </FadeIn>

          {/* Sứ mệnh */}
          <FadeIn direction="left" delay={0.12}>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 h-full flex flex-col shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blaze-orange/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blaze-orange" />
                </div>
                <h2 className="text-2xl font-black text-oxford-blue tracking-wide">SỨ MỆNH</h2>
              </div>
              <div className="space-y-5 flex-1">
                <div>
                  <div className="text-xs font-bold tracking-widest text-blaze-orange uppercase mb-2">Với lãnh đạo doanh nghiệp</div>
                  <p className="text-cyan-azure leading-relaxed text-base">
                    Xây bản đồ vận hành cá nhân để đặt đúng người, hành động đúng thời điểm và tối ưu nguồn lực theo đúng chu kỳ.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-5">
                  <div className="text-xs font-bold tracking-widest text-blaze-orange uppercase mb-2">Với cá nhân</div>
                  <p className="text-cyan-azure leading-relaxed text-base">
                    Trao công cụ để hiểu rõ cấu trúc bên trong của mình, từ đó sống và làm việc đúng với bản chất tự nhiên thay vì đi theo kỳ vọng của người khác.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

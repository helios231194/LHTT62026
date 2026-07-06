'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

export function AboutVision() {
  return (
    <section className="py-24 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          <FadeIn direction="right">
            <div className="h-full border-t-4 border-blaze-orange pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-6">TẦM NHÌN</h2>
              <p className="text-lg text-cyan-azure leading-relaxed">
                Trở thành đơn vị tham vấn chiến lược hàng đầu tại Việt Nam ứng dụng Thuật Số Học như một công cụ khoa học, logic và đo được. Nơi người lãnh đạo và cá nhân có thể tìm thấy nền tảng vững để ra quyết định quan trọng, thay vì dựa hoàn toàn vào kinh nghiệm hay cảm tính.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="h-full border-t-4 border-oxford-blue pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-6">SỨ MỆNH</h2>
              <div className="space-y-6 text-lg text-cyan-azure leading-relaxed">
                <p>
                  <strong className="text-oxford-blue">Với lãnh đạo doanh nghiệp:</strong> Xây bản đồ vận hành cá nhân để đặt đúng người, hành động đúng thời điểm và tối ưu nguồn lực theo đúng chu kỳ.
                </p>
                <p>
                  <strong className="text-oxford-blue">Với cá nhân:</strong> Trao công cụ để hiểu rõ cấu trúc bên trong của mình, từ đó sống và làm việc đúng với bản chất tự nhiên thay vì đi theo kỳ vọng của người khác.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

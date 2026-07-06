'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

export function AboutHero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-oxford-blue text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            LINH HOA TÂM <br/><span className="text-blaze-orange text-3xl md:text-5xl">Numerology for Leaders</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 uppercase tracking-wide">
            Thuật Số Học Ứng Dụng Cho Người Lãnh Đạo
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 text-left md:text-center shadow-2xl backdrop-blur-sm">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Linh Hoa Tâm là đơn vị tiên phong tại Việt Nam ứng dụng Thuật Số Học như một công cụ tham vấn chiến lược cho lãnh đạo doanh nghiệp và cá nhân đang đứng trước quyết định lớn.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Mỗi buổi làm việc là một quy trình phân tích cấu trúc: 7 chỉ số vận mệnh được đối chiếu với chu kỳ vận hành thực tế của từng người, từ đó xây dựng khung ra quyết định cụ thể cho sự nghiệp, nhân sự, tài chính và thời điểm hành động.
            </p>
            <p className="text-lg md:text-xl font-bold text-blaze-orange leading-relaxed">
              Kết quả đo bằng quyết định rõ hơn, đội ngũ vận hành nhẹ hơn, người đứng đầu không còn phải gánh một mình. Với cá nhân, đo bằng sự rõ ràng trong lựa chọn và bước đi phù hợp với đúng giai đoạn của mình.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

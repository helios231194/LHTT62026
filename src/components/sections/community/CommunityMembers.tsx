'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

export function CommunityMembers() {
  return (
    <section className="py-24 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue text-center mb-16">
            Ai đang ở trong cộng đồng này cùng bạn?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn direction="right">
            <div className="bg-white border text-oxford-blue border-light-gray p-10 h-full">
              <h3 className="text-2xl font-bold mb-6 border-b border-light-gray pb-4">
                Nhóm 1: <span className="text-blaze-orange">Lãnh đạo & Doanh nhân (60%)</span>
              </h3>
              <p className="text-lg text-cyan-azure leading-relaxed">
                Những người đứng đầu đang mệt mỏi với cách quản trị &quot;thử và sai&quot;, tìm kiếm hệ quy chiếu rõ ràng để đặt đúng người vào đúng việc, biết lúc nào nên tấn công, lúc nào nên phòng thủ trong kinh doanh.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white border text-oxford-blue border-light-gray p-10 h-full">
              <h3 className="text-2xl font-bold mb-6 border-b border-light-gray pb-4">
                Nhóm 2: <span className="text-blaze-orange">Cá nhân & Chuyên gia (40%)</span>
              </h3>
              <p className="text-lg text-cyan-azure leading-relaxed">
                Những người đang đứng ở ngã ba đường sự nghiệp, muốn hiểu rõ điểm mạnh bẩm sinh, hóa giải áp lực hiện tại và thiết kế kế hoạch cuộc đời bài bản thay vì phụ thuộc cảm xúc.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

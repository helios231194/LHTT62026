'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Check } from 'lucide-react';

const contents = [
  'Nhận diện 4 kiểu tình huống phổ biến: làm nhiều nhưng thu nhập không tăng / đổi hướng liên tục nhưng không duy trì được / mối quan hệ quan trọng căng thẳng / biết nhiều lý thuyết nhưng không áp dụng được',
  'Hiểu 3 nhóm yếu tố bên trong cần làm rõ: cách đặt tiêu chuẩn cho bản thân / cách xử lý áp lực / cách phản ứng trong giao tiếp và hợp tác',
  'Làm bài tập tự đánh giá nhanh – đo được bằng số liệu, không chỉ bằng cảm nhận',
  'Nhận lộ trình cụ thể 3–6 tháng để thiết kế lại cấu trúc làm việc và ra quyết định'
];

export function WebinarContent() {
  return (
    <section className="py-24 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          
          <FadeIn direction="right">
            <div>
              <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-wider text-oxford-blue bg-light-gray uppercase">
                Nội dung Webinar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue mb-8">
                Trong 90 phút, bạn sẽ được hướng dẫn để:
              </h2>
              
              <ul className="space-y-6">
                {contents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-blaze-orange flex-shrink-0 mt-1" />
                    <span className="text-lg text-cyan-azure leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white text-oxford-blue p-10 md:p-12 border-t-8 border-blaze-orange min-h-full flex flex-col justify-center shadow-xl border border-light-gray/50">
              <h3 className="text-2xl font-bold mb-6 text-oxford-blue uppercase tracking-wide">
                Đối tượng phù hợp
              </h3>
              <p className="text-xl leading-relaxed text-cyan-azure border-l-4 border-blaze-orange/20 pl-6">
                <span className="font-bold text-oxford-blue">Chủ doanh nghiệp, quản lý, người đi làm có trách nhiệm cao</span> – đang trong trạng thái làm nhiều, căng thẳng, và đang tìm kiếm sự rõ ràng để đưa ra những quyết định khó khăn.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

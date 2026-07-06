'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Target, Lightbulb, UserCog, MessageSquareText } from 'lucide-react';

const styles = [
  {
    icon: <Target className="w-8 h-8 text-blaze-orange" />,
    title: 'Thực chiến, không lý thuyết',
    desc: 'Mỗi nội dung được xây từ quan sát thực tế qua hơn 3.500 giờ làm việc với lãnh đạo doanh nghiệp. Người nghe nhận ra vấn đề của mình ngay trong buổi.'
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blaze-orange" />,
    title: 'Framework áp dụng ngay',
    desc: 'Mỗi buổi chia sẻ kết thúc bằng 1 framework hoặc công cụ cụ thể. Người nghe về là có thể dùng được, không phải chờ đọc thêm sách hay học thêm khóa.'
  },
  {
    icon: <UserCog className="w-8 h-8 text-cyan-azure" />,
    title: 'Cá nhân hóa đỉnh cao',
    desc: 'Nội dung được điều chỉnh theo ngành, quy mô và giai đoạn phát triển của tổ chức mời. Không áp dụng kịch bản chung cho mọi sự kiện.'
  },
  {
    icon: <MessageSquareText className="w-8 h-8 text-cyan-azure" />,
    title: 'Tương tác đa chiều',
    desc: 'Phong cách dẫn dắt kết hợp phân tích và hỏi đáp trực tiếp. Người nghe không chỉ nghe mà còn tự nhận ra điều cần thay đổi trong chính mình.'
  }
];

export function SpeakerStyle() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-azure/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              Điều làm buổi chia sẻ của Master <br/>
              <span className="text-blaze-orange">khác biệt hoàn toàn.</span>
            </h2>
            <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {styles.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 lg:p-14 hover:shadow-2xl hover:bg-white hover:-translate-y-2 hover:border-cyan-azure/20 transition-all duration-300 h-full flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-oxford-blue mb-4 group-hover:text-cyan-azure transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 font-medium text-[17px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

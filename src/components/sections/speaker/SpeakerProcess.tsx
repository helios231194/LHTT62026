'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';

const steps = [
  {
    num: '01',
    title: 'Gửi yêu cầu',
    desc: 'Điền form hoặc liên hệ trực tiếp với thông tin sự kiện, chủ đề mong muốn và ngày dự kiến.'
  },
  {
    num: '02',
    title: 'Trao đổi chi tiết',
    desc: 'Linh Hoa Tâm liên hệ lại trong 24 giờ để xác nhận lịch và trao đổi về đối tượng, mục tiêu buổi chia sẻ.'
  },
  {
    num: '03',
    title: 'Chuẩn bị nội dung',
    desc: 'Master Hoàng Mai Linh chuẩn bị nội dung cá nhân hóa theo đúng đối tượng và mục tiêu của tổ chức.'
  },
  {
    num: '04',
    title: 'Diễn ra sự kiện',
    desc: 'Buổi chia sẻ diễn ra theo đúng kế hoạch. Có thể kết hợp Q&A và mini workshop tùy yêu cầu.'
  }
];

export function SpeakerProcess() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SlideIn direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              Quy trình từ lúc liên hệ <br/>
              <span className="text-blaze-orange">đến ngày diễn ra sự kiện.</span>
            </h2>
            <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-slate-100" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="relative group">
                  <div className="w-32 h-32 md:w-full md:max-w-[120px] md:h-[120px] bg-white rounded-full border-4 border-slate-100 shadow-xl flex items-center justify-center mb-6 mx-auto group-hover:border-blaze-orange group-hover:scale-110 group-hover:shadow-blaze-orange/20 transition-all duration-500 z-10 relative">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-blaze-orange transition-colors">
                      {step.num}
                    </span>
                  </div>
                  
                  <div className="text-center lg:px-2">
                    <h3 className="text-2xl font-black text-oxford-blue mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { BookOpen, Stethoscope, Building2 } from 'lucide-react';

const steps = [
  {
    month: 'Tháng 1',
    badge: 'Học',
    title: 'Làm chủ kiến thức cốt lõi',
    desc: 'Dành 2 tiếng/ngày học chuyên sâu Thuật Số Học Ứng Dụng. Hoàn thành bài kiểm tra năng lực và được Hội sở Linh Hoa Tâm cấp chứng nhận hành nghề.',
    icon: <BookOpen className="w-6 h-6 text-cyan-azure" />
  },
  {
    month: 'Tháng 2 & 3',
    badge: 'Thực hành',
    title: 'Thực chiến cùng khách hàng',
    desc: 'Luận giải thực tế cùng những khách hàng đầu tiên dưới sự giám sát. Song song học kiến thức sản phẩm trang sức Dzi Tây Tạng và chuẩn bị cơ sở vật chất mở văn phòng.',
    icon: <Stethoscope className="w-6 h-6 text-blaze-orange" />
  },
  {
    month: 'Kết thúc tháng 3',
    badge: 'Khai trương',
    title: 'Chính thức tiếp quản địa bàn',
    desc: 'Mở văn phòng làm việc, trưng bày sản phẩm trải nghiệm và tiếp khách tại địa bàn. Được truyền thông giới thiệu chính thức và nhận khách hàng đổ về từ Linh Hoa Tâm.',
    icon: <Building2 className="w-6 h-6 text-oxford-blue" />
  }
];

export function RepresentRoadmap() {
  return (
    <section className="py-24 bg-ice-white relative overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <SlideIn direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              Từ ngày đầu đến khi mở văn phòng <br className="hidden md:block"/>
              <span className="text-cyan-azure">trong 3 tháng.</span>
            </h2>
            <div className="w-16 h-1 bg-cyan-azure mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.15}>
                  <div className={`relative flex items-center justify-between md:justify-normal gap-8 w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    
                    {/* Timeline Node */}
                    <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center shadow-lg z-10">
                      {step.icon}
                    </div>

                    {/* Content Box */}
                    <div className="w-[calc(100%-80px)] md:w-[calc(50%-48px)] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 ml-auto md:ml-0 relative group hover:-translate-y-1 hover:border-cyan-azure/30 transition-all duration-300">
                      {/* Arrow indicator for desktop */}
                      <div className={`hidden md:block absolute top-[32px] w-4 h-4 bg-white border-slate-100 rotate-45 border-b border-l ${isEven ? 'right-[-8px] border-r-0 border-t-0' : 'left-[-8px] border-l-0 border-b-0 border-r border-t bg-white'}`} style={isEven ? { borderBottomColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: '#f1f5f9', borderTopColor: '#f1f5f9' } : {}} />
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-lg font-black text-oxford-blue tracking-tight">
                          {step.month}
                        </span>
                        <div className="h-1 w-1 bg-slate-300 rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-wider text-blaze-orange bg-blaze-orange/10 px-3 py-1 rounded-full">
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-oxford-blue mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

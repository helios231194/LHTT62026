'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const stats = [
  {
    value: '3.500+',
    label: 'Giờ tham vấn',
    desc: 'Trực tiếp hỗ trợ CEO & Lãnh đạo'
  },
  {
    value: '2.000+',
    label: 'Khách hàng',
    desc: 'Doanh nghiệp & Cá nhân tin tưởng'
  },
  {
    value: '5',
    label: 'Chủ đề',
    desc: 'Workshop chiến lược chuyên sâu đã triển khai'
  }
];

export function WorkshopStats() {
  return (
    <section className="py-20 bg-ice-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-12 lg:p-16 shadow-2xl shadow-cyan-azure/5 border border-slate-100 max-w-7xl mx-auto relative overflow-hidden">
          {/* Subtle decoration inside the box */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blaze-orange/5 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-azure/5 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 relative z-10">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className={`flex flex-col items-center text-center ${idx === 0 ? 'pb-10 md:pb-0 md:pr-8' : idx === 2 ? 'pt-10 md:pt-0 md:pl-8' : 'py-10 md:py-0 md:px-8'}`}>
                  <h3 className="text-5xl lg:text-7xl font-black text-oxford-blue mb-4 tracking-tighter">
                    {stat.value}
                  </h3>
                  <div className="w-12 h-1 bg-blaze-orange mx-auto rounded-full mb-6" />
                  <p className="text-xl font-bold text-blaze-orange mb-2 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-slate-500 font-medium max-w-[200px] mx-auto">
                    {stat.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

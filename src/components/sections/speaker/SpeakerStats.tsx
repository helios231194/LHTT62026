'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { NumberCounter } from '@/components/ui/NumberCounter';

const stats = [
  {
    isNumeric: true,
    value: 3500,
    suffix: '+',
    label: 'Giờ tham vấn',
    desc: 'Trực tiếp hỗ trợ CEO và Lãnh đạo cấp cao'
  },
  {
    isNumeric: true,
    value: 2000,
    suffix: '+',
    label: 'Khách hàng',
    desc: 'Doanh nhân và học viên đã thành công'
  },
  {
    isNumeric: true,
    value: 500,
    suffix: 'K+',
    label: 'Theo dõi',
    desc: 'Cộng đồng trên mạng xã hội'
  },
  {
    isNumeric: false,
    value: 'Top',
    suffix: '',
    label: 'Vinh danh',
    desc: 'Doanh nhân tiêu biểu vì cộng đồng'
  }
];

export function SpeakerStats() {
  return (
    <section className="py-20 bg-ice-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="pt-8 lg:pt-0 lg:px-8 text-center flex flex-col h-full justify-center">
                <div className="text-4xl md:text-5xl lg:text-5xl font-black text-blaze-orange mb-3">
                  {stat.isNumeric ? (
                    <NumberCounter value={stat.value as number} suffix={stat.suffix} />
                  ) : (
                    stat.value
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-oxford-blue mb-2">
                  {stat.label}
                </h3>
                <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

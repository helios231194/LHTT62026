'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const stats = [
  {
    num: '20.900+',
    label: 'Thành viên tham gia'
  },
  {
    num: '4+',
    label: 'Năm xây dựng cộng đồng'
  },
  {
    num: 'Hàng tuần',
    label: 'Cập nhật kiến thức mới'
  }
];

export function CommunityStats() {
  return (
    <section className="py-24 bg-blaze-orange text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Biến những con số khô khan thành kết quả thực</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1} className={idx !== 0 ? 'pt-12 md:pt-0' : ''}>
              <div className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter drop-shadow-md">
                {stat.num}
              </div>
              <p className="text-lg md:text-xl font-medium tracking-wide uppercase text-white/90">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

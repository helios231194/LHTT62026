'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Link from 'next/link';

const options = [
  {
    title: 'Tham vấn Doanh nghiệp',
    desc: 'Giải quyết bài toán nhân sự, cấu trúc và thời điểm đầu tư',
    link: '#form',
    value: 'Tham vấn doanh nghiệp'
  },
  {
    title: 'Tham vấn Cá nhân',
    desc: 'Hiểu rõ năng lực bẩm sinh và định hướng sự nghiệp/cuộc sống',
    link: '#form',
    value: 'Tham vấn cá nhân'
  },
  {
    title: 'Mời Speaker',
    desc: 'Mời Master chia sẻ tại sự kiện của doanh nghiệp, tổ chức',
    link: '/speaker',
    value: 'Mời speaker'
  },
  {
    title: 'Hỗ trợ khác',
    desc: 'Các thắc mắc về file luận giải, sách, khóa học và thanh toán',
    link: '#form',
    value: 'Hỗ trợ khác'
  }
];

export function ContactOptions() {
  return (
    <section className="py-24 bg-ice-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-oxford-blue text-center">Chọn vấn đề bạn cần</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {options.map((opt, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <Link href={opt.link} className="block h-full cursor-pointer">
                <div className="bg-white border border-light-gray p-8 h-full flex flex-col hover:border-blaze-orange hover:shadow-lg transition-all group">
                  <h3 className="text-xl font-bold text-oxford-blue mb-3 group-hover:text-blaze-orange transition-colors">{opt.title}</h3>
                  <p className="text-cyan-azure font-medium mb-6 flex-grow">{opt.desc}</p>
                  <div className="text-sm font-bold text-blaze-orange uppercase tracking-wider">Chọn →</div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

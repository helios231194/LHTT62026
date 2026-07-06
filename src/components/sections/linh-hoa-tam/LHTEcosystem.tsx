'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ecosystem = [
  {
    brand: 'LINH HOA TÂM',
    tagline: 'Tham vấn chiến lược · Coaching · Đào tạo',
    desc: 'Tham vấn chiến lược, coaching lãnh đạo và đào tạo đội ngũ thông qua Thuật Số Học Ứng Dụng.',
    cta: 'Khám phá dịch vụ',
    href: '/giai-phap-lanh-dao',
    external: false,
    highlight: true,
  },
  {
    brand: 'LINH DZI',
    tagline: 'Trang sức năng lượng · Đá Dzi Tây Tạng',
    desc: 'Thương hiệu trang sức từ đá Dzi Tây Tạng, tiên phong chế tác tại Việt Nam. Mỗi sản phẩm được lựa chọn và thiết kế gắn với năng lượng cá nhân của người sở hữu, là vật đồng hành trên hành trình phát triển.',
    cta: 'Khám phá Linh Dzi',
    href: 'https://linhdzi.vn',
    external: true,
    highlight: false,
  },
  {
    brand: 'NGỌC LINH HÀNH',
    tagline: 'Homestay chữa lành · Tour năng lượng',
    desc: 'Chuỗi homestay và tour chữa lành tại các vùng đất có tần số năng lượng cao. Không gian để lãnh đạo và cá nhân tạm dừng khỏi áp lực, tái tạo năng lượng và nhìn lại định hướng trước khi bước vào giai đoạn mới.',
    cta: 'Khám phá Ngọc Linh Hành',
    href: '#',
    external: false,
    comingSoon: true,
    highlight: false,
  },
];

export function LHTEcosystem() {
  return (
    <section className="py-20 md:py-32 bg-oxford-blue text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blaze-orange/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blaze-orange" />
            <span className="text-xs font-bold tracking-[0.25em] text-blaze-orange uppercase">Hệ sinh thái</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl leading-tight">
            Một triết lý. Ba nhánh phát triển.
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mb-16">
            Linh Hoa Tâm là trung tâm của một hệ sinh thái được xây dựng xoay quanh một triết lý: con người phát triển bền vững khi được hỗ trợ ở cả ba chiều — tư duy chiến lược, năng lượng cá nhân và môi trường sống.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystem.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.12}>
              <div className={`rounded-2xl p-8 h-full flex flex-col border transition-all duration-300 hover:scale-[1.02] ${
                item.highlight
                  ? 'bg-blaze-orange border-blaze-orange text-white'
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}>
                <div className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${item.highlight ? 'text-white/80' : 'text-blaze-orange'}`}>
                  {item.tagline}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.brand}</h3>
                <p className={`text-sm leading-relaxed flex-1 mb-6 ${item.highlight ? 'text-white/80' : 'text-white/60'}`}>
                  {item.desc}
                </p>
                {item.comingSoon ? (
                  <span className="inline-flex items-center text-sm text-white/30 font-medium">Coming soon</span>
                ) : item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-white transition-colors">
                    {item.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link href={item.href}
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${item.highlight ? 'text-white hover:text-white/80' : 'text-white hover:text-blaze-orange'}`}>
                    {item.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

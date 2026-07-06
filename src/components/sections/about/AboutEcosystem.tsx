'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Link from 'next/link';

const ecosystems = [
  {
    name: 'LINH HOA TÂM',
    desc: 'Tham vấn chiến lược, coaching lãnh đạo và đào tạo đội ngũ thông qua Thuật Số Học Ứng Dụng.',
    link: '/giai-phap-lanh-dao',
    linkText: 'Khám phá dịch vụ',
    isActive: true
  },
  {
    name: 'LINH DZI',
    desc: 'Thương hiệu trang sức từ đá Dzi Tây Tạng, tiên phong chế tác tại Việt Nam. Mỗi sản phẩm được lựa chọn và thiết kế gắn với năng lượng cá nhân của người sở hữu, là vật đồng hành trên hành trình phát triển.',
    link: 'https://linhdzi.vn',
    linkText: 'Khám phá Linh Dzi',
    isActive: true
  },
  {
    name: 'NGỌC LINH HÀNH',
    desc: 'Chuỗi homestay và tour chữa lành tại các vùng đất có tần số năng lượng cao. Không gian để lãnh đạo và cá nhân tạm dừng khỏi áp lực, tái tạo năng lượng và nhìn lại định hướng trước khi bước vào giai đoạn mới.',
    link: '#',
    linkText: 'Coming soon',
    isActive: false
  }
];

export function AboutEcosystem() {
  return (
    <section className="py-24 bg-oxford-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-wider text-blaze-orange bg-blaze-orange/10 uppercase">
              Hệ sinh thái
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Phát triển bền vững ở mọi chiều kích</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Linh Hoa Tâm là trung tâm của một hệ sinh thái được xây dựng xoay quanh một triết lý: con người phát triển bền vững khi được hỗ trợ ở cả ba chiều: tư duy chiến lược, năng lượng cá nhân và môi trường sống.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ecosystems.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white/5 border border-white/10 p-8 h-full flex flex-col hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-blaze-orange mb-4 tracking-wide">{item.name}</h3>
                <p className="text-white/80 leading-relaxed flex-grow mb-8">
                  {item.desc}
                </p>
                <div>
                  {item.isActive ? (
                    <Link href={item.link} className="inline-block border-b-2 border-blaze-orange text-blaze-orange font-bold pb-1 hover:text-white hover:border-white transition-colors">
                      {item.linkText} →
                    </Link>
                  ) : (
                    <span className="inline-block border-b-2 border-white/30 text-white/50 font-bold pb-1 cursor-not-allowed">
                      {item.linkText}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

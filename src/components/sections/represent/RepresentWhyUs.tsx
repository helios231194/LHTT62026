'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Users, LayoutDashboard, Layers } from 'lucide-react';

const reasons = [
  {
    icon: <Users className="w-8 h-8 text-oxford-blue" />,
    title: 'Thương hiệu đã xây sẵn lõi vững chắc',
    desc: 'Hơn 2.000 khách hàng đã phục vụ, 500K+ lượt theo dõi MXH, Founder là Master Hoàng Mai Linh với hơn 3.500 giờ tham vấn thực tế và được các tổ chức lớn (Forbes Women Vietnam, Prudential, Shinhan Life) công nhận.'
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-oxford-blue" />,
    title: 'Hỗ trợ setup & vận hành toàn diện',
    desc: 'Chúng tôi tài trợ 70% chi phí biển hiệu, 20% chi phí marketing trong 3 tháng đầu. Đào tạo 1 kèm 1 đến khi thành thạo, cung cấp bộ công cụ vận hành văn phòng và chiến lược xây kênh truyền thông online ở địa phương.'
  },
  {
    icon: <Layers className="w-8 h-8 text-oxford-blue" />,
    title: 'Hệ sinh thái sản phẩm đủ mạnh',
    desc: 'Sở hữu 8 gói dịch vụ Thuật Số Học chuyên sâu và 80+ mẫu trang sức Dzi Tây Tạng chính hãng. Trưởng Đại Diện luôn có sản phẩm/dịch vụ mix-match phù hợp cho mọi quy mô khách hàng ở mọi mức chi tiêu.'
  }
];

export function RepresentWhyUs() {
  return (
    <section className="py-24 bg-blaze-orange text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#d95c00] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <SlideIn direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black leading-[1.2] mb-6">
              Bạn không bắt đầu <br/>
              <span className="text-oxford-blue">từ con số 0.</span>
            </h2>
            <div className="w-16 h-1 bg-oxford-blue mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.15}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] h-full hover:-translate-y-2 hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

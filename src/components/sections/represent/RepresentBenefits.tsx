'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { ShieldCheck, TrendingUp, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-cyan-azure" />,
    title: 'Vị thế chuyên gia được công nhận',
    desc: 'Bạn là Master Thuật Số Học Ứng Dụng chính thức, đứng đầu tại địa bàn, trực tiếp đại diện cho thương hiệu Linh Hoa Tâm. Không phải nhân viên bán hàng, không đa cấp — bạn là một chuyên gia thực thụ.'
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-blaze-orange" />,
    title: 'Thu nhập lên đến 500 triệu/tháng từ 4 nguồn',
    desc: 'Mô hình doanh thu đa luồng vững chắc: Coach luận giải 1:1, Kinh doanh trang sức Dzi Tây Tạng, Tổ chức Khóa học nội bộ và Tour du lịch tâm linh quốc tế. Tỷ suất lợi nhuận lên đến 70%.'
  },
  {
    icon: <MapPin className="w-10 h-10 text-cyan-azure" />,
    title: 'Địa bàn độc quyền tuyệt đối',
    desc: 'Mỗi tỉnh thành viên chỉ có duy nhất 1 Trưởng Đại Diện. Toàn bộ lượng khách hàng của Linh Hoa Tâm phát sinh tại khu vực của bạn sẽ được chuyển hướng trực tiếp 100% về cho bạn phục vụ.'
  }
];

export function RepresentBenefits() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              3 điều khác biệt khi trở thành <br />
              <span className="text-blaze-orange">Trưởng Đại Diện Linh Hoa Tâm.</span>
            </h2>
            <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.15}>
              <div className="bg-ice-white border border-slate-100 rounded-[2.5rem] p-10 h-full flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-slate-50">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-oxford-blue mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-medium text-base leading-relaxed">
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

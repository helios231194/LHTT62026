'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Check, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function PersonalWorkshopSpeaker() {
  return (
    <section className="py-24 md:py-32 bg-ice-white relative" id="notify">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Form - Đăng Ký Nhận Thông Báo (Left Side) */}
          <div className="w-full lg:w-1/2">
            <SlideIn direction="right">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-cyan-azure/10 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blaze-orange/10 blur-[80px] pointer-events-none rounded-full" />
                
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="w-12 h-12 rounded-full bg-cyan-azure/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-cyan-azure" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-oxford-blue leading-tight mb-2">Đừng để lỡ buổi phù hợp.</h2>
                  </div>
                </div>
                
                <p className="text-slate-600 font-medium mb-10 leading-relaxed border-l-4 border-blaze-orange pl-4">
                  Để lại thông tin và nhận thông báo đầu tiên. Khi có workshop mới, bạn sẽ được báo trước kèm ưu đãi đặc biệt dành riêng cho người đăng ký sớm.
                </p>

                <form className="space-y-6 relative" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-4 focus:ring-cyan-azure/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700" placeholder="Họ và tên *" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-4 focus:ring-cyan-azure/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700" placeholder="Số điện thoại *" required />
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-4 focus:ring-cyan-azure/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700" placeholder="Email *" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-3">Chủ đề quan tâm: (Chọn tối đa 2)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Tài chính & thịnh vượng cá nhân',
                        'Hôn nhân & tình duyên',
                        'Mâu thuẫn gia đình',
                        'Dạy con đúng cách',
                        'Xem đối tượng kết hôn'
                      ].map((interest, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:border-cyan-azure transition-colors pr-2">
                          <input type="checkbox" className="w-4 h-4 text-cyan-azure rounded border-slate-300 focus:ring-cyan-azure" />
                          <span className="text-[13px] font-bold text-slate-700 leading-tight">{interest}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="primary" className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-cyan-azure/20 hover:-translate-y-1 hover:shadow-cyan-azure/40 bg-cyan-azure hover:bg-cyan-azure/90 transition-all duration-300">
                      ĐĂNG KÝ NHẬN THÔNG BÁO
                    </Button>
                  </div>
                </form>
              </div>
            </SlideIn>
          </div>

          {/* Master Profile (Right Side) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <FadeIn direction="up">
              <div className="relative aspect-square md:aspect-[4/3] w-full max-w-lg rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl mb-12 bg-oxford-blue group">
                {/* Fallback pattern until image is added */}
                <Image
                  src="/herobanner/hero01.png"
                  alt="Master Hoàng Mai Linh"
                  fill
                  className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="text-left">
                <div className="inline-block px-4 py-2 bg-oxford-blue/10 text-oxford-blue rounded-full text-sm font-bold tracking-wider uppercase mb-6">
                  Diễn giả chính
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-oxford-blue mb-6 leading-tight">
                  Master Hoàng Mai Linh
                </h2>
                
                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-2xl border-l-4 border-blaze-orange pl-5">
                  Nhà đào tạo và nghiên cứu Thuật Số Học Ứng Dụng với hơn 3.500 giờ coaching thực chiến. <br className="hidden md:block"/><br className="hidden md:block"/>
                  Founder Linh Hoa Tâm — Tác giả cuốn sách &quot;Sức Mạnh Ẩn Sau Con Số&quot; — Diễn giả tại Prudential, Shinhan Life, Forbes Women Vietnam.
                </p>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md mb-8 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-azure" />
                  <p className="text-oxford-blue font-medium italic text-sm md:text-base leading-relaxed pl-2 relative z-10">
                    <span className="font-bold">Phong cách dẫn dắt:</span> Đi thẳng vào vấn đề, không vòng vo lý thuyết. Mỗi buổi đều kết thúc bằng những hành động cụ thể có thể áp dụng ngay vào đời sống thực tế.
                  </p>
                </div>

                <Link href="/master-hoang-mai-linh">
                  <Button variant="outline" size="lg" className="h-14 px-8 border-2 border-oxford-blue text-oxford-blue hover:bg-oxford-blue hover:text-white rounded-full font-bold group transition-all duration-300">
                    XEM HỒ SƠ ĐẦY ĐỦ 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

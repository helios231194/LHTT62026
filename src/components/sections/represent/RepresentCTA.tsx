'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function RepresentCTA() {
  return (
    <section id="dang-ky" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SlideIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              Khu vực của bạn đang chờ <br className="hidden md:block"/>
              một Trưởng Đại Diện xứng tầm.
            </h2>
            <p className="text-slate-600 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Để lại thông tin bên dưới, đội ngũ Linh Hoa Tâm sẽ liên hệ trong 24 giờ để trao đổi chi tiết. Hoặc nhắn Zalo / gọi hotline nếu bạn muốn trao đổi ngay.
            </p>
          </div>
        </SlideIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="bg-ice-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-oxford-blue uppercase tracking-wide">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blaze-orange/50 focus:border-blaze-orange transition-all font-medium text-oxford-blue"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-oxford-blue uppercase tracking-wide">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blaze-orange/50 focus:border-blaze-orange transition-all font-medium text-oxford-blue"
                    placeholder="09xx xxx xxx"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="region" className="text-sm font-bold text-oxford-blue uppercase tracking-wide">
                  Tỉnh / Thành phố mong muốn phụ trách <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="region"
                  required
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blaze-orange/50 focus:border-blaze-orange transition-all font-medium text-oxford-blue"
                  placeholder="Ví dụ: Hà Nội, Đà Nẵng, Cần Thơ..."
                />
              </div>

              <div className="pt-4 flex flex-col md:flex-row items-center gap-4">
                <Button variant="primary" size="lg" className="w-full md:w-auto h-14 px-8 font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.2)] hover:-translate-y-1 transition-transform flex-1">
                  GỬI THÔNG TIN ĐĂNG KÝ
                </Button>
                
                <Link href="https://zalo.me/0967623456" target="_blank" className="w-full md:w-auto">
                  <Button variant="outline" size="lg" className="w-full h-14 px-8 font-bold border-2 border-slate-200 text-oxford-blue hover:border-cyan-azure hover:text-cyan-azure transition-colors bg-white">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    NHẮN ZALO NGAY
                  </Button>
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-200 mt-6 text-center">
                <p className="text-sm text-slate-500 font-medium mb-2">
                  Hoặc gọi hotline trao đổi trực tiếp: <Link href="tel:0967623456" className="text-blaze-orange font-bold hover:underline">0967.623.456</Link>
                </p>
                <p className="text-xs text-slate-400">
                  Thông tin được bảo mật hoàn toàn. Chi tiết điều kiện, chi phí và lộ trình cụ thể sẽ được trao đổi trực tiếp trong buổi tư vấn.
                </p>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Calendar, Video, Users, ArrowRight, Bell } from 'lucide-react';
import Image from 'next/link';

export function WorkshopUpcoming() {
  // Toggle this value to show the fallback UI if there is no upcoming workshop
  const hasUpcomingWorkshop = true;

  return (
    <section className="py-24 md:py-32 bg-ice-white relative -mt-6 z-20 rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 md:px-6">
        {hasUpcomingWorkshop ? (
          <div className="max-w-6xl mx-auto">
            <SlideIn direction="up">
              <div className="flex items-center gap-3 mb-10 md:mb-16">
                <div className="w-3 h-3 rounded-full bg-blaze-orange animate-pulse" />
                <h2 className="text-3xl md:text-5xl font-black text-oxford-blue">
                  Workshop đang mở đăng ký.
                </h2>
              </div>
            </SlideIn>

            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-oxford-blue/5 border border-slate-100 flex flex-col lg:flex-row gap-10 items-center">
              
              {/* Banner / Poster */}
              <div className="w-full lg:w-1/2">
                <FadeIn direction="right">
                  <div className="relative aspect-[16/9] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-oxford-blue border border-slate-100 shadow-inner group">
                    <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue to-transparent z-10 opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center mix-blend-screen z-20">
                      <div className="w-16 h-16 border-4 border-blaze-orange rounded-lg p-2 flex flex-col items-center justify-center mb-4 transform -rotate-6">
                        <span className="text-xs font-bold text-blaze-orange uppercase tracking-wider">MAR</span>
                        <span className="text-2xl font-black text-white leading-none">28</span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-black text-white px-4 leading-tight drop-shadow-md">
                        CHU KỲ VẬN HÀNH DOANH NGHIỆP 2026
                      </h3>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Info Column */}
              <div className="w-full lg:w-1/2">
                <FadeIn direction="left" delay={0.2}>
                  <div className="inline-block px-4 py-2 bg-blaze-orange/10 text-blaze-orange rounded-full text-sm font-bold tracking-wider uppercase mb-6">
                    Mới Cập Nhật
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-oxford-blue mb-8 leading-tight">
                    Chu Kỳ Vận Hành Doanh Nghiệp 2026
                  </h3>

                  <div className="space-y-5 mb-10">
                    <div className="flex items-center gap-4 text-slate-700">
                      <div className="w-12 h-12 rounded-full bg-cyan-azure/10 flex items-center justify-center shrink-0">
                        <Calendar className="w-5 h-5 text-cyan-azure" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-oxford-blue">Thứ Bảy, 28/03/2026</p>
                        <p className="text-slate-500">9:00 SA – 11:00 SA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-slate-700">
                      <div className="w-12 h-12 rounded-full bg-blaze-orange/10 flex items-center justify-center shrink-0">
                        <Video className="w-5 h-5 text-blaze-orange" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-oxford-blue">Online qua Zoom</p>
                        <p className="text-slate-500">Link sẽ được gửi qua email</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-slate-700">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-oxford-blue">Đối tượng</p>
                        <p className="text-slate-500 max-w-xs">CEO, Founder, Giám đốc điều hành, Quản lý cấp cao</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row flex-wrap items-start sm:items-center gap-4">
                    <a href="#register" className="w-full lg:w-auto">
                      <Button variant="primary" size="lg" className="h-14 px-8 font-bold w-full rounded-xl shadow-lg whitespace-nowrap">
                        ĐĂNG KÝ THAM GIA MIỄN PHÍ
                      </Button>
                    </a>
                    <a href="#content" className="w-full lg:w-auto">
                      <Button variant="outline" size="lg" className="h-14 px-6 font-bold w-full rounded-xl border-slate-200 text-oxford-blue hover:border-cyan-azure flex items-center justify-center gap-2 group whitespace-nowrap">
                        Xem nội dung buổi này
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        ) : (
          /* Fallback UI when no workshop is scheduled */
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl border border-slate-100 h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-azure/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="w-20 h-20 bg-blaze-orange/10 rounded-full flex items-center justify-center mb-6">
                  <Bell className="w-10 h-10 text-blaze-orange" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-oxford-blue mb-4">
                  Chưa có lịch Workshop mới
                </h3>
                <p className="text-slate-600 text-lg mb-10 max-w-2xl">
                  Lịch workshop tiếp theo đang được Master Hoàng Mai Linh cập nhật. Đăng ký thông tin ngay bên dưới để chúng tôi gửi thông báo sớm nhất đến bạn khi sự kiện mở cổng.
                </p>
                <a href="#notify">
                  <Button variant="primary" size="lg" className="h-14 px-10 font-bold rounded-xl shadow-lg shadow-blaze-orange/20">
                    ĐĂNG KÝ NHẬN THÔNG BÁO LỊCH MỚI
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
}

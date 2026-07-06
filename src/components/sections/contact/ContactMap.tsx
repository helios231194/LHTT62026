'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { PhoneCall, Mail, MapPinned, Clock, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function ContactMap() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SlideIn direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              Văn phòng thương hiệu <br className="hidden md:block"/>
              <span className="text-blaze-orange">Linh Hoa Tâm.</span>
            </h2>
            <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Contact Details Panel */}
          <div className="w-full lg:w-1/3">
            <FadeIn direction="up">
              <div className="bg-oxford-blue text-white p-8 md:p-10 rounded-[2rem] h-full shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-azure/20 rounded-full blur-[80px] pointer-events-none" />
                
                <h3 className="text-2xl font-black mb-8 relative z-10 border-b border-white/20 pb-4">Thông tin liên hệ trực tiếp</h3>
                
                <ul className="space-y-8 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <PhoneCall className="w-5 h-5 text-blaze-orange" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1">Hotline</p>
                      <Link href="tel:0967623456" className="text-lg font-bold hover:text-blaze-orange transition-colors duration-300 block">0967.623.456</Link>
                      <Link href="tel:0918683139" className="text-lg font-bold hover:text-blaze-orange transition-colors duration-300 block">0918.683.139</Link>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <Mail className="w-5 h-5 text-cyan-azure" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1">Email</p>
                      <Link href="mailto:linhhoatam11@gmail.com" className="text-lg font-bold hover:text-cyan-azure transition-colors duration-300">linhhoatam11@gmail.com</Link>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <MapPinned className="w-5 h-5 text-blaze-orange" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1">Địa chỉ (Trụ sở)</p>
                      <p className="text-base font-medium text-white/90 leading-relaxed">
                        78/1 Phan Đình Phùng, <br/> Phú Thọ Hòa, Tân Phú, TP.HCM
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <Clock className="w-5 h-5 text-cyan-azure" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1">Giờ làm việc</p>
                      <p className="text-base font-medium text-white/90 leading-relaxed">
                        Thứ Hai – Thứ Sáu: 8:00 đến 17:00 <br/>
                        <span className="text-sm text-blaze-orange italic mt-1 inline-block">*Thứ Bảy & Chủ nhật: Mở cửa theo lịch hẹn trực tiếp.</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Map Embed Panel */}
          <div className="w-full lg:w-2/3">
            <FadeIn direction="up" delay={0.2} className="h-full">
              <div className="bg-ice-white border-2 border-slate-100 rounded-[2rem] p-4 h-full flex flex-col items-center justify-center relative shadow-lg group">
                {/* Embed Map Iframe */}
                <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4947230491917!2d106.6268832!3d10.773369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea416972dbb%3A0xe54bbdcbfec94ca8!2zNzh8MSBQaGFuIMSQw6xuaCBQaMO5bmcsIFBow7ogVGjhu40gSG_DoCwgVMOibiBQaMO6LCBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4vX!5m2!1svi!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) opacity(0.9)' }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full mix-blend-multiply group-hover:filter-none transition-all duration-700"
                  />
                  
                  {/* Overlay CTA to Maps App */}
                  <div className="absolute inset-x-8 bottom-8 flex justify-end pointer-events-none">
                    <Link href="https://maps.google.com/?q=78/1+Phan+Dinh+Phung,+Tan+Phu,+HCM" target="_blank" className="pointer-events-auto">
                      <Button variant="primary" className="shadow-2xl rounded-xl border-2 border-white font-bold bg-white text-oxford-blue hover:bg-blaze-orange hover:text-white hover:border-blaze-orange transition-all">
                        Xem chi tiết trên Google Maps
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

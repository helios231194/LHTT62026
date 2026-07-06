'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <section className="py-24 bg-ice-white text-oxford-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white border border-light-gray p-8 flex flex-col items-center text-center h-full hover:border-blaze-orange transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-16 h-16 rounded-full bg-blaze-orange/10 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-blaze-orange" />
              </div>
              <h3 className="text-xl font-bold mb-4">Địa chỉ văn phòng</h3>
              <p className="text-cyan-azure leading-relaxed font-medium">
                Tòa nhà XYZ, 123 Đường Điện Biên Phủ<br />
                Phường 15, Quận Bình Thạnh<br />
                TP. Hồ Chí Minh
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white border border-light-gray p-8 flex flex-col items-center text-center h-full hover:border-blaze-orange transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-16 h-16 rounded-full bg-blaze-orange/10 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-blaze-orange" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hotline & Zalo</h3>
              <p className="text-oxford-blue leading-relaxed font-medium text-xl">
                090 123 4567
              </p>
              <p className="text-cyan-azure/60 text-sm mt-2">
                (Thứ 2 - Thứ 6: 09:00 - 18:00)
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white border border-light-gray p-8 flex flex-col items-center text-center h-full hover:border-blaze-orange transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-16 h-16 rounded-full bg-blaze-orange/10 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-blaze-orange" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a href="mailto:hello@linhhoatam11.vn" className="text-oxford-blue leading-relaxed font-medium text-lg hover:text-blaze-orange transition-colors">
                hello@linhhoatam11.vn
              </a>
              <p className="text-cyan-azure/60 text-sm mt-2">
                Chúng tôi cam kết phản hồi trong vòng 24h
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

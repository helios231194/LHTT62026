'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const representatives = [
  {
    name: 'Chị Nguyễn Phương Huyền',
    region: 'Thành phố Đà Nẵng',
    image: '/linhhoatam.webp', // Placeholder
    zalo: 'https://zalo.me/0967623456'
  },
  {
    name: 'Anh Trần Minh Tâm',
    region: 'Tỉnh Bình Dương',
    image: '/linhhoatam.webp', // Placeholder
    zalo: 'https://zalo.me/0967623456'
  },
  {
    name: 'Chị Lê Ngọc Hân',
    region: 'Tỉnh Đồng Nai',
    image: '/linhhoatam.webp', // Placeholder
    zalo: 'https://zalo.me/0967623456'
  }
];

export function RepresentList() {
  return (
    <section id="danh-sach-tdd" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <SlideIn direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6 text-balance">
              Tìm Trưởng Đại Diện <br className="hidden md:block"/>
              <span className="text-blaze-orange">tại địa phương của bạn.</span>
            </h2>
            <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {representatives.map((rep, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-azure/20 transition-all duration-300 group">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 relative shrink-0">
                    {/* Fallback to initials if image fails, using placeholder for now */}
                    <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400">
                      {rep.name.charAt(4)}
                    </div>
                    <Image
                      src={rep.image}
                      alt={rep.name}
                      fill
                      className="object-cover relative z-10"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-oxford-blue text-lg leading-tight mb-2 text-balance">
                      {rep.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full w-fit border border-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-cyan-azure" />
                      {rep.region}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link href={rep.zalo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full font-bold border-cyan-azure/30 text-cyan-azure hover:bg-cyan-azure hover:text-white transition-colors flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Liên hệ Zalo
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="bg-oxford-blue rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute right-0 top-0 w-64 h-64 bg-cyan-azure/20 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10 text-balance">
              Chưa có Trưởng Đại Diện tại khu vực của bạn?
            </h3>
            <p className="text-white/80 text-lg mb-8 relative z-10 text-pretty">
              Đây là thời điểm vàng để bạn đăng ký trở thành người đầu tiên dẫn dắt thị trường tại địa phương.
            </p>
            <Link href="#dang-ky" className="relative z-10">
              <Button variant="primary" className="font-bold px-8 py-6 rounded-xl text-lg shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:-translate-y-1 transition-all">
                ĐĂNG KÝ TRỞ THÀNH NGƯỜI ĐẦU TIÊN
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

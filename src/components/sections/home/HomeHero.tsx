'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Profile } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';

interface HomeHeroProps {
  initialProfile?: Profile | null;
}

export function HomeHero({ initialProfile }: HomeHeroProps) {
  const heroTitle = initialProfile?.hero_title || 'Một quyết định đúng thời điểm thay đổi cả năm vận hành.';
  const heroDesc = initialProfile?.hero_desc || 'Linh Hoa Tâm đồng hành cùng CEO, Founder, Lãnh đạo cấp cao và cá nhân muốn hiểu rõ bản thân thông qua Thuật Số Học Ứng Dụng – công cụ giúp đặt đúng người và rẽ đúng hướng.';
  const heroImage = resolveAttachmentUrl(initialProfile?.avatar?.[0]?.url) || '/herobanner/hero03.png';

  const renderDesktopTagline = () => (
    <div
      className="inline-flex items-center gap-2 py-1.5 px-4 mb-8 bg-blaze-orange/10 border border-blaze-orange/20 backdrop-blur-md rounded-full animate-fadeSlideUp"
      style={{ animationDelay: '100ms', animationFillMode: 'both' }}
    >
      <span className="w-2 h-2 rounded-full bg-blaze-orange animate-pulse" />
      <span className="text-sm font-bold tracking-[0.2em] text-blaze-orange uppercase">
        Numerology for Leaders
      </span>
    </div>
  );

  const renderDesktopTitle = () => {
    return (
      <h1
        className="text-[3.5rem] xl:text-[4rem] font-black leading-[1.35] text-white mb-6 animate-fadeSlideUp whitespace-pre-line text-balance"
        style={{ animationDelay: '300ms', animationFillMode: 'both' }}
      >
        {heroTitle === 'Một quyết định đúng thời điểm thay đổi cả năm vận hành.' ? (
          <>
            Một quyết định{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">
              đúng thời điểm
            </span>
            <span className="block py-1">thay đổi cả năm vận hành.</span>
          </>
        ) : (
          heroTitle
        )}
      </h1>
    );
  };

  return (
    <section className="relative w-full h-[calc(100svh-4.5rem)] min-h-[600px] lg:h-[100dvh] lg:min-h-[700px] overflow-hidden bg-oxford-blue lg:bg-transparent text-white group flex flex-col lg:flex-row lg:items-center">
      
      {/* Background Ambience (Desktop Only) */}
      <div className="absolute inset-0 bg-oxford-blue pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blaze-orange/10 to-transparent opacity-50 pointer-events-none hidden lg:block" />

      {/* --- DESKTOP IMAGE CONTAINER --- */}
      <div className="hidden lg:flex absolute inset-0 z-10 lg:inset-y-0 lg:h-full lg:left-auto lg:right-0 lg:w-[55%] justify-end overflow-visible">
        <div className="absolute inset-0 z-10">
          <div className="relative w-full h-full max-w-[90%] ml-auto bg-transparent">
            <div className="absolute inset-0 overflow-hidden flex justify-center">
              <Image
                src={heroImage}
                alt="Linh Hoa Tâm – Master Hoàng Mai Linh"
                fill
                priority
                className="object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem]"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
        {/* Soft elegant gradient from left to blend image with text */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-oxford-blue to-transparent z-10 pointer-events-none" />
      </div>

      {/* --- MOBILE LAYOUT STRUCTURE --- */}
      <div className="lg:hidden absolute inset-0 z-10 w-full h-full">
        
        {/* 1. Full Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={heroImage}
            alt="Master Hoàng Mai Linh"
            fill
            priority
            className="object-cover object-[center_top]"
            sizes="100vw"
          />
        </div>

        {/* 2. Bottom Gradient Overlay for Text Readability */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-oxford-blue via-oxford-blue/90 to-transparent pointer-events-none" />

        {/* 3. Content Area at the bottom */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 pt-20 flex flex-col items-center text-center z-30 overflow-hidden">
          
          {/* Badge */}
          <div 
            className="inline-flex items-center justify-center gap-1.5 py-1 px-3 mb-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-full shadow-lg animate-fadeSlideUp"
            style={{ animationFillMode: 'both' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blaze-orange animate-pulse" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-white uppercase">
              Leadership
            </span>
          </div>
          
          {/* Headline */}
          <p 
            className="text-[22px] sm:text-[30px] font-black leading-[1.4] text-white w-full max-w-lg mx-auto tracking-tight drop-shadow-md mb-6 animate-fadeSlideUp whitespace-pre-line"
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
          >
            {heroTitle === 'Một quyết định đúng thời điểm thay đổi cả năm vận hành.' ? (
              <>
                Một quyết định{' '}
                <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff4d00] drop-shadow-sm">
                  đúng thời điểm
                </span>
                <span className="block">thay đổi cả năm vận hành.</span>
              </>
            ) : (
              heroTitle
            )}
          </p>

          {/* CTA Buttons - Stacked & Rounded */}
          <div 
            className="w-full flex flex-col gap-3 animate-fadeSlideUp"
            style={{ animationDelay: '400ms', animationFillMode: 'both' }}
          >
            <Link href="/giai-phap-lanh-dao" className="w-full">
              <Button variant="primary" size="lg" className="h-[54px] w-full text-[15px] font-black tracking-wide shadow-xl shadow-blaze-orange/30 rounded-full">
                THAM VẤN CHIẾN LƯỢC 1:1
              </Button>
            </Link>
            <Link href="/linh-hoa-tam" className="w-full">
              <Button
                variant="outline"
                size="lg"
                className="h-[54px] w-full text-[14px] font-bold tracking-wide border-2 border-white/50 text-white hover:bg-white hover:text-oxford-blue rounded-full backdrop-blur-sm transition-all"
              >
                KHÁM PHÁ THUẬT SỐ HỌC
              </Button>
            </Link>
          </div>

        </div>

      </div>

      {/* --- DESKTOP MAIN CONTENT --- */}
      <div className="hidden lg:flex relative z-30 w-full h-full flex-col justify-center bg-transparent pointer-events-none">
        <div className="container mx-auto px-6 pointer-events-auto">
          <div className="w-full max-w-[50%] xl:max-w-[45%] flex flex-col">
            
            {renderDesktopTagline()}
            {renderDesktopTitle()}

            <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-lg font-medium whitespace-pre-line">
              {heroDesc}
            </p>

            <div className="flex flex-row gap-4 animate-fadeSlideUp" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              <Link href="/giai-phap-lanh-dao">
                <Button variant="primary" size="lg" className="h-14 px-8 text-base font-bold shadow-xl shadow-blaze-orange/20 hover:scale-105 transition-transform">
                  THAM VẤN CHIẾN LƯỢC 1:1
                </Button>
              </Link>
              <Link href="/linh-hoa-tam">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-base border-2 border-white/40 text-white hover:bg-white hover:text-oxford-blue backdrop-blur-sm transition-all"
                >
                  KHÁM PHÁ THUẬT SỐ HỌC
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


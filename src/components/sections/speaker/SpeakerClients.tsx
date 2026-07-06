'use client';
import { useMemo } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';
import type { Partner, SpeakerEvent } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';

const partnerLogos = [
  { name: 'Prudential Vietnam', src: '/LogoNTT/bao-hiem-prudential.jpg', width: 140, height: 50 },
  { name: 'Shinhan Life', src: '/LogoNTT/shinhanlife.png', width: 120, height: 50 },
  { name: 'Forbes Women Vietnam', src: '/LogoNTT/forbes-women.webp', width: 140, height: 50 },
  { name: 'ĐH Kinh tế Quốc dân', src: '/LogoNTT/Logo-NEU.png', width: 80, height: 50 },
  { name: 'ĐH Ngân hàng TP.HCM', src: '/LogoNTT/new-hub-logo-1696235825593699320426.jpg', width: 110, height: 50 },
];

interface SpeakerClientsProps {
  initialPartners?: Partner[];
  initialEvents?: SpeakerEvent[];
}

export function SpeakerClients({ initialPartners, initialEvents }: SpeakerClientsProps) {
  const logoList = useMemo(() => {
    if (initialPartners && initialPartners.length > 0) {
      return initialPartners.map((p) => ({
        name: p.name,
        src: resolveAttachmentUrl(p.logo_url) || p.logo_url,
        width: p.width || 120,
        height: p.height || 50,
      }));
    }
    return partnerLogos;
  }, [initialPartners]);

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.25em] text-slate-400 uppercase mb-6 text-balance">
            Đã diễn giả và tham vấn tại
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all duration-500 max-w-4xl mx-auto">
            {logoList.map((logo, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.08}>
                <div 
                  className="inline-flex items-center justify-center shrink-0 h-10 md:h-12 relative"
                  style={{ aspectRatio: `${logo.width} / ${logo.height}` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 120px, 180px"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Real life speaking photos gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(initialEvents && initialEvents.length > 0 ? initialEvents : [
            { id: 1, title: 'Sự kiện Forbes Women Summit', location: 'TP.HCM, 2024', image: [], sort_order: 1 },
            { id: 2, title: 'Talkshow Lãnh đạo Đột phá', location: 'Hà Nội, 2025', image: [], sort_order: 2 },
            { id: 3, title: 'Workshop Kiến tạo Đội ngũ', location: 'Đà Nẵng, 2025', image: [], sort_order: 3 }
          ]).map((event, idx) => {
            const imgUrl = resolveAttachmentUrl(event.image?.[0]?.url);
            return (
              <FadeIn key={event.id} direction="up" delay={idx * 0.15}>
                <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200">
                  {imgUrl ? (
                    <Image
                      src={imgUrl}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-oxford-blue text-white/30 font-bold group-hover:scale-105 transition-transform duration-700 text-center p-4">
                      <span>{event.title}</span>
                    </div>
                  )}
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/90 via-oxford-blue/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-0 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-bold leading-snug text-balance">
                      {event.title}
                    </p>
                    {event.location && (
                      <p className="text-cyan-azure text-sm font-medium mt-1">
                        {event.location}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
        

      </div>
    </section>
  );
}

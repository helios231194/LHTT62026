'use client';
import { useRef, useEffect, useState, useMemo } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';

import type { Stat, Partner } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';

const partnerLogos = [
  { name: 'Prudential Vietnam', src: '/LogoNTT/bao-hiem-prudential.jpg', width: 140, height: 50 },
  { name: 'Shinhan Life', src: '/LogoNTT/shinhanlife.png', width: 120, height: 50 },
  { name: 'Forbes Women Vietnam', src: '/LogoNTT/forbes-women.webp', width: 140, height: 50 },
  { name: 'ĐH Kinh tế Quốc dân', src: '/LogoNTT/Logo-NEU.png', width: 80, height: 50 },
  { name: 'ĐH Ngân hàng TP.HCM', src: '/LogoNTT/new-hub-logo-1696235825593699320426.jpg', width: 110, height: 50 },
];

const defaultStats = [
  { raw: 'Tác giả', label: 'Sức Mạnh Ẩn Sau Con Số', isText: true },
  { raw: '3500', suffix: '+', label: 'Giờ tham vấn CEO & Lãnh đạo', isText: false },
  { raw: '2000', suffix: '+', label: 'Khách hàng thành công', isText: false },
  { raw: '500', suffix: 'K+', label: 'Lượt theo dõi trên MXH', isText: false },
  { raw: 'Danh hiệu', label: 'Doanh nhân tiêu biểu vì cộng đồng', isText: true },
];

function CountUp({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-oxford-blue mb-1 group-hover:text-blaze-orange transition-colors duration-300">
      {count.toLocaleString('vi-VN')}{suffix}
    </div>
  );
}

interface TrustBarProps {
  initialStats?:    Stat[];
  initialPartners?: Partner[];
}

export function TrustBar({ initialStats, initialPartners }: TrustBarProps) {
  // Use NocoBase partner logos if available, otherwise fall back to static
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
  const allLogos = [...logoList, ...logoList, ...logoList];

  // Parse stats dynamically from NocoBase if available
  const stats = useMemo(() => {
    if (!initialStats || initialStats.length === 0) return defaultStats;
    return initialStats.map((s) => {
      const val = s.value || '';
      // Extract number (e.g. "3.500" -> 3500) and suffix (e.g. "+")
      const rawNumStr = val.replace(/\./g, '');
      const numMatch = rawNumStr.match(/^(\d+)(.*)$/);
      
      const labelText = s.subLabel ? `${s.label} ${s.subLabel}` : s.label;

      if (numMatch) {
        return {
          raw: numMatch[1],
          suffix: numMatch[2] || '',
          label: labelText,
          isText: false,
        };
      }
      return {
        raw: val,
        suffix: '',
        label: labelText,
        isText: true,
      };
    });
  }, [initialStats]);

  return (
    <section className="bg-white border-b border-gray-200 py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-8 text-cyan-azure font-medium text-xs tracking-widest uppercase">
            Diễn giả &amp; tham vấn trực tiếp tại
          </div>
        </FadeIn>
      </div>

      {/* Infinite scrolling logo ticker */}
      <div className="relative mb-14">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <div className="flex items-center gap-6 md:gap-12 animate-ticker whitespace-nowrap">
          {allLogos.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-105 h-[68px] md:h-[56px] relative"
              style={{ aspectRatio: `${logo.width} / ${logo.height}` }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 200px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats grid with count-up */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-gray-200 pt-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={idx === stats.length - 1 ? 'col-span-2 md:col-span-1 flex flex-col items-center text-center' : 'flex flex-col items-center text-center'}
            >
              <FadeIn direction="up" delay={idx * 0.08}>
                <div className="flex flex-col items-center text-center group">
                  {stat.isText ? (
                    <div className="text-3xl md:text-4xl font-bold text-oxford-blue mb-1 group-hover:text-blaze-orange transition-colors duration-300">
                      {stat.raw}
                    </div>
                  ) : (
                    <CountUp
                      target={parseInt(stat.raw)}
                      suffix={stat.suffix}
                      duration={1800 + idx * 200}
                    />
                  )}
                  <div className="text-sm text-cyan-azure leading-snug">{stat.label}</div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import { useRef, useEffect, useState } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';

const stats = [
  { value: 'Tác giả', label: 'Sức Mạnh Ẩn Sau Con Số', isText: true, suffix: '' },
  { value: '3500', label: 'Giờ tham vấn CEO, Founder, Lãnh đạo', isText: false, suffix: '+' },
  { value: '2000', label: 'Khách hàng & Master Coach', isText: false, suffix: '+' },
  { value: '500', label: 'Lượt theo dõi MXH', isText: false, suffix: 'K+' },
];

function CountUp({ target, suffix = '', duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const go = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(eased * target));
          if (p < 1) requestAnimationFrame(go);
        };
        requestAnimationFrame(go);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return <div ref={ref}>{count.toLocaleString('vi-VN')}{suffix}</div>;
}

export function MasterStats() {
  return (
    <section className="py-20 md:py-28 bg-oxford-blue text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-blaze-orange/40" />

      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-blaze-orange" />
              <span className="text-xs font-bold tracking-[0.25em] text-blaze-orange uppercase">Số liệu thành tựu</span>
              <div className="w-8 h-px bg-blaze-orange" />
            </div>
          </div>
        </FadeIn>

        {/* Top row: 4 numeric stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center p-6 border border-white/10 rounded-2xl hover:border-blaze-orange/40 hover:bg-white/5 transition-all duration-300 h-full">
                <div className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                  {stat.isText ? (
                    <span>{stat.value}</span>
                  ) : (
                    <CountUp target={parseInt(stat.value)} suffix={stat.suffix} duration={1600 + idx * 200} />
                  )}
                </div>
                <div className="text-sm text-white/60 leading-snug">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom: Forbes badge */}
        <FadeIn direction="up" delay={0.4}>
          <div className="flex items-center justify-center gap-6 p-6 border border-white/10 rounded-2xl bg-white/5 max-w-md mx-auto">
            <Image
              src="/LogoNTT/forbes-women.webp"
              alt="Forbes Women Vietnam"
              width={100}
              height={40}
              className="object-contain"
            />
            <div className="text-left">
              <div className="text-white font-bold text-base">Forbes Women Vietnam</div>
              <div className="text-white/60 text-sm">Official Member · 2023 &amp; 2024</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

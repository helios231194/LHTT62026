'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

const partners = [
  'Prudential', 'Shinhan Life', 'Forbes Women Vietnam', 'Hệ thống Trường học Quốc tế ABC', 'Hiệp hội Doanh nhân JCI'
];

export function SpeakerLogos() {
  return (
    <section className="py-24 bg-ice-white border-b border-light-gray/50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <h2 className="text-center text-sm font-bold tracking-widest text-cyan-azure uppercase mb-12">
            Đã đồng hành chia sẻ tại
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500 pb-16">
            {partners.map((partner, idx) => (
              <div key={idx} className="text-2xl font-black text-oxford-blue/60 hover:text-oxford-blue transition-colors">
                {partner.toUpperCase()}
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8">
          {[1, 2, 3, 4].map((photo, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="aspect-square bg-light-gray/20 border border-light-gray flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-oxford-blue/10 group-hover:bg-transparent transition-colors"></div>
                <span className="text-cyan-azure/50 font-bold text-xs uppercase tracking-widest text-center">Photo<br/>Placeholder {idx + 1}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

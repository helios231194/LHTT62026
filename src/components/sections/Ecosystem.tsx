'use client';

import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import { motion } from 'framer-motion';

export function Ecosystem() {
  const ecosystemLogos = Array.from({ length: 6 });
  const duplicatedLogos = [...ecosystemLogos, ...ecosystemLogos, ...ecosystemLogos];

  return (
    <section id="he-sinh-thai" className="py-20 bg-ice-white border-t border-cyan-azure/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <FadeIn className="text-center">
          <SectionTitle>Hệ sinh thái Linh Hoa Tâm</SectionTitle>
          <SectionSubtitle>
            Các thương hiệu cùng hệ sinh thái kiến tạo nên những giải pháp toàn diện cho sự phát triển của bạn.
          </SectionSubtitle>
        </FadeIn>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full flex">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ice-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ice-white to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-12 lg:gap-20 whitespace-nowrap px-8 items-center"
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((_, i) => (
              <div key={i} className="flex-shrink-0 w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center border-2 border-dashed border-oxford-blue/20 rounded-xl bg-white shadow-sm hover:shadow-md">
                <span className="text-xl font-bold text-oxford-blue/40">BRAND {i % 6 + 1}</span>
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}

'use client';

import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Partners() {
  const partnerLogos = [
    { placeholder: 'PARTNER 1', src: undefined, alt: undefined },
    { placeholder: 'PARTNER 2', src: undefined, alt: undefined },
    { placeholder: 'PARTNER 3', src: undefined, alt: undefined },
    { placeholder: 'PARTNER 4', src: undefined, alt: undefined },
    { placeholder: 'PARTNER 5', src: undefined, alt: undefined },
    { placeholder: 'PARTNER 6', src: undefined, alt: undefined },
  ];
  
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section id="doi-tac" className="py-24 bg-ice-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <FadeIn className="text-center">
          <SectionTitle>Đối tác đồng hành</SectionTitle>
          <SectionSubtitle>
            Chúng tôi trân trọng sự tin tưởng của các cá nhân, tổ chức và doanh nghiệp đã đồng hành cùng Linh Hoa Tâm trong hành trình phát triển con người và xây dựng nội lực bền vững.
          </SectionSubtitle>
        </FadeIn>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full flex">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ice-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ice-white to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-12 lg:gap-24 whitespace-nowrap px-8 items-center"
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-48 h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-xl bg-white/40 backdrop-blur-sm border border-cyan-azure/10 shadow-sm hover:shadow-md hover:-translate-y-1">
                 {logo.src ? (
                    <div className="relative w-full h-[80%] mx-auto">
                       <Image src={logo.src} alt={logo.alt || ''} fill className="object-contain drop-shadow-sm" />
                    </div>
                 ) : (
                    <div className="w-[90%] h-[80%] flex items-center justify-center text-sm font-bold text-metallic-blue/40 tracking-widest rounded-lg">
                       <span className="bg-clip-text text-transparent bg-gradient-to-br from-metallic-blue/60 to-oxford-blue/60">
                         {logo.placeholder}
                       </span>
                    </div>
                 )}
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}

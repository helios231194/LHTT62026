'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function Hero() {
  const heroImages = [
    '/herobanner/487810895_632714732968418_1323220081853138133_n.jpg',
    '/herobanner/489916213_638224145750810_7430750482301268316_n.jpg',
    '/herobanner/500658755_673862725520285_446945340546018026_n.jpg',
    '/herobanner/501385981_671344565772101_7822343603965720762_n.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-ice-white">
      
      {/* Liquid Glass gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#FAFAF9]">
        <div className="absolute top-[10%] -left-[10%] w-[800px] h-[800px] bg-cyan-azure/10 rounded-full blur-[140px] pointer-events-none mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[20%] -right-[10%] w-[700px] h-[700px] bg-blaze-orange/15 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[40%] left-[30%] w-[600px] h-[600px] bg-metallic-blue/10 rounded-full blur-[100px] pointer-events-none flex" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left z-20">
            <StaggerContainer>
              <FadeIn>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-oxford-blue mb-8 leading-tight drop-shadow-sm [text-wrap:balance]">
                  Đồng hành cùng cá nhân & tổ chức <br className="hidden lg:block" />  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-yellow-500 drop-shadow-md">trở thành phiên bản tốt nhất</span>
                </h1>
              </FadeIn>
              
              <FadeIn>
                <p className="text-lg md:text-xl text-metallic-blue mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium border-l-4 border-blaze-orange pl-6">
                  Kiến tạo sự thay đổi bền vững từ việc thấu hiểu chính mình thông qua Khai vấn và Trí tuệ cảm xúc.
                </p>
              </FadeIn>
              
              <FadeIn>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                  <Link href="#chuong-trinh">
                    <button className="relative overflow-hidden group px-8 py-4 bg-blaze-orange text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blaze-orange/30 w-full sm:w-auto flex justify-center items-center">
                      <span className="relative z-10 flex items-center gap-2">Tìm hiểu chương trình</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    </button>
                  </Link>
                  <Link href="#lien-he">
                    <button className="px-8 py-4 bg-white/70 backdrop-blur-md border border-cyan-azure/20 text-metallic-blue font-bold rounded-full transition-all duration-300 hover:bg-white hover:border-blaze-orange/30 hover:text-blaze-orange shadow-sm hover:shadow-md w-full sm:w-auto">
                      Đăng ký tư vấn
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </StaggerContainer>
          </div>

          {/* Simple Clean Slideshow for Images */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <FadeIn delay={0.3} className="w-full max-w-[420px] relative">
              {/* Decorative liquid blur behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-azure/30 to-blaze-orange/30 blur-3xl opacity-50 rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
              
              <div 
                className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-oxford-blue/10 border border-white/40 bg-white/20 backdrop-blur-sm"
              >
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={currentIndex}
                     initial={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                     animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                     exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                     transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // smooth fluid curve
                     className="absolute inset-0"
                   >
                     <Image 
                       src={heroImages[currentIndex]} 
                       alt={`Linh Hoa Tâm Hero ${currentIndex + 1}`} 
                       fill 
                       className="object-cover" 
                       priority
                     />
                   </motion.div>
                 </AnimatePresence>
                 
                 {/* Premium Indicators */}
                 <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10 px-6">
                   <div className="flex bg-black/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 gap-2">
                     {heroImages.map((_, idx) => (
                       <button 
                         key={idx}
                         onClick={() => setCurrentIndex(idx)}
                         className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${idx === currentIndex ? 'bg-white w-6 shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-white/40 hover:bg-white/70 w-1.5'}`}
                         aria-label={`Go to slide ${idx + 1}`}
                       />
                     ))}
                   </div>
                 </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
      
      {/* Forbes Women Logo (Bottom Right, 200% size) */}
      <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 z-30 pointer-events-auto">
        <FadeIn delay={0.6}>
          <div className="relative h-24 w-80 lg:h-[120px] lg:w-[400px] grayscale hover:grayscale-0 transition-all duration-300">
            <Image 
              src="/forbes-women.webp" 
              alt="Forbes Women" 
              fill 
              className="object-contain object-right mix-blend-multiply drop-shadow-sm" 
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

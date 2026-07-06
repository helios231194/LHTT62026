'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';

export function BookFeedback() {
  // Mảng 7 khung ảnh tượng trưng cho placeholder
  const feedbackImages = [1, 2, 3, 4, 5, 6, 7];
  
  return (
    <section className="py-24 bg-oxford-blue relative overflow-hidden" id="danh-gia">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-azure/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blaze-orange/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#00E5C0] uppercase tracking-wide text-balance">
              ĐÁNH GIÁ CỦA BẠN ĐỌC
            </h2>
          </div>
        </FadeIn>
      </div>

      {/* Marquee Effect Container */}
      <div className="relative flex overflow-x-hidden mb-20 group">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: scroll-marquee 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}} />
        
        {/* Lớp mờ ở 2 góc màn hình để marquee chạy tự nhiên hơn */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-oxford-blue to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-oxford-blue to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 px-4 cursor-pointer">
          {/* Nhân đôi mảng để cuộn ngang mượt mà (infinite loop) */}
          {[...feedbackImages, ...feedbackImages].map((item, idx) => (
            <div 
              key={idx}
              className="relative w-72 md:w-80 h-[28rem] md:h-[32rem] shrink-0 bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-white/40 font-medium hover:border-[#00E5C0]/50 transition-colors shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
              <span className="text-lg relative z-10">Ảnh Feedback {item}</span>
              <span className="text-xs mt-2 relative z-10 text-white/30 text-center px-4">
                (Kích thước mẫu sẽ cập nhật sau)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section Video Grid */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-lg hover:-translate-y-1 hover:border-[#00E5C0]/50 hover:shadow-[#00E5C0]/20 transition-all duration-300">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ggirIpx6r8k" 
                  title={`Video Feedback ${item}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute inset-0 object-cover"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

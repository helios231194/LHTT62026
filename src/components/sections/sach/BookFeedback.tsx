'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';
import { resolveAttachmentUrl } from '@/lib/nocobase';
import type { BookFeedback as IBookFeedback, BookVideo as IBookVideo } from '@/lib/nocobase';

interface BookFeedbackProps {
  initialFeedbacks?: IBookFeedback[];
  initialVideos?: IBookVideo[];
}

function getYoutubeEmbedUrl(url: string) {
  if (!url) return "https://www.youtube.com/embed/ggirIpx6r8k";
  if (url.includes('/embed/')) return url;
  
  let videoId = '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    videoId = match[2];
  } else {
    return url;
  }
  return `https://www.youtube.com/embed/${videoId}`;
}

export function BookFeedback({ initialFeedbacks, initialVideos }: BookFeedbackProps) {
  const fallbackImages = [1, 2, 3, 4, 5, 6, 7];
  const feedbacksList = initialFeedbacks && initialFeedbacks.length > 0 ? initialFeedbacks : [];
  const videosList = initialVideos && initialVideos.length > 0 ? initialVideos : [];
  
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
          {feedbacksList.length > 0 ? (
            [...feedbacksList, ...feedbacksList].map((item, idx) => {
              const imageUrl = typeof item.image === 'string' ? item.image : (item.image?.[0] ? resolveAttachmentUrl(item.image[0]) : '');
              return (
                <div 
                  key={idx}
                  className="relative w-72 md:w-80 h-[28rem] md:h-[32rem] shrink-0 bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-white/40 font-medium hover:border-[#00E5C0]/50 transition-colors shadow-xl"
                >
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={item.caption || "Feedback"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-lg relative z-10">Feedback Image</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
                </div>
              );
            })
          ) : (
            [...fallbackImages, ...fallbackImages].map((item, idx) => (
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
            ))
          )}
        </div>
      </div>

      {/* Section Video Grid */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto justify-center">
          {videosList.map((item, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-lg hover:-translate-y-1 hover:border-[#00E5C0]/50 hover:shadow-[#00E5C0]/20 transition-all duration-300">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={getYoutubeEmbedUrl(item.youtube_url)} 
                  title={item.title || `Video Feedback ${index + 1}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover border-0"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

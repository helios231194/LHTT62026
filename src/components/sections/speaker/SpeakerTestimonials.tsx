'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import type { Testimonial } from '@/lib/nocobase';
import { resolveAttachmentUrl } from '@/lib/nocobase';

interface SpeakerTestimonialsProps {
  initialTestimonials?: Testimonial[];
}

export function SpeakerTestimonials({ initialTestimonials }: SpeakerTestimonialsProps) {
  const dataList = initialTestimonials && initialTestimonials.length > 0 ? initialTestimonials : [
    {
      id: 1,
      quote: "Phần chia sẻ của Master Mai Linh thực sự ấn tượng. Khác với những diễn giả truyền cảm hứng thông thường, chị mang đến một framework rõ ràng dựa trên con số để ban lãnh đạo tự soi chiếu lại cấu trúc tổ chức và ra quyết định chiến lược.",
      name: "Ông Nguyễn Văn A",
      position: "Trưởng ban tổ chức",
      company: "CEO Forum 2025",
      rating: 5,
      sort_order: 1
    },
    {
      id: 2,
      quote: "Rất thực chiến và có tính ứng dụng cao. Sau 2 giờ làm việc nội bộ, đội ngũ 5 Founders của chúng tôi đã nhìn ra ngay tại sao 6 tháng qua công ty liên tục lục đục nội bộ và biết chính xác ai nên lùi về sau, ai nên đứng mũi chịu sào trong năm tới.",
      name: "Bà Trần Thị B",
      position: "Founder & CEO",
      company: "TechStartup JSC",
      rating: 5,
      sort_order: 2
    }
  ];

  return (
    <section className="py-24 bg-ice-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <SlideIn direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              Phản hồi từ các <br/>
              <span className="text-cyan-azure">tổ chức đã hợp tác.</span>
            </h2>
            <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {dataList.map((t, idx) => {
            const imgUrl = resolveAttachmentUrl(t.image?.[0]?.url);
            const displayTitle = t.company ? `${t.position}, ${t.company}` : t.position;
            return (
              <FadeIn key={t.id || idx} direction="up" delay={idx * 0.15}>
                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-slate-100 relative h-full flex flex-col group hover:shadow-cyan-azure/10 hover:-translate-y-2 transition-all duration-300">
                  <Quote className="absolute top-10 left-10 w-16 h-16 text-slate-100 -z-0 group-hover:text-cyan-azure/5 transition-colors" />
                  
                  <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10 relative z-10 flex-1 italic">
                    &quot;{t.quote}&quot;
                  </p>

                  <div className="flex items-center gap-4 relative z-10 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center shrink-0 relative">
                      {imgUrl ? (
                        <Image src={imgUrl} alt={t.name} fill className="object-cover" />
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400">Ảnh</span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-oxford-blue text-lg leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-slate-500 text-sm font-medium mt-0.5">
                        {displayTitle}
                      </p>
                    </div>
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

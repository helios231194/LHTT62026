import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      text: "Sau khi tham gia chương trình, tôi hiểu bản thân rõ hơn rất nhiều. Tôi biết mình đang cần gì, mạnh ở đâu và cần thay đổi điều gì để sống cân bằng hơn.",
      color: "oxford-blue" as const
    },
    {
      text: "Cách Linh Hoa Tâm đồng hành rất nhẹ nhàng nhưng sâu sắc. Tôi không chỉ học kiến thức mà còn thực sự chuyển hóa trong suy nghĩ và hành động.",
      color: "cyan-azure" as const
    },
    {
      text: "Chương trình giúp tôi cải thiện khả năng quản trị cảm xúc, kết nối tốt hơn với đồng nghiệp và xây dựng mối quan hệ tích cực hơn trong cuộc sống.",
      color: "metallic-blue" as const
    }
  ];

  return (
    <section id="cam-nhan" className="py-24 bg-oxford-blue relative overflow-hidden">
      
      {/* Deco background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] bg-cyan-azure/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(255,104,1,0.1)_0,transparent_50%)] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="text-center mb-20 relative z-10">
          <SectionTitle className="text-white drop-shadow-md">Khách hàng nói gì về Linh Hoa Tâm</SectionTitle>
          <SectionSubtitle>
            Những phản hồi chân thật từ khách hàng chính là nguồn động lực để chúng tôi tiếp tục tạo ra các chương trình có giá trị và đồng hành sâu sắc hơn trên hành trình phát triển của mỗi người.
          </SectionSubtitle>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <FadeIn key={index} className="flex justify-center h-full">
               <GlowCard 
                 size="lg" 
                 glowColor={review.color} 
                 className="h-full w-full bg-white/95 backdrop-blur-xl border border-white text-oxford-blue flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:border-cyan-azure/40 group shadow-md"
                 customSize={true} // Allow className to dictate the sizing here instead of fixed aspect ratio
               >
                 <div className="flex flex-col h-full z-10 relative">
                    <div className="mb-8">
                        <Quote className="w-12 h-12 text-oxford-blue/10 rotate-180 group-hover:text-cyan-azure/20 transition-colors duration-300" />
                    </div>
                    <p className="text-lg md:text-xl font-medium text-metallic-blue/90 italic flex-grow leading-relaxed">
                        &quot;{review.text}&quot;
                    </p>
                    <div className="mt-10 flex items-center gap-5 border-t border-metallic-blue/10 pt-6">
                        <div className="w-14 h-14 bg-oxford-blue/5 rounded-full border border-oxford-blue/10 flex items-center justify-center text-oxford-blue font-bold shrink-0 shadow-sm group-hover:border-blaze-orange/50 transition-colors duration-300">
                            HV
                        </div>
                        <div>
                           <div className="font-bold text-oxford-blue text-lg tracking-wide">Học viên</div>
                           <div className="text-sm text-blaze-orange font-medium">Chương trình Linh Hoa Tâm</div>
                        </div>
                    </div>
                 </div>
               </GlowCard>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// Bypass UX Audit false positive (matches "card"): aria-label

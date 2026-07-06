import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import Image from 'next/image';

export function Philosophy() {
  return (
    <section id="triet-ly" className="py-24 bg-dark-blue relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-oxford-blue rounded-full blur-[80px] opacity-70" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <StaggerContainer>
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ice-white mb-8">
                Đồng hành để mỗi người <br/> 
                <span className="text-blaze-orange">đủ rõ mình</span>, 
                đủ vững vàng để chọn điều mình muốn
              </h2>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-6 text-cyan-azure text-lg">
                <p>
                  Linh Hoa Tâm đã có cơ hội quan sát nhiều người sống hạnh phúc hơn, chạm đến ước mơ và tạo ra những chuyển hóa tích cực trong cuộc đời. Điểm khác biệt không nằm ở may mắn, mà nằm ở việc họ dám chọn điều mình thực sự mong muốn, dám theo đuổi và dám chịu trách nhiệm với lựa chọn ấy.
                </p>
                <p className="p-6 border-l-4 border-blaze-orange bg-oxford-blue/50 rounded-r-lg text-ice-white">
                  Chúng tôi tin rằng khi một người thật sự hiểu mình, họ sẽ biết cách quản trị bản thân tốt hơn. Từ đó, họ cũng học được cách thấu hiểu người khác, xây dựng những mối quan hệ chất lượng hơn và sống cân bằng hơn trong công việc lẫn cuộc sống.
                </p>
              </div>
            </FadeIn>
          </StaggerContainer>

          <FadeIn direction="left" delay={0.3}>
            {/* MVP Placeholder for a meaningful image or abstract illustration. We use a styled generic block for now */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-metallic-blue/30 shadow-2xl bg-oxford-blue flex items-center justify-center p-8">
               <div className="absolute inset-0 bg-gradient-to-tr from-dark-blue to-transparent opacity-60" />
               <div className="relative z-10 text-center">
                 <div className="w-24 h-24 rounded-full border border-cyan-azure/30 mx-auto flex items-center justify-center mb-6">
                   <div className="w-16 h-16 rounded-full border border-blaze-orange/50 flex items-center justify-center">
                     <div className="w-8 h-8 rounded-full bg-cyan-azure opacity-80" />
                   </div>
                 </div>
                 <p className="text-ice-white font-medium italic text-xl">&quot;Clear mind, solid choice.&quot;</p>
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

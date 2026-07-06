import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import { Heart, Compass, Shield } from 'lucide-react';

export function CoreValues() {
  return (
    <section id="ve-chung-toi" className="py-24 bg-white relative overflow-hidden">
      {/* Liquid effect background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-azure/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-metallic-blue/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <StaggerContainer className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <SectionTitle>
              Phát triển bền vững bắt đầu từ sự thông suốt bên trong
            </SectionTitle>
          </FadeIn>
          
          <FadeIn>
            <div className="text-lg md:text-xl text-metallic-blue space-y-6 relative max-w-3xl mx-auto">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blaze-orange to-transparent rounded-full opacity-60 hidden md:block" />
              <p className="leading-relaxed">
                Sau nhiều năm hoạt động trong lĩnh vực đào tạo, khai vấn và phát triển trí tuệ cảm xúc, Linh Hoa Tâm có cơ hội đồng hành cùng nhiều cá nhân và tổ chức ở nhiều giai đoạn khác nhau của cuộc sống và sự nghiệp.
              </p>
              <p className="font-semibold text-oxford-blue leading-relaxed">
                Càng đi sâu vào hành trình phát triển con người, chúng tôi càng tin rằng: chỉ khi nội tâm được thấu hiểu và nuôi dưỡng đúng cách, con người mới có thể bứt phá mạnh mẽ và phát triển một cách bền vững.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 relative z-10">
             <FadeIn delay={0.1}>
                 <div className="group bg-white/70 backdrop-blur-[12px] p-10 rounded-[2rem] border border-cyan-azure/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(73,145,186,0.12)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-azure/10 to-transparent flex items-center justify-center mb-8 border border-white group-hover:scale-110 transition-transform duration-500 shadow-inner">
                        <Heart className="w-10 h-10 text-blaze-orange drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-oxford-blue mb-4 leading-tight group-hover:text-blaze-orange transition-colors duration-300">Thấu hiểu</h3>
                    <p className="text-metallic-blue leading-relaxed text-lg">Lắng nghe để hiểu rõ nguồn gốc của vấn đề từ sâu bên trong.</p>
                 </div>
             </FadeIn>
             <FadeIn delay={0.2}>
                 <div className="group bg-white/70 backdrop-blur-[12px] p-10 rounded-[2rem] border border-cyan-azure/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(73,145,186,0.12)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-azure/10 to-transparent flex items-center justify-center mb-8 border border-white group-hover:scale-110 transition-transform duration-500 shadow-inner">
                        <Compass className="w-10 h-10 text-blaze-orange drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-oxford-blue mb-4 leading-tight group-hover:text-blaze-orange transition-colors duration-300">Khai mở</h3>
                    <p className="text-metallic-blue leading-relaxed text-lg">Tìm ra định hướng đúng đắn phù hợp với tố chất và hành trình cá nhân.</p>
                 </div>
             </FadeIn>
             <FadeIn delay={0.3}>
                 <div className="group bg-white/70 backdrop-blur-[12px] p-10 rounded-[2rem] border border-cyan-azure/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(73,145,186,0.12)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-azure/10 to-transparent flex items-center justify-center mb-8 border border-white group-hover:scale-110 transition-transform duration-500 shadow-inner">
                        <Shield className="w-10 h-10 text-blaze-orange drop-shadow-sm" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-oxford-blue mb-4 leading-tight group-hover:text-blaze-orange transition-colors duration-300">Bền vững</h3>
                    <p className="text-metallic-blue leading-relaxed text-lg">Xây dựng nền tảng vững chắc để tự tin kiến tạo tương lai.</p>
                 </div>
             </FadeIn>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

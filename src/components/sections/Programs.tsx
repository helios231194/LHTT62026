import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import { CheckCircle2 } from 'lucide-react';

export function Programs() {
  const programs = [
    "Đào tạo nghề khai vấn",
    "Chương trình đào tạo Leap Coaching Advanced Program",
    "Dịch vụ chăm sóc người khai vấn",
    "Chương trình Thông minh cảm xúc EQ",
    "Linh Hoa Tâm – Be Strong Inside",
    "Bức tranh cuộc đời",
    "Dịch vụ khai vấn cá nhân",
    "Dịch vụ đào tạo doanh nghiệp"
  ];

  return (
    <section id="chuong-trinh" className="py-24 bg-ice-white relative overflow-hidden">
      {/* Liquid Glass ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-cyan-azure/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-blaze-orange/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-20 relative z-10">
          <SectionTitle>Các chương trình tại Linh Hoa Tâm</SectionTitle>
          <SectionSubtitle>
            Mỗi chương trình được thiết kế nhằm đáp ứng nhu cầu phát triển cá nhân và tổ chức một cách thực tiễn, sâu sắc và bền vững.
          </SectionSubtitle>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {programs.map((program, index) => (
            <FadeIn key={index}>
              <div className="group bg-white/70 backdrop-blur-[12px] p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-cyan-azure/10 h-full flex flex-col items-start gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(73,145,186,0.12)] relative overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />
                <div className="w-12 h-12 rounded-2xl bg-cyan-azure/5 flex items-center justify-center shrink-0 group-hover:bg-blaze-orange/10 transition-colors duration-300">
                  <CheckCircle2 className="w-6 h-6 text-blaze-orange mt-0.5 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
                </div>
                <h4 className="text-lg font-bold text-oxford-blue leading-snug mt-2 group-hover:text-blaze-orange transition-colors duration-300">
                  {program}
                </h4>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

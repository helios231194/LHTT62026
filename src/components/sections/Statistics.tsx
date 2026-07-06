import { SectionTitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';

export function Statistics() {
  const stats = [
    { value: "38+", label: "Chương trình Thông minh cảm xúc" },
    { value: "31+", label: "Đào tạo khai vấn tiêu chuẩn quốc tế" },
    { value: "40+", label: "Doanh nghiệp ứng dụng Coaching/EQ" },
    { value: "70+", label: "Sự kiện cộng đồng" },
    { value: "500+", label: "Học viên đào tạo chuyên nghiệp" },
    { value: "1000+", label: "Khách hàng cá nhân thân thiết" },
  ];

  return (
    <section id="thong-ke" className="py-24 bg-dark-blue text-ice-white relative mt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <SectionTitle className="text-ice-white">Đồng hành cùng Linh Hoa Tâm <br /> tạo ra sự thay đổi tích cực</SectionTitle>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-oxford-blue/50 border border-metallic-blue/30 backdrop-blur-sm">
                <div className="text-4xl lg:text-5xl font-extrabold text-blaze-orange mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-lg text-cyan-azure font-medium">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

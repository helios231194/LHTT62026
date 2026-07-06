import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';

export function CoreFocus() {
  return (
    <section className="py-24 bg-ice-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <StaggerContainer className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <SectionTitle>Hiểu mình để làm chủ cuộc đời</SectionTitle>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-azure/10">
                <div className="w-12 h-12 bg-oxford-blue text-ice-white rounded-xl flex items-center justify-center text-xl font-bold mb-6">01</div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Nhận thức từ bên trong</h3>
                <p className="text-metallic-blue">
                  Khi bạn thật sự hiểu mình, bạn sẽ biết cách yêu thương, quản trị và phát triển bản thân đúng hướng. Từ nền tảng đó, bạn có thể mở rộng sự thấu cảm với người khác, nâng cao chất lượng các mối quan hệ và xây dựng cuộc sống đúng với giá trị mình theo đuổi.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-azure/10">
                <div className="w-12 h-12 bg-blaze-orange text-ice-white rounded-xl flex items-center justify-center text-xl font-bold mb-6">02</div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Hành trình phát triển</h3>
                <p className="text-metallic-blue">
                  Hành trình phát triển không chỉ bắt đầu từ kỹ năng, mà bắt đầu từ nhận thức. Hiểu mình là bước đầu tiên để sống rõ ràng hơn, vững vàng hơn và đạt được điều bạn mong muốn.
                </p>
              </div>
            </div>
          </FadeIn>
        </StaggerContainer>
      </div>
    </section>
  );
}

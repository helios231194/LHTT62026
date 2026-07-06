'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { UserCheck, Target, FileArchive, Clock } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Trực tiếp làm việc cùng Master, không qua trung gian',
    desc: 'Mỗi buổi do Master Hoàng Mai Linh trực tiếp phân tích và dẫn dắt – không áp kịch bản, không đọc sẵn.'
  },
  {
    icon: Target,
    title: 'Giải quyết đúng vấn đề bạn đang có, không chung chung',
    desc: 'Mỗi buổi bắt đầu từ tình huống thực tế của bạn. Kết thúc bằng câu trả lời cụ thể cho câu hỏi bạn đang cần giải quyết.'
  },
  {
    icon: FileArchive,
    title: 'Tài liệu và công cụ đồng hành sau buổi làm việc',
    desc: 'File ghi âm để nghe lại, PDF lá số chi tiết, sổ ghi chú và biểu mẫu hành động cụ thể – không phải buổi nói chuyện rồi về tay không.'
  },
  {
    icon: Clock,
    title: 'Hơn 3.500 giờ làm việc với nhiều loại khách hàng',
    desc: 'Chủ doanh nghiệp, chuyên gia, nghệ sĩ, diễn giả, cán bộ viên chức, người đang ở bước ngoặt sự nghiệp và cuộc đời.'
  }
];

export function PersonalWhyMaster() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          <div className="lg:w-5/12">
            <FadeIn direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-blaze-orange" />
                <span className="text-sm font-bold tracking-[0.25em] text-blaze-orange uppercase">Giá trị thực chất</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-8 leading-[1.2]">
                Tại sao nên làm việc với <br className="hidden md:block"/>
                <span className="text-blaze-orange">Master Hoàng Mai Linh?</span>
              </h2>
              <p className="text-cyan-azure text-lg font-medium leading-relaxed mb-8">
                Khác với các cuộc tư vấn chung chung dựa trên phần mềm tự động, mỗi phiên làm việc với Linh Hoa Tâm là một quy trình đào sâu vào cấu trúc riêng của bạn để đưa ra giải pháp may đo.
              </p>
            </FadeIn>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {reasons.map((r, idx) => {
                const Icon = r.icon;
                return (
                  <FadeIn key={idx} direction="up" delay={idx * 0.15}>
                    <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-100 hover:border-blaze-orange/30 hover:bg-white hover:shadow-2xl hover:shadow-blaze-orange/5 transition-all duration-300 group h-full">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blaze-orange group-hover:border-blaze-orange transition-colors duration-300">
                        <Icon className="w-6 h-6 text-blaze-orange group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-bold text-oxford-blue mb-3 leading-snug">
                        {r.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-[15px]">
                        {r.desc}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

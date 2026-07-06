'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { CheckCircle, Users, User, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: CheckCircle,
    title: 'Chính xác',
    proof: 'Mọi phân tích dựa trên hệ thống 7 chỉ số cụ thể, được đối chiếu với chu kỳ vận hành thực tế của từng người. Khách hàng nhận hồ sơ PDF 100 trang trở lên, có thể dùng làm tài liệu tham chiếu trong họp chiến lược.',
  },
  {
    icon: TrendingUp,
    title: 'Ứng dụng',
    proof: 'Mỗi buổi làm việc kết thúc bằng 3 hành động trong 90 ngày, 3 mục tiêu trọng tâm và 1 giới hạn cần thiết lập ngay. Hơn 2.000 khách hàng đã đi qua quy trình này.',
  },
  {
    icon: User,
    title: 'Cá nhân hóa',
    proof: 'Mỗi bản đồ được xây theo đúng ngày tháng năm sinh, vai trò thực tế và giai đoạn đang ở. Hai người cùng ngày sinh nhưng khác vai trò sẽ nhận hai bản phân tích hoàn toàn khác nhau.',
  },
  {
    icon: Users,
    title: 'Chuyển hóa thực',
    proof: 'Kết quả đo được trong vận hành: quyết định nhân sự rõ hơn, thời điểm đầu tư chính xác hơn, cách phân quyền hợp lý hơn.',
  },
];

export function LHTValues() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle organic background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blaze-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-azure/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Sticky Title */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-36">
              <FadeIn direction="up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-blaze-orange" />
                  <span className="text-sm font-bold tracking-[0.2em] text-blaze-orange uppercase">
                    Giá trị cốt lõi
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-oxford-blue mb-6 leading-[1.15] tracking-tight">
                  Bốn cam kết <br className="hidden lg:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">
                    đo được,
                  </span> <br className="hidden lg:block"/>
                  không phải <br className="hidden lg:block"/> khẩu hiệu.
                </h2>
                <div className="w-16 h-1.5 bg-blaze-orange mb-8 rounded-full" />
                <p className="text-cyan-azure text-lg font-medium leading-relaxed max-w-md">
                  Tại Linh Hoa Tâm, mỗi giá trị không chỉ là lời nói suông. Chúng tôi biến chúng thành bằng chứng cụ thể và những con số hoàn toàn kiểm chứng được.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right Side: Scrolling Cards */}
          <div className="lg:w-2/3 flex flex-col gap-6 md:gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200/60 hover:shadow-2xl hover:border-blaze-orange/30 transition-all duration-500 overflow-hidden relative">
                    
                    {/* Large Background Number */}
                    <div className="absolute -right-8 -bottom-10 text-[10rem] font-black text-slate-50 group-hover:text-blaze-orange/5 transition-colors duration-500 pointer-events-none select-none">
                      0{idx + 1}
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                      {/* Icon Block */}
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blaze-orange group-hover:border-blaze-orange transition-colors duration-500">
                        <Icon className="w-8 h-8 text-oxford-blue group-hover:text-white transition-colors duration-500" />
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-blaze-orange font-bold text-lg">0{idx + 1}.</span>
                          <h3 className="text-2xl font-bold text-oxford-blue group-hover:text-blaze-orange transition-colors duration-300">
                            {v.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {v.proof}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

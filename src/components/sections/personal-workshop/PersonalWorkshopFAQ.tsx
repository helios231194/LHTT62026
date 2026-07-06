'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Workshop Cá nhân có miễn phí không?',
    answer: 'Có. Hoàn toàn miễn phí. Không có phí ẩn và không yêu cầu mua bất cứ thứ gì để tham gia. Mục tiêu của chúng tôi là lan tỏa giá trị cốt lõi của Thuật Số Học Ứng Dụng để giúp đỡ cộng đồng.'
  },
  {
    question: 'Workshop này dành cho ai?',
    answer: 'Dành cho bất kỳ ai muốn hiểu rõ hơn về bản thân, mối quan hệ gia đình, bạn đời, tài chính hoặc cách dạy con thông qua phân tích cơ bản của Thuật Số Học Ứng Dụng.'
  },
  {
    question: 'Tôi chưa có vấn đề gì đặc biệt, chỉ muốn tìm hiểu thì có nên tham gia không?',
    answer: 'Hoàn toàn nên. Rất nhiều người tham gia vì tò mò hoặc muốn phòng ngừa rủi ro tương lai, và đã nhận ra nhiều điều về tiềm năng bản thân mà họ chưa từng nghĩ đến.'
  },
  {
    question: 'Workshop Cá nhân khác Workshop Chiến lược thế nào?',
    answer: 'Cùng chung nền tảng Thuật Số Học Ứng Dụng nhưng chuyên biệt về đối tượng. Workshop Cá nhân tập trung vào các vấn đề cá nhân, gia đình, tài chính cá nhân. Workshop Chiến lược tập trung riêng vào quyết định doanh nghiệp, xây dựng đội ngũ và vận hành tổ chức dành cho CEO/Founder.'
  }
];

export function PersonalWorkshopFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-azure/5 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-7xl mx-auto">
          
          <div className="lg:w-1/3">
            <SlideIn direction="right">
              <div className="sticky top-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-blaze-orange" />
                  <span className="text-sm font-bold tracking-[0.25em] text-blaze-orange uppercase">Giải đáp ngay</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-oxford-blue mb-8 leading-tight">
                  Câu hỏi <br/>
                  <span className="text-cyan-azure">thường gặp.</span>
                </h2>
                <p className="text-slate-600 font-medium text-lg">
                  Những thắc mắc phổ biến nhất từ hơn 500+ học viên đã tham dự trước khi ra quyết định thay đổi bản thân.
                </p>
              </div>
            </SlideIn>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div 
                    className={`border border-slate-200 rounded-[2rem] overflow-hidden transition-all duration-300 ${openIdx === idx ? 'bg-white shadow-xl shadow-cyan-azure/5 border-cyan-azure/20' : 'bg-slate-50 hover:bg-slate-100'}`}
                  >
                    <button
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                    >
                      <h3 className={`text-lg md:text-xl font-bold pr-8 transition-colors ${openIdx === idx ? 'text-cyan-azure' : 'text-oxford-blue'}`}>
                        {faq.question}
                      </h3>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIdx === idx ? 'bg-cyan-azure/10' : 'bg-slate-200'}`}>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? 'text-cyan-azure rotate-180' : 'text-slate-500'}`} />
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

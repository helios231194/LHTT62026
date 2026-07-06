'use client';
import { useState } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Linh Hoa Tâm có tư vấn online không?',
    a: 'Có. Tập khách hàng của chúng tôi trên toàn quốc và quốc tế, do đó tất cả các dịch vụ (Tham vấn 1:1, Coaching, Học thuật) đều có thể được thực hiện online qua Zoom rất hiệu quả, hoặc gặp mặt trực tiếp tại văn phòng TP.HCM nếu bạn có thể sắp xếp thời gian.'
  },
  {
    q: 'Sau khi gửi form thì quy trình tiếp theo như thế nào?',
    a: 'Đội ngũ Linh Hoa Tâm sẽ liên hệ với bạn trong vòng 24 giờ (qua kênh bạn đã chọn: Zalo hoặc cuộc gọi) để trao đổi ngắn gọn về tình huống hiện tại của bạn. Chúng tôi sẽ xác định và đề xuất gói dịch vụ thực sự phù hợp nhất trước khi tiến hành ký kết và bắt đầu.'
  },
  {
    q: 'Tôi chưa chắc chắn mình cần dịch vụ nào thì sao?',
    a: 'Không sao cả. Bạn chỉ cần điền form và chọn "Khác" ở phần dịch vụ quan tâm. Dựa trên thông tin về vai trò và những "khó khăn" lớn nhất bạn đang gặp phải, các Expert của chúng tôi sẽ phân tích ban đầu và đưa ra lời khuyên về hướng đi (roadmap) phù hợp với giai đoạn của bạn chứ không ép bạn chọn dịch vụ có sẵn.'
  }
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-ice-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SlideIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              Câu hỏi <span className="text-cyan-azure">thường gặp</span>
            </h2>
            <div className="w-16 h-1 bg-cyan-azure mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen ? 'border-cyan-azure shadow-xl shadow-cyan-azure/10 ring-1 ring-cyan-azure/50' : 'border-slate-200 hover:border-cyan-azure/50 hover:shadow-md'
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                    <h3 className={`text-lg md:text-xl font-bold pr-8 leading-snug transition-colors ${isOpen ? 'text-cyan-azure' : 'text-oxford-blue'}`}>
                      {faq.q}
                    </h3>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-slate-50 border border-slate-200 ${isOpen ? 'rotate-180 bg-cyan-azure border-cyan-azure text-white' : 'text-slate-500'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div 
                    className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                  >
                    <p className="text-slate-600 leading-relaxed font-medium border-l-2 border-cyan-azure pl-4">
                      {faq.a}
                    </p>
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

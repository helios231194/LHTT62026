'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Workshop Chiến lược có miễn phí không?',
    answer: 'Có. Toàn bộ workshop công khai đều miễn phí. Không có phí ẩn và không yêu cầu mua bất cứ thứ gì để tham gia.'
  },
  {
    question: 'Workshop này dành cho ai?',
    answer: 'CEO, Founder, Giám đốc điều hành và lãnh đạo cấp cao đang muốn ra quyết định có căn cứ hơn và xây đội ngũ bền vững hơn.'
  },
  {
    question: 'Tôi chưa biết gì về Thuật Số Học có tham gia được không?',
    answer: 'Hoàn toàn được. Mỗi buổi thiết kế để ai cũng hiểu và áp dụng được ngay, không cần kiến thức nền về Thuật Số Học.'
  },
  {
    question: 'Sau workshop tôi có thể làm gì tiếp theo?',
    answer: 'Bạn có thể đặt lịch tham vấn 1:1 để xây bản đồ chiến lược cá nhân hóa hoàn toàn, hoặc tham gia Workshop Đội Ngũ Tinh Nhuệ cho cả ban lãnh đạo.'
  }
];

export function WorkshopFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-ice-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6">
              Câu hỏi <span className="text-blaze-orange">thường gặp</span>.
            </h2>
            <div className="w-16 h-1.5 bg-cyan-azure mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md cursor-pointer ${
                    isOpen ? 'border-blaze-orange/30' : 'border-slate-100 hover:border-slate-300'
                  }`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-6">
                    <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-blaze-orange' : 'text-oxford-blue'}`}>
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-blaze-orange/10 text-blaze-orange' : 'bg-slate-100 text-slate-500'}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                  
                  <div 
                    className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

      </div>
    </section>
  );
}

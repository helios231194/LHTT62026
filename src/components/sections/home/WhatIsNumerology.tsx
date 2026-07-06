'use client';
import { useEffect } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Clock, Users, Target } from 'lucide-react';

const questions = [
  {
    number: '01',
    icon: Clock,
    badge: 'Câu hỏi 1',
    question: 'Quyết định này nên đưa ra vào thời điểm nào trong chu kỳ?',
    highlight: 'thời điểm nào',
    color: 'from-blaze-orange/10 to-blaze-orange/5',
    border: 'border-blaze-orange/20',
    num_color: 'text-blaze-orange/20',
  },
  {
    number: '02',
    icon: Users,
    badge: 'Câu hỏi 2',
    question: 'Người này phù hợp vai gì nhất trong cấu trúc tổ chức?',
    highlight: 'vai gì nhất',
    color: 'from-cyan-azure/10 to-cyan-azure/5',
    border: 'border-cyan-azure/20',
    num_color: 'text-cyan-azure/20',
  },
  {
    number: '03',
    icon: Target,
    badge: 'Câu hỏi 3',
    question: 'Giai đoạn này nên mở rộng, giữ lực, hay tái cấu trúc?',
    highlight: 'mở rộng, giữ lực, hay tái cấu trúc',
    color: 'from-oxford-blue/10 to-oxford-blue/5',
    border: 'border-oxford-blue/20',
    num_color: 'text-oxford-blue/20',
  },
];

export function WhatIsNumerology() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Thuật Số Học Ứng Dụng là gì?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thuật Số Học Ứng Dụng là hệ thống phân tích hành vi và cấu trúc vận hành cá nhân, giúp CEO và lãnh đạo ra quyết định có căn cứ và hành động đúng thời điểm. Kết quả đo được bằng quyết định, bằng người, bằng tiền.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quyết định này nên đưa ra vào thời điểm nào trong chu kỳ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dựa trên chu kỳ vận hành cá nhân và tổ chức, Thuật Số Học Xác định thời điểm tối ưu để ra quyết định quan trọng và thời điểm nên giữ lực, tránh các bước đi tốn kém trong giai đoạn chưa thuận lợi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Người này phù hợp vai gì nhất trong cấu trúc tổ chức?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thuật Số Học phân tích 7 chỉ số cốt lõi để xác định cấu trúc năng lượng, điểm mạnh và điểm mù của từng cá nhân – từ đó xác định vai trò phù hợp nhất trong đội ngũ và tránh giữ sai người trong vị trí quan trọng.',
          },
        },
        {
          '@type': 'Question',
          name: 'Giai đoạn này nên mở rộng, giữ lực, hay tái cấu trúc?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thay vì quyết định dựa cảm tính, lãnh đạo có thể dựa vào các chỉ số chu kỳ để định hướng đúng: Mở rộng khi vào giai đoạn tăng trưởng, giữ lực khi cần củng cố nội bộ, tái cấu trúc khi đang ở đáy chu kỳ – tránh đước sai lầm chiến lược tốn kém.',
          },
        },
      ],
    };
    const existingScript = document.getElementById('faq-schema');
    if (existingScript) existingScript.remove();
    const script = document.createElement('script');
    script.id = 'faq-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById('faq-schema')?.remove(); };
  }, []);

  return (
    <section className="py-20 md:py-32 bg-ice-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-center">
          <FadeIn direction="right">
            <div>
              <span className="inline-block py-1.5 px-4 mb-5 text-xs font-bold tracking-widest text-blaze-orange bg-blaze-orange/10 uppercase rounded-full">
                THUẬT SỐ HỌC ỨNG DỤNG LÀ GÌ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-oxford-blue leading-tight">
                Một công cụ.<br />
                <span className="text-blaze-orange">Ba câu hỏi</span> chiến lược.
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="space-y-5 text-base md:text-lg text-cyan-azure leading-relaxed">
              <p>
                Qua 3.500 giờ làm việc trực tiếp với lãnh đạo doanh nghiệp, <span className="whitespace-nowrap">Linh Hoa Tâm</span> nhận ra phần lớn sai lầm nghiêm trọng bắt nguồn từ ba nguyên nhân: ra quyết định sai thời điểm trong chu kỳ, giữ sai người trong vai trò quan trọng, và mở rộng khi cấu trúc tổ chức chưa đủ chịu lực.
              </p>
              <p>
                Điều đáng chú ý là ba nguyên nhân đó cũng xuất hiện ở cá nhân đang đứng trước quyết định sự nghiệp, đầu tư, hay bước ngoặt cuộc đời.
              </p>
              <p className="font-semibold text-oxford-blue">
                Thuật Số Học Ứng Dụng là hệ thống phân tích. Kết quả đo được bằng quyết định, bằng người, bằng tiền.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 3 Question cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {questions.map((q, idx) => {
            const Icon = q.icon;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.12}>
                <div className={`relative bg-gradient-to-br ${q.color} border ${q.border} rounded-2xl p-8 h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300`}>
                  {/* Large number watermark */}
                  <div className={`absolute -top-2 -right-2 text-8xl font-black ${q.num_color} select-none pointer-events-none`}>
                    {q.number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-blaze-orange/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blaze-orange" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-blaze-orange uppercase">{q.badge}</span>
                    </div>

                    <h3 className="text-xl font-bold text-oxford-blue leading-snug">
                      {q.question.split(q.highlight).map((part, i, arr) =>
                        i < arr.length - 1 ? (
                          <span key={i}>
                            {part}
                            <span className="underline decoration-blaze-orange decoration-2 underline-offset-4">{q.highlight}</span>
                          </span>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </h3>
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

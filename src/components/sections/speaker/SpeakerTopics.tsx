'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Clock, Users } from 'lucide-react';

const topics = [
  {
    title: 'Quy Luật Năng Lượng & Ra Quyết Định',
    desc: '7 chỉ số lãnh đạo cốt lõi, chu kỳ 9 năm sự nghiệp, xác định thời điểm mở rộng và tái cấu trúc.',
    audience: 'CEO Forum, Hội thảo Lãnh đạo cấp cao',
    time: '60 - 90 phút'
  },
  {
    title: 'Đội Ngũ Tinh Nhuệ 2026',
    desc: 'Xây bản đồ năng lượng nhóm lãnh đạo, phân vai chiến lược theo bộ số, thiết lập thỏa thuận làm việc chung.',
    audience: 'Workshop nội bộ Ban lãnh đạo (3 - 7 người)',
    time: '3 - 5 giờ'
  },
  {
    title: 'Chu Kỳ Vận Hành Doanh Nghiệp',
    desc: 'Khi nào mở rộng, khi nào giữ lực, khi nào tái cấu trúc – dựa trên chu kỳ cá nhân lãnh đạo và chu kỳ tổ chức.',
    audience: 'Hội thảo Doanh nghiệp, HR Summit',
    time: '45 - 60 phút'
  },
  {
    title: 'Chuyên đề nội bộ theo yêu cầu',
    desc: 'Thiết kế riêng theo chủ đề và vấn đề thực tế đang tồn tại của tổ chức. Setup kịch bản riêng hoàn toàn.',
    audience: 'Training nội bộ cấp quản lý trở lên',
    time: 'Linh hoạt theo yêu cầu'
  }
];

export function SpeakerTopics() {
  return (
    <section className="py-24 bg-oxford-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-azure/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blaze-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Các chuyên đề lãnh đạo theo <br />
              <span className="text-cyan-azure">Hệ Thuật Số Học Ứng Dụng.</span>
            </h2>
            <div className="w-16 h-1 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {topics.map((topic, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 h-full flex flex-col hover:bg-white/10 hover:border-cyan-azure/30 hover:-translate-y-2 transition-all duration-300 group">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-azure transition-colors pr-8">
                  {topic.title}
                </h3>
                <p className="text-white/70 font-medium text-lg leading-relaxed mb-8 flex-1">
                  {topic.desc}
                </p>

                <div className="bg-white/5 rounded-2xl p-5 space-y-3 border border-white/5">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blaze-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white/50 uppercase tracking-wider block mb-0.5">Phù hợp cho</span>
                      <span className="text-white font-medium text-sm">{topic.audience}</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-white/10" />
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-cyan-azure shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white/50 uppercase tracking-wider block mb-0.5">Thời lượng</span>
                      <span className="text-white font-medium text-sm">{topic.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Compass, Users, Clock, Zap, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

const topics = [
  {
    icon: Compass,
    title: 'Ra Quyết Định Chiến Lược Theo Chu Kỳ',
    desc: 'Hiểu đúng giai đoạn bạn đang ở trong chu kỳ 9 năm. Ra quyết định mở rộng, giữ lực hay tái cấu trúc đúng thời điểm.',
    isNew: false
  },
  {
    icon: Users,
    title: 'Đội Ngũ Tinh Nhuệ – Phân Vai Theo Bộ Số',
    desc: 'Xây bản đồ năng lượng nhóm lãnh đạo. Biết ai phù hợp vai nào, tránh xung đột quyền hạn và trùng vai.',
    isNew: false
  },
  {
    icon: Clock,
    title: 'Chu Kỳ Vận Hành Doanh Nghiệp 2026',
    desc: 'Năm 2026 doanh nghiệp của bạn đang ở pha nào. Khi nào nên đầu tư, khi nào nên củng cố nội lực.',
    isNew: true
  },
  {
    icon: Zap,
    title: 'Quy Luật Năng Lượng & Ra Quyết Định',
    desc: '7 chỉ số lãnh đạo cốt lõi. Hiểu phản xạ ra quyết định của bản thân khi áp lực tăng cao.',
    isNew: false
  },
  {
    icon: Target,
    title: 'Chuyên đề nội bộ theo yêu cầu',
    desc: 'Thiết kế riêng theo chủ đề và đối tượng của tổ chức. Liên hệ để trao đổi trực tiếp với Master.',
    isCustom: true
  },
  {
    icon: Sparkles,
    title: 'Chủ đề mới được bổ sung định kỳ',
    desc: 'Đăng ký nhận thông báo để không bỏ lỡ các workshop chiến lược được cập nhật liên tục.',
    isSubscribe: true
  }
];

export function WorkshopTopics() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6 leading-tight">
              Các <span className="text-blaze-orange">chủ đề workshop</span> <br className="hidden md:block"/>
              cho lãnh đạo & doanh nghiệp.
            </h2>
            <div className="w-16 h-1.5 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            
            if (topic.isSubscribe) {
              return (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="bg-blaze-orange rounded-[2.5rem] p-8 lg:p-10 text-white h-full flex flex-col justify-between shadow-xl shadow-blaze-orange/20 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full" />
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-black mb-4 leading-snug">{topic.title}</h3>
                      <p className="text-white/80 font-medium leading-relaxed mb-8">{topic.desc}</p>
                    </div>
                    <Link href="#notify">
                      <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-blaze-orange font-bold h-12">
                        NHẬN THÔNG BÁO
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              );
            }

            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-100 shadow-xl shadow-cyan-azure/5 h-full flex flex-col group hover:-translate-y-2 hover:border-blaze-orange/20 transition-all duration-300 relative overflow-hidden">
                  
                  {topic.isNew && (
                    <div className="absolute top-6 right-6 bg-green-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      Mới
                    </div>
                  )}

                  <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blaze-orange group-hover:border-blaze-orange transition-colors duration-300">
                    <Icon className="w-7 h-7 text-oxford-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-oxford-blue mb-4 leading-snug group-hover:text-blaze-orange transition-colors">
                    {topic.title}
                  </h3>
                  
                  <div className="w-8 h-1 bg-slate-200 rounded-full mb-6 group-hover:bg-blaze-orange/30 transition-colors" />
                  
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                    {topic.desc}
                  </p>

                  <Link href={topic.isCustom ? "/lien-he" : "#history"} className="mt-auto inline-flex items-center gap-2 text-cyan-azure font-bold text-sm hover:text-blaze-orange transition-colors group/link">
                    {topic.isCustom ? "Liên hệ ngay" : "Xem lịch sử tổ chức"}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

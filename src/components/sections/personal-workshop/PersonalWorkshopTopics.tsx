'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Coins, HeartHandshake, Home, Baby, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

const topics = [
  {
    icon: Coins,
    title: 'Mật Mã Thịnh Vượng',
    desc: 'Khai mở tần số giàu có cá nhân bằng Thuật Số Học Ứng Dụng. Hiểu đâu là nguồn tài lực tự nhiên của bạn.',
    target: 'Cá nhân muốn cải thiện tài chính',
    isNew: true
  },
  {
    icon: HeartHandshake,
    title: '3 Bí Mật Hóa Giải Mâu Thuẫn Hôn Nhân',
    desc: 'Hiểu đối phương từ bên trong. Tìm nguyên nhân xung đột từ bộ số và cách hóa giải bền vững.',
    target: 'Cặp đôi và người đã kết hôn'
  },
  {
    icon: Home,
    title: 'Bắt Lực Với Mâu Thuẫn Gia Đình',
    desc: 'Khám phá Thuật Số Học để tái hợp hạnh phúc gia đình. Hiểu rõ nguồn gốc mâu thuẫn và cách tháo gỡ.',
    target: 'Người đang có mâu thuẫn gia đình'
  },
  {
    icon: Baby,
    title: 'Dùng Thuật Số Học Để Dạy Con Đúng',
    desc: 'Đọc bộ số của con để biết con phù hợp với điều gì và cách dạy con phát huy đúng bản chất tự nhiên.',
    target: 'Cha mẹ có con ở mọi lứa tuổi'
  },
  {
    icon: Users,
    title: 'Xem Đối Tượng Kết Hôn',
    desc: 'Hiểu độ hòa hợp và tương lai của hai người. Nhận diện điểm mâu thuẫn tiềm ẩn trước khi quyết định.',
    target: 'Người chuẩn bị kết hôn'
  },
  {
    icon: Sparkles,
    title: 'Chủ đề mới được bổ sung định kỳ',
    desc: 'Đăng ký nhận thông báo để không bỏ lỡ các workshop cá nhân và gia đình được cập nhật liên tục.',
    target: 'Dành cho tất cả mọi người',
    isSubscribe: true
  }
];

export function PersonalWorkshopTopics() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-cyan-azure/5 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6 leading-tight">
              Các <span className="text-cyan-azure">chủ đề workshop</span> <br className="hidden md:block"/>
              cho cá nhân & gia đình.
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
                  <div className="bg-cyan-azure rounded-[2.5rem] p-8 lg:p-10 text-white h-full flex flex-col justify-between shadow-xl shadow-cyan-azure/20 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full" />
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-black mb-4 leading-snug">{topic.title}</h3>
                      <p className="text-white/80 font-medium leading-relaxed mb-8">{topic.desc}</p>
                    </div>
                    <Link href="#notify">
                      <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-cyan-azure font-bold h-12">
                        NHẬN THÔNG BÁO
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              );
            }

            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-[#F8FAFC] rounded-[2.5rem] p-8 lg:p-10 border border-slate-100 shadow-xl shadow-cyan-azure/5 h-full flex flex-col group hover:-translate-y-2 hover:bg-white hover:border-cyan-azure/30 transition-all duration-300 relative overflow-hidden">
                  
                  {topic.isNew && (
                    <div className="absolute top-6 right-6 bg-blaze-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      Mới
                    </div>
                  )}

                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:bg-cyan-azure group-hover:border-cyan-azure transition-colors duration-300">
                    <Icon className="w-7 h-7 text-oxford-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-oxford-blue mb-4 leading-snug group-hover:text-cyan-azure transition-colors">
                    {topic.title}
                  </h3>
                  
                  <div className="w-8 h-1 bg-slate-200 rounded-full mb-6 group-hover:bg-blaze-orange transition-colors" />
                  
                  <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                    {topic.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-200/60">
                    <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Dành cho:</p>
                    <p className="text-sm font-medium text-oxford-blue">{topic.target}</p>
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

'use client';

import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Quote } from 'lucide-react';
import { resolveAttachmentUrl } from '@/lib/nocobase';

interface LeaderTestimonialsProps {
  initialTestimonials?: any[];
}

const defaultTestimonials = [
  {
    name: 'Mr. Trần Trung Nhân',
    position: 'Founder',
    company: 'FitStrength / Học viện đào tạo PT',
    avatar: '/uploads/1784020323788-TranTrungNhan.jpg',
    quote: 'Trước đây khi mở chi nhánh mới, tôi thường dựa vào dòng tiền hiện tại. Làm việc với Linh Hoa Tâm giúp tôi nhận ra thời điểm cá nhân của tôi đang ở chu kỳ trũng, việc mở rộng lúc đó là cực kỳ rủi ro. Nhờ điều chỉnh lộ trình lùi lại 8 tháng, chúng tôi đã tránh được một bàn thua trông thấy.',
  },
  {
    name: 'Ms. Hoàng Lê Dung',
    position: 'Founder & CEO',
    company: 'Hệ sinh thái Sức khỏe ProCARE',
    avatar: '/uploads/HoàngLêDung-3ts3na.jpg',
    quote: 'Điều tôi đánh giá cao nhất là khung ra quyết định rất rõ ràng. Nó không phải là dự đoán tương lai mơ hồ, mà là một công cụ luận giải sắc bén giúp tôi phân quyền chính xác cho đội ngũ co-founder thay vì ôm đồm mọi thứ vào mình như trước kia.',
  },
  {
    name: 'Mr. Đỗ Duy Thanh',
    position: 'CEO',
    company: 'Công ty TNHH Adobus',
    avatar: '/uploads/ĐỗDuyThanh-na3146.jpg',
    quote: 'Là người làm đầu tư, tôi quen tin vào những con số tài chính cứng. Nhưng bản đồ 7 chỉ số mang lại cho tôi những con số "mềm" nhưng vô cùng chính xác về chu kỳ đầu tư cá nhân. Sự kết hợp này mang lại cho tôi sự tĩnh tại tuyệt đối trước những thương vụ lớn.',
  },
];

export function LeaderTestimonials({ initialTestimonials }: LeaderTestimonialsProps) {
  const displayList = (initialTestimonials && initialTestimonials.length > 0)
    ? initialTestimonials.slice(0, 3).map((item: any) => ({
        name: item.name || item.author,
        position: item.position || item.role || '',
        company: item.company || '',
        avatar: resolveAttachmentUrl(item.image?.[0]?.url) || resolveAttachmentUrl(item.avatar),
        quote: item.quote,
      }))
    : defaultTestimonials;

  return (
    <section className="py-24 md:py-32 bg-oxford-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-blaze-orange/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Chia sẻ từ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">Lãnh đạo</span>
            </h2>
            <div className="w-16 h-1.5 bg-blaze-orange mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayList.map((t: any, idx: number) => {
            const roleStr = [t.position, t.company].filter(Boolean).join(' - ');
            const initialChar = t.name ? t.name.replace(/^(Mr\.|Ms\.|Bà|Ông)\s+/i, '').charAt(0) : 'L';

            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.15} className="h-full">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col relative group">
                  <Quote className="w-12 h-12 text-blaze-orange/20 absolute top-8 right-8 group-hover:text-blaze-orange/40 transition-colors duration-300" />
                  
                  <p className="text-white/80 leading-relaxed text-lg mb-10 flex-1 relative z-10 font-medium">
                    &quot;{t.quote}&quot;
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-cyan-azure/20 overflow-hidden shrink-0 border-2 border-blaze-orange/40 relative shadow-md">
                      {t.avatar ? (
                        <img 
                          src={t.avatar} 
                          alt={t.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-cyan-azure/50 flex items-center justify-center text-white font-black text-xl">
                          {initialChar}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg tracking-wide">{t.name}</h4>
                      <p className="text-blaze-orange text-sm font-medium">{roleStr || 'Lãnh đạo doanh nghiệp'}</p>
                    </div>
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

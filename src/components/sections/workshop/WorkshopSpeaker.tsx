'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Check, Mail } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function WorkshopSpeaker() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interests: [] as string[]
  });

  const handleInterestChange = (interest: string) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      }
      if (prev.interests.length >= 2) return prev; // Max 2
      return { ...prev, interests: [...prev.interests, interest] };
    });
  };

  return (
    <section className="py-24 md:py-32 bg-oxford-blue text-white relative overflow-hidden" id="notify">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-cyan-azure/10 blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Left Side: Notification Form */}
          <div className="lg:w-1/2 w-full">
            <SlideIn direction="right">
              <div className="mb-10">
                <div className="w-16 h-16 rounded-2xl bg-blaze-orange/20 flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-blaze-orange" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Đừng để lỡ buổi <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">phù hợp với bạn.</span>
                </h2>
                <p className="text-xl text-white/80 font-medium leading-relaxed">
                  Để lại thông tin và nhận thông báo đầu tiên. Khi có workshop mới mở đăng ký, bạn sẽ nhận thông báo trước – kèm ưu đãi dành riêng cho người đăng ký sớm.
                </p>
              </div>

              <form className="space-y-6 bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-md" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <input type="text" className="w-full bg-white/5 border border-white/10 focus:border-blaze-orange focus:ring-4 focus:ring-blaze-orange/20 rounded-xl px-5 h-14 transition-all outline-none text-white placeholder-white/40" placeholder="Họ tên (bắt buộc)" required />
                  <input type="tel" className="w-full bg-white/5 border border-white/10 focus:border-blaze-orange focus:ring-4 focus:ring-blaze-orange/20 rounded-xl px-5 h-14 transition-all outline-none text-white placeholder-white/40" placeholder="Số điện thoại (bắt buộc)" required />
                  <input type="email" className="w-full bg-white/5 border border-white/10 focus:border-blaze-orange focus:ring-4 focus:ring-blaze-orange/20 rounded-xl px-5 h-14 transition-all outline-none text-white placeholder-white/40" placeholder="Email (bắt buộc)" required />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-3">Chủ đề quan tâm <span className="text-cyan-azure font-medium">(chọn tối đa 2)</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Ra quyết định chiến lược',
                      'Đội ngũ & phân vai',
                      'Chu kỳ vận hành doanh nghiệp',
                      'Quy Luật Năng Lượng',
                      'Chuyên đề theo yêu cầu'
                    ].map((interest, idx) => {
                      const isSelected = formData.interests.includes(interest);
                      const isDisabled = !isSelected && formData.interests.length >= 2;
                      return (
                        <div 
                          key={idx}
                          onClick={() => !isDisabled && handleInterestChange(interest)}
                          className={`
                            relative flex items-center p-3 rounded-xl border cursor-pointer transition-all duration-200
                            ${isSelected ? 'border-blaze-orange bg-blaze-orange/20' : 'border-white/10 bg-white/5 hover:border-white/30'}
                            ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                          `}
                        >
                          <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center shrink-0 mr-3 transition-colors ${isSelected ? 'border-blaze-orange bg-blaze-orange' : 'border-white/20'}`}>
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`text-[13px] font-bold leading-tight ${isSelected ? 'text-white' : 'text-white/60'}`}>
                            {interest}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full h-16 text-lg font-bold rounded-xl shadow-xl shadow-blaze-orange/20 hover:-translate-y-1 hover:shadow-blaze-orange/40 transition-all duration-300 mt-8">
                  ĐĂNG KÝ NHẬN THÔNG BÁO
                </Button>
              </form>
            </SlideIn>
          </div>

          {/* Right Side: Speaker Profile */}
          <div className="lg:w-1/2 w-full pt-10 lg:pt-0">
            <FadeIn direction="up" delay={0.2}>
              <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto rounded-[3rem] overflow-hidden border-4 border-white/10 mb-10 shadow-2xl">
                <Image
                  src="/herobanner/hero01.png"
                  alt="Master Hoàng Mai Linh"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="text-center lg:text-left">
                <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-cyan-azure text-sm font-bold tracking-wider uppercase mb-6">
                  Diễn Giả Chiến Lược
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Đồng hành cùng <br/> Master Hoàng Mai Linh</h3>
                
                <ul className="space-y-4 mb-8 text-white/80 font-medium text-lg text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blaze-orange shrink-0 mt-0.5" />
                    <span>Nhà đào tạo và nghiên cứu Thuật Số Học Ứng Dụng với hơn <strong>3.500 giờ coaching</strong> thực chiến.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blaze-orange shrink-0 mt-0.5" />
                    <span>Founder Linh Hoa Tâm | Tác giả sách <strong>Sức Mạnh Ẩn Sau Con Số</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blaze-orange shrink-0 mt-0.5" />
                    <span>Diễn giả tại: <strong>Prudential, Shinhan Life, Forbes Women Vietnam</strong>.</span>
                  </li>
                </ul>

                <div className="bg-cyan-azure/10 border-l-4 border-cyan-azure p-6 mb-8 text-left rounded-r-2xl">
                  <p className="text-white font-medium italic">
                    &quot;Phong cách dẫn dắt thẳng vào vấn đề, không lý thuyết. Khách hàng nhận được những hành động cụ thể áp dụng ngay cuối buổi.&quot;
                  </p>
                </div>

                <Link href="/master-hoang-mai-linh">
                  <Button variant="outline" size="lg" className="h-14 px-10 font-bold border-white/20 hover:bg-white hover:text-oxford-blue text-white w-full sm:w-auto rounded-full">
                    Xem hồ sơ đầy đủ →
                  </Button>
                </Link>
              </div>

            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

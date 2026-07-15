'use client';
import { useState } from 'react';
import { createLead } from '@/lib/nocobase';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Check, Mail, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { resolveAttachmentUrl } from '@/lib/nocobase';
import type { Profile } from '@/lib/nocobase';

interface PersonalWorkshopSpeakerProps {
  initialProfile?: Profile | null;
}

export function PersonalWorkshopSpeaker({ initialProfile }: PersonalWorkshopSpeakerProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interests: [] as string[],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInterestChange = (interest: string) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      }
      if (prev.interests.length >= 2) return prev; // Max 2
      return { ...prev, interests: [...prev.interests, interest] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Vui lòng điền đầy đủ các thông tin bắt buộc.');
      return;
    }
    
    setIsSubmitting(true);
    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'workshop_ca_nhan_notify',
    };

    const extraDetails = {
      'Chủ đề quan tâm': formData.interests.join(', ') || 'Không chọn',
      'Đăng ký từ': 'Form Đừng để lỡ buổi phù hợp (Speaker Section)'
    };

    const success = await createLead(leadData, extraDetails);
    setIsSubmitting(false);

    if (success) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        interests: [],
      });
    } else {
      alert('Gửi đăng ký thất bại. Vui lòng thử lại sau.');
    }
  };

  return (
    <section className="py-24 md:py-32 bg-ice-white relative" id="notify">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Form - Đăng Ký Nhận Thông Báo (Left Side) */}
          <div className="w-full lg:w-1/2">
            <SlideIn direction="right">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-cyan-azure/10 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blaze-orange/10 blur-[80px] pointer-events-none rounded-full" />
                
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="w-12 h-12 rounded-full bg-cyan-azure/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-cyan-azure" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-oxford-blue leading-tight mb-2">Đừng để lỡ buổi phù hợp.</h2>
                  </div>
                </div>
                
                <p className="text-slate-600 font-medium mb-10 leading-relaxed border-l-4 border-blaze-orange pl-4">
                  Để lại thông tin và nhận thông báo đầu tiên. Khi có workshop mới, bạn sẽ được báo trước kèm ưu đãi đặc biệt dành riêng cho người đăng ký sớm.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-10 flex flex-col items-center gap-5 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-oxford-blue mb-2">Đăng ký nhận thông báo thành công!</h3>
                      <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                        Thông tin của bạn đã được ghi lại. Chúng tôi sẽ gửi lịch học workshop mới nhất qua Email và Số điện thoại ngay khi mở lịch đăng ký.
                      </p>
                    </div>
                    <Button variant="secondary" className="px-8 mt-2" onClick={() => setIsSubmitted(false)}>
                      Đăng ký email khác
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-6 relative" onSubmit={handleSubmit}>
                    <div>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-4 focus:ring-cyan-azure/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700 font-medium" 
                        placeholder="Họ và tên *" 
                        required 
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="tel" 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-4 focus:ring-cyan-azure/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700 font-medium" 
                        placeholder="Số điện thoại *" 
                        required 
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <input 
                        type="email" 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-4 focus:ring-cyan-azure/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700 font-medium" 
                        placeholder="Email *" 
                        required 
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-oxford-blue mb-1">Chủ đề quan tâm: (Chọn tối đa 2)</label>
                      <p className="text-xs text-slate-500 mb-3 font-medium">(Chọn tối đa 2)</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          'Tài chính & thịnh vượng cá nhân',
                          'Hôn nhân & tình duyên',
                          'Mâu thuẫn gia đình',
                          'Dạy con đúng cách',
                          'Xem đối tượng kết hôn'
                        ].map((interest, idx) => {
                          const isSelected = formData.interests.includes(interest);
                          const isDisabled = !isSelected && formData.interests.length >= 2;
                          return (
                            <div 
                              key={idx} 
                              onClick={() => !isDisabled && handleInterestChange(interest)}
                              className={`
                                flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors pr-2
                                ${isSelected ? 'border-cyan-azure bg-cyan-azure/5' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}
                                ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                              `}
                            >
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'border-cyan-azure bg-cyan-azure' : 'border-slate-300 bg-white'}`}>
                                {isSelected && <Check className="w-3 h-3 text-white" />}
                              </div>
                              <span className={`text-[13px] font-bold leading-tight ${isSelected ? 'text-cyan-azure' : 'text-slate-700'}`}>{interest}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-cyan-azure/20 hover:-translate-y-1 hover:shadow-cyan-azure/40 bg-cyan-azure hover:bg-cyan-azure/90 transition-all duration-300"
                      >
                        {isSubmitting ? 'ĐANG GỬI...' : 'ĐĂNG KÝ NHẬN THÔNG BÁO'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </SlideIn>
          </div>

          {/* Master Profile (Right Side) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <FadeIn direction="up">
              <div className="relative aspect-square md:aspect-[4/3] w-full max-w-lg rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl mb-12 bg-oxford-blue group">
                {/* Fallback pattern until image is added */}
                <Image
                  src={resolveAttachmentUrl(initialProfile?.avatar?.[0]) || "/herobanner/hero01.png"}
                  alt="Master Hoàng Mai Linh"
                  fill
                  className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="text-left">
                <div className="inline-block px-4 py-2 bg-oxford-blue/10 text-oxford-blue rounded-full text-sm font-bold tracking-wider uppercase mb-6">
                  Diễn giả chính
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-oxford-blue mb-6 leading-tight">
                  Master Hoàng Mai Linh
                </h2>
                
                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-2xl border-l-4 border-blaze-orange pl-5">
                  Nhà đào tạo và nghiên cứu Thuật Số Học Ứng Dụng với hơn 3.500 giờ coaching thực chiến. <br className="hidden md:block"/><br className="hidden md:block"/>
                  Founder Linh Hoa Tâm — Tác giả cuốn sách &quot;Sức Mạnh Ẩn Sau Con Số&quot; — Diễn giả tại Prudential, Shinhan Life, Forbes Women Vietnam.
                </p>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md mb-8 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-azure" />
                  <p className="text-oxford-blue font-medium italic text-sm md:text-base leading-relaxed pl-2 relative z-10">
                    <span className="font-bold">Phong cách dẫn dắt:</span> Đi thẳng vào vấn đề, không vòng vo lý thuyết. Mỗi buổi đều kết thúc bằng những hành động cụ thể có thể áp dụng ngay vào đời sống thực tế.
                  </p>
                </div>

                <Link href="/master-hoang-mai-linh">
                  <Button variant="outline" size="lg" className="h-14 px-8 border-2 border-oxford-blue text-oxford-blue hover:bg-oxford-blue hover:text-white rounded-full font-bold group transition-all duration-300">
                    XEM HỒ SƠ ĐẦY ĐỦ 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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

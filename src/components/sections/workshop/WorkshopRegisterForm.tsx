'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Check, ShieldCheck, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { createLead } from '@/lib/nocobase';

export function WorkshopRegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    interests: [] as string[],
    message: '',
    source: ''
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
    setIsSubmitting(true);

    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'workshop_ca_nhan',
      message: formData.message
    };

    const extraDetails = {
      'Vai trò / Vị trí': formData.role,
      'Mối quan tâm chính': formData.interests.join(', '),
      'Khó khăn lớn nhất': formData.message,
      'Biết đến qua': formData.source
    };

    const success = await createLead(leadData, extraDetails);
    setIsSubmitting(false);
    if (success) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        role: '',
        interests: [],
        message: '',
        source: ''
      });
    } else {
      alert('Gửi thông tin đăng ký thất bại. Vui lòng thử lại sau.');
    }
  };

  return (
    <section className="py-24 md:py-32 bg-oxford-blue relative overflow-hidden" id="register">
      {/* Decorative BG Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-azure/5 blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blaze-orange/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-7xl">
        
        {/* Left Intro Text */}
        <div className="lg:w-5/12 text-white sticky top-32">
          <SlideIn direction="right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-blaze-orange" />
              <span className="text-sm font-bold tracking-[0.25em] text-cyan-azure uppercase">Form Đăng Ký</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-8 leading-[1.1] tracking-tight">
              Đăng ký tham gia <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50]">miễn phí hoàn toàn.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-10">
              Điền thông tin bên dưới, Linh Hoa Tâm sẽ gửi link tham gia và tài liệu chuẩn bị trước buổi học đến email của bạn.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="text-cyan-azure w-5 h-5"/>
                Cam kết bảo mật
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Thông tin của bạn được bảo mật hoàn toàn. Linh Hoa Tâm cam kết không chia sẻ dữ liệu cho bất kỳ bên thứ ba nào. Bạn sẽ chỉ nhận được email liên quan trực tiếp đến workshop chiến lược.
              </p>
            </div>
          </SlideIn>
        </div>

        {/* Right Form Card */}
        <div className="lg:w-7/12 w-full">
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-cyan-azure/10 relative overflow-hidden text-oxford-blue">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blaze-orange/10 rounded-full blur-3xl pointer-events-none" />

              {isSubmitted ? (
                <div className="text-center py-12 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-oxford-blue mb-2">Đăng ký thành công!</h3>
                    <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                      Cảm ơn bạn đã đăng ký tham gia Workshop. Email xác nhận và link Zoom tham dự sẽ được gửi tự động đến bạn.
                    </p>
                  </div>
                  <Button variant="secondary" className="px-8" onClick={() => setIsSubmitted(false)}>
                    Đăng ký cho người khác
                  </Button>
                </div>
              ) : (
                <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                  
                  {/* Standard Inputs */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-oxford-blue mb-2">Họ và tên *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blaze-orange focus:ring-4 focus:ring-blaze-orange/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700 font-medium" 
                        placeholder="Nguyễn Văn A" 
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-oxford-blue mb-2">Số điện thoại *</label>
                        <input 
                          type="tel" 
                          required 
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blaze-orange focus:ring-4 focus:ring-blaze-orange/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700 font-medium" 
                          placeholder="09xxxxxxxxx" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-oxford-blue mb-2">Email *</label>
                        <input 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blaze-orange focus:ring-4 focus:ring-blaze-orange/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700 font-medium" 
                          placeholder="email@congty.com" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Role Select */}
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-3">Bạn đang là: *</label>
                    <select 
                      required
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blaze-orange focus:ring-4 focus:ring-blaze-orange/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700 font-medium appearance-none" 
                    >
                      <option value="" disabled>Chọn vị trí hiện tại</option>
                      <option value="owner_under10">Chủ doanh nghiệp / Founder – dưới 10 người</option>
                      <option value="owner_10to50">Chủ doanh nghiệp / Founder – 10 đến 50 người</option>
                      <option value="owner_over50">Chủ doanh nghiệp / Founder – trên 50 người</option>
                      <option value="director">Giám đốc / Quản lý cấp cao</option>
                      <option value="manager">Quản lý cấp trung</option>
                      <option value="pro">Người đi làm có trách nhiệm cao</option>
                      <option value="startup">Đang khởi nghiệp</option>
                      <option value="individual">Cá nhân đang tìm hướng đi</option>
                    </select>
                  </div>

                  {/* Multiselect Checkboxes */}
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-1">Mối quan tâm chính của bạn hiện tại: *</label>
                    <p className="text-xs text-slate-500 mb-4 font-medium">(Chọn tối đa 2)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Ra quyết định đúng thời điểm trong doanh nghiệp',
                        'Xây và giữ đội ngũ phù hợp',
                        'Hiểu rõ chu kỳ vận hành cá nhân',
                        'Cân bằng công việc và cuộc sống cá nhân',
                        'Định hướng sự nghiệp và bước đi tiếp theo',
                        'Tìm hiểu về Thuật Số Học Ứng Dụng'
                      ].map((interest, idx) => {
                        const isSelected = formData.interests.includes(interest);
                        const isDisabled = !isSelected && formData.interests.length >= 2;
                        return (
                          <div 
                            key={idx}
                            onClick={() => !isDisabled && handleInterestChange(interest)}
                            className={`
                              relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                              ${isSelected ? 'border-blaze-orange bg-blaze-orange/5' : 'border-slate-100 bg-white hover:border-slate-300'}
                              ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                          >
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mr-3 transition-colors ${isSelected ? 'border-blaze-orange bg-blaze-orange' : 'border-slate-300'}`}>
                              {isSelected && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className={`text-[13px] font-bold leading-tight ${isSelected ? 'text-blaze-orange' : 'text-slate-600'}`}>
                              {interest}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-2">Bạn đang gặp khó khăn gì lớn nhất hiện tại: <span className="text-slate-400 font-normal">(Tùy chọn)</span></label>
                    <textarea 
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blaze-orange focus:ring-4 focus:ring-blaze-orange/10 rounded-xl p-5 h-32 transition-all outline-none text-slate-700 font-medium resize-none" 
                      placeholder="Chia sẻ ngắn gọn để buổi workshop có thể đề cập đến đúng vấn đề của bạn..." 
                    />
                  </div>

                  {/* Source Select */}
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-3">Bạn biết đến Linh Hoa Tâm qua: *</label>
                    <select 
                      required
                      value={formData.source}
                      onChange={e => setFormData({ ...formData, source: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blaze-orange focus:ring-4 focus:ring-blaze-orange/10 rounded-xl px-5 h-14 transition-all outline-none text-slate-700 font-medium appearance-none" 
                    >
                      <option value="" disabled>Chọn nguồn</option>
                      <option value="fb_master">Facebook cá nhân Master</option>
                      <option value="fanpage">Fanpage Linh Hoa Tâm</option>
                      <option value="tiktok">Tiktok</option>
                      <option value="youtube">Youtube</option>
                      <option value="linhkedin">LinkedIn</option>
                      <option value="friend">Bạn bè giới thiệu</option>
                      <option value="community">Cộng đồng Linh Hoa Tâm</option>
                      <option value="google">Tìm kiếm Google</option>
                      <option value="other">Kênh khác</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-slate-100">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full h-16 text-lg font-bold rounded-xl shadow-xl shadow-blaze-orange/20 hover:-translate-y-1 hover:shadow-blaze-orange/40 transition-all duration-300"
                    >
                      {isSubmitting ? 'ĐANG GỬI ĐĂNG KÝ...' : 'ĐĂNG KÝ THAM GIA NGAY'}
                    </Button>
                    <p className="text-center text-xs text-slate-400 mt-4 font-medium">
                      Sau đăng ký: Email xác nhận tự động + nhắc lịch 24h trước + offer lộ trình ưu đãi.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ChevronRight, Calendar, User, Briefcase, Target, Map, CheckCircle } from 'lucide-react';
import { createLead } from '@/lib/nocobase';

const roles = [
  'Chủ doanh nghiệp',
  'Quản lý hoặc leader',
  'Nhân sự cấp cao',
  'Cá nhân đang tìm định hướng',
  'Khác'
];

const sectors = [
  'Kinh doanh hoặc thương mại',
  'Dịch vụ',
  'Công nghệ',
  'Tài chính',
  'Giáo dục',
  'Bất động sản',
  'Sản xuất',
  'Y tế và sức khỏe',
  'Nghệ thuật và sáng tạo',
  'Khác'
];

const painPoints = [
  'Không rõ hướng đi trong 3–6 tháng tới',
  'Ra quyết định chậm hoặc thiếu chắc chắn',
  'Áp lực công việc cao, khó cân bằng',
  'Vấn đề trong quản lý đội ngũ',
  'Mâu thuẫn trong các mối quan hệ',
  'Làm nhiều nhưng kết quả không tương xứng',
  'Khác'
];

const services = [
  'Tham vấn 1:1 lãnh đạo doanh nghiệp',
  'Bản đồ chiến lược 2026',
  'File luận giải cá nhân',
  'Coaching cá nhân (sự nghiệp, hôn nhân, mối quan hệ...)',
  'Đặt tên thương hiệu hoặc sản phẩm',
  'Workshop',
  'Mời speaker',
  'Khác'
];

const sources = [
  'Facebook cá nhân Master',
  'Fanpage Linh Hoa Tâm',
  'Tiktok Linh Hoa Tâm',
  'Bạn bè giới thiệu',
  'Cộng đồng Linh Hoa Tâm',
  'Tìm kiếm Google',
  'Kênh khác'
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    birthday: '',
    role: '',
    sector: '',
    service: '',
    source: '',
    contactMethod: ''
  });
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePainPointToggle = (point: string) => {
    setSelectedPainPoints(prev => {
      if (prev.includes(point)) {
        return prev.filter(p => p !== point);
      }
      if (prev.length >= 2) {
        return prev;
      }
      return [...prev, point];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'form_lien_he_chinh',
      package: formData.service,
      message: `Khó khăn chính: ${selectedPainPoints.join(', ')}`
    };

    const extraDetails = {
      'Ngày sinh': formData.birthday,
      'Vai trò hiện tại': formData.role,
      'Lĩnh vực hoạt động': formData.sector,
      'Khó khăn lớn nhất': selectedPainPoints.join(', '),
      'Dịch vụ quan tâm': formData.service,
      'Kênh liên hệ yêu cầu': formData.contactMethod,
      'Nguồn biết đến': formData.source
    };

    const success = await createLead(leadData, extraDetails);
    setIsSubmitting(false);
    if (success) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        birthday: '',
        role: '',
        sector: '',
        service: '',
        source: '',
        contactMethod: ''
      });
      setSelectedPainPoints([]);
    } else {
      alert('Gửi thông tin liên hệ thất bại. Vui lòng liên hệ trực tiếp qua số hotline.');
    }
  };

  return (
    <section className="bg-oxford-blue text-white pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-azure/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blaze-orange/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* SECTION 1 - GIỚI THIỆU */}
        <div className="w-full lg:w-5/12 pt-8 lg:sticky lg:top-32 h-fit">
          <SlideIn direction="right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-[0.15em] text-cyan-azure uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-azure animate-pulse" />
              Tiếp nhận yêu cầu 24/7
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.15] text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-white">Để lại thông tin</span> và Linh Hoa Tâm sẽ xác định hướng đi phù hợp.
            </h1>
            
            <p className="text-white/80 text-lg leading-relaxed mb-10 border-l-4 border-cyan-azure pl-6">
              Mỗi người đều đang ở một giai đoạn rất khác nhau trong công việc và cuộc sống. Đội ngũ Linh Hoa Tâm sẽ dựa trên những gì bạn cung cấp dưới đây để lên lịch một buổi khám phá thực trạng hoàn toàn cá nhân hóa.
            </p>

            <div className="hidden lg:flex items-center gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-14 h-14 bg-blaze-orange rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.3)] shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Đội ngũ hỗ trợ nhanh</h4>
                <p className="text-sm text-white/60">Chúng tôi sẽ liên hệ Zalo hoặc gọi trực tiếp trong 24 giờ kể từ lúc nhận thông tin.</p>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* SECTION 2 - FORM LIÊN HỆ CHI TIẾT */}
        <div className="w-full lg:w-7/12">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-oxford-blue/50 text-oxford-blue">
              <h2 className="text-2xl md:text-3xl font-black mb-8 border-b border-slate-100 pb-6">Đăng ký tư vấn cá nhân hóa</h2>
              
              {isSubmitted ? (
                <div className="text-center py-16 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-oxford-blue mb-2">Gửi thông tin thành công!</h3>
                    <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                      Thông tin của bạn đã được ghi nhận. Đội ngũ Linh Hoa Tâm sẽ chủ động liên hệ hỗ trợ bạn trong vòng 24 giờ tới.
                    </p>
                  </div>
                  <Button variant="secondary" className="px-8" onClick={() => setIsSubmitted(false)}>
                    Gửi yêu cầu khác
                  </Button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  
                  {/* Personal Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-slate-700">Họ và tên <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-ice-white border border-slate-200 rounded-xl px-4 py-3.5 focus:border-blaze-orange focus:ring-1 focus:ring-blaze-orange outline-none transition-all font-medium text-slate-700" 
                        placeholder="Nguyễn Văn A" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-slate-700">Số điện thoại <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-ice-white border border-slate-200 rounded-xl px-4 py-3.5 focus:border-blaze-orange focus:ring-1 focus:ring-blaze-orange outline-none transition-all font-medium text-slate-700" 
                        placeholder="09xx xxx xxx" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-slate-700">Email <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-ice-white border border-slate-200 rounded-xl px-4 py-3.5 focus:border-blaze-orange focus:ring-1 focus:ring-blaze-orange outline-none transition-all font-medium text-slate-700" 
                        placeholder="email@example.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-slate-700">Ngày sinh <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        required 
                        value={formData.birthday}
                        onChange={e => setFormData({ ...formData, birthday: e.target.value })}
                        className="w-full bg-ice-white border border-slate-200 rounded-xl px-4 py-3.5 focus:border-blaze-orange focus:ring-1 focus:ring-blaze-orange outline-none transition-all font-medium text-slate-700" 
                        placeholder="DD/MM/YYYY" 
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2"><User className="w-4 h-4 text-cyan-azure"/> Bạn đang ở vai trò nào?</label>
                    <select 
                      required 
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-ice-white border border-slate-200 rounded-xl px-4 py-3.5 focus:border-blaze-orange focus:ring-1 focus:ring-blaze-orange outline-none transition-all appearance-none cursor-pointer text-slate-700 font-medium bg-white"
                    >
                      <option value="" disabled>-- Chọn vai trò hiện tại --</option>
                      {roles.map((r, i) => <option key={i} value={r}>{r}</option>)}
                    </select>
                  </div>

                  {/* Sector */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2"><Briefcase className="w-4 h-4 text-cyan-azure"/> Lĩnh vực công việc</label>
                    <select 
                      required 
                      value={formData.sector}
                      onChange={e => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-ice-white border border-slate-200 rounded-xl px-4 py-3.5 focus:border-blaze-orange focus:ring-1 focus:ring-blaze-orange outline-none transition-all appearance-none cursor-pointer text-slate-700 font-medium bg-white"
                    >
                      <option value="" disabled>-- Chọn lĩnh vực --</option>
                      {sectors.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Pain Points (Multi-select Max 2) */}
                  <div className="space-y-3 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2 mb-4">
                      <Target className="w-4 h-4 text-blaze-orange"/> Khó khăn lớn nhất hiện tại (Chọn tối đa 2)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {painPoints.map((point, idx) => {
                        const isSelected = selectedPainPoints.includes(point);
                        const isDisabled = !isSelected && selectedPainPoints.length >= 2;
                        return (
                          <label key={idx} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${isSelected ? 'border-blaze-orange bg-blaze-orange/5' : 'border-slate-200 bg-white hover:border-slate-300'} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            <input 
                              type="checkbox" 
                              className="w-5 h-5 rounded border-slate-300 text-blaze-orange focus:ring-blaze-orange mt-0.5 cursor-pointer"
                              checked={isSelected}
                              disabled={isDisabled}
                              onChange={() => handlePainPointToggle(point)}
                            />
                            <span className="text-sm font-medium text-slate-700 leading-tight">{point}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2"><Map className="w-4 h-4 text-cyan-azure"/> Dịch vụ quan tâm</label>
                    <select 
                      required 
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-ice-white border border-slate-200 rounded-xl px-4 py-3.5 focus:border-blaze-orange focus:ring-1 focus:ring-blaze-orange outline-none transition-all appearance-none cursor-pointer text-slate-700 font-medium bg-white"
                    >
                      <option value="" disabled>-- Chọn giải pháp bạn cần --</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-slate-100 rounded-2xl">
                    <div className="space-y-3">
                      <label className="text-sm font-bold tracking-wider text-slate-600 block">Biết Linh Hoa Tâm qua:</label>
                      <select 
                        required 
                        value={formData.source}
                        onChange={e => setFormData({ ...formData, source: e.target.value })}
                        className="w-full bg-ice-white border border-slate-200 rounded-xl px-3 py-2.5 focus:border-cyan-azure focus:ring-1 focus:ring-cyan-azure outline-none transition-all appearance-none text-sm cursor-pointer text-slate-700 font-medium bg-white"
                      >
                        <option value="" disabled>-- Chọn nguồn --</option>
                        {sources.map((s, i) => <option key={i} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold tracking-wider text-slate-600 block">Kênh liên hệ mong muốn:</label>
                      <div className="flex gap-4 mt-2">
                        {['Zalo', 'Điện thoại', 'Email'].map((method, idx) => (
                          <label key={idx} className="flex items-center gap-2 cursor-pointer text-slate-700">
                            <input 
                              type="radio" 
                              name="contact_method" 
                              value={method} 
                              required 
                              checked={formData.contactMethod === method}
                              onChange={e => setFormData({ ...formData, contactMethod: e.target.value })}
                              className="w-4 h-4 text-blaze-orange focus:ring-blaze-orange" 
                            />
                            <span className="text-sm font-medium">{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full h-16 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(255,107,0,0.2)] hover:-translate-y-1 transition-all"
                    >
                      {isSubmitting ? 'ĐANG GỬI THÔNG TIN...' : 'GỬI THÔNG TIN VÀ NHẬN TƯ VẤN'}
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-center text-xs text-slate-500 font-medium mt-4">
                      Cảm ơn bạn đã để lại thông tin. Đội ngũ Linh Hoa Tâm sẽ phản hồi trong vòng 24 giờ để trao đổi cụ thể. Mọi thông tin đều được bảo mật.
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

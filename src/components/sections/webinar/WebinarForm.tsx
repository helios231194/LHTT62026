'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { createLead } from '@/lib/nocobase';
import { CheckCircle } from 'lucide-react';

export function WebinarForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    message: '',
    source: ''
  });
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConcernToggle = (concern: string) => {
    setSelectedConcerns(prev => {
      if (prev.includes(concern)) {
        return prev.filter(c => c !== concern);
      }
      if (prev.length >= 2) return prev; // Max 2
      return [...prev, concern];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'form_dang_ky_webinar',
      message: formData.message
    };

    const extraDetails = {
      'Vai trò': formData.role,
      'Mối quan tâm': selectedConcerns.join(', '),
      'Khó khăn lớn nhất': formData.message,
      'Biết đến qua': formData.source
    };

    const success = await createLead(leadData, extraDetails);
    setIsSubmitting(false);
    if (success) {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', role: '', message: '', source: '' });
      setSelectedConcerns([]);
    } else {
      alert('Đăng ký tham gia webinar thất bại. Vui lòng liên hệ trực tiếp hotline.');
    }
  };

  return (
    <section id="register-form" className="py-24 bg-ice-white text-oxford-blue">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto bg-oxford-blue border border-white/10 shadow-2xl p-8 md:p-12 relative overflow-hidden text-white rounded-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blaze-orange/10 blur-3xl rounded-full"></div>
            
            {isSubmitted ? (
              <div className="relative z-10 text-center py-16 flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white/10 text-blaze-orange flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <div>
                  <h2 className="text-3xl font-black mb-2 text-white">Đăng ký thành công!</h2>
                  <p className="text-white/70 max-w-sm mx-auto text-sm leading-relaxed">
                    Cảm ơn bạn đã đăng ký tham gia Webinar. Link Zoom và lịch phát sóng sẽ được gửi đến số điện thoại và email của bạn trước giờ sự kiện bắt đầu.
                  </p>
                </div>
                <Button variant="secondary" className="px-8" onClick={() => setIsSubmitted(false)}>
                  Đăng ký cho người khác
                </Button>
              </div>
            ) : (
              <>
                <div className="relative z-10 mb-10 text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                    Đăng ký tham gia – <span className="text-blaze-orange">miễn phí hoàn toàn</span>
                  </h2>
                  <p className="text-white/70 text-lg">
                    Điền thông tin bên dưới, Linh Hoa Tâm sẽ gửi link tham gia và tài liệu chuẩn bị trước buổi học đến email của bạn.
                  </p>
                </div>

                <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Họ và tên *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-blaze-orange transition-colors font-medium" 
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">Số điện thoại *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-blaze-orange transition-colors font-medium" 
                        placeholder="09xxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-blaze-orange transition-colors font-medium" 
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Bạn đang là: *</label>
                    <select 
                      required
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-oxford-blue border border-white/20 p-4 text-white focus:outline-none focus:border-blaze-orange transition-colors font-medium appearance-none cursor-pointer"
                    >
                      <option value="" disabled>-- Chọn vai trò --</option>
                      <option value="Chủ doanh nghiệp / Founder – dưới 10 người">Chủ doanh nghiệp / Founder – dưới 10 người</option>
                      <option value="Chủ doanh nghiệp / Founder – 10 đến 50 người">Chủ doanh nghiệp / Founder – 10 đến 50 người</option>
                      <option value="Chủ doanh nghiệp / Founder – trên 50 người">Chủ doanh nghiệp / Founder – trên 50 người</option>
                      <option value="Giám đốc / Quản lý cấp cao">Giám đốc / Quản lý cấp cao</option>
                      <option value="Quản lý cấp trung">Quản lý cấp trung</option>
                      <option value="Người đi làm có trách nhiệm cao">Người đi làm có trách nhiệm cao</option>
                      <option value="Đang khởi nghiệp">Đang khởi nghiệp</option>
                      <option value="Cá nhân đang tìm hướng đi">Cá nhân đang tìm hướng đi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Mối quan tâm chính của bạn hiện tại (chọn tối đa 2):</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Ra quyết định đúng thời điểm trong doanh nghiệp',
                        'Xây và giữ đội ngũ phù hợp',
                        'Hiểu rõ chu kỳ vận hành cá nhân',
                        'Cân bằng công việc và cuộc sống cá nhân',
                        'Định hướng sự nghiệp và bước đi tiếp theo',
                        'Tìm hiểu về Thuật Số Học Ứng Dụng'
                      ].map((concern, idx) => {
                        const isSelected = selectedConcerns.includes(concern);
                        const isDisabled = !isSelected && selectedConcerns.length >= 2;
                        return (
                          <label key={idx} className={`flex items-start gap-3 p-3 border border-white/10 hover:bg-white/5 cursor-pointer transition-colors ${isSelected ? 'bg-white/10 border-blaze-orange' : ''} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            <input 
                              type="checkbox" 
                              checked={isSelected}
                              disabled={isDisabled}
                              onChange={() => handleConcernToggle(concern)}
                              className="mt-1 w-4 h-4 accent-blaze-orange" 
                            />
                            <span className="text-sm text-white/90">{concern}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Bạn đang gặp khó khăn gì lớn nhất hiện tại: (tùy chọn)</label>
                    <textarea 
                      rows={3} 
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 p-4 text-white focus:outline-none focus:border-blaze-orange transition-colors resize-none font-medium" 
                      placeholder="Chia sẻ ngắn gọn để buổi webinar có thể đề cập đến đúng vấn đề của bạn..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Bạn biết đến Linh Hoa Tâm qua:</label>
                    <select 
                      required
                      value={formData.source}
                      onChange={e => setFormData({ ...formData, source: e.target.value })}
                      className="w-full bg-oxford-blue border border-white/20 p-4 text-white focus:outline-none focus:border-blaze-orange transition-colors font-medium appearance-none cursor-pointer"
                    >
                      <option value="" disabled>-- Chọn kênh --</option>
                      <option value="Facebook cá nhân Master">Facebook cá nhân Master</option>
                      <option value="Fanpage Linh Hoa Tâm">Fanpage Linh Hoa Tâm</option>
                      <option value="Tiktok">Tiktok</option>
                      <option value="Youtube">Youtube</option>
                      <option value="Bạn bè giới thiệu">Bạn bè giới thiệu</option>
                      <option value="Cộng đồng Linh Hoa Tâm">Cộng đồng Linh Hoa Tâm</option>
                      <option value="Tìm kiếm Google">Tìm kiếm Google</option>
                      <option value="Kênh khác">Kênh khác</option>
                    </select>
                  </div>

                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full h-16 text-xl font-bold shadow-xl"
                    >
                      {isSubmitting ? 'ĐANG GỬI ĐĂNG KÝ...' : 'ĐĂNG KÝ THAM GIA NGAY'}
                    </Button>
                    <p className="text-center text-xs text-white/40 mt-4">
                      Thông tin của bạn được bảo mật hoàn toàn. Linh Hoa Tâm cam kết không chia sẻ cho bên thứ ba.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

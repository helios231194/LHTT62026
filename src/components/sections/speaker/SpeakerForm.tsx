'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { createLead } from '@/lib/nocobase';

interface SpeakerFormProps {
  topicsOptions?: string[];
}

export function SpeakerForm({ topicsOptions }: SpeakerFormProps) {
  const defaultOptions = topicsOptions && topicsOptions.length > 0 ? topicsOptions : [
    "Quy Luật Năng Lượng & Ra Quyết Định",
    "Đội Ngũ Tinh Nhuệ 2026",
    "Chu Kỳ Vận Hành Doanh Nghiệp",
    "Khác"
  ];

  const [formData, setFormData] = useState({
    name: '',
    job: '',
    email: '',
    phone: '',
    event: '',
    size: '',
    date: '',
    format: '',
    topic: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'form_moi_speaker',
      message: `Chủ đề: ${formData.topic}. Ghi chú: ${formData.notes}`
    };

    const extraDetails = {
      'Chức danh & Tổ chức': formData.job,
      'Tên & Loại hình sự kiện': formData.event || 'Không cung cấp',
      'Quy mô người dự': formData.size || 'Không cung cấp',
      'Ngày dự kiến': formData.date || 'Không cung cấp',
      'Hình thức tổ chức': formData.format || 'Không cung cấp',
      'Chủ đề mong muốn': formData.topic || 'Không cung cấp',
      'Yêu cầu đặc biệt': formData.notes || 'Không cung cấp'
    };

    const success = await createLead(leadData, extraDetails);
    setIsSubmitting(false);
    if (success) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        job: '',
        email: '',
        phone: '',
        event: '',
        size: '',
        date: '',
        format: '',
        topic: '',
        notes: ''
      });
    } else {
      alert('Gửi yêu cầu mời speaker thất bại. Vui lòng liên hệ trực tiếp hotline.');
    }
  };

  return (
    <section className="py-24 bg-ice-white relative" id="booking-form">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blaze-orange/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-oxford-blue">
        <SlideIn direction="up">
          <div className="text-center mb-12 text-oxford-blue">
            <h2 className="text-3xl md:text-4xl font-black text-oxford-blue leading-[1.2] mb-4">
              Gửi yêu cầu mời Master làm diễn giả.
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Linh Hoa Tâm sẽ phản hồi trong vòng <strong className="text-blaze-orange">24 giờ làm việc.</strong>
            </p>
          </div>
        </SlideIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-oxford-blue/5 p-8 md:p-12 border border-slate-100 relative overflow-hidden">
            {isSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-oxford-blue mb-2">Gửi yêu cầu thành công!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                    Yêu cầu mời Speaker của bạn đã được chuyển đến Master và ban thư ký. Chúng tôi sẽ phản hồi lịch trình chi tiết trong vòng 24 giờ.
                  </p>
                </div>
                <Button variant="secondary" className="px-8" onClick={() => setIsSubmitted(false)}>
                  Gửi tiếp yêu cầu
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-2">Họ tên người liên hệ <span className="text-blaze-orange">*</span></label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" 
                      placeholder="Nhập họ và tên" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-2">Chức danh và tổ chức <span className="text-blaze-orange">*</span></label>
                    <input 
                      type="text" 
                      required
                      value={formData.job}
                      onChange={e => setFormData({ ...formData, job: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" 
                      placeholder="CEO tại ABC Corp" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-2">Email liên hệ <span className="text-blaze-orange">*</span></label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" 
                      placeholder="email@congty.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-2">Số điện thoại <span className="text-blaze-orange">*</span></label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" 
                      placeholder="09xx xxx xxx" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-2">Tên sự kiện và loại hình</label>
                    <input 
                      type="text" 
                      value={formData.event}
                      onChange={e => setFormData({ ...formData, event: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" 
                      placeholder="VD: Hội thảo lãnh đạo, Lễ tất niên, Training..." 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-2">Quy mô người tham dự</label>
                    <select 
                      value={formData.size}
                      onChange={e => setFormData({ ...formData, size: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue appearance-none bg-white"
                    >
                      <option value="" disabled>Chọn quy mô</option>
                      <option value="Dưới 50">Dưới 50 người</option>
                      <option value="50 - 200">Từ 50 đến 200 người</option>
                      <option value="Trên 200">Trên 200 người</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-2">Ngày dự kiến</label>
                    <input 
                      type="text" 
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue" 
                      placeholder="VD: Giữa tháng 10/2026" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-oxford-blue mb-2">Hình thức tổ chức</label>
                    <select 
                      value={formData.format}
                      onChange={e => setFormData({ ...formData, format: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue appearance-none bg-white"
                    >
                      <option value="" disabled>Offline / Online / Hybrid</option>
                      <option value="Offline">Offline trực tiếp</option>
                      <option value="Online">Online qua Zoom/Teams</option>
                      <option value="Hybrid">Hybrid (Kết hợp)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-oxford-blue mb-2">Chủ đề mong muốn</label>
                  <select 
                    value={formData.topic}
                    onChange={e => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 h-14 outline-none transition-all font-medium text-oxford-blue appearance-none mb-3 bg-white"
                  >
                    <option value="" disabled>-- Chọn chuyên đề hoặc nhập tự do bên dưới --</option>
                    {defaultOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <textarea 
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-azure focus:ring-2 focus:ring-cyan-azure/20 rounded-xl px-4 py-4 outline-none transition-all font-medium text-oxford-blue" 
                    rows={4}
                    placeholder="Trao đổi thêm về chủ đề, yêu cầu đặc biệt hoặc ghi chú khác..."
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col items-center">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 h-16 text-lg font-bold rounded-xl shadow-xl shadow-blaze-orange/20 hover:-translate-y-1 hover:shadow-blaze-orange/40 transition-all duration-300 group"
                  >
                    {isSubmitting ? 'ĐANG GỬI...' : 'GỬI YÊU CẦU MỜI SPEAKER'}
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm font-medium text-slate-500 mt-4 text-center">
                    Thông tin của bạn được bảo mật tuyệt đối theo chính sách của Linh Hoa Tâm.
                  </p>
                </div>

              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

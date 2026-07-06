'use client';
import { useState } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';
import { createLead } from '@/lib/nocobase';

export function MasterCredentialForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !purpose) return;
    setIsSubmitting(true);

    const leadData = {
      name,
      email,
      source: 'tai_ho_so_master',
      message: `Mục đích tải hồ sơ: ${purpose}`
    };

    const extraDetails = {
      'Mục đích tải hồ sơ': purpose
    };

    const success = await createLead(leadData, extraDetails);
    setIsSubmitting(false);
    if (success) {
      setSubmitted(true);
      window.open('https://drive.google.com/file/d/1tpicvbqavsWWXpkL6a4QOO4yZTpRM1Zt/view?usp=share_link', '_blank');
    } else {
      alert('Gửi thông tin thất bại. Vui lòng thử lại sau.');
    }
  }

  return (
    <section id="credential" className="py-24 bg-ice-white text-oxford-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <FadeIn direction="right">
            <div>
              <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-wider text-oxford-blue bg-blaze-orange/10 uppercase">
                TÀI LIỆU CHUYÊN MÔN
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-oxford-blue">
                Tải hồ sơ chuyên môn đầy đủ của Master Hoàng Mai Linh.
              </h2>
              <p className="text-lg text-cyan-azure leading-relaxed mb-8">
                File PDF bao gồm hồ sơ chuyên môn, kinh nghiệm, danh sách sự kiện đã tham gia, các chuyên đề và thông tin liên hệ. Dành cho ban tổ chức sự kiện, đối tác và khách hàng cần tài liệu tham khảo trước khi ra quyết định.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-oxford-blue p-8 md:p-10 border border-white/10 shadow-2xl rounded-2xl">
              {submitted ? (
                <div className="text-center py-8 text-white">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4 text-green-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Cảm ơn bạn!</h3>
                  <p className="text-white/80 text-base mb-6 leading-relaxed">
                    Hồ sơ năng lực (Credential PDF) đang được mở trong tab mới. <br />
                    Nếu trình duyệt chặn popup, vui lòng bấm vào nút bên dưới để tải trực tiếp.
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/1tpicvbqavsWWXpkL6a4QOO4yZTpRM1Zt/view?usp=share_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-14 px-8 bg-blaze-orange text-white rounded-xl font-bold hover:bg-blaze-orange/90 transition-colors shadow-lg shadow-blaze-orange/20"
                  >
                    Bấm vào đây để tải trực tiếp
                  </a>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/70">Họ tên *</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 p-4 text-white placeholder-white/30 focus:outline-none focus:border-blaze-orange transition-colors" 
                      placeholder="Nguyễn Văn A" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/70">Email *</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 p-4 text-white placeholder-white/30 focus:outline-none focus:border-blaze-orange transition-colors" 
                      placeholder="email@congty.com" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/70">Mục đích tải *</label>
                    <select 
                      value={purpose}
                      onChange={e => setPurpose(e.target.value)}
                      className="w-full bg-oxford-blue border border-white/20 p-4 text-white focus:outline-none focus:border-blaze-orange transition-colors" 
                      required
                    >
                      <option value="">-- Chọn mục đích --</option>
                      <option value="Cân nhắc mời speaker">Cân nhắc mời speaker</option>
                      <option value="Tìm hiểu về dịch vụ coaching">Tìm hiểu về dịch vụ coaching</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>
                  <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full h-14 text-lg font-bold">
                    {isSubmitting ? 'ĐANG XỬ LÝ...' : 'TẢI CREDENTIAL (PDF)'}
                  </Button>
                  <p className="text-xs text-white/50 text-center mt-4">
                    File PDF sẽ được mở trực tiếp.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

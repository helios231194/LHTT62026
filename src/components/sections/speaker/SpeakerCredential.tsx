'use client';
import { useState } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { DownloadCloud, Mail, CheckCircle } from 'lucide-react';

interface SpeakerCredentialProps {
  pdfUrl?: string;
}

export function SpeakerCredential({ pdfUrl }: SpeakerCredentialProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const downloadUrl = pdfUrl || 'https://drive.google.com/file/d/1tpicvbqavsWWXpkL6a4QOO4yZTpRM1Zt/view?usp=share_link';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    window.open(downloadUrl, '_blank');
  }

  return (
    <section className="py-24 bg-oxford-blue text-white relative overflow-hidden" id="credential">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-azure/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col items-center text-center backdrop-blur-sm relative overflow-hidden">
          
          <SlideIn direction="up">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Tải hồ sơ diễn giả đầy đủ.
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10">
              File PDF bao gồm hồ sơ chuyên môn, danh sách sự kiện đã tham gia, các chuyên đề cốt lõi và thông tin liên hệ – tài liệu tham khảo hoàn chỉnh dành cho ban tổ chức kỹ tính nhất.
            </p>
          </SlideIn>

          <FadeIn direction="up" delay={0.2} className="w-full max-w-2xl">
            {submitted ? (
              <div className="text-center py-6 text-white space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto text-green-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Cảm ơn bạn!</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Hồ sơ năng lực (Credential PDF) đang được mở trong tab mới. <br />
                  Nếu trình duyệt chặn popup, vui lòng bấm vào nút bên dưới để tải trực tiếp.
                </p>
                <a 
                  href={downloadUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-14 px-8 bg-blaze-orange text-white rounded-xl font-bold hover:bg-blaze-orange/90 transition-colors shadow-lg shadow-blaze-orange/20"
                >
                  Bấm vào đây để tải trực tiếp
                </a>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-white/40" />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn để nhận file..." 
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 h-16 rounded-full pl-14 pr-6 focus:outline-none focus:border-cyan-azure focus:ring-4 focus:ring-cyan-azure/20 transition-all font-medium text-lg"
                    required
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="h-16 px-8 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all duration-300 whitespace-nowrap group">
                  <DownloadCloud className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                  TẢI CREDENTIAL PDF
                </Button>
              </form>
            )}
            <p className="text-white/40 text-xs mt-6">
              Bằng cách tải file, bạn đồng ý nhận các bài viết về thuật số học ứng dụng trong quản trị từ Linh Hoa Tâm. 100% không spam.
            </p>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}

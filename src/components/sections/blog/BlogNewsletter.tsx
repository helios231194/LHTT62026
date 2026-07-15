'use client';
import { useState } from 'react';
import { createLead } from '@/lib/nocobase';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Mail, CheckCircle2 } from 'lucide-react';

export function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    const success = await createLead({
      name: 'Người đăng ký Newsletter',
      email: email,
      phone: '0000000000', // Dummy phone for lead creation requirement
      source: 'blog_newsletter',
      message: 'Đăng ký nhận bản tin Tư Duy Mạnh Mẽ'
    });
    setIsSubmitting(false);

    if (success) {
      setIsSubmitted(true);
      setEmail('');
    } else {
      alert('Gửi đăng ký thất bại. Vui lòng thử lại sau.');
    }
  };

  return (
    <section className="py-24 bg-ice-white text-oxford-blue border-t border-light-gray">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn direction="up">
          <div className="w-16 h-16 bg-blaze-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-blaze-orange" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight text-oxford-blue">
            Nhận bản tin <span className="text-blaze-orange">&quot;Tư Duy Mạnh Mẽ&quot;</span> hàng tuần
          </h2>
          <p className="text-lg text-cyan-azure max-w-2xl mx-auto mb-12">
            Bài viết phân tích thực tế sâu sắc và tài liệu ứng dụng gửi thẳng vào email của bạn mỗi sáng thứ Hai, giúp bạn bắt đầu một tuần vận hành với sự minh mẫn.
          </p>
          
          {isSubmitted ? (
            <div className="max-w-xl mx-auto bg-white border border-light-gray rounded-2xl p-8 flex flex-col items-center gap-4 shadow-sm mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
              <div>
                <h3 className="text-xl font-bold text-oxford-blue">Đăng ký nhận bản tin thành công!</h3>
                <p className="text-slate-500 text-sm mt-1">Chúng tôi sẽ gửi số bản tin đầu tiên cho bạn vào sáng thứ Hai tới.</p>
              </div>
            </div>
          ) : (
            <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-8" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Email của bạn..." 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-grow h-16 px-6 bg-white border border-light-gray text-oxford-blue focus:outline-none focus:border-blaze-orange text-lg transition-colors placeholder:text-oxford-blue/30 font-medium"
              />
              <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="h-16 px-10 font-bold shadow-lg shrink-0">
                {isSubmitting ? 'ĐANG ĐĂNG KÝ...' : 'ĐĂNG KÝ'}
              </Button>
            </form>
          )}
          
          <p className="text-cyan-azure/60 text-sm mb-10">Linh Hoa Tâm không bao giờ gửi thư rác hay chia sẻ email của bạn.</p>
          
          <div>
            <span className="text-oxford-blue/40 text-sm font-bold uppercase tracking-widest mr-4">Thường xuyên dùng Facebook?</span>
            <Link href="https://facebook.com/groups/linhhoatam" target="_blank" className="inline-block text-metallic-blue hover:text-blaze-orange font-bold underline underline-offset-4 mt-2 sm:mt-0 transition-colors">
              Tham gia Group Cộng Đồng →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

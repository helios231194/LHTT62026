'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export function BlogNewsletter() {
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
          
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email của bạn..." 
              required
              className="flex-grow h-16 px-6 bg-white border border-light-gray text-oxford-blue focus:outline-none focus:border-blaze-orange text-lg transition-colors placeholder:text-oxford-blue/30"
            />
            <Button type="submit" variant="primary" size="lg" className="h-16 px-10 font-bold shadow-lg shrink-0">
              ĐĂNG KÝ
            </Button>
          </form>
          
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

'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Search } from 'lucide-react';

export function BlogHero() {
  return (
    <section className="relative w-full py-20 bg-oxford-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-oxford-blue via-oxford-blue to-blaze-orange/20 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Kiến thức <span className="text-blaze-orange border-b-4 border-blaze-orange">thực dụng</span> từ Master.
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto">
            Góc nhìn thẳng thắn về ứng dụng Thuật Số Học trong quản trị doanh nghiệp, xây dựng đội ngũ và hoạch định sự nghiệp cá nhân.
          </p>
          
          <div className="relative max-w-2xl mx-auto flex items-center group">
            <Search className="absolute left-6 text-white/50 w-6 h-6 group-focus-within:text-blaze-orange transition-colors" />
            <input 
              type="text" 
              placeholder="Tìm kiếm bài viết, chủ đề..." 
              className="w-full h-16 bg-white/10 border-2 border-white/20 pl-16 pr-36 focus:outline-none focus:border-blaze-orange transition-colors text-white text-lg placeholder:text-white/40"
            />
            <Button variant="primary" className="absolute right-2 top-2 bottom-2 rounded-none px-6 font-bold shadow-none text-sm tracking-wider h-auto">
              TÌM KIẾM
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="text-sm font-bold text-white/40 uppercase tracking-widest pt-1">Gợi ý:</span>
            {['Năm cá nhân', 'Tuyển dụng', 'Con số chủ đạo', 'Lộ trình 9 năm'].map((tag, i) => (
              <a key={i} href="#" className="text-sm font-medium text-white/60 hover:text-white bg-white/5 hover:bg-blaze-orange/20 px-3 py-1 transition-colors border border-white/10">
                {tag}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

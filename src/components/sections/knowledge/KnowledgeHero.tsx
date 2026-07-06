'use client';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { Search } from 'lucide-react';
import { KNOWLEDGE_CATEGORIES } from './KnowledgeClient';

interface KnowledgeHeroProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function KnowledgeHero({ activeCategory, onCategoryChange, searchQuery, onSearchChange }: KnowledgeHeroProps) {
  return (
    <section className="bg-oxford-blue text-white pt-24 pb-12 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-azure/10 blur-[150px] mix-blend-screen pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blaze-orange/10 blur-[150px] mix-blend-screen pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SlideIn direction="up">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Kiến thức ứng dụng từ
              <span className="block mt-6 py-3 leading-normal text-transparent bg-clip-text bg-gradient-to-r from-blaze-orange to-[#ff9b50] w-fit mx-auto">
                Thuật Số Học
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-4xl mx-auto">
              Bài viết chuyên sâu về lãnh đạo, vận hành doanh nghiệp, phát triển bản thân <br className="hidden md:inline" /> và ra quyết định theo chu kỳ. Cập nhật định kỳ hàng tuần.
            </p>
          </div>
        </SlideIn>

        <FadeIn direction="up" delay={0.2}>
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16 relative">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-full h-16 pl-16 pr-6 focus:outline-none focus:ring-4 focus:ring-blaze-orange/20 focus:border-blaze-orange transition-all text-lg backdrop-blur-md"
              placeholder="Tìm bài viết theo tiêu đề hoặc mô tả..." 
            />
          </div>

          {/* Filter Bar (Pills) */}
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {KNOWLEDGE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`
                  whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border
                  ${activeCategory === category 
                    ? 'bg-blaze-orange border-blaze-orange text-white shadow-[0_0_15px_rgba(255,107,0,0.4)]' 
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

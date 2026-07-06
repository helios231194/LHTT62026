import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { newsArticles } from '@/data/news';

export function News() {
  const latestNews = newsArticles.slice(0, 3);

  return (
    <section id="tin-tuc" className="py-24 bg-ice-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <SectionTitle>Tin tức nổi bật</SectionTitle>
          <SectionSubtitle>
            Cập nhật những bài viết mới nhất, kiến thức chuyên sâu và các chia sẻ giá trị về phát triển bản thân, coaching, EQ và hành trình sống thấu hiểu hơn mỗi ngày.
          </SectionSubtitle>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestNews.map((article) => (
            <FadeIn key={article.id}>
              <Link href={`/tin-tuc/${article.slug}`} className="block h-full group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cyan-azure/10 hover:shadow-lg transition-all h-full flex flex-col">
                  {/* Image */}
                  <div className="aspect-[16/9] w-full relative overflow-hidden bg-oxford-blue/5">
                      {article.imageUrl ? (
                        <Image src={article.imageUrl} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-cyan-azure/40 font-medium">No Image</div>
                      )}
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-oxford-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-xs font-semibold text-blaze-orange tracking-wider uppercase">
                        {article.category}
                      </div>
                      <div className="text-xs text-metallic-blue/70 font-medium">
                        {article.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-oxford-blue mb-4 group-hover:text-blaze-orange transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-metallic-blue line-clamp-3 mb-6 flex-grow">
                      {article.summary}
                    </p>
                    <div className="flex items-center text-oxford-blue font-medium text-sm group-hover:text-blaze-orange transition-colors mt-auto">
                      Đọc tiếp <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center">
          <Link href="/tin-tuc">
            <Button variant="outline" size="lg" className="border-oxford-blue text-oxford-blue hover:bg-oxford-blue hover:text-ice-white">
              Xem tất cả bài viết
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

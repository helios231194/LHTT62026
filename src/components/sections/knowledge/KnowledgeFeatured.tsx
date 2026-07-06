'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/nocobase';
import { CATEGORY_MAP, resolveAttachmentUrl } from '@/lib/nocobase';

interface KnowledgeFeaturedProps {
  articles: Article[];
}

export function KnowledgeFeatured({ articles }: KnowledgeFeaturedProps) {
  // Hiển thị bài đầu tiên làm featured
  const featured = articles[0];
  if (!featured) return null;

  const coverUrl = resolveAttachmentUrl(featured.image?.[0]?.url);
  const categoryLabel = CATEGORY_MAP[featured.category] ?? featured.category;
  const dateStr = featured.published_at
    ? new Date(featured.published_at).toLocaleDateString('vi-VN')
    : '';

  return (
    <section className="py-24 bg-ice-white relative" id="featured">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-10 border border-slate-100 flex flex-col lg:flex-row items-center gap-10 md:gap-16 group hover:shadow-cyan-azure/10 transition-all duration-500 overflow-hidden relative">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blaze-orange/5 blur-3xl rounded-full pointer-events-none" />

            {/* Thumbnail */}
            <Link
              href={`/kien-thuc/${featured.slug || featured.id}`}
              className="block w-full lg:w-1/2 aspect-video lg:aspect-square xl:aspect-[4/3] relative rounded-3xl overflow-hidden bg-oxford-blue border border-slate-200"
            >
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold border-4 border-dashed border-white/10 m-4 rounded-2xl group-hover:scale-105 transition-transform duration-700">
                  <span className="text-xl text-center px-4">{featured.title}</span>
                </div>
              )}
            </Link>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blaze-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Nổi bật
                </span>
                {categoryLabel && (
                  <span className="bg-cyan-azure/10 text-cyan-azure text-xs font-bold uppercase tracking-wider px-3 py-1 border border-cyan-azure/20 rounded-full">
                    {categoryLabel}
                  </span>
                )}
              </div>

              {/* Title */}
              <Link href={`/kien-thuc/${featured.slug || featured.id}`}>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-oxford-blue leading-[1.2] mb-6 hover:text-cyan-azure transition-colors duration-300 text-balance">
                  {featured.title}
                </h2>
              </Link>

              {/* Summary */}
              <p className="text-slate-600 text-lg leading-relaxed mb-8 text-pretty line-clamp-3">
                {featured.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-10 pb-10 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-oxford-blue">
                    ML
                  </div>
                  <span className="text-oxford-blue font-bold">{featured.author}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-300" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{featured.read_time} phút đọc</span>
                </div>
                {dateStr && (
                  <>
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{dateStr}</span>
                  </>
                )}
              </div>

              {/* CTA */}
              <Link href={`/kien-thuc/${featured.slug || featured.id}`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="h-14 px-8 font-bold rounded-xl shadow-lg shadow-blaze-orange/20 hover:-translate-y-1 hover:shadow-blaze-orange/40 transition-all w-full sm:w-auto"
                >
                  ĐỌC BÀI VIẾT NÀY
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

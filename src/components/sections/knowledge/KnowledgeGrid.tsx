'use client';
import { useState } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/AnimationWrapper';
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/nocobase';
import { CATEGORY_MAP, resolveAttachmentUrl } from '@/lib/nocobase';

interface KnowledgeGridProps {
  articles: Article[];
  headline: string;
}

const ITEMS_PER_PAGE = 6;

// ── Skeleton Card ──────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-oxford-blue/5 animate-pulse">
      <div className="aspect-[4/3] w-full bg-slate-200" />
      <div className="p-8 flex flex-col flex-1 gap-4">
        <div className="h-5 w-24 bg-slate-200 rounded-full" />
        <div className="flex flex-col gap-2">
          <div className="h-5 w-full bg-slate-200 rounded-lg" />
          <div className="h-5 w-4/5 bg-slate-200 rounded-lg" />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="h-3 w-full bg-slate-100 rounded" />
          <div className="h-3 w-5/6 bg-slate-100 rounded" />
        </div>
        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="h-3 w-32 bg-slate-200 rounded" />
          <div className="h-3 w-20 bg-slate-200 rounded" />
        </div>
      </div>
    </div>
  );
}

export function KnowledgeGrid({ articles, headline }: KnowledgeGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const currentPosts = articles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      window.scrollTo({
        top: document.getElementById('knowledge-grid')?.offsetTop ?? 0,
        behavior: 'smooth',
      });
    }, 280);
  };

  return (
    <section id="knowledge-grid" className="py-24 bg-ice-white relative scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SlideIn direction="up">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue">{headline}</h2>
            <div className="flex-1 h-px bg-slate-200 mt-2 hidden sm:block" />
          </div>
        </SlideIn>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, idx) => {
                const coverUrl = resolveAttachmentUrl(post.image?.[0]?.url);
                const categoryLabel = CATEGORY_MAP[post.category] ?? post.category;
                const dateStr = post.published_at
                  ? new Date(post.published_at).toLocaleDateString('vi-VN')
                  : '';

                return (
                  <FadeIn key={post.id} direction="up" delay={idx * 0.07}>
                    <article className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-oxford-blue/5 hover:shadow-cyan-azure/10 hover:-translate-y-2 hover:border-cyan-azure/20 transition-all duration-300">
                      
                      {/* Cover image */}
                      <Link
                        href={`/kien-thuc/${post.slug || post.id}`}
                        className="block relative aspect-[4/3] w-full overflow-hidden bg-oxford-blue"
                      >
                        {coverUrl ? (
                          <Image
                            src={coverUrl}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 font-bold group-hover:scale-105 transition-transform duration-700 px-4">
                            <span className="text-center text-sm leading-snug">{post.title}</span>
                          </div>
                        )}
                      </Link>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-blaze-orange/10 text-blaze-orange text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-blaze-orange/20">
                            {categoryLabel || 'Kiến thức'}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-oxford-blue leading-snug mb-4 group-hover:text-cyan-azure transition-colors line-clamp-2">
                          <Link href={`/kien-thuc/${post.slug || post.id}`}>{post.title}</Link>
                        </h3>

                        <p className="text-slate-600 mb-6 line-clamp-2 text-[15px] flex-1">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{post.read_time} phút</span>
                            <span className="text-slate-200">|</span>
                            <span>{dateStr}</span>
                          </div>
                          <Link
                            href={`/kien-thuc/${post.slug || post.id}`}
                            className="text-sm font-bold text-cyan-azure flex items-center hover:text-blaze-orange transition-colors"
                          >
                            Đọc thêm <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-blaze-orange hover:border-blaze-orange disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const page = idx + 1;
                    if (
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(currentPage - page) <= 1
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-12 h-12 flex items-center justify-center rounded-full font-bold transition-colors ${
                            currentPage === page
                              ? 'bg-blaze-orange text-white shadow-lg shadow-blaze-orange/20'
                              : 'border border-slate-200 text-slate-600 hover:border-blaze-orange hover:text-blaze-orange'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                    if (
                      (page === 2 && currentPage > 3) ||
                      (page === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return (
                        <span key={page} className="text-slate-400 font-bold px-1">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-blaze-orange hover:border-blaze-orange disabled:opacity-30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center text-slate-500 font-medium">
            <FadeIn direction="up">
              Không tìm thấy bài viết phù hợp. Thử từ khóa khác nhé!
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
}

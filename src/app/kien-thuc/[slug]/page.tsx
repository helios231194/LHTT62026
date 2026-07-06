import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Clock,
  CalendarDays,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticles, getArticleBySlug, CATEGORY_MAP, resolveAttachmentUrl } from '@/lib/nocobase';

interface PageProps {
  params: { slug: string };
}

// ── Static Params: pre-render tất cả bài viết published ───────
// ISR: sau 5 phút, Next.js tự gọi lại NocoBase để cập nhật
export const revalidate = 300;

export async function generateStaticParams() {
  const { data } = await getArticles({ pageSize: 500 });
  return data.map((a) => ({ slug: a.slug || String(a.id) }));
}

// ── Metadata động từ NocoBase ──────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: 'Không tìm thấy bài viết | Linh Hoa Tâm' };

  const categoryLabel = CATEGORY_MAP[article.category] ?? 'Kiến thức';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';
  const ogImageUrl = `${siteUrl}/api/og?title=${encodeURIComponent(article.title)}&tag=${encodeURIComponent(categoryLabel)}`;
  const articleUrl = `${siteUrl}/kien-thuc/${article.slug || article.id}`;

  return {
    title: `${article.title} | Linh Hoa Tâm`,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      locale: 'vi_VN',
      url: articleUrl,
      publishedTime: article.published_at,
      authors: [article.author],
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [ogImageUrl],
    },
  };
}

// XSS-safe JSON-LD serialization
function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

// ── Page ────────────────────────────────────────────────────────
export default async function ArticleDetailPage({ params }: PageProps) {
  const [article, { data: allArticles }] = await Promise.all([
    getArticleBySlug(params.slug),
    getArticles({ pageSize: 200 }),
  ]);

  if (!article) notFound();

  // Related: cùng category, loại bài hiện tại, tối đa 3
  const related = allArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);
  // Nếu không đủ 3 cùng category → lấy thêm bất kỳ
  if (related.length < 3) {
    const extra = allArticles
      .filter((a) => a.slug !== article.slug && !related.find((r) => r.id === a.id))
      .slice(0, 3 - related.length);
    related.push(...extra);
  }

  const categoryLabel = CATEGORY_MAP[article.category] ?? article.category ?? 'Kiến thức';
  const coverUrl = resolveAttachmentUrl(article.image?.[0]?.url);
  const dateStr = article.published_at
    ? new Date(article.published_at).toLocaleDateString('vi-VN')
    : '';
  const updateDateStr = (article as any).updatedAt
    ? new Date((article as any).updatedAt).toLocaleDateString('vi-VN')
    : '';

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';
  const articleUrl = `${siteUrl}/kien-thuc/${article.slug || article.id}`;
  
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': article.excerpt,
    'image': coverUrl ? [coverUrl] : [],
    'datePublished': article.published_at,
    'dateModified': (article as any).updatedAt || article.published_at,
    'author': {
      '@type': 'Person',
      'name': article.author,
      'url': `${siteUrl}/master-hoang-mai-linh`
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Linh Hoa Tâm',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/LOGO-07.png`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': articleUrl
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Trang chủ', 'item': siteUrl },
      { '@type': 'ListItem', 'position': 2, 'name': 'Kiến thức', 'item': `${siteUrl}/kien-thuc` },
      { '@type': 'ListItem', 'position': 3, 'name': article.title, 'item': articleUrl },
    ],
  };

  const jsonLd = [articleSchema, breadcrumbSchema];

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue pb-24">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl py-6 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
            <Link
              href="/kien-thuc"
              className="hover:text-blaze-orange transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4" /> Trở về Kiến thức
            </Link>
            <span className="text-slate-300">|</span>
            <span className="text-cyan-azure">{categoryLabel}</span>
            <span className="text-slate-300">|</span>
            <span className="truncate max-w-[200px] md:max-w-none text-slate-400">
              {article.title}
            </span>
          </div>
        </div>

        {/* Article */}
        <article className="container mx-auto px-4 md:px-6 max-w-3xl lg:max-w-4xl mt-12 md:mt-16">
          <header className="mb-12">
            {/* Category badge */}
            <div className="mb-4">
              <span className="bg-blaze-orange/10 text-blaze-orange text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-blaze-orange/20">
                {categoryLabel}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-oxford-blue leading-[1.2] mb-6">
              {article.title}
            </h1>

            {/* Tags */}
            {article.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500 pb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-azure/10 flex items-center justify-center text-cyan-azure font-bold border border-cyan-azure/20">
                  ML
                </div>
                <span className="text-oxford-blue font-bold">{article.author}</span>
              </div>
              {dateStr && (
                <div className="flex items-center gap-1.5 flex-wrap">
                  <CalendarDays className="w-4 h-4" />
                  <span>Đăng ngày: {dateStr}</span>
                  {updateDateStr && updateDateStr !== dateStr && (
                    <span className="text-slate-400"> (Cập nhật: {updateDateStr})</span>
                  )}
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.read_time} phút đọc
              </div>
            </div>
          </header>

          {/* Cover Image */}
          {coverUrl ? (
            <div className="w-full aspect-video rounded-[2rem] mb-12 overflow-hidden relative shadow-lg shadow-oxford-blue/5">
              <Image
                src={coverUrl}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          ) : (
            <div className="w-full aspect-video bg-oxford-blue rounded-[2rem] mb-12 flex items-center justify-center border border-slate-200 overflow-hidden relative shadow-lg shadow-oxford-blue/5">
              <div className="text-white/20 font-bold text-2xl text-center px-8">
                {article.title}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="w-full lg:px-8 mx-auto">
            <div
              className="prose prose-lg md:prose-xl prose-slate max-w-none
              prose-headings:font-black prose-headings:text-oxford-blue prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-cyan-azure/20
              prose-h3:text-xl prose-h3:text-cyan-azure prose-h3:mt-8
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blaze-orange prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-oxford-blue prose-strong:font-black
              prose-blockquote:border-l-4 prose-blockquote:border-blaze-orange prose-blockquote:bg-blaze-orange/5 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:font-medium prose-blockquote:text-slate-700 prose-blockquote:italic
              prose-li:text-slate-600 marker:text-blaze-orange
              prose-img:rounded-2xl prose-img:shadow-lg"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>

            {/* Category & Tags footer */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-start gap-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-500 uppercase">Chuyên mục:</span>
                <Link
                  href="/kien-thuc"
                  className="bg-slate-100 text-slate-700 font-medium text-sm px-4 py-1.5 rounded-full hover:bg-cyan-azure hover:text-white transition-colors"
                >
                  {categoryLabel}
                </Link>
              </div>
            </div>

            {/* End CTA */}
            <div className="mt-16 bg-oxford-blue rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-azure to-blaze-orange" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-azure/20 rounded-full blur-[80px] pointer-events-none" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">
                Đừng ra quyết định mù mờ.
              </h3>
              <p className="text-white/80 text-lg mb-8 relative z-10 max-w-lg mx-auto">
                Khám phá bản đồ chiến lược cá nhân hóa để biết chính xác bạn đang ở đâu trên quỹ đạo thành công.
              </p>
              <Link href="/lien-he" className="relative z-10 block">
                <Button
                  variant="primary"
                  className="font-bold px-10 py-5 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:-translate-y-1 transition-all text-lg"
                >
                  ĐẶT LỊCH THAM VẤN NGAY
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-oxford-blue">Bài viết liên quan</h2>
              <div className="w-16 h-1 bg-blaze-orange mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((post) => {
                const relCoverUrl = resolveAttachmentUrl(post.image?.[0]?.url);
                const relCategoryLabel = CATEGORY_MAP[post.category] ?? post.category;
                return (
                  <article
                    key={post.id}
                    className="group flex flex-col bg-ice-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-oxford-blue/5 hover:shadow-cyan-azure/10 hover:-translate-y-2 hover:border-cyan-azure/20 transition-all duration-300"
                  >
                    <Link
                      href={`/kien-thuc/${post.slug || post.id}`}
                      className="block relative aspect-[4/3] w-full overflow-hidden bg-oxford-blue"
                    >
                      {relCoverUrl ? (
                        <Image
                          src={relCoverUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold group-hover:scale-105 transition-transform duration-700 px-4">
                          <span className="text-center text-sm">{post.title}</span>
                        </div>
                      )}
                    </Link>

                    <div className="p-8 flex flex-col flex-1">
                      <span className="text-blaze-orange text-[10px] uppercase font-bold tracking-wider mb-3">
                        {relCategoryLabel}
                      </span>
                      <h3 className="text-lg font-bold text-oxford-blue leading-snug mb-3 group-hover:text-cyan-azure transition-colors line-clamp-2">
                        <Link href={`/kien-thuc/${post.slug || post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-2 text-sm flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-5 border-t border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.read_time} phút</span>
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
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

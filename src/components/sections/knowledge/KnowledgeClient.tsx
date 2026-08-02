'use client';
import { useState, useMemo } from 'react';
import { KnowledgeHero } from './KnowledgeHero';
import { KnowledgeFeatured } from './KnowledgeFeatured';
import { KnowledgeGrid } from './KnowledgeGrid';
import { KnowledgeNewsletter } from './KnowledgeNewsletter';
import { KnowledgeCTA } from './KnowledgeCTA';
import type { Article, Profile } from '@/lib/nocobase';
import { CATEGORY_MAP } from '@/lib/nocobase';

// Label map ngược: value slug → display label
const CATEGORY_LABELS = Object.entries(CATEGORY_MAP).map(([value, label]) => ({
  value,
  label,
}));

export const KNOWLEDGE_CATEGORIES = [
  'Tất cả',
  ...CATEGORY_LABELS.map((c) => c.label),
];

interface KnowledgeClientProps {
  initialArticles: Article[];
  initialProfile?: Profile | null;
}

export function KnowledgeClient({ initialArticles, initialProfile }: KnowledgeClientProps) {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  // 0. Đảm bảo tất cả bài viết được sắp xếp mới nhất lên đầu
  const sortedInitialArticles = useMemo(() => {
    return [...initialArticles].sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;

      const timeA = new Date(a.published_at || (a as any).createdAt || a.updatedAt || 0).getTime();
      const timeB = new Date(b.published_at || (b as any).createdAt || b.updatedAt || 0).getTime();

      if (timeA !== timeB) return timeB - timeA;
      return b.id - a.id;
    });
  }, [initialArticles]);

  // 1. Tìm các bài viết được ghim (pinned)
  const pinnedArticles = useMemo(() => {
    return sortedInitialArticles.filter((a) => a.pinned === true);
  }, [sortedInitialArticles]);

  // 2. Chọn bài nổi bật (ghim mới nhất, hoặc bài mới nhất nếu không ghim)
  const featuredArticle = useMemo(() => {
    if (pinnedArticles.length > 0) {
      return pinnedArticles[0];
    }
    return sortedInitialArticles[0]; // Fallback về bài mới nhất
  }, [pinnedArticles, sortedInitialArticles]);

  // 3. Client-side filter trên dữ liệu đã được pre-fetched (không gọi API)
  const filteredArticles = useMemo(() => {
    return sortedInitialArticles.filter((post) => {
      // Category filter: map label → slug
      const activeCategorySlug =
        CATEGORY_LABELS.find((c) => c.label === activeCategory)?.value ?? null;

      const matchesCategory =
        activeCategory === 'Tất cả' ||
        post.category === activeCategorySlug;

      const matchesSearch = searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      return matchesCategory && matchesSearch;
    });
  }, [sortedInitialArticles, activeCategory, searchQuery]);

  // 4. Loại bỏ bài nổi bật ra khỏi lưới để tránh trùng lặp
  const gridArticles = useMemo(() => {
    if (!featuredArticle) return filteredArticles;
    return filteredArticles.filter((a) => a.id !== featuredArticle.id);
  }, [filteredArticles, featuredArticle]);

  return (
    <>
      <KnowledgeHero
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {activeCategory === 'Tất cả' ? (
        <>
          {featuredArticle && <KnowledgeFeatured articles={[featuredArticle]} />}
          <KnowledgeGrid
            articles={gridArticles}
            headline="Bài viết mới nhất."
          />
        </>
      ) : (
        <KnowledgeGrid
          articles={filteredArticles}
          headline={`${activeCategory} – Bài viết`}
        />
      )}

      <KnowledgeNewsletter initialProfile={initialProfile} />
      <KnowledgeCTA />
    </>
  );
}

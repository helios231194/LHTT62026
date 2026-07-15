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

  // 1. Tìm các bài viết được ghim (pinned)
  const pinnedArticles = useMemo(() => {
    return initialArticles.filter((a) => a.pinned === true);
  }, [initialArticles]);

  // 2. Chọn bài nổi bật (ghim mới nhất theo updatedAt, hoặc bài mới nhất nếu không ghim)
  const featuredArticle = useMemo(() => {
    if (pinnedArticles.length > 0) {
      const sortedPinned = [...pinnedArticles].sort((a, b) => {
        const timeA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
        const timeB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
        return timeB - timeA; // Mới nhất lên đầu
      });
      return sortedPinned[0];
    }
    return initialArticles[0]; // Fallback về bài mới nhất
  }, [pinnedArticles, initialArticles]);

  // 3. Client-side filter trên dữ liệu đã được pre-fetched (không gọi API)
  const filteredArticles = useMemo(() => {
    return initialArticles.filter((post) => {
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
  }, [initialArticles, activeCategory, searchQuery]);

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

import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { KnowledgeClient } from '@/components/sections/knowledge/KnowledgeClient';
import { getArticles } from '@/lib/nocobase';

// ISR: Next.js tự gọi lại NocoBase sau 5 phút, không cần webhook
export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Kiến Thức | Linh Hoa Tâm - Thuật Số Học Ứng Dụng',
  description:
    'Bài viết chuyên sâu về lãnh đạo, vận hành doanh nghiệp, phát triển bản thân và ra quyết định theo chu kỳ. Cập nhật định kỳ hàng tuần từ Master Hoàng Mai Linh.',
};

export default async function KienThucPage() {
  // Fetch toàn bộ bài published lúc build — không call API lúc browser render
  const { data: articles } = await getArticles({ pageSize: 200 });

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-ice-white text-oxford-blue">
        {/* Articles được pre-fetched server-side, truyền xuống client để filter/search */}
        <KnowledgeClient initialArticles={articles} />
      </main>
      <Footer />
    </>
  );
}

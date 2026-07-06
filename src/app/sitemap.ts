import { getArticles } from '@/lib/nocobase';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }[] = [
  { path: '', priority: 1.0, changeFrequency: 'daily' },
  { path: '/giai-phap-lanh-dao', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/phat-trien-ban-than', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/master-hoang-mai-linh', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/linh-hoa-tam', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/kien-thuc', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/speaker', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/workshop-chien-luoc', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/workshop-ca-nhan', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/cong-dong', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/lien-he', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sach', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/phuong-phap', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/webinar', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/ho-so-van-menh', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/truong-dai-dien', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/chinh-sach-bao-mat', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/dieu-khoan-dich-vu', priority: 0.5, changeFrequency: 'monthly' },
];

export const revalidate = 3600; // Tái xây dựng sitemap mỗi 1 giờ

export default async function sitemap() {
  const { data: articles } = await getArticles({ pageSize: 500 });

  const staticUrls = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const articleUrls = articles.map((article) => ({
    url: `${SITE_URL}/kien-thuc/${article.slug || article.id}`,
    lastModified: new Date(article.updatedAt || article.published_at || Date.now()),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticUrls, ...articleUrls];
}

import { NextResponse } from 'next/server';
import { getArticles } from '@/lib/nocobase';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://linhhoatam.com';


export async function GET() {
  try {
    const { data: articles } = await getArticles({ pageSize: 100 });

    const rssItems = articles
      .map((article) => {
        const url = `${SITE_URL}/kien-thuc/${article.slug || article.id}`;
        const pubDate = article.published_at
          ? new Date(article.published_at).toUTCString()
          : new Date().toUTCString();
        
        const title = escapeXml(article.title);
        const excerpt = escapeXml(article.excerpt || '');
        const author = escapeXml(article.author || 'Master Hoàng Mai Linh');

        return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${excerpt}]]></description>
      <author>${author}</author>
    </item>`;
      })
      .join('');

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kiến Thức | Linh Hoa Tâm - Thuật Số Học Ứng Dụng</title>
    <link>${SITE_URL}/kien-thuc</link>
    <description>Bài viết chuyên sâu về lãnh đạo, vận hành doanh nghiệp, phát triển bản thân và ra quyết định theo chu kỳ từ Master Hoàng Mai Linh.</description>
    <language>vi-vn</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

    return new NextResponse(rssFeed, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new NextResponse('Error generating RSS feed', { status: 500 });
  }
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

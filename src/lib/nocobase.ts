/**
 * NocoBase API Client
 * Server-side only — chỉ chạy trong Server Components / generateStaticParams / Route Handlers
 *
 * Chiến lược cache: ISR time-based (không dùng webhook)
 *   - Trang bài viết: revalidate mỗi 5 phút
 *   - Trang danh mục / services / stats: revalidate mỗi 30 phút
 */



const BASE_URL = process.env.NOCOBASE_BASE_URL ?? 'https://lht.gun.hmz.one';
const TOKEN    = process.env.NOCOBASE_TOKEN ?? '';

const defaultHeaders = {
  'Authorization': `Bearer ${TOKEN}`,
  'Content-Type':  'application/json',
};

// ─────────────────────────────────────────────────────────────
// Types (Re-exported from ./types for backward compatibility)
// ─────────────────────────────────────────────────────────────

export type {
  Attachment,
  Article,
  Service,
  Stat,
  Partner,
  Testimonial,
  SpeakerEvent,
  Lead,
  Profile,
  Workshop,
  BookFeedback,
  BookVideo,
  ProductBase,
  PersonalProduct,
  BusinessProduct,
  FacebookPost,
  SpeakerAssets,
} from './types';
import type {
  Attachment,
  Article,
  Service,
  Stat,
  Partner,
  Testimonial,
  SpeakerEvent,
  Lead,
  Profile,
  Workshop,
  BookFeedback,
  BookVideo,
} from './types';

// ─────────────────────────────────────────────────────────────
// Category mapping
// ─────────────────────────────────────────────────────────────

export const CATEGORY_MAP: Record<string, string> = {
  'he-dieu-hanh-ca-nhan': 'Hệ điều hành cá nhân',
  'ra-quyet-dinh':        'Ra quyết định',
  'doi-ngu-nhan-su':      'Đội ngũ & Nhân sự',
  'tai-chinh-dau-tu':     'Tài chính & Đầu tư',
  'lanh-dao-van-hanh':    'Lãnh đạo & Vận hành',
};

export const CATEGORIES = Object.entries(CATEGORY_MAP).map(([value, label]) => ({
  value,
  label,
}));

/**
 * Resolve attachment URL to an absolute URL usable by Next/Image.
 * Can receive either a string URL or a full attachment object.
 * Priority: preview (pre-encoded, /storage/) > url (may contain Vietnamese chars)
 */
export function resolveAttachmentUrl(
  urlOrObject?: string | { url?: string; preview?: string } | null,
  preview?: string
): string | undefined {
  if (!urlOrObject) return undefined;

  // Support passing an attachment object directly
  if (typeof urlOrObject === 'object') {
    const obj = urlOrObject as { url?: string; preview?: string };
    return resolveAttachmentUrl(obj.preview || obj.url);
  }

  const url = urlOrObject as string;
  const effectivePreview = preview;

  if (effectivePreview) {
    if (effectivePreview.startsWith('http')) return effectivePreview;
    if (effectivePreview.startsWith('/storage/')) return `${BASE_URL}${effectivePreview}`;
    if (effectivePreview.startsWith('/uploads/')) return `${BASE_URL}/storage${effectivePreview}`;
    return effectivePreview;
  }

  if (url.startsWith('http')) return url;
  if (url.startsWith('/storage/')) return `${BASE_URL}${url}`;
  if (url.startsWith('/uploads/')) return `${BASE_URL}/storage${url}`;
  return url; // /images/, /herobanner/, /testimonials/ → static local assets
}

// Thời gian revalidate (giây)
const REVALIDATE_ARTICLES = 10;    // 10 giây — bài viết cập nhật gần như lập tức
const REVALIDATE_CONFIG   = 10;     // 10 giây — services, stats, testimonials, partners, products

// ─────────────────────────────────────────────────────────────
// Blog Posts
// ─────────────────────────────────────────────────────────────

export async function getArticles(options?: {
  category?: string;
  pageSize?: number;
  page?: number;
}): Promise<{ data: Article[]; meta: { count: number; totalPage: number } }> {
  const params = new URLSearchParams({
    'filter[status]': 'published',
    'sort':           '-published_at',
    'pageSize':       String(options?.pageSize ?? 200),
    'page':           String(options?.page ?? 1),
    'appends':        'image,author_avatar',
  });

  if (options?.category) {
    params.set('filter[category]', options.category);
  }

  const res = await fetch(`${BASE_URL}/api/blog_posts:list?${params}`, {
    headers: defaultHeaders,
    next:    { revalidate: REVALIDATE_ARTICLES },
  });

  if (!res.ok) {
    console.error(`NocoBase getArticles: ${res.status} ${res.statusText}`);
    return { data: [], meta: { count: 0, totalPage: 0 } };
  }

  const json = await res.json();
  if (Array.isArray(json.data)) {
    json.data.sort((a: Article, b: Article) => {
      // 1. Bài ghim lên đầu
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;

      // 2. Bài mới nhất lên đầu theo thời gian xuất bản/tạo/cập nhật, fallback theo ID
      const timeA = new Date(a.published_at || (a as any).createdAt || a.updatedAt || 0).getTime();
      const timeB = new Date(b.published_at || (b as any).createdAt || b.updatedAt || 0).getTime();

      if (timeA !== timeB) return timeB - timeA;
      return b.id - a.id;
    });
  }

  return json;
}

export async function getArticleBySlug(slugOrId: string): Promise<Article | null> {
  const isId = /^\d+$/.test(slugOrId);
  const filter: any = {
    $and: [
      { status: 'published' },
      {
        $or: [
          { slug: slugOrId }
        ]
      }
    ]
  };

  if (isId) {
    filter.$and[1].$or.push({ id: Number(slugOrId) });
  }

  const params = new URLSearchParams({
    filter: JSON.stringify(filter),
    pageSize: '1',
    appends:  'image,author_avatar',
  });

  const res = await fetch(`${BASE_URL}/api/blog_posts:list?${params}`, {
    headers: defaultHeaders,
    next:    { revalidate: REVALIDATE_ARTICLES },
  });

  if (!res.ok) return null;
  const { data } = await res.json();
  return data[0] ?? null;
}



// ─────────────────────────────────────────────────────────────
// Leads (form submissions → NocoBase CRM)
// ─────────────────────────────────────────────────────────────

export async function createLead(
  data: Lead,
  extraDetails?: Record<string, any>
): Promise<boolean> {
  let summary = data.content_summary || '';
  
  if (extraDetails) {
    const list = Object.entries(extraDetails)
      .filter(([_, val]) => val !== undefined && val !== null && val !== '')
      .map(([key, val]) => `- ${key}: ${val}`)
      .join('\n');
    if (list) {
      summary = summary ? `${summary}\n\n${list}` : list;
    }
  }

  // Fallback to message if summary is empty
  if (!summary && data.message) {
    summary = data.message;
  }

  // Map fields to match NocoBase database actual schema and display layout
  // 'message' matches 'Nội dung chi tiết'
  // 'tag' matches 'Tag phân loại'
  const payload = {
    ...data,
    message: summary,
    tag: data.tag || data.source || '',
    content_summary: summary
  };

  const res = await fetch('/api/leads', {
    method:  'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:    JSON.stringify(payload),
    cache:   'no-store',
  });
  return res.ok;
}

// ─────────────────────────────────────────────────────────────
// Customer Screenshots (Ảnh chụp tin nhắn KH)
// ─────────────────────────────────────────────────────────────

export interface CustomerScreenshot {
  id:         number;
  caption?:   string;
  sort_order: number;
  visible:    boolean;
  image?:     Attachment[];
}



// ─────────────────────────────────────────────────────────────
// Products (Sản phẩm cá nhân & doanh nghiệp - Types imported from ./types)
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// Sản phẩm CÁ NHÂN  →  collection: personal_products
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// Sản phẩm DOANH NGHIỆP  →  collection: business_products
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// Facebook Posts & Speaker Config (Types imported from ./types)
// ─────────────────────────────────────────────────────────────




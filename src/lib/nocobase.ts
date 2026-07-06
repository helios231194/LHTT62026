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
// Types
// ─────────────────────────────────────────────────────────────

export interface Article {
  id:           number;
  title:        string;
  slug:         string;
  excerpt:      string;
  content:      string;       // Markdown
  author:       string;
  tags:         string[];
  category:     string;       // "ra-quyet-dinh"
  status:       'published' | 'draft';
  read_time:    number;
  published_at: string;       // ISO date
  image?:       Attachment[];
  author_avatar?: Attachment[];
  pinned?:      boolean;
  updatedAt?:   string;
}

export interface Attachment {
  id:       number;
  filename: string;
  url:      string;
  mimetype: string;
}

export interface Service {
  id:         number;
  title:      string;
  slug:       string;
  badge?:     string;
  desc:       string;
  price:      string;
  icon:       string;
  href:       string;
  featured:   boolean;
  sort_order?: number;
  tagline?:   string;
  /** Pipe-separated bullet points: "feature1|feature2|feature3" */
  features?:  string;
  cta_label?: string;
  theme?:     'light' | 'dark';
}

export interface Stat {
  id:         number;
  label:      string;
  subLabel:   string;
  value:      string;
  icon:       string;
  sort_order: number;
}

export interface Partner {
  id:         number;
  name:       string;
  logo_url:   string;
  sort_order: number;
  width:      number;
  height:     number;
}

export interface Testimonial {
  id:         number;
  name:       string;
  position:   string;
  company?:   string;
  quote:      string;
  rating:     number;
  sort_order: number;
  image?:     Attachment[];
  category?:  string;
}

export interface SpeakerEvent {
  id:         number;
  title:      string;
  location?:  string;
  sort_order: number;
  image?:     Attachment[];
}

export interface Lead {
  name:             string;
  email:            string;
  phone?:           string;
  message?:         string;
  source?:          string;
  package?:         string;
  content_summary?: string;
  tag?:             string;
}

export interface Profile {
  id?:              number;
  name?:            string;
  bio?:             string;
  hero_title?:      string;
  hero_desc?:       string;
  workshop_title?:  string;
  workshop_desc?:   string;
  workshop_tags?:   string[];
  community_title?: string;
  community_desc?:  string;
  credentials?:     string[];
  values?:          string[];
  avatar?:          Attachment[];
  community_qr?:    Attachment[];
  book_cover?:      Attachment[];
  logo?:             Attachment[];
  hero_bg?:          Attachment[];
  philosophy_img?:   Attachment[];
  community_banner?: Attachment[];
}

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
 * NocoBase trả URL ảnh dạng relative: /storage/uploads/filename.jpg
 * Next/Image cần absolute URL → prepend BASE_URL
 */
export function resolveAttachmentUrl(url?: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('http')) return url;          // already absolute
  if (url.startsWith('/uploads/') || url.startsWith('/LogoNTT/')) return url; // local uploads/assets
  return `${BASE_URL}${url}`;                       // e.g. https://lht.gun.hmz.one/storage/uploads/...
}

// Thời gian revalidate (giây)
const REVALIDATE_ARTICLES = 300;    // 5 phút — bài viết cập nhật thường xuyên
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
  return res.json();
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

  const res = await fetch(`${BASE_URL}/api/leads:create`, {
    method:  'POST',
    headers: defaultHeaders,
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
// Products (Sản phẩm cá nhân & doanh nghiệp)
// ─────────────────────────────────────────────────────────────
// Shared product field shape (dùng cho cả 2 collections)
// ─────────────────────────────────────────────────────────────

export interface ProductBase {
  id:           number;
  name:         string;
  slug?:        string;
  badge?:       string;
  tagline?:     string;
  description?: string;
  price?:       string;
  /** Pipe-separated benefit bullets: "benefit1|benefit2|benefit3" */
  benefits?:    string;
  cta_label?:   string;
  href?:        string;
  theme?:       'light' | 'dark';
  featured:     boolean;
  sort_order:   number;
  image?:       Attachment[];
}

// Alias cho từng loại — giữ type-safety rõ ràng
export type PersonalProduct  = ProductBase;
export type BusinessProduct  = ProductBase;

// ─────────────────────────────────────────────────────────────
// Sản phẩm CÁ NHÂN  →  collection: personal_products
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// Sản phẩm DOANH NGHIỆP  →  collection: business_products
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────
// Facebook Posts (Xem trước nội dung đang diễn ra)
// ─────────────────────────────────────────────────────────────

export interface FacebookPost {
  id:         number;
  title?:     string;
  post_url?:  string;
  status?:    'published' | 'draft';
  excerpt?:   string;
  thumbnail?: Attachment[];
}



// ─────────────────────────────────────────────────────────────
// Speaker Config (File links & dropdown options)
// ─────────────────────────────────────────────────────────────

export interface SpeakerAssets {
  credential_pdf_url: string;
  proposal_url: string;
  hero_image: string;
  topics_options: string[];
}




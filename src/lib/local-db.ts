import fs from 'fs/promises';
import path from 'path';
import type {
  Partner,
  Testimonial,
  SpeakerEvent,
  Profile,
  PersonalProduct,
  BusinessProduct,
  Stat,
  FacebookPost,
  SpeakerAssets,
  Workshop,
  BookFeedback,
  BookVideo
} from './types';

const DATA_DIR = path.join(process.cwd(), 'src/data');
const NOCOBASE_URL = process.env.NOCOBASE_BASE_URL || 'http://localhost:13000';
const NOCOBASE_TOKEN = process.env.NOCOBASE_TOKEN || '';

const defaultHeaders: Record<string, string> = {
  'Content-Type': 'application/json',
  ...(NOCOBASE_TOKEN ? { Authorization: `Bearer ${NOCOBASE_TOKEN}` } : {}),
};

const REVALIDATE_TIME = 10; // 10s ISR cache

export async function readLocalData(filename: string): Promise<any> {
  try {
    const filepath = path.join(DATA_DIR, filename);
    const data = await fs.readFile(filepath, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      if (['homepage.json', 'speaker_assets.json', 'destiny_profile.json'].includes(filename)) {
        return {};
      }
      return [];
    }
    console.error(`Error reading local config ${filename}:`, error);
    return [];
  }
}

export async function writeLocalData(filename: string, data: any): Promise<void> {
  const filepath = path.join(DATA_DIR, filename);
  await fs.writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8');
}

/**
 * Helper to fetch from NocoBase with local JSON fallback
 */
async function fetchFromNocoBase<T>(
  collection: string,
  localFallbackFile: string,
  options?: { isSingular?: boolean; params?: Record<string, string> }
): Promise<T> {
  try {
    const searchParams = new URLSearchParams(options?.params || {});
    if (!options?.params?.pageSize) {
      searchParams.set('pageSize', '200');
    }
    const endpoint = options?.isSingular
      ? `${NOCOBASE_URL}/api/${collection}:get`
      : `${NOCOBASE_URL}/api/${collection}:list?${searchParams.toString()}`;

    const res = await fetch(endpoint, {
      headers: defaultHeaders,
      next: { revalidate: REVALIDATE_TIME },
    });

    if (res.ok) {
      const json = await res.json();
      if (options?.isSingular) {
        if (json.data) return json.data as T;
        if (Array.isArray(json.data) && json.data.length > 0) return json.data[0] as T;
      } else if (Array.isArray(json.data) && json.data.length > 0) {
        return json.data as T;
      }
    }
  } catch (err) {
    // Silently proceed to fallback if NocoBase is offline or not configured yet
  }

  // Fallback to local JSON
  const localData = await readLocalData(localFallbackFile);
  return localData as T;
}

export async function getProfile(): Promise<Profile | null> {
  const data = await fetchFromNocoBase<Profile | Profile[]>('homepage', 'homepage.json', { isSingular: true });
  if (Array.isArray(data)) return data[0] || null;
  return data || null;
}

export async function getDestinyProfile(): Promise<any> {
  const data = await fetchFromNocoBase<any>('destiny_profile', 'destiny_profile.json', { isSingular: true });
  if (Array.isArray(data)) return data[0] || null;
  return data || null;
}

export async function getPartners(): Promise<{ data: Partner[] }> {
  const data = await fetchFromNocoBase<Partner[]>('partners', 'partners.json');
  return { data: Array.isArray(data) ? data : [] };
}

export async function getStats(): Promise<{ data: Stat[] }> {
  const data = await fetchFromNocoBase<Stat[]>('stats', 'stats.json');
  return { data: Array.isArray(data) ? data : [] };
}

export async function getTestimonials(category: 'home' | 'speaker' = 'home'): Promise<{ data: Testimonial[] }> {
  const list = await fetchFromNocoBase<Testimonial[]>('testimonials', 'testimonials.json');
  const filtered = Array.isArray(list)
    ? list.filter((t: Testimonial) => (category === 'speaker' ? t.category === 'speaker' : t.category !== 'speaker'))
    : [];
  return { data: filtered };
}

export async function getSpeakerEvents(): Promise<{ data: SpeakerEvent[] }> {
  const data = await fetchFromNocoBase<SpeakerEvent[]>('speaker_events', 'speaker_events.json');
  return { data: Array.isArray(data) ? data : [] };
}

export async function getCustomerScreenshots(): Promise<{ data: any[] }> {
  const list = await fetchFromNocoBase<any[]>('customer_screenshots', 'customer_screenshots.json');
  const filtered = Array.isArray(list)
    ? list.filter((item: any) => item.visible !== false).sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0))
    : [];
  return { data: filtered };
}

export async function getPersonalProducts(): Promise<{ data: PersonalProduct[] }> {
  const list = await fetchFromNocoBase<PersonalProduct[]>('personal_products', 'personal_products.json');
  const sorted = Array.isArray(list)
    ? list.sort((a: PersonalProduct, b: PersonalProduct) => (a.sort_order || 0) - (b.sort_order || 0))
    : [];
  return { data: sorted };
}

export async function getBusinessProducts(): Promise<{ data: BusinessProduct[] }> {
  const list = await fetchFromNocoBase<BusinessProduct[]>('business_products', 'business_products.json');
  const sorted = Array.isArray(list)
    ? list.sort((a: BusinessProduct, b: BusinessProduct) => (a.sort_order || 0) - (b.sort_order || 0))
    : [];
  return { data: sorted };
}

export async function getFacebookPosts(): Promise<{ data: FacebookPost[] }> {
  const list = await fetchFromNocoBase<FacebookPost[]>('facebook_posts', 'facebook_posts.json');
  const filtered = Array.isArray(list)
    ? list.filter((item: FacebookPost) => item.status === 'published').slice(0, 3)
    : [];
  return { data: filtered };
}

export async function getSpeakerAssets(): Promise<SpeakerAssets> {
  const data = await fetchFromNocoBase<any>('speaker_assets', 'speaker_assets.json', { isSingular: true });
  return {
    credential_pdf_url: data?.credential_pdf_url || "https://drive.google.com/file/d/1tpicvbqavsWWXpkL6a4QOO4yZTpRM1Zt/view?usp=share_link",
    proposal_url: data?.proposal_url || "",
    hero_image: data?.hero_image || "",
    topics_options: data?.topics_options || [
      "Quy Luật Năng Lượng & Ra Quyết Định",
      "Đội Ngũ Tinh Nhuệ 2026",
      "Chu Kỳ Vận Hành Doanh Nghiệp",
      "Khác"
    ]
  };
}

export async function getWorkshops(category?: 'personal' | 'business'): Promise<{ data: Workshop[] }> {
  const list = await fetchFromNocoBase<Workshop[]>('workshops', 'workshops.json');
  if (!Array.isArray(list)) return { data: [] };
  const sorted = list.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
  if (category) {
    return { data: sorted.filter((w: any) => w.category === category) };
  }
  return { data: sorted };
}

export async function getBookFeedbacks(): Promise<{ data: BookFeedback[] }> {
  const list = await fetchFromNocoBase<BookFeedback[]>('book_feedbacks', 'book_feedbacks.json');
  if (!Array.isArray(list)) return { data: [] };
  const sorted = list.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
  return { data: sorted };
}

export async function getBookVideos(): Promise<{ data: BookVideo[] }> {
  const list = await fetchFromNocoBase<BookVideo[]>('book_videos', 'book_videos.json');
  if (!Array.isArray(list)) return { data: [] };
  const sorted = list.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
  return { data: sorted };
}

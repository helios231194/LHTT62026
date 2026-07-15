import fs from 'fs/promises';
import path from 'path';
import type { Partner, Testimonial, SpeakerEvent, Profile, PersonalProduct, BusinessProduct, Stat, FacebookPost, SpeakerAssets, Workshop, BookFeedback, BookVideo } from './nocobase';

const DATA_DIR = path.join(process.cwd(), 'src/data');

export async function readLocalData(filename: string): Promise<any> {
  try {
    const filepath = path.join(DATA_DIR, filename);
    const data = await fs.readFile(filepath, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      if (['homepage.json', 'speaker_assets.json'].includes(filename)) {
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

export async function getProfile(): Promise<Profile | null> {
  const data = await readLocalData('homepage.json');
  if (Array.isArray(data)) return data[0] || null;
  return data || null;
}

export async function getPartners(): Promise<{ data: Partner[] }> {
  const data = await readLocalData('partners.json');
  return { data };
}

export async function getStats(): Promise<{ data: Stat[] }> {
  const data = await readLocalData('stats.json');
  return { data };
}

export async function getTestimonials(category: 'home' | 'speaker' = 'home'): Promise<{ data: Testimonial[] }> {
  const list = await readLocalData('testimonials.json');
  const filtered = list.filter((t: Testimonial) => {
    if (category === 'speaker') {
      return t.category === 'speaker';
    }
    return t.category !== 'speaker';
  });
  return { data: filtered };
}

export async function getSpeakerEvents(): Promise<{ data: SpeakerEvent[] }> {
  const data = await readLocalData('speaker_events.json');
  return { data };
}

export async function getCustomerScreenshots(): Promise<{ data: any[] }> {
  const list = await readLocalData('customer_screenshots.json');
  const filtered = list
    .filter((item: any) => item.visible !== false)
    .sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
  return { data: filtered };
}

export async function getPersonalProducts(): Promise<{ data: PersonalProduct[] }> {
  const list = await readLocalData('personal_products.json');
  const sorted = list.sort((a: PersonalProduct, b: PersonalProduct) => (a.sort_order || 0) - (b.sort_order || 0));
  return { data: sorted };
}

export async function getBusinessProducts(): Promise<{ data: BusinessProduct[] }> {
  const list = await readLocalData('business_products.json');
  const sorted = list.sort((a: BusinessProduct, b: BusinessProduct) => (a.sort_order || 0) - (b.sort_order || 0));
  return { data: sorted };
}

export async function getFacebookPosts(): Promise<{ data: FacebookPost[] }> {
  const list = await readLocalData('facebook_posts.json');
  const filtered = list
    .filter((item: FacebookPost) => item.status === 'published')
    .slice(0, 3);
  return { data: filtered };
}

export async function getSpeakerAssets(): Promise<SpeakerAssets> {
  const data = await readLocalData('speaker_assets.json');
  return {
    credential_pdf_url: data.credential_pdf_url || "https://drive.google.com/file/d/1tpicvbqavsWWXpkL6a4QOO4yZTpRM1Zt/view?usp=share_link",
    proposal_url: data.proposal_url || "",
    hero_image: data.hero_image || "",
    topics_options: data.topics_options || [
      "Quy Luật Năng Lượng & Ra Quyết Định",
      "Đội Ngũ Tinh Nhuệ 2026",
      "Chu Kỳ Vận Hành Doanh Nghiệp",
      "Khác"
    ]
  };
}

export async function getWorkshops(category?: 'personal' | 'business'): Promise<{ data: Workshop[] }> {
  const list = await readLocalData('workshops.json');
  if (!Array.isArray(list)) return { data: [] };
  const sorted = list.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
  if (category) {
    return { data: sorted.filter((w: any) => w.category === category) };
  }
  return { data: sorted };
}

export async function getBookFeedbacks(): Promise<{ data: BookFeedback[] }> {
  const list = await readLocalData('book_feedbacks.json');
  if (!Array.isArray(list)) return { data: [] };
  const sorted = list.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
  return { data: sorted };
}

export async function getBookVideos(): Promise<{ data: BookVideo[] }> {
  const list = await readLocalData('book_videos.json');
  if (!Array.isArray(list)) return { data: [] };
  const sorted = list.sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
  return { data: sorted };
}

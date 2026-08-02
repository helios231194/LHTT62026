import 'server-only';
import * as nocobase from './nocobase';
import * as localDb from './local-db';
import type {
  Article,
  Partner,
  Stat,
  Testimonial,
  SpeakerEvent,
  Profile,
  Workshop,
  BookFeedback,
  BookVideo,
  PersonalProduct,
  BusinessProduct,
  FacebookPost,
  SpeakerAssets,
} from './types';

// ─────────────────────────────────────────────────────────────
// Unified Repository Data Access Methods
// ─────────────────────────────────────────────────────────────

export async function getArticles(options?: {
  category?: string;
  page?: number;
  pageSize?: number;
  pinned?: boolean;
}): Promise<{ data: Article[]; meta?: { count: number; totalPage: number } }> {
  try {
    return await nocobase.getArticles(options);
  } catch (error) {
    console.warn('[Repository] Failed to fetch articles from NocoBase:', (error as Error).message);
    return { data: [], meta: { count: 0, totalPage: 0 } };
  }
}

export async function getArticleBySlug(slugOrId: string): Promise<Article | null> {
  try {
    return await nocobase.getArticleBySlug(slugOrId);
  } catch (error) {
    console.warn(`[Repository] Failed to fetch article "${slugOrId}":`, (error as Error).message);
    return null;
  }
}

export async function getProfile(): Promise<Profile | null> {
  return localDb.getProfile();
}

export async function getPartners(): Promise<{ data: Partner[] }> {
  return localDb.getPartners();
}

export async function getStats(): Promise<{ data: Stat[] }> {
  return localDb.getStats();
}

export async function getTestimonials(category: 'home' | 'speaker' = 'home'): Promise<{ data: Testimonial[] }> {
  return localDb.getTestimonials(category);
}

export async function getSpeakerEvents(): Promise<{ data: SpeakerEvent[] }> {
  return localDb.getSpeakerEvents();
}

export async function getWorkshops(category?: 'personal' | 'business'): Promise<{ data: Workshop[] }> {
  return localDb.getWorkshops(category);
}

export async function getBookFeedbacks(): Promise<{ data: BookFeedback[] }> {
  return localDb.getBookFeedbacks();
}

export async function getBookVideos(): Promise<{ data: BookVideo[] }> {
  return localDb.getBookVideos();
}

export async function getPersonalProducts(): Promise<{ data: PersonalProduct[] }> {
  return localDb.getPersonalProducts();
}

export async function getBusinessProducts(): Promise<{ data: BusinessProduct[] }> {
  return localDb.getBusinessProducts();
}

export async function getFacebookPosts(): Promise<{ data: FacebookPost[] }> {
  return localDb.getFacebookPosts();
}

export async function getSpeakerAssets(): Promise<SpeakerAssets> {
  return localDb.getSpeakerAssets();
}

export async function getCustomerScreenshots(): Promise<{ data: any[] }> {
  return localDb.getCustomerScreenshots();
}

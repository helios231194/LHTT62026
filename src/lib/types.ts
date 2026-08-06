/**
 * Pure Type Definitions for LHT Website Domain Entities
 * Strictly type-only — no runtime logic to prevent circular dependencies
 */

export interface Attachment {
  id:       number;
  filename: string;
  url:      string;
  mimetype: string;
  preview?: string;  // URL-encoded path served from NocoBase /storage/
}

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
  destiny_pdf_cover?: Attachment[];
  strategy_pdf_cover?: Attachment[];
  speaker_hero_img?:  Attachment[];
  consulting_tier1_img?: Attachment[];
  consulting_tier2_img?: Attachment[];
  consulting_tier3_img?: Attachment[];
  book_preview_link?: string;
  tiktok_embed_code?: string;
}

export interface Workshop {
  id:         number;
  title:      string;
  date:       string;
  type:       string;
  category:   'personal' | 'business';
  sort_order: number;
  image?:     Attachment[];
}

export interface BookFeedback {
  id:         number;
  caption?:   string;
  sort_order: number;
  image?:     Attachment[];
}

export interface BookVideo {
  id:         number;
  title:      string;
  youtube_url: string;
  sort_order: number;
}

export interface ProductBase {
  id:           number;
  name:         string;
  slug?:        string;
  badge?:       string;
  tagline?:     string;
  description?: string;
  long_description?: string;
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

export type PersonalProduct = ProductBase;
export type BusinessProduct = ProductBase;

export interface FacebookPost {
  id:         number;
  title?:     string;
  content?:   string;
  excerpt?:   string;
  url?:       string;
  post_url?:  string;
  status?:    'published' | 'draft';
  published_at?: string;
  thumbnail?: Attachment[];
}

export interface SpeakerAssets {
  credential_pdf_url: string;
  proposal_url:       string;
  hero_image:         string;
  topics_options:     string[];
}

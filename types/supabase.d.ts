// Supabase response types for better type safety
export interface SupabaseRow {
  id: number;
  created_at?: string;
  updated_at?: string;
  [key: string]: any;
}

export interface BannerSupabaseRow extends SupabaseRow {
  title_id: string;
  title_en: string;
  quotes_id: string;
  quotes_en: string;
  description_id: string;
  description_en: string;
  thumbnail: string | null;
  images: string[] | null;
}
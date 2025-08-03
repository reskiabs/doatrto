export interface FaqItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface FaqResponse {
  success: boolean;
  data: FaqItem[];
  message: string | null;
}

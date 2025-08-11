export interface FaqLocalized {
  id: number;
  title: string;
  description: string;
}

export type FaqRow = {
  id: number;
  title_id: string;
  title_en: string;
  description_id: string;
  description_en: string;
};

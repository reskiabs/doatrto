export type BannerRow = {
  id: string;
  title_id: string;
  title_en: string;
  quotes_id: string;
  quotes_en: string;
  description_id: string;
  description_en: string;
  thumbnail: string | null;
  images: string[] | null;
};

export type LocalizedBanner = BannerRow & {
  title: string;
  quotes: string;
  description: string;
};

export type UseBannerReturn = {
  heros?: LocalizedBanner[];
  hero?: LocalizedBanner;
  allThumbnails?: { id: string; src: string; title: string }[];
  loading: boolean;
  error: string | null;
};

import { supabaseFetcher } from './swr-config';
import { mutate } from 'swr';

// Preload critical data for homepage
export async function preloadHomeData() {
  const promises = [
    // Critical home page data
    mutate('banner', supabaseFetcher('banner')),
    mutate('testimonial', supabaseFetcher('testimonial')),
    mutate('news', supabaseFetcher('news')),
    mutate('trusted-medical-expert', supabaseFetcher('trusted-medical-expert')),
    mutate('beyond', supabaseFetcher('beyond')),
    mutate('honest-review', supabaseFetcher('honest-review')),
    mutate('the-differences', supabaseFetcher('the-differences')),
    mutate('open-evidence', supabaseFetcher('open-evidence')),
  ];

  try {
    await Promise.all(promises);
  } catch (error) {
    console.warn('Failed to preload some data:', error);
  }
}

// Preload additional data for specific pages
export async function preloadPageData() {
  const promises = [
    mutate('faq', supabaseFetcher('faq')),
    mutate('trust-transparency', supabaseFetcher('trust-transparency')),
    mutate('informational-pages', supabaseFetcher('informational-pages')),
  ];

  try {
    await Promise.all(promises);
  } catch (error) {
    console.warn('Failed to preload page data:', error);
  }
}

// Preload data by table name
export async function preloadData(table: string) {
  try {
    await mutate(table, supabaseFetcher(table));
  } catch (error) {
    console.warn(`Failed to preload ${table}:`, error);
  }
}

// Preload all data at once
export async function preloadAllData() {
  const promises = [
    preloadHomeData(),
    preloadPageData(),
  ];

  try {
    await Promise.all(promises);
  } catch (error) {
    console.warn('Failed to preload all data:', error);
  }
}
import { SWRConfiguration } from 'swr';
import supabase from './db';

// SWR fetcher function for Supabase
export const supabaseFetcher = async (query: string) => {
  const [table, ...params] = query.split('|');
  
  let queryBuilder = supabase.from(table).select('*');
  
  // Handle additional query parameters
  if (params.length > 0) {
    params.forEach(param => {
      const [key, value] = param.split(':');
      if (key === 'order') {
        const [field, direction] = value.split('-');
        queryBuilder = queryBuilder.order(field, { ascending: direction === 'asc' });
      } else if (key === 'eq') {
        const [field, val] = value.split('-');
        queryBuilder = queryBuilder.eq(field, val);
      }
    });
  } else {
    // Default ordering by id
    queryBuilder = queryBuilder.order('id', { ascending: true });
  }
  
  const { data, error } = await queryBuilder;
  
  if (error) {
    throw new Error(error.message);
  }
  
  return data;
};

// Global SWR configuration
export const swrConfig: SWRConfiguration = {
  fetcher: supabaseFetcher,
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 300000, // 5 minutes
  errorRetryCount: 3,
  errorRetryInterval: 1000,
  // Cache for 10 minutes in production
  focusThrottleInterval: process.env.NODE_ENV === 'production' ? 600000 : 5000,
  // Keep data fresh for 5 minutes
  refreshInterval: process.env.NODE_ENV === 'production' ? 300000 : 0,
};
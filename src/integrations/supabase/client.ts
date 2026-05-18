import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Check if variables are missing
export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);

if (!isSupabaseConfigured) {
  console.error('Supabase URL or Publishable Key is missing! Check your environment variables.');
}

export const supabase = createClient<Database>(
  SUPABASE_URL || 'https://placeholder.supabase.co', 
  SUPABASE_PUBLISHABLE_KEY || 'placeholder-key', 
  {
    auth: {
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sjqazidnuqdqadbkawph.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcWF6aWRudXFkcWFkYmthd3BoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzI0NjMsImV4cCI6MjA5NDAwODQ2M30.vT_1aEOPjjw_KCKJ0KsAzJG40e07DvFSONICVIBAGHI";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});

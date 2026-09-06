import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { brokeredPreviewStorage } from './previewAuthStorage';

export const supabase = createClient<Database>(
  "https://sjqazidnuqdqadbkawph.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcWF6aWRudXFkcWFkYmthd3BoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzI0NjMsImV4cCI6MjA5NDAwODQ2M30.vT_1aEOPjjw_KCKJ0KsAzJG40e07DvFSONICVIBAGHI",
  {
    auth: {
      storage: brokeredPreviewStorage(),
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);

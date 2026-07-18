import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Returns a Supabase client when the public env vars are configured, otherwise
 * `null` so the app builds and runs even without a database (graceful degrade).
 * Uses the anon key — inserts are guarded by a Row Level Security policy.
 */
export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}

import { createClient } from '@supabase/supabase-js'

// Admin client bypasses Row Level Security.
// ONLY use this in Server Components or Route Handlers — never in the browser.
// It uses the service role key which must stay secret.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}

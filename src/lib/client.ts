import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export const useClientSB = () => {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return {
    supabase,
  };
};

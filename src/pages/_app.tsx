import { MainContext, usersStore } from '@/contexts/UsersContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useRef, useState } from 'react';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';
import Layout from '@/components/layout/Layout';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
  // const supabase = createClient(supabaseUrl, supabaseKey);
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const store = useRef(usersStore());

  return (
    <main className={`${inter.variable} font-sans`}>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Layout>
          <MainContext.Provider value={store.current}>
            <Component {...pageProps} />
          </MainContext.Provider>
        </Layout>
      </SessionContextProvider>
    </main>
  );
}

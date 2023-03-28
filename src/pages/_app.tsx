import { MainContex, usersStore } from '@/contexts/UsersContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useRef, useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { useClientSB } from '@/lib/client';

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
  const store = useRef(usersStore());
  const { supabase } = useClientSB();

  return (
    <main className={`${inter.variable} font-sans`}>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <MainContex.Provider value={store.current}>
          <Component {...pageProps} />
        </MainContex.Provider>
      </SessionContextProvider>
    </main>
  );
}

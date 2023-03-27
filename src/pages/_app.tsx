import { MainContex, usersStore } from '@/contexts/UsersContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useRef } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  const store = useRef(usersStore());

  return (
    <main className={`${inter.variable} font-sans`}>
      <MainContex.Provider value={store.current}>
        <Component {...pageProps} />
      </MainContex.Provider>
    </main>
  );
}

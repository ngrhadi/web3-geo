import React, { ReactNode, useRef } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import UserInfo from '../users/UserInfo';
import useSupabase from '@/hooks/useSupabase';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { session } = useSupabase();
  const supabase = useSupabaseClient();

  return (
    <div className="w-screen h-screen overflow-y-hidden">
      <Head>
        <title>W3GEO</title>
        <meta name="description" content="Web3-Geo for your happines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="pt-2 min-h-max max-h-full py-20 max-w-2xl lg:max-w-screen-2xl mx-auto px-5 overflow-y-auto">
        {!session ? (
          <Auth
            providers={['github']}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <UserInfo session={session} />
          // <>{children}</>
        )}
      </div>
      <div className="absolute bottom-0 w-screen bg-zinc-700/40">
        <div className="bg-[#5EAB44]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;

import React, { ReactNode, useRef } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import UserInfo from '../users/UserInfo';
import useSupabase from '@/hooks/useSupabase';
import Image from 'next/image';
import logo from '../../assets/geo1.jpg';

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
      {!session ? (
        <div className="max-w-2xl min-w-full lg:max-w-xl mx-auto min-h-screen max-h-screen items-center pt-20 lg:pt-24 justify-center flex flex-col">
          <Image
            src={logo}
            width={180}
            height={110}
            alt="logo-geo"
            className="rotate-0 lg:rotate-6 pb-24"
          />
          <div className="min-w-full px-10 lg:px-40">
            <Auth
              providers={['github']}
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <div className="pt-2 min-h-max max-h-full py-20 max-w-2xl lg:max-w-screen-2xl mx-auto px-5 overflow-y-auto">
            {/* <UserInfo session={session} /> */}
            {children}
          </div>
          <div className="absolute bottom-0 w-screen bg-zinc-700/40">
            <div className="bg-[#5EAB44]">
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;

import { Inter } from 'next/font/google';
import Layout from '@/components/layout/Layout';
import { ReactNode, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export interface MainProps {
  children: ReactNode;
  address: string;
  balance: number;
}

export default function Home() {
  const layoutRef = useRef();
  return (
    <>
      <Layout>
        <div className="pt-10 min-h-max max-h-full py-20">
          <blockquote className="text-2xl font-semibold italic text-center text-slate-400/70 ">
            Something
            <span className="before:block before:absolute before:-inset-2 before:-skew-x-12 before:bg-green-500 relative inline-block mx-3">
              <span className="relative text-white">WORKING</span>
            </span>
            in here
          </blockquote>
        </div>
        <div className="pt-10 min-h-max max-h-full py-20">
          <blockquote className="text-2xl font-semibold italic text-center text-slate-400/70 ">
            Something
            <span className="before:block before:absolute before:-inset-2 before:-skew-x-12 before:bg-green-500 relative inline-block mx-3">
              <span className="relative text-white">WORKING</span>
            </span>
            in here
          </blockquote>
        </div>
        <div className="pt-10 min-h-max max-h-full py-20">
          <blockquote className="text-2xl font-semibold italic text-center text-slate-400/70 ">
            Something
            <span className="before:block before:absolute before:-inset-2 before:-skew-x-12 before:bg-green-500 relative inline-block mx-3">
              <span className="relative text-white">WORKING</span>
            </span>
            in here
          </blockquote>
        </div>
        <div className="pt-10 min-h-max max-h-full py-20">
          <blockquote className="text-2xl font-semibold italic text-center text-slate-400/70 ">
            Something
            <span className="before:block before:absolute before:-inset-2 before:-skew-x-12 before:bg-green-500 relative inline-block mx-3">
              <span className="relative text-white">WORKING</span>
            </span>
            in here
          </blockquote>
        </div>
      </Layout>
    </>
  );
}

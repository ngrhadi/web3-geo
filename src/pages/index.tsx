/* eslint-disable react-hooks/exhaustive-deps */
import Layout from '@/components/layout/Layout';
import UserInfo from '@/components/users/UserInfo';
import useSupabase from '@/hooks/useSupabase';
import { useEffect, useState } from 'react';

interface HomeProps {
  address: string;
  isLogin: boolean;
}

const geo = ['LOGI', 'GRAFI', 'SPATIAL', 'WEB', 'APP'];
export default function Home({ address, isLogin }: HomeProps) {
  const [writeGeo, setWriteGeo] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setWriteGeo(geo[0]);
    }, 100);

    clearTimeout;
  }, []);

  return (
    <div>
      <div className="min-h-fit max-h-full">
        <div className="flex justify-center">
          <p className="text-2xl font-semibold">
            GEO
            <span>
              <strong>{writeGeo}</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

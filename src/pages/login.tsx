import Layout from '@/components/layout/Layout';
import LoginComponent from '@/components/users/LoginComponent';
import useSupabase from '@/hooks/useSupabase';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  const { session } = useSupabase();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session]);

  return (
    <div>
      <LoginComponent />
    </div>
  );
};

export default Page;

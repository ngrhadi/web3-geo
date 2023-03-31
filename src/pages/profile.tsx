import UserInfo from '@/components/users/UserInfo';
import useSupabase from '@/hooks/useSupabase';
import React from 'react';

const Page = () => {
  const { session } = useSupabase();
  return (
    <div className="min-h-fit max-h-full">
      <UserInfo session={session} />
    </div>
  );
};

export default Page;

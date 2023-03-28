import {
  useAddressUser,
  useCurrentUser,
  useUserCount,
  useUserInfo,
} from '@/contexts/UsersContext';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';

import React from 'react';

const LoginComponent = () => {
  const supabase = useSupabaseClient();
  const currentUsers = useCurrentUser();
  const address = useAddressUser();
  const userCount = useUserCount();
  const userInfo = useUserInfo();

  // console.log('currentUsers', currentUsers);
  // console.log('address', address);
  // console.log('userCount', userCount);
  // console.log('userInfo', userInfo);
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </div>
  );
};

export default LoginComponent;

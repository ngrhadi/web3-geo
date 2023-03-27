import {
  useAddressUser,
  useCurrentUser,
  useUserCount,
  useUserInfo,
} from '@/contexts/UsersContext';

import React from 'react';

const LoginComponent = () => {
  const currentUsers = useCurrentUser();
  const address = useAddressUser();
  const userCount = useUserCount();
  const userInfo = useUserInfo();

  console.log('currentUsers', currentUsers);
  console.log('address', address);
  console.log('userCount', userCount);
  console.log('userInfo', userInfo);
  return <div>Login Here</div>;
};

export default LoginComponent;

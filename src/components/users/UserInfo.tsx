import EditIcon from '@/assets/icons/EditIcon';
import SaveIcon from '@/assets/icons/SaveIcon';
import useSupabase from '@/hooks/useSupabase';
import { Session } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function UserInfo({ session }: { session: Session }) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const {
    loading,
    username,
    website,
    avatar_url,
    setUsername,
    setWebsite,
    updateProfile,
    dataUpdate,
  } = useSupabase();

  return (
    <div className="w-full flex flex-col">
      <span className="text-end">
        <button
          className="absolute"
          onClick={() => {
            setIsEdit(!isEdit);
            if (isEdit === true) {
              updateProfile({ username, website, avatar_url });
              router.push('/');
            }
          }}
          disabled={loading ? true : false}
        >
          {isEdit ? <SaveIcon /> : <EditIcon />}
        </button>
      </span>
      <div>
        <label htmlFor="email">Email</label>
        <p>{session?.user.email}</p>
        {/* <input id="email" type="text" value={session?.user.email} disabled /> */}
      </div>
      <div>
        <label htmlFor="username">Username</label>
        {isEdit === false ? (
          <p>{username?.length !== undefined ? username : 'Null'}</p>
        ) : (
          <input
            id="username"
            className="bg-transparent text-[#5EAB44] border-none active:ring-gray-900 "
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
      </div>
      <div>
        <label htmlFor="website">Website</label>
        {isEdit === false ? (
          <p>{website?.length !== undefined ? website : 'Null'}</p>
        ) : (
          <input
            id="website"
            type="website"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        )}
      </div>
      <div className="py-4">
        <button className="p-5 bg-white text-black w-full rounded-md">
          Connect to Your Wallet
        </button>
      </div>
      <div className="text-end">
        <span className="">
          <small className="">
            Last Update : {new Date(dataUpdate?.toString()).toDateString()} :{' '}
            {new Date(dataUpdate?.toString()).getHours()}:
            {new Date(dataUpdate?.toString()).getMinutes()}:
            {new Date(dataUpdate?.toString()).getSeconds()}
          </small>
        </span>
      </div>
    </div>
  );
}

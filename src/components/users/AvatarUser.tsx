/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import useSupabase, { Database } from '@/hooks/useSupabase';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Avatar as Ava } from '@material-tailwind/react';
import avaDefault from '@/assets/ava.jpg';
import Image from 'next/image';

type Profiles = Database['public']['Tables']['profiles']['Row'];

export default function Avatar({
  uid,
  url,
  size,
}: // onUpload,
{
  uid: string;
  url: Profiles['avatar_url'];
  size: number;
  // onUpload: (url: string) => void;
}) {
  const router = useRouter();
  const { avatar_url, supabase } = useSupabase();
  // const [avatarUrl, setAvatarUrl] = useState<Profiles['avatar_url']>(null);
  // const [uploading, setUploading] = useState(false);

  // useEffect(() => {
  //   if (url) downloadImage(url);
  // }, [url]);

  // async function downloadImage(path: string) {
  //   try {
  //     const { data, error } = await supabase.storage
  //       .from('avatars')
  //       .download(path);
  //     if (error) {
  //       throw error;
  //     }
  //     const url = URL.createObjectURL(data);
  //     setAvatarUrl(url);
  //   } catch (error) {
  //     console.log('Error downloading image: ', error);
  //   }
  // }

  // const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
  //   event
  // ) => {
  //   try {
  //     setUploading(true);

  //     if (!event.target.files || event.target.files.length === 0) {
  //       throw new Error('You must select an image to upload.');
  //     }

  //     const file = event.target.files[0];
  //     const fileExt = file.name.split('.').pop();
  //     const fileName = `${uid}.${fileExt}`;
  //     const filePath = `${fileName}`;

  //     let { error: uploadError } = await supabase.storage
  //       .from('avatars')
  //       .upload(filePath, file, { upsert: true });

  //     if (uploadError) {
  //       throw uploadError;
  //     }

  //     // onUpload(filePath);
  //   } catch (error) {
  //     alert('Error uploading avatar!');
  //     console.log(error);
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  return (
    <div>
      <>
        <Menu placement="bottom-end">
          <MenuHandler>
            {avatar_url?.length !== undefined ? (
              <Ava
                src={avatar_url?.toString()}
                alt="avatar"
                variant="circular"
                className="hover:cursor-pointer"
              />
            ) : (
              <Image
                src={avaDefault}
                alt="avatar"
                width={40}
                height={40}
                className="hover:cursor-pointer rounded-full"
              />
            )}
          </MenuHandler>
          <MenuList className="border-none max-w-fit min-w-fit bg-green-700 z-50">
            <MenuItem className="border-none max-w-fit min-w-fit bg-green-700 z-50">
              <button
                className="text-blue-gray-800 hover:text-green-500"
                onClick={() => {
                  supabase.auth.signOut();
                  router.push('/');
                }}
              >
                Logout
              </button>
            </MenuItem>
            <MenuItem className="border-none max-w-fit min-w-fit bg-green-700 z-50">
              <Link
                className="text-blue-gray-800 hover:text-green-500"
                href="/profile"
              >
                Profile
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </>
      {/* <div style={{ width: size }}>
        <label className="buttonSB primary block" htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div> */}
    </div>
  );
}

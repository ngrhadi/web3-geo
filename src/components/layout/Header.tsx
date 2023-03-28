import LoginIcon from '@/assets/icons/Login';
import MenuIcon from '@/assets/icons/Menu';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/geo1.jpg';
import Image from 'next/image';
import Avatar from '../users/AvatarUser';
import useSupabase from '@/hooks/useSupabase';

const Header = () => {
  const { session, avatar_url, username, website, supabase } = useSupabase();

  return (
    <div className="bg-zinc-700/40 sticky top-0 bg-[#5EAB44]">
      <header className="lg:w-screen max-w-screen-2xl mx-auto h-14 lg:h-20 justify-between flex flex-row items-center text-sm lg:text-lg">
        <div className="flex flex-row gap-5 pl-5 lg:pl-20 items-center">
          <div className="lg:hidden sm:flex md:flex sm:flex-row md:flex-row">
            <Menu placement="bottom-start">
              <MenuHandler>
                <button className="bg-transparent active:bg-transparent hover:bg-transparent after:bg-transparent before:bg-transparent">
                  <MenuIcon />
                </button>
              </MenuHandler>
              <MenuList className="border-none max-w-fit min-w-fit bg-green-700 z-50">
                <MenuItem className="text-start">
                  <Link className="text-gray-800 hover:text-green-500" href="/">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem className="text-start">
                  <Link
                    className="text-gray-800 hover:text-green-500"
                    href="/docs"
                  >
                    Docs
                  </Link>
                </MenuItem>
                <MenuItem className="text-start">
                  <Link
                    className="text-gray-800 hover:text-green-500"
                    href="/service"
                  >
                    Services
                  </Link>
                </MenuItem>
                <MenuItem className="text-start">
                  <Link
                    className="text-gray-800 hover:text-green-500"
                    href="/maps"
                  >
                    Maps
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div>
            <Image
              src={logo}
              width={80}
              height={10}
              alt="logo-geo"
              className="rotate-0 lg:rotate-6"
            />
          </div>
          <div className="lg:flex xl:flex 2xl:flex flex-row gap-5 md:hidden sm:hidden hidden">
            <Link className="text-blue-gray-700 hover:text-black" href="/">
              Home
            </Link>
            <Link className="text-blue-gray-700 hover:text-black" href="/docs">
              Docs
            </Link>
            <Link
              className="text-blue-gray-700 hover:text-black"
              href="/service"
            >
              Services
            </Link>
            <Link className="text-blue-gray-700 hover:text-black" href="/maps">
              Maps
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-5 pr-5 lg:pr-20">
          {session ? (
            <>
              <Avatar
                uid={session.user.id}
                url={avatar_url}
                size={43}
                // onUpload={(url) => {
                //   setAvatarUrl(url);
                //   updateProfile({ username, website, avatar_url: url });
                // }}
              />
              <div>
                <button
                  className="button block"
                  onClick={() => supabase.auth.signOut()}
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="lg:hidden sm:flex md:flex">
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <button className="bg-transparent active:bg-transparent hover:bg-transparent after:bg-transparent before:bg-transparent">
                      <LoginIcon />
                    </button>
                  </MenuHandler>
                  <MenuList className="border-none max-w-fit min-w-fit bg-green-700 z-50">
                    <MenuItem className="text-center">
                      <Link
                        className="text-blue-gray-800 hover:text-green-500"
                        href="/signup"
                      >
                        Sign Up
                      </Link>
                    </MenuItem>
                    <MenuItem className="text-center">
                      <Link
                        className="text-blue-gray-800 hover:text-green-500"
                        href="/login"
                      >
                        Login
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <div className="lg:flex xl:flex 2xl:flex flex-row gap-5 md:hidden sm:hidden hidden">
                <Link
                  className="text-blue-gray-700 hover:text-black"
                  href="/signup"
                >
                  Sign Up
                </Link>
                <Link
                  className="text-blue-gray-700 hover:text-black"
                  href="/login"
                >
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

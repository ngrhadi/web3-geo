import { Typography } from '@material-tailwind/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto sticky">
      <footer className="relative flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 px-3 lg:px-16 text-center md:justify-between">
        <Typography
          color="blue-gray"
          className="hidden lg:block md:block font-normal text-sm lg:text-md"
        >
          &copy; 2023 SWH
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-3 lg:gap-x-8 justify-center">
          <li>
            <Link
              href="/about-us"
              className="font-normal text-blue-gray-700 transition-colors hover:text-white focus:text-white text-sm lg:text-md"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/license"
              className="font-normal text-blue-gray-700 transition-colors hover:text-white focus:text-white text-sm lg:text-md"
            >
              License
            </Link>
          </li>
          <li>
            <Link
              href="/contribute"
              className="font-normal text-blue-gray-700 transition-colors hover:text-white focus:text-white text-sm lg:text-md"
            >
              Contribute
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="font-normal text-blue-gray-700 transition-colors hover:text-white focus:text-white text-sm lg:text-md"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

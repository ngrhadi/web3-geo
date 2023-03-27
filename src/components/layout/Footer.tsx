import { Typography } from '@material-tailwind/react';

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
            <Typography
              as="a"
              href="/about-us"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white text-sm lg:text-md"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/license"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white text-sm lg:text-md"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contribute"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white text-sm lg:text-md"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contac-us"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white text-sm lg:text-md"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
}

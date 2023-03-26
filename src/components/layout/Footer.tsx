import { Typography } from '@material-tailwind/react';

export default function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <footer className="relative  flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 px-5 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2023 SWH
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 justify-center">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
}

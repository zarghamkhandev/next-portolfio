import React from 'react';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = ({}) => {
  return (
    <nav className="py-2 md:bg-gray-200 md:bg-opacity-75 ml-8 mt-4 md:w-4/12 md:rounded-tr-full md:rounded-br-full">
      <Link href="/">
        <a className=" py-1 px-2 rounded text-purple-100 outline-none  border border-purple-200 focus:outline-none mx-1 hover:bg-purple-500 font-medium md:text-gray-800 md:border-0 md:hover:bg-transparent md:hover:underline">
          Home
        </a>
      </Link>
      <Link href="timeline">
        <a className=" py-1 px-2 rounded text-purple-100 outline-none  border border-purple-200 focus:outline-none mx-1 hover:bg-purple-500 font-medium md:text-gray-800 md:border-0 md:hover:bg-transparent md:hover:underline">
          Timeline
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = ["Home", "History", "Facilities", "Gallery", "Blog", "Contact Us"];
  const link_stubs = ["home", "history", "facilities", "gallery", "blog", "contact"];

  return (
    <div className="w-full  bg-blend-saturation bg-white dark:bg-red-950 rounded-b-3xl fixed  top-0 z-50 dark:shadow-red-950 shadow-gray-700 shadow-md">
      <nav className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-red-950 dark:text-gray-100">
                    <span>
                      <Image src="/img/logo.svg" alt="N" width="32" height="32" className="w-8" />
                    </span>
                    <span>QCL</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-red-900 focus:text-red-900 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden p-2 m-4">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={"/#" + link_stubs[index]}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-red-500  focus:text-red-500 focus:bg-red-100 dark:focus:bg-red-800 focus:outline-none dark:focus:text-yellow-500 focus:font-bold"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      href="/"
                      className="w-full p-2 mt-3 text-center text-white bg-red-900 border-2 dark:border-white dark:text-gray-300 rounded-lg lg:ml-5"
                    >
                      Become a Member
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={"/#" + link_stubs[index]}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-red-900 focus:text-red-900 focus:font-bold focus:bg-red-100 focus:outline-none dark:focus:bg-red-800 dark:focus:font-bold"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/"
            className="px-6 py-2 text-white bg-red-900 dark:bg-red-950 dark:border-2 dark:border-gray-300 dark:text-gray-300 rounded-md md:ml-5"
          >
            Become a Member
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

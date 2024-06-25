import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { facilitiesData } from "./data";
import LoginPage from "../pages/app/loginPage";
import { ArrowUpIcon, ArrowDownIcon, ArrowRightIcon, ChevronDownIcon, Cog8ToothIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const navigation = ["Home", "History", "Facilities", "Gallery", "Blog", "Contact Us"];
  const link_stubs = ["home", "history", "facilities", "gallery", "blog", "contact"];
  const facilitiesMenuGp = facilitiesData.facilitiesMenuGp;
  return (
    <div className="w-full max-w-[1600px] self-center  bg-blend-saturation bg-white dark:bg-red-950 rounded-b-3xl  fixed  top-0 z-50 md:px-12 py-1   dark:shadow-red-950 shadow-gray-700 shadow-md transition-all duration-1000">
      <nav className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-red-950 dark:text-gray-100">
                    <span>
                      <div
                        // src="/img/logo.svg"
                        // alt="N"
                        // width="512"
                        // height="512"
                        className="w-12 h-12 bg-Pic dark:bg-Pic-dark rounded-full "
                      />
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

                <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden p-2 m-4">
                  <>
                    <div className="flex flex-col items-center justify-between w-full lg:flex-row">
                      <ThemeChanger />
                    </div>
                    {navigation.map((item, index) => (
                      <div className="flex flex-row items-start justify-start" key={index}>
                        <Link
                          key={index}
                          href={"/#" + link_stubs[index]}
                          className="w-max px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-red-500  focus:text-red-500 focus:bg-red-100 dark:focus:bg-red-800 focus:outline-none dark:focus:text-yellow-500 focus:font-bold"
                        >
                          {item}
                        </Link>
                        {/* {item == "Facilities" && "qwertyu"} */}
                        {item == "Facilities" && (
                          <Disclosure>
                            {({ open }) => (
                              <>
                                {/* <div className="flex flex-wrap items-center justify-between w-full lg:w-auto"> */}
                                <Disclosure.Button
                                  aria-label="Toggle Menu"
                                  className="p-0  ml-0 w-min h-auto text-gray-500 rounded-md  hover:text-gray-900 flex flex-row items-center self-start mt-3"
                                >
                                  <ArrowRightIcon className="w-4 -mt-0 h-full  stroke-slate-500 m-0 p-0 stroke-2" />
                                  {/* <ChevronDownIcon className="w-4 -mt-0 h-full  stroke-gray-300 m-0 p-0 stroke-2 group-data-[open]:rotate-180" /> */}
                                </Disclosure.Button>
                                <Transition
                                  enter="duration-500 ease-out"
                                  enterFrom="opacity-0 -translate-x-6"
                                  enterTo="opacity-100 translate-x-0"
                                  leave="duration-300 ease-out"
                                  leaveFrom="opacity-100 translate-x-0"
                                  leaveTo="opacity-0 -translate-x-6"
                                >
                                  <Disclosure.Panel className="relative flex   flex-col px-4 w-full grow bg-white dark:bg-red-950 rounded-md  z-50 dark:shadow-orange-900 shadow-gray-700 shadow-[inset_0px_0px_16px] py-4 border-4 border-white">
                                    <>
                                      {Object.keys(facilitiesMenuGp).map((item, index1) => (
                                        <div
                                          key={index1}
                                          className="w-full  text-gray-500 rounded-md dark:text-gray-300 hover:text-gray-900   focus:bg-red-100 dark:focus:bg-red-800 focus:outline-none dark:focus:text-yellow-500 focus:font-bold  text-start leading-snug"
                                        >
                                          <span className="text-sm font-semibold dark:text-orange-200 ">{item}</span>
                                          {/* <ArrowRightIcon className="w-6 h-full  stroke-white m-0 p-0 " /> */}
                                          <div className="p-0 m-0 ">
                                            {facilitiesMenuGp[item].map((linkText, index2) => (
                                              <Link
                                                key={index2}
                                                href={"/facilities/" + linkText}
                                                className="dark:hover:bg-red-900  block whitespace-nowrap text-md rounded-lg  hover:font-bold text-left pl-8"
                                              >
                                                {linkText}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </>
                                  </Disclosure.Panel>
                                </Transition>
                                {/* </div> */}
                              </>
                            )}
                          </Disclosure>
                        )}
                      </div>
                    ))}
                    <Link
                      href="/join"
                      className="w-full p-2 mt-3 text-center rounded-md shadow-md bg-red-800 text-white dark:shadow-none hover:shadow-none dark:hover:shadow-md shadow-gray-950 dark:hover:shadow-slate-500 dark:shadow-sky-200 dark:bg-red-900 dark:text-gray-200 font-bold transition-all duration-500 lg:ml-5"
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
        <div className="hidden text-center lg:flex ">
          <ul className="flex flex-row flex-1 pt-6 list-none lg:pt-0 lg:flex  items-center ">
            {navigation.map((menu, index) => (
              <li
                className="mr-3 nav__item flex flex-row text-gray-800  dark:text-gray-200 hover:text-red-900 rounded-md "
                key={index}
              >
                <Link
                  href={"/#" + link_stubs[index]}
                  className="inline-block px-4 py-2 text-lg font-normal focus:font-bold focus:bg-red-100 focus:text-red-900  focus:outline-none dark:focus:bg-red-800 dark:focus:text-white dark:focus:font-bold no-underline rounded-md"
                >
                  {menu}
                </Link>
                {menu == "Facilities" && (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        {/* <div className="flex flex-wrap items-center justify-between w-auto lg:w-auto border-4 border-red-400"> */}
                        <Disclosure.Button
                          aria-label="Toggle Menu"
                          className="px-2 ml-auto text-gray-500 rounded-md  hover:text-gray-900   dark:text-gray-900 focus:bg-red-100 focus:text-red-900  focus:outline-none dark:focus:bg-red-800 dark:focus:text-white dark:focus:font-bold "
                        >
                          <ChevronDownIcon className="relative w-6 h-6 m-0 p-0  stroke-gray-500 dark:stroke-gray-300  stroke-2 " />
                        </Disclosure.Button>
                        <Transition
                          enter="duration-200 ease-out"
                          enterFrom="opacity-0 -translate-y-6"
                          enterTo="opacity-100 translate-y-0"
                          leave="duration-300 ease-out"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-6"
                        >
                          <Disclosure.Panel className="absolute top-14 -left-28 flex flex-col w-auto p-2  bg bg-white dark:bg-red-950 rounded-b-xl  z-50 dark:shadow-gray-300 shadow-gray-700 shadow-md">
                            <>
                              {Object.keys(facilitiesMenuGp).map((item, index) => (
                                <div
                                  key={index}
                                  className="w-full  text-gray-500 rounded-md dark:text-gray-300 hover:text-gray-900   focus:bg-red-100 dark:focus:bg-red-800 focus:outline-none dark:focus:text-yellow-500 focus:font-bold  text-start"
                                >
                                  <span className="text-sm font-semibold">{item}</span>
                                  {/* <ArrowRightIcon className="w-6 h-full  stroke-white m-0 p-0 " /> */}
                                  <div className="py-2 mx-4">
                                    {facilitiesMenuGp[item].map((linkText, index) => (
                                      <Link
                                        key={index}
                                        href={"/facilities/" + linkText}
                                        className="dark:hover:bg-red-900  block p-1 whitespace-nowrap text-md rounded-lg px-4 hover:font-bold"
                                      >
                                        {linkText}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </>
                          </Disclosure.Panel>
                        </Transition>
                        {/* </div> */}
                      </>
                    )}
                  </Disclosure>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item items-center">
          <Link
            href="/join"
            className="px-6 py-2 rounded-md p-2 shadow-md bg-red-800 text-white dark:shadow-none hover:shadow-none dark:hover:shadow-md shadow-gray-950 dark:hover:shadow-slate-500 dark:shadow-sky-200 dark:bg-red-900 dark:text-gray-200 font-bold transition-all duration-500 md:ml-5"
          >
            Become a Member
          </Link>
          <Disclosure>
            {({ open }) => (
              <>
                {/* <div className="flex flex-wrap items-center justify-between w-auto lg:w-auto border-4 border-red-400"> */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="p-0 m-0 text-gray-500 rounded-md  hover:text-gray-900   dark:text-gray-900 focus:bg-red-100 focus:text-red-900  focus:outline-none dark:focus:bg-red-800 dark:focus:text-white dark:focus:font-bold "
                >
                  <Cog8ToothIcon className="relative w-8 h-8 m-0 p-0  stroke-gray-500 dark:stroke-gray-300  stroke-1 " />
                </Disclosure.Button>
                <Transition
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 -translate-y-6"
                  enterTo="opacity-100 translate-y-0"
                  leave="duration-300 ease-out"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-6"
                >
                  <Disclosure.Panel className="absolute mt-9 -ml-10 -left-28 w-60  flex flex-col items-center  p-2  bg bg-white dark:bg-red-950 rounded-xl z-50 dark:shadow-gray-300 shadow-gray-700 shadow-md">
                    <>
                      <div className="flex flex-row justify-evenly w-full py-2">
                        Theme:
                        <ThemeChanger />
                      </div>
                      <div className="flex flex-row justify-evenly w-full py-2">
                        <LoginPage />
                      </div>
                    </>
                  </Disclosure.Panel>
                </Transition>
                {/* </div> */}
              </>
            )}
          </Disclosure>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

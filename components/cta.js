import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-md p-2 shadow-md bg-red-950 text-white dark:shadow-none hover:shadow-none dark:hover:shadow-md shadow-gray-950 dark:hover:shadow-slate-500 dark:shadow-sky-200 dark:bg-red-900 dark:text-gray-200 font-bold transition-all duration-500">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">Ready to try-out?</h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">Keep onto a refreshing change.</p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/join"
            // target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-xl  text-center  px-7 lg:px-10 lg:py-5 rounded-md p-2 shadow-md bg-red-800 text-white dark:shadow-none hover:shadow-none dark:hover:shadow-md shadow-gray-950 dark:hover:shadow-slate-500 dark:shadow-sky-200 dark:bg-slate-900 dark:text-white font-bold transition-all duration-500"
          >
            Become a Member
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cta;

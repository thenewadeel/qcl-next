import Image from "next/image";
import React from "react";
import Container from "./container";

const Contact2 = (props) => {
  const { data } = props;
  return (
    <>
      <Container className=" ">
        <div
          name="contact"
          className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-7xl mx-auto bg-slate-100 text-gray-900 my-6 before:absolute before:right-0 before:w-[45%] before:bg-indigo-200 dark:before:bg-red-950 before:h-full max-md:before:hidden shadow-zinc-950 dark:bg-slate-950 dark:text-gray-300 dark:shadow-slate-600"
        >
          <div>
            <h2 className="text-3xl font-extrabold">Get In Touch</h2>
            <p className="text-sm  mt-3">
              Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage
              with you.
            </p>
            <form className="font-[sans-serif] text-[#333] max-w-4xl mx-auto px-6 my-6" netlify>
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="relative flex items-center">
                  <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="relative flex items-center">
                  <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="relative flex items-center">
                  <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Phone No</label>
                  <input
                    type="number"
                    placeholder="Enter phone no."
                    className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
                  />
                  <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 64 64">
                    <path
                      d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="relative flex items-center">
                  <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Country</label>
                  <input
                    type="text"
                    placeholder="Enter country"
                    className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.48 8.301A9.217 9.217 0 0 1 21.25 12c0 5.105-4.145 9.25-9.25 9.25S2.75 17.105 2.75 12 6.895 2.75 12 2.75a.75.75 0 0 0 0-1.5C6.067 1.25 1.25 6.067 1.25 12S6.067 22.75 12 22.75 22.75 17.933 22.75 12c0-1.529-.32-2.983-.896-4.301a.75.75 0 0 0-1.374.602z"
                      data-original="#000000"
                    />
                    <path
                      d="M17 1.25a3.443 3.443 0 0 0-3.442 3.442c0 .594.269 1.317.685 2.023.835 1.421 2.227 2.815 2.227 2.815a.749.749 0 0 0 1.06 0s1.392-1.394 2.227-2.815c.416-.706.685-1.429.685-2.023 0-1.9-1.542-3.442-3.442-3.442zm0 1.5c1.072 0 1.942.87 1.942 1.942 0 .528-.393 1.177-.815 1.789A15.328 15.328 0 0 1 17 7.901c-.325-.366-.75-.874-1.127-1.42-.422-.612-.815-1.261-.815-1.789 0-1.072.87-1.942 1.942-1.942zM1.603 12.636l3.27 2.044c.596.372 1.285.57 1.987.57h.76c.657 0 1.281.287 1.709.786l1.051 1.227a2.25 2.25 0 0 1 .456 2.082l-.557 1.949a.75.75 0 0 0 1.442.412l.557-1.949a3.748 3.748 0 0 0-.759-3.47l-1.052-1.227a3.746 3.746 0 0 0-2.847-1.31h-.76c-.421 0-.834-.118-1.192-.342l-3.271-2.044a.75.75 0 1 0-.794 1.272z"
                      data-original="#000000"
                    />
                    <path
                      d="m5.329 4.335 1.596 3.192a2.748 2.748 0 0 0 1.757 1.429l1.758.465c.443.117.786.467.894.912l.753 3.087a2.75 2.75 0 0 0 1.146 1.637l.466.31a2.746 2.746 0 0 0 3.985-1.058l.575-1.151a1.25 1.25 0 0 1 .815-.653l2.791-.698a.75.75 0 0 0-.364-1.455l-2.791.697a2.752 2.752 0 0 0-1.792 1.438l-.576 1.151a1.246 1.246 0 0 1-1.811.481l-.466-.31a1.25 1.25 0 0 1-.521-.744l-.752-3.087a2.75 2.75 0 0 0-1.969-2.007l-1.758-.465a1.247 1.247 0 0 1-.798-.65L6.671 3.665a.75.75 0 1 0-1.342.67z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <div className="relative flex items-center sm:col-span-2">
                  <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="relative flex items-center sm:col-span-2">
                  <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Password</label>
                  <input
                    type="password"
                    autoComplete="new-password"
                    placeholder="Enter password"
                    className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <button
                type="button"
                className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
              >
                Submit
              </button>
            </form>
            <ul className="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
              <li className="flex items-center hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
                <a href="null" className="text-current text-sm ml-3">
                  <strong>info@quettaclub.org</strong>
                </a>
              </li>
              <li className="flex items-center text-current hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  viewBox="0 0 482.6 482.6"
                >
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000"
                  ></path>
                </svg>
                <a href="null" className="text-current text-sm ml-3">
                  <strong>+92 (333) 1234567</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="z-10 relative h-full max-md:min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3448.0986337238387!2d67.0330896!3d30.2057322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2de51c5020c55%3A0x78c544f5c63c4e3e!2sQuetta%20Club%20Limited!5e0!3m2!1sen!2s!4v1707723788558!5m2!1sen!2s"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-[#f2f8f6] divide-y font-[sans-serif]">
          <div role="accordion">
            <button
              type="button"
              className="w-full sm:text-lg text-base font-bold text-left py-6 px-6 text-[#333] flex items-center"
            >
              <span className="mr-6 text-3xl text-gray-400 font-extrabold max-sm:hidden">01</span>
              <span className="mr-4">Are there any special discounts or promotions available during the event.</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-current ml-auto shrink-0"
                viewBox="0 0 124 124"
              >
                <path
                  d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                  data-original="#000000"
                />
              </svg>
            </button>
            <div className="hidden pb-5 px-6">
              <p className="text-sm text-gray-500">Content</p>
            </div>
          </div>
          <div className="bg-[#dfede7] transition-all" role="accordion">
            <button
              type="button"
              className="w-full sm:text-lg text-base font-bold text-left py-6 px-6 text-[#333] flex items-center"
            >
              <span className="mr-6 text-3xl text-gray-400 font-extrabold max-sm:hidden">02</span>
              <span className="mr-4">What are the dates and locations for the product launch events?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
                <path
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                  data-original="#000000"
                />
              </svg>
            </button>
            <div className="pb-5 px-6">
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.
                Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed semper,
                justo vitae consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui. Nulla
                facilisi. Nulla aliquam auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in
                efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien,
                a semper orci facilisis in.
              </p>
              <button
                type="button"
                className="px-6 py-2.5 rounded-full text-sm text-white tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 mt-6"
              >
                Learn more
              </button>
            </div>
          </div>
          <div role="accordion">
            <button
              type="button"
              className="w-full sm:text-lg text-base font-bold text-left py-6 px-6 text-[#333] flex items-center"
            >
              <span className="mr-6 text-3xl text-gray-400 font-extrabold max-sm:hidden">03</span>
              <span className="mr-4">Can I bring a guest with me to the product launch event?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
                <path
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                  data-original="#000000"
                />
              </svg>
            </button>
            <div className="hidden pb-5 px-6">
              <p className="text-sm text-gray-500">Content</p>
            </div>
          </div>
          <div role="accordion">
            <button
              type="button"
              className="w-full sm:text-lg text-base font-bold text-left py-6 px-6 text-[#333] flex items-center"
            >
              <span className="mr-6 text-3xl text-gray-400 font-extrabold max-sm:hidden">04</span>
              <span className="mr-4">What are the dates and locations for the product launch events?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
                <path
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                  data-original="#000000"
                />
              </svg>
            </button>
            <div className="hidden pb-5 px-6">
              <p className="text-sm text-gray-500">Content</p>
            </div>
          </div>
        </div>

        <div className="flex items-center text-center p-8 min-h-[380px] bg-gradient-to-t from-gray-800 to-gray-600 text-white w-full font-[sans-serif]">
          <div className="max-w-4xl mx-auto">
            <h1 className="sm:text-4xl text-2xl font-bold">The Perfect Way to Make a Great First Impression</h1>
            <p className="mt-8 text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet tempus blandit, metus mi
              consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices, non
              consequat mauris tincidunt. pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices,
              non consequat mauris tincidunt.
            </p>
            <button
              type="button"
              className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold border-none outline-none bg-gray-600 hover:bg-gray-700"
            >
              Getting started now
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact2;

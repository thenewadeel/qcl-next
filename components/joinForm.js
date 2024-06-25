import Image from "next/image";
import React from "react";
import Container from "./container";
import { UserIcon } from "@heroicons/react/24/solid";

const Join = (props) => {
  const { data } = props;
  return (
    <>
      <Container className=" mt-16">
        <div className=" text-gray-800 dark:text-gray-100 flex items-center mx-auto  p-4 justify-around">
          <div className="grid md:grid-cols-3 items-center shadow-[2px_2px_12px] shadow-gray-900 dark:shadow-gray-600 rounded-xl h-full overflow-hidden border-2 border-slate-300 dark:border-none ">
            <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4 ">
              {/* <div>
                <h4 className="text-white text-lg font-semibold">Register for Membership</h4>
                <p className="text-[13px] text-white mt-2">Welcome to QCL registration! Get started by applying.</p>
              </div> */}

              <div className="text-white">
                <h4 className="text-white text-lg font-semibold mb-4 text-center"> Membership Requirements</h4>
                <ul>
                  {/* <li>&#8226; Form must be sponsored by two members of Quetta Club.</li> */}
                  <li className="mb-4">
                    For details please refer to FAQs Section below.
                    {/* <ul>
                      <li>- Photo copy of CNIC (3)</li>
                      <li>- Photographs (3)</li>
                      <li>- B-Form with Family Details</li>
                      <li>- Photo copy of Domicile</li>
                      <li>- Official/ Business Card</li>
                      <li>- NOC & Verification of BPS from Department</li>
                      <li>- Notification of Appointment</li>
                      <li>- Cross Checque in favor of Quetta Club Ltd. as per fee structure</li>
                      <li className="font-bold">- Form Fee (10,000)</li>
                    </ul> */}
                  </li>
                </ul>
              </div>
            </div>
            <form className="md:col-span-2 w-full py-6 px-6 sm:px-16" netlify name="joinForm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Register for Membership</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="text-sm mb-2 block">Name</label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      required
                      className="bg-slate-300 placeholder:text-gray-600 px-2 py-3  w-full text-sm border-b-4 focus:border-red-700 outline-none rounded-md transition-all duration-500 dark:text-black"
                      placeholder="Enter name"
                    />
                    <UserIcon className="w-4 h-4 absolute right-4 fill-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Email Id</label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      required
                      className="bg-slate-300 placeholder:text-gray-600 px-2 py-3  w-full text-sm border-b-4 focus:border-red-700 outline-none rounded-md transition-all duration-500 dark:text-black"
                      placeholder="Enter email"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
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
                </div>
                <div>
                  <label className="text-sm mb-2 block">Phone No.</label>
                  <div className="relative flex items-center">
                    <input
                      name="phone"
                      type="text"
                      required
                      className="bg-slate-300 placeholder:text-gray-600 px-2 py-3  w-full text-sm border-b-4 focus:border-red-700 outline-none rounded-md transition-all duration-500 dark:text-black"
                      placeholder="Enter Contact No"
                    />
                  </div>
                </div>
                {/* <div>
                  <label className="text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div> */}
                {/* <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label for="remember-me" className="ml-3 block text-sm">
                    I accept the{" "}
                    <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">
                      Terms and Conditions
                    </a>
                  </label>
                </div> */}
              </div>
              <div className="!mt-10">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm  text-white  hover:bg-gray-800 focus:outline-none
                  p-2 mt-3 text-center rounded-md shadow-md bg-red-800  dark:shadow-none hover:shadow-none dark:hover:shadow-md shadow-gray-950 dark:hover:shadow-slate-500 dark:shadow-sky-200 dark:bg-red-900 dark:text-gray-200 font-bold transition-all duration-500 lg:ml-5"
                >
                  Apply for Membership
                </button>
              </div>
              {/* <p className="text-sm mt-6 text-center">
                Already have an account?{" "}
                <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">
                  Login here
                </a>
              </p> */}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Join;

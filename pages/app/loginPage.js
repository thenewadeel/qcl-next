"use client";
import { useState, useEffect } from "react";
import { account, ID } from "./appwrite";

import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  EyeIcon,
  CurrencyPoundIcon,
  Star,
  StarIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const initialize = async () => {
      try {
        const session = await account.getSession("current");
        const result = await account.get();
        console.log({ result });
        setLoggedInUser(result);
      } catch (error) {
        console.warn("No session found");
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const session = await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        <div className=" flex flex-row items-center">
          {/* <img className="w-16 h-16 rounded-full mr-4" src={loggedInUser.picture} /> */}
          <div className="text-slate-900 bg-lime-100 dark:text-white dark:bg-orange-900 border-4 border-slate-400 dark:border-slate-200 rounded-full  w-10 h-10 text-center font-bold font-serif text-xl p-0 align-middle items-center">
            {loggedInUser.name[0]}
          </div>
          <div className="px-2 text-lg font-bold">{loggedInUser.name}</div>
          <div className="cursor-pointer w-6 h-6" onClick={logout} title="Logout">
            <PowerIcon />
          </div>
          {/* <div className="absolute bottom-0 right-0 mb-2 mr-2">
            <button type="button" className="text-white bg-red-500 rounded-full px-3 py-1" >
              {loggedInUser.name[0]}
            </button>
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <p>Guest</p> */}
      <form className="flex flex-col items-center">
        <input
          className="my-1 w-full rounded-md p-2 shadow-inner shadow-sky-200 bg-slate-50 dark:bg-slate-900 dark:shadow-slate-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="my-1 w-full rounded-md p-2 shadow-inner shadow-sky-200 bg-slate-50 dark:bg-slate-900 dark:shadow-slate-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> */}
        <button
          className="my-1 w-min rounded-md p-2 shadow-md bg-red-800 text-white dark:shadow-none hover:shadow-none dark:hover:shadow-md shadow-gray-950 dark:hover:shadow-slate-500 dark:shadow-sky-200 dark:bg-red-900 dark:text-gray-200 font-bold transition-all duration-500"
          type="button"
          onClick={() => login(email, password)}
        >
          Login
        </button>
        {/* <button type="button" onClick={register}>
          Register
        </button> */}
      </form>
    </div>
  );
};

export default LoginPage;

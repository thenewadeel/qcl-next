import Image from "next/image";
import Container from "./container";
import bannerImg from "../public/img/banner.jpg";
import Link from "next/link";

const Card = (props) => {
  const { data } = props;
  return (
    <>
      {/* <div className="max-md:max-w-lg mx-auto border-4 border-black flex flex-col "> */}
      <div
        className={`text-left bg-slate-200 dark:bg-red-950 dark:bg-opacity-20 dark:hover:bg-opacity-80 rounded-md p-6 flex flex-col justify-between shadow-black hover:shadow-md ${
          props.className ? props.className : ""
        }`}
      >
        <div className="space-y-4 ">
          <h3 className="text-2xl font-semibold ">{data.heading ? data.heading : "111"}</h3>
          <p className="text-gray-800 dark:text-gray-200 text-sm text-justify">
            {data.text ? data.text : "qqqqqqqqqqqq"}
          </p>
        </div>
        <Link
          type="button"
          href={data.link ? data.link : "/"}
          className="px-4 py-2 flex items-center text-sm mt-6  w-max self-end rounded-md p-2 shadow-md bg-red-800 text-white dark:shadow-none hover:shadow-none dark:hover:shadow-md shadow-gray-950 dark:hover:shadow-slate-500 dark:shadow-sky-200 dark:bg-red-900 dark:text-gray-200 font-bold transition-all duration-500"
        >
          Learn more
        </Link>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;

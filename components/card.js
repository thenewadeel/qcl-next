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
        className={`text-left bg-slate-200 dark:bg-slate-700 rounded-md p-6 flex flex-col justify-between shadow-black hover:shadow-md ${
          props.className ? props.className : ""
        }`}
      >
        <div className="space-y-4 ">
          <h3 className="text-2xl font-semibold ">{data.heading ? data.heading : "111"}</h3>
          <p className="text-gray-800 dark:text-gray-200 text-sm ">{data.text ? data.text : "qqqqqqqqqqqq"}</p>
        </div>
        <Link
          type="button"
          href={data.link ? data.link : "/"}
          className="border shadow-black shadow-inner px-4 py-2 rounded-md font-bold flex items-center text-sm mt-6 hover:shadow-md hover:bg-slate-300 transition-all duration-700 w-max self-end  dark:hover:shadow-md dark:border-none  dark:hover:bg-slate-800 "
        >
          Learn more
        </Link>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;

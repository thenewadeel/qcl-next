import Image from "next/image";
import Container from "./container";
import bannerImg from "../public/img/banner.jpg";

const Banner = (props) => {
  const { data } = props;

  return (
    <>
      <Container className={`flex flex-wrap h-screen scrollStop  rounded-xl w-full`}>
        <div className="flex flex-col justify-between  w-full lg:w-full p-8">
          <div className="absolute inset-0 overflow-hidden -z-40">
            <img
              src={data?.coverImg?.src ? data.coverImg.src : "https://readymadeui.com/cardImg.webp"}
              alt="Background Image"
              className="w-full h-full max-h-screen object-fit opacity-80 -z-50"
            />
          </div>
          <div className="text-xl p-4 md:p-8 max-w-2xl md:mx-10   shadow-black dark:shadow-red-900  shadow-lg rounded-xl backdrop-blur-md bg-opacity-70 text-gray-200 bg-stone-950 dark:bg-zinc-950 dark:text-white dark:bg-opacity-50">
            <p className="text-base  md:text-3xl  leading-relaxed">
              <span className="font-extrabold md:p-4 ">{data?.title ? data.title : "Exceptional Facilities"},</span>
              <br />
              <span className=" font-bold md:p-4">{data?.subtitle ? data.subtitle : "Exceptional You!"} </span>
            </p>
            <p className="text-xs md:text-base">{data?.punchline}</p>
          </div>
          <div className="text-xl p-4 md:w-1/2 md:mx-10   shadow-black dark:shadow-sky-900  shadow-md rounded-xl backdrop-blur-md bg-opacity-40 text-gray-800 bg-stone-950 dark:bg-zinc-800 dark:text-yellow-200 dark:bg-opacity-50 self-end">
            <p className="text-base  md:text-xl  leading-relaxed font-extrabold md:p-2 text-center">
              {data?.desc ? data.desc : "Exceptional Facilities"}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;

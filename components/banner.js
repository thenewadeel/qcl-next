import Image from "next/image";
import Container from "./container";
import bannerImg from "../public/img/banner.jpg";

const Banner = (props) => {
  const { data } = props;

  return (
    <>
      <Container className={`flex flex-wrap h-screen scrollStop  rounded-xl w-full`}>
        <div className="flex flex-col justify-between  w-full lg:w-full  p-8">
          <div className="absolute inset-0 overflow-hidden -z-40">
            <img
              src={data?.coverImg?.src ? data.coverImg.src : ""}
              alt="Background Image"
              className="w-full h-full max-h-screen object-cover  -z-50"
            />
          </div>
          <div className="text-xl p-4 md:px-8 max-w-2xl md:mx-10   shadow-black dark:shadow-red-900  shadow-lg rounded-xl backdrop-blur-md bg-opacity-60 text-gray-200 bg-stone-950  dark:bg-zinc-950 dark:text-white dark:bg-opacity-50">
            <div className="text-base  md:text-3xl pt-2 ">
              <div className="text-4xl font-extrabold md:px-4 ">
                {data?.title ? data.title : "Exceptional Facilities"}
              </div>
              <div className="text-xl text-right md:py-2 w-max font-bold md:px-4 ">
                {data?.subtitle ? data.subtitle : "Exceptional You!"}{" "}
              </div>
            </div>
            <div className="text-xs md:text-base md:px-4 text-center">{data?.punchline}</div>
          </div>
          <div className="text-xl p-4 md:w-1/2 md:mx-10   shadow-black dark:shadow-sky-900  shadow-md rounded-xl backdrop-blur-md bg-opacity-40 text-green-400 bg-stone-950 dark:bg-zinc-800 dark:text-yellow-200 dark:bg-opacity-50 self-end">
            <p className="text-base  md:text-xl   font-extrabold md:p-2 text-center">
              {data?.desc ? data.desc : "Exceptional Facilities"}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;

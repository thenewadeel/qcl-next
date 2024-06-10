import Image from "next/image";
import Container from "./container";
import bannerImg from "../public/img/banner.jpg";
import missionIcon from "../public/img/icons/mission.jpg";
import valuesIcon from "../public/img/icons/values.jpg";
import visionIcon from "../public/img/icons/vision.jpg";

const History = () => {
  const paras = [
    {
      heading: "A Glimpse Into the Past",
      text: "Dating back to the colonial era when British officers sought respite from the rugged terrain of Balochistan",
    },
    {
      heading: "Enduring Traditions",
      text: "Remained true to its founding principles of fostering fellowship. The club is infused with a sense of camaraderie and sportsmanship.",
    },
    // {
    //   heading: "Embracing Change",
    //   text: "While honoring its storied past, the Quetta Club has also embraced modernity and innovation, continuously evolving to meet the changing needs and preferences of its esteemed members. Today, the club boasts state-of-the-art facilities and amenities, ensuring an unparalleled experience for all who walk through its doors.",
    // },
    // {
    //   heading: "A Community Like No Other",
    //   text: "At the heart of the Quetta Club lies its vibrant community of members who share a deep appreciation for tradition, culture, and the finer things in life. Whether gathering for an elegant soirée in our historic clubhouse or enjoying a leisurely afternoon by the pool, every moment spent at the club is cherished among friends old and new. Preserving Heritage, Inspiring the Future: As custodians of a cherished legacy, the Quetta Club remains committed to preserving its rich heritage while inspiring future generations to embrace its values of inclusivity, excellence, and service. Through timeless traditions and forward-thinking initiatives, we invite you to be part of our enduring story.",
    // },
  ];

  return (
    <>
      <Container className="h-full scrollStop md:p-20 dark:grayscale-[0.5]  bg-center bg-[url('../public/img/history.jpg')] object-cover bg-fixed bg-cover  rounded-xl ">
        <div name="history" className=" flex flex-col w-full h-screen justify-between md:p-4 dark:saturate-200">
          <div className=" md:text-3xl m-2 text-2xl px-20 py-8 font-extrabold  rounded-xl bg-opacity-70  text-gray-200 dark:text-yellow-500 bg-black dark:bg-stone-950  dark:bg-opacity-80 md:max-w-md w-max shadow-[inset_0px_0px_9px] self-center md:-mt-10">
            Club History
          </div>
          {/* <div className=" w-full h-full"> */}
          <div className="flex flex-row justify-between">
            <div className="p-4 text-base md:p-8 md:text-4xl -rotate-[4deg] hover:rotate-0 rounded-xl  hover:border-opacity-80 transition-all duration-1000 text-gray-200  bg-opacity-30  dark:bg-opacity-70  font-bold dark:text-gray-200 dark:bg-stone-900 backdrop-blur-sm bg-sky-400 text-center shadow-[9px_9px_15px]  shadow-gray-800">
              In the heart of <strong>Quetta Cantt</strong>
            </div>
            <div className="p-4 text-base md:p-8 md:text-4xl rotate-[4deg] hover:rotate-0 rounded-xl  hover:border-opacity-80 transition-all duration-1000 text-gray-200  bg-opacity-30  dark:bg-opacity-70  font-bold dark:text-gray-200 dark:bg-stone-900 backdrop-blur-sm bg-sky-400 text-center shadow-[9px_9px_15px]  shadow-gray-800">
              Established in <strong>1891</strong>
            </div>
          </div>
          {paras.map((para, index) => (
            <div className="flex flex-col">
              <h3 className="m-2 text-2xl px-8 font-extrabold  py-2 rounded-lg bg-opacity-70  text-gray-200 dark:text-yellow-500 bg-black dark:bg-stone-950 text-start dark:bg-opacity-80 md:max-w-md w-max shadow-[inset_0px_0px_9px]">
                {para.heading}
              </h3>
              <p className="w-auto p-4 font-bold text-xl md:p-8 md:text-2xl rounded-xl  hover:border-opacity-80 transition-all duration-1000 text-justify text-white   bg-opacity-50  dark:bg-opacity-70   dark:bg-slate-900 backdrop-blur-sm bg-sky-900  shadow-[9px_9px_15px]  shadow-gray-800">
                {para.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default History;

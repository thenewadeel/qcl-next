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
      text: "The origins of the Quetta Club trace back to the colonial era when British officers sought respite from the rugged terrain of Balochistan. Originally founded as a retreat for the elite, the club quickly evolved into a vibrant hub of social activity, attracting members from diverse backgrounds and cultures.",
    },
    {
      heading: "Enduring Traditions",
      text: "Over the decades, the Quetta Club has remained true to its founding principles of fostering fellowship and promoting recreation. From spirited rounds of golf on our verdant greens to exhilarating matches on our tennis courts, every activity at the club is infused with a sense of camaraderie and sportsmanship.",
    },
    {
      heading: "Embracing Change",
      text: "While honoring its storied past, the Quetta Club has also embraced modernity and innovation, continuously evolving to meet the changing needs and preferences of its esteemed members. Today, the club boasts state-of-the-art facilities and amenities, ensuring an unparalleled experience for all who walk through its doors.",
    },
    {
      heading: "A Community Like No Other",
      text: "At the heart of the Quetta Club lies its vibrant community of members who share a deep appreciation for tradition, culture, and the finer things in life. Whether gathering for an elegant soirée in our historic clubhouse or enjoying a leisurely afternoon by the pool, every moment spent at the club is cherished among friends old and new. Preserving Heritage, Inspiring the Future: As custodians of a cherished legacy, the Quetta Club remains committed to preserving its rich heritage while inspiring future generations to embrace its values of inclusivity, excellence, and service. Through timeless traditions and forward-thinking initiatives, we invite you to be part of our enduring story.",
    },
  ];

  return (
    <>
      <Container className="h-full scrollStop md:p-20  bg-[url('../public/img/history.jpg')] object-cover bg-fixed bg-cover rounded-xl ">
        <div name="history" className=" flex flex-col w-full  h-full md:p-4">
          <div className=" text-xl md:text-3xl font-bold text-red-900 w-max rounded-xl py-4 md:hover:text-black bg-white bg-opacity-60 md:hover:bg-opacity-20 shadow-2xl transition-all duration-1000 mb-4   self-center md:-mt-16">
            Discover the Rich History of Quetta Club
          </div>
          <div className=" w-full h-full">
            <p className="p-4 text-base md:p-8 md:text-2xl rounded-xl  transition-all duration-1000 text-justify text-black font-bold bg-white bg-opacity-40">
              Located in the heart of Quetta Cantt, offering unparalleled amenities, dining and recreation facilities.
              Established in 1891, the club has been a cherished landmark and a beacon of social gatherings for
              generations.
            </p>
            {paras.map((para, index) => (
              <div className="flex flex-col">
                <h3 className="m-2 text-2xl font-extrabold px-4 py-2 rounded-lg bg-opacity-70  text-gray-200 dark:text-yellow-500 bg-black dark:bg-stone-950 text-center dark:bg-opacity-80 md:max-w-md md:self-center">
                  {para.heading}
                </h3>
                <p className="p-4 text-base md:p-8 md:text-2xl rounded-xl hover:bg-opacity-100 hover:border-opacity-80 transition-all duration-1000 text-justify text-gray-200   dark:bg-opacity-90  dark:text-gray-200 dark:bg-stone-950 bg-slate-950 ">
                  {para.text}
                </p>
              </div>
            ))}

            <br />
            {/* <p className="p-4 text-base md:p-8 md:text-2xl rounded-xl border-4 border-red-900 border-opacity-0 hover:bg-opacity-100 hover:border-opacity-80 transition-all duration-1000 text-justify text-black font-bold bg-white bg-opacity-40">
              In the early years, our founders envisioned a space that transcended the ordinary— a place where refined
              individuals could come together to indulge in sophisticated pursuits. The first swing on our historic golf
              course marked the inception of a legacy that would blend opulence with open spaces, creating an
              environment where prestige met recreation.
            </p> */}
          </div>
        </div>
        {/* <div className="font-[sans-serif] text-[#333] p-4">
          <div className="max-w-3xl max-md:max-w-md mx-auto">
            <h2 className="text-4xl font-extrabold">Our Ecosystem</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12 max-sm:justify-center text-center mt-12">
              <div className="bg-gray-200 max-w-[230px] rounded-tl-full rounded-tr-full rounded-md">
                <img src={valuesIcon.src} className="rounded-full" />
                <div className="p-4">
                  <h4 className="text-base font-extrabold">Values</h4>
                  <p className="text-xs font-semibold mt-1">Our Traditions</p>
                  <p className="mt-2">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                </div>
              </div>
              <div className="bg-gray-200 max-w-[230px] rounded-tl-full rounded-tr-full rounded-md">
                <img src={missionIcon.src} className="rounded-full" />
                <div className="p-4">
                  <h4 className="text-base font-extrabold">Mission</h4>
                  <p className="text-xs font-semibold mt-1">Our Members</p>
                  <p className="mt-2">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                </div>
              </div>
              <div className="bg-gray-200 max-w-[230px] rounded-tl-full rounded-tr-full rounded-md">
                <img src={visionIcon.src} className="rounded-full" />
                <div className="p-4">
                  <h4 className="text-base font-extrabold">Vision</h4>
                  <p className="text-xs font-semibold mt-1">Our Future</p>
                  <p className="mt-2">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </>
  );
};

export default History;

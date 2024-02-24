import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Container from "./container";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import "./css/splideCarousal.module.css";

const images = require.context("../public/img/club-pics/carousal", true);
const imageList = images.keys().map((image) => images(image));

const splideStyle = {
  img: {
    // display: "block",
    // width: "50%",
    borderRadius: "8px",
    // border: "2px solid red",
    transition: "transform 400ms",
    transform: "scale(0.9)",
    transformOrigin: "center center",
    objectFit: "cover",
    ".is-active": {
      transform: "scale(1)",
    },
  },
};

let SplideContentOver = () => {
  const options = {
    type: "loop",
    perPage: 1,
    focus: "center",
    autoplay: true,
    interval: 1500,
    // flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: "0%",
    // throttle: 3,
    // breakpoints: {
    //   1080: {
    //     perPage: 1,
    //     padding: "3%",
    //   },
    // },
  };

  return (
    <Container className="shadow-inner text-center flex flex-wrap justify-start rounded-xl text-gray-200 bg-gray-100 dark:bg-slate-800 dark:text-gray-200 border-4 border-red-900 ">
      <div class=" max-lg:max-w-2xl mx-auto ">
        <div class="text-left absolute z-10 p-8 shadow-black dark:shadow-sky-900 dark:border-4 dark:border-gray-900 shadow-lg rounded-xl  w-3/5 md:m-24 m-10  backdrop-blur-md bg-stone-950 bg-opacity-70">
          <h2 class=" font-extrabold mb-6 ">Welcome to Our Website</h2>
          <p class="mb-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo
            turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.
          </p>
        </div>
        <div class="flex justify-center items-center  ">
          <Splide options={options} aria-labelledby="autoplay-example-heading" hasTrack={false}>
            <SplideTrack className="">
              {imageList.map((slide, index) => (
                <SplideSlide key={slide.default.src} className="flex h-full w-full">
                  <img src={slide.default.src} alt="" className=" splideImg" style={splideStyle.img} />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </Container>
  );
};
export default SplideContentOver;

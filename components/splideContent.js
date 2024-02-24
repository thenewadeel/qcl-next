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

let SplideContent = () => {
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
    <Container className="shadow-inner text-center flex flex-wrap justify-start rounded-xl text-gray-800 bg-gray-100 dark:bg-slate-800 dark:text-gray-200 p-12 ">
      <div class="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto p-12">
        <div class="text-left">
          <h2 class="text-4xl font-extrabold mb-6">Welcome to Our Website</h2>
          <p class="mb-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo
            turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.
          </p>
          <p class="mb-4 text-sm">
            Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse
            platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.
          </p>
          <p class="text-sm">
            consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae
            ligula. nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.
          </p>
          <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Customization</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Security</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Support</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Performance</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Global Reach</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Communication</h6>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center  shadow-black dark:shadow-sky-900 dark:border-4 dark:border-gray-900 shadow-lg rounded-xl">
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
export default SplideContent;

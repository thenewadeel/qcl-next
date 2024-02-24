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

let SplideCarousal = () => {
  const options = {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    interval: 1500,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: "0%",
    // throttle: 3,
    breakpoints: {
      1080: {
        perPage: 1,
        padding: "3%",
      },
    },
  };

  return (
    <div className="shadow-inner rounded-xltext-center flex flex-wrap justify-start">
      <Splide options={options} aria-labelledby="autoplay-example-heading" hasTrack={false}>
        <SplideTrack className="">
          {imageList.map((slide, index) => (
            <SplideSlide key={slide.default.src} className="flex h-full w-full">
              <img src={slide.default.src} alt="" className="rounded-3xl splideImg" style={splideStyle.img} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};
export default SplideCarousal;

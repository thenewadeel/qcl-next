import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Container from "./container";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Card from "./card";
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

let SplideContentCarousal = () => {
  const options = {
    type: "loop",
    perPage: 3,
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
      <div className=" max-lg:max-w-2xl mx-auto p-12">
        <div className="  shadow-black dark:shadow-sky-900 dark:border-4 dark:border-gray-900 shadow-lg rounded-xl max-w-screen-xl">
          <Splide options={options} aria-labelledby="autoplay-example-heading" hasTrack={false}>
            <SplideTrack className="">
              {imageList.map((slide, index) => (
                <SplideSlide key={slide.default.src} className="p-2 ">
                  {/* <img src={slide.default.src} alt="" className=" splideImg" style={splideStyle.img} /> */}
                  <Card data={{}} className="h-96 " />
                  aaaaaaaa
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </Container>
  );
};
export default SplideContentCarousal;

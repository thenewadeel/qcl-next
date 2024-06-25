import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Container from "./container";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import "./css/splideCarousal.module.css";
// import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css";
import { useState } from "react";

// const images = require.context("../public/img/club-pics/carousal", true);
// const images = images.keys().map((image) => images(image));

const splideStyle = {
  img: {
    // display: "block",
    // width: "50%",
    // borderRadius: "8px",
    // border: "2px solid red",
    // transition: "transform 400ms",
    // transform: "scale(0.9)",
    // transformOrigin: "center center",
    // objectFit: "cover",
    ".is-active": {
      transform: "scale(1)",
    },
  },
};

let SplideCarousal = (props) => {
  const { images } = props;
  const options = {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    interval: 1500,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: "",
    width: "100%",
    // throttle: 3,
    // autoWidth: true,
    // mediaQuery: "min",
    // breakpoints: {
    //   640: {
    //     // destroy: true,
    //     perPage: 2,
    //     width: "80%",
    //   },
    //   // }
    breakpoints: {
      360: {
        perPage: 1,
        //     width: "80%",

        //     // padding: "1%",
      },
      720: {
        perPage: 2,
        //     width: "80%",
      },
    },
  };

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleOpenModal = (image) => {
    setShowModal(true);
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="shadow-inner rounded-xl text-center flex flex-wrap justify-start">
      <Splide options={options} aria-labelledby="autoplay-example-heading" hasTrack={false}>
        <SplideTrack className="">
          {images.map((slide, index) => (
            <SplideSlide key={slide} className=" flex h-full md:w-full  self-center m-8 px-2">
              <img
                src={slide}
                alt=""
                className="w-[250px] md:w-[400px] lg:w-[700px] self-center rounded-lg splideImg bg-cover  shadow-black shadow-lg dark:shadow-xl  dark:hover:shadow-red-800 transition-all duration-700
                ease-in-out object-cover hover:scale-110"
                style={splideStyle.img}
                onClick={() => handleOpenModal(slide)}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>

      {showModal && (
        <div
          className="fixed top-0 left-0 m-10 w-auto h-auto hidden md:flex inset-0 overflow-auto self-center justify-center z-50 items-center"
          // style={{
          //   width: `calc(100% - 40px)`,
          //   height: `calc(100% - 40px)`,
          // }}
          data-aos="fade-up"
        >
          {/* <div className="bg-white p-6 rounded-lg shadow-lg"> */}
          <img
            src={modalImage}
            alt=""
            className="rounded-3xl object-cover roundedd-lg shadow-md shadow-black"
            onClick={handleCloseModal}
          />
          {/* </div> */}
        </div>
      )}
    </div>
  );
};
export default SplideCarousal;

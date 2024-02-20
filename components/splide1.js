// import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import Container from "./container";
// import { generateSlides } from "../utils";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const images = require.context("../public/img/club-pics", true);
const imageList = images.keys().map((image) => images(image));

// let generateSlides = [
//   { src: image0.src, alt: "asd" },
//   { src: image1.src, alt: "xxx" },
// ];

let Splide1 = () => {
  const options = {
    type: "loop",
    gap: "2rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    // height: "15rem",
  };

  return (
    <Container
      className="snapItem d:p-20 md:pt-40 shadow-inner rounded-xl
       border-4 border-yellow-400 text-center flex flex-col justify-start 
    "
    >
      {/* <div className="h-screen"> */}
      <h2 id="autoplay-example-heading">Autoplay</h2>
      {console.log("asd", imageList)}
      <Splide options={options} aria-labelledby="autoplay-example-heading" hasTrack={false}>
        {/* <div style={{ position: "relative" }}> */}
        <SplideTrack>
          {imageList.map((slide, index) => (
            <SplideSlide key={slide.default.src}>
              <img src={slide.default.src} alt="" className="" />
            </SplideSlide>
          ))}
        </SplideTrack>
        {/* </div> */}

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button>
      </Splide>
    </Container>
  );
};

// import Image from "next/image";
// import Container from "./container";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import image0 from "../public/img/club-pics/club_image_05.JPG";
// import image1 from "../public/img/club-pics/club_image_04.JPG";
// const Splide1 = () => {
//   return (
//     <>
//       <Container className="shadow-inner  rounded-xl">
//         <Splide
//           options={{
//             rewind: true,
//             gap: "1rem",
//           }}
//           aria-labelledby="My Favorite Images"
//         >
//           <SplideSlide aria-label="My Favorite Images">
//             <img src={image0.src} alt="Image 1" />
//             <img src={image1.src} alt="Image 2" />
//           </SplideSlide>
//           <SplideSlide></SplideSlide>
//         </Splide>
//       </Container>
//     </>
//   );
// };

export default Splide1;

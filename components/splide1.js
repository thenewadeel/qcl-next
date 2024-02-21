import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Container from "./container";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const images = require.context("../public/img/club-pics", true);
const imageList = images.keys().map((image) => images(image));

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
    <Container className="shadow-inner rounded-xltext-center flex flex-col justify-start">
      {/* <h2 id="autoplay-example-heading">Autoplay</h2> */}
      <Splide options={options} aria-labelledby="autoplay-example-heading" hasTrack={false}>
        <SplideTrack className="">
          {imageList.map((slide, index) => (
            <SplideSlide key={slide.default.src}>
              <img src={slide.default.src} alt="" className=" rounded-3xl  " />
            </SplideSlide>
          ))}
        </SplideTrack>
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
export default Splide1;

import Image from "next/image";
import Container from "./container";
import bannerImg from "../public/img/banner.jpg";

const History = () => {
  return (
    <>
      <Container className="h-screen scrollStop d:p-20 md:pt-40 shadow-inner bg-[url('../public/img/club-pics/club_image_12.JPG')] object-cover bg-fixed bg-cover rounded-xl">
        <div
          name="history"
          data-aos="fade-up"
          id="#history"
          className="flex flex-col items-center w-full justify-between h-full p-8"
        >
          <h1 className=" text-2xl md:text-6xl font-bold text-red-900 w-max rounded-3xl p-4 md:hover:text-black bg-black bg-opacity-0 md:hover:bg-opacity-20 shadow-2xl transition-all duration-1000">
            Club History
          </h1>
          <div className="">
            <p className=""></p>

            <p className="p-4 text-base md:p-8 md:text-2xl rounded-xl border-4 border-red-900 border-opacity-0 hover:bg-opacity-100 hover:border-opacity-80 transition-all duration-1000 text-justify text-black font-bold bg-white bg-opacity-40">
              Established in 1891, Quetta Golf Club and Gym Khana stands as a testament to a rich legacy of distinction
              and timeless elegance. Born from a vision to create a haven for the elite class, our journey began with a
              commitment to redefine the standard of luxury and leisure.
            </p>
            <br />
            <p className="p-4 text-base md:p-8 md:text-2xl rounded-xl border-4 border-red-900 border-opacity-0 hover:bg-opacity-100 hover:border-opacity-80 transition-all duration-1000 text-justify text-black font-bold bg-white bg-opacity-40">
              In the early years, our founders envisioned a space that transcended the ordinary— a place where refined
              individuals could come together to indulge in sophisticated pursuits. The first swing on our historic golf
              course marked the inception of a legacy that would blend opulence with open spaces, creating an
              environment where prestige met recreation.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default History;

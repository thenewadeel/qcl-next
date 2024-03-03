import Image from "next/image";
import Container from "./container";
import bannerImg from "../public/img/banner.jpg";
import Card from "./card";
import { facilitiesData } from "./data";

const Facilities = () => {
  // facilitiesData =
  return (
    <>
      <Container
        className=" scrollStop d:p-20   bg-[url('../public/img/club-pics/club_image_12.JPG')] object-cover bg-fixed bg-cover rounded-xl h-auto"
        // name="facilities"
      >
        <div
          name="facilities"
          // data-aos="fade-up"
          id="#facilities"
          className="flex flex-col max-lg:flex-col items-center w-full justify-start h-auto p-8"
        >
          <div className="bg-slate-300 shadow-black shadow-lg bg-opacity-80  flex max-lg:flex-col p-12 dark:bg-zinc-900 dark:text-gray-300 dark:bg-opacity-90 my-8 gap-10 rounded-xl w-full h-auto">
            <div className="lg:max-w-md mx-auto flex flex-col  space-y-12">
              <h2 className="text-4xl font-extrabold mb-4">Discover Our Member Exclusive Facilities</h2>
              <p className=" text-lg text-justify ">
                Embark on a Journey of Refined Excellence: Explore Our Prestigious Facilities. From the Historic Golf
                Course to State-of-the-Art Gymnasiums and Tranquil Spa Sanctuaries, Discover the Epitome of Luxury at
                Quetta Golf Club and Gym Khana.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-md:max-w-lg mx-auto">
              {facilitiesData.names.map((facility, index) => (
                <>
                  {/* {index % 3 == 0 && "pop"} */}
                  <Card
                    data={{
                      heading: facility,
                      text: facilitiesData.objs[index].sectionData.desc,
                      link: `/facilities/${facility}`,
                    }}
                    key={index}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Facilities;

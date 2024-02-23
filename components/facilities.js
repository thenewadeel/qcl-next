import Image from "next/image";
import Container from "./container";
import bannerImg from "../public/img/banner.jpg";
import Card from "./card";

const facilitiesData = [
  {
    heading: "Gym Training Grounds",
    text: "Indulge in Fitness Redefined at Quetta Golf Club and Gym Khana. Our state-of-the-art gym facility is a sanctuary for wellness enthusiasts, offering cutting-edge equipment, personalized training programs, and a sophisticated ambiance. Elevate your fitness journey in an exclusive setting where excellence meets well-being.",
    link: "",
  },
  {
    heading: "Indoor Swimming Pool",
    text: "Dive into Unrivaled Elegance at Quetta Golf Club and Gym Khana's Indoor Swimming Facility. Immerse yourself in a world of refined luxury as you experience the tranquility of our meticulously designed pool. Surrounded by sophistication, our indoor swimming facility offers a haven for relaxation, wellness, and exclusive aquatic experiences.",
    link: "",
  },
  {
    heading: "Cuisine",
    text: "Savor Culinary Excellence at Quetta Golf Club and Gym Khana. Our restaurant facility transcends dining to become a gastronomic journey, offering a menu curated for the discerning palate. Experience the perfect blend of ambiance, exceptional service, and a delectable array of dishes, making each meal an unforgettable affair in the lap of luxury.",
    link: "",
  },
  {
    heading: "SPA & Parlor Center",
    text: "Unleash the Power of Grooming Excellence at Quetta Golf Club and Gym Khana's Men's Salon. Experience the epitome of sophistication with tailored grooming services, skilled stylists, and a luxurious ambiance. From precision haircuts to personalized grooming rituals,redefine your style journey in an exclusive setting where elegance meets masculine indulgence.",
    link: "",
  },
  {
    heading: "Bedminton",
    text: "Engage in Dynamic Sporting Elegance at Quetta Golf Club and Gym Khana's Badminton Facility. Elevate your game in a meticulously designed space equipped with top-tier amenities and expert coaching. Whether you're a seasoned player or just discovering the sport, our Badminton Facility offers a unique blend of luxury and athleticism for an unmatched sporting experience.",
    link: "",
  },
];
const Facilities = () => {
  return (
    <>
      <Container
        className=" scrollStop d:p-20  shadow-inner bg-[url('../public/img/club-pics/club_image_12.JPG')] object-cover bg-fixed bg-cover rounded-xl h-auto"
        // name="facilities"
      >
        <div
          name="facilities"
          // data-aos="fade-up"
          id="#facilities"
          className="flex flex-col max-lg:flex-col items-center w-full justify-start h-auto p-8"
        >
          <div className="bg-slate-300 shadow-black shadow-lg bg-opacity-80  flex max-lg:flex-col p-12 dark:bg-zinc-900 dark:text-gray-300 dark:bg-opacity-90 my-8 gap-10 rounded-xl w-full h-auto">
            <div className="lg:max-w-md mx-auto flex flex-col justify-center space-y-12">
              <h2 className="text-4xl font-extrabold mb-4">Discover Our Member Exclusive Facilities</h2>
              <p className=" text-lg text-justify ">
                Embark on a Journey of Refined Excellence: Explore Our Prestigious Facilities. From the Historic Golf
                Course to State-of-the-Art Gymnasiums and Tranquil Spa Sanctuaries, Discover the Epitome of Luxury at
                Quetta Golf Club and Gym Khana.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-md:max-w-lg mx-auto">
              {facilitiesData.map((item, index) => (
                <Card data={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Facilities;

import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  EyeIcon,
  CurrencyPoundIcon,
  Star,
  StarIcon,
  Calendar,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import golfImg from "../public/img/facilities/golf.jpg";
import golfBannerImg from "../public/img/facilities/golfBanner.jpg";
import poloImg from "../public/img/facilities/polo.jpg";
import poloBannerImg from "../public/img/facilities/poloBanner.jpg";
// import poolImg from "../public/img/facilities/pool.jpg";
// import poolBannerImg from "../public/img/facilities/poolBanner.jpg";
// import gymMImg from "../public/img/facilities/gymM.jpg";
// import gymMBannerImg from "../public/img/facilities/gymMBanner.jpg";
// import gymFImg from "../public/img/facilities/gymF.jpg";
// import gymFBannerImg from "../public/img/facilities/gymFBanner.jpg";
// import saunaImg from "../public/img/facilities/sauna.jpg";
// import saunaBannerImg from "../public/img/facilities/saunaBanner.jpg";
// import steamImg from "../public/img/facilities/steam.jpg";
// import steamBannerImg from "../public/img/facilities/steamBanner.jpg";
// import billiardImg from "../public/img/facilities/billiard.jpg";
// import billiardBannerImg from "../public/img/facilities/billiardBanner.jpg";
// import chessImg from "../public/img/facilities/chess.jpg";
// import chessBannerImg from "../public/img/facilities/chessBanner.jpg";
// import coffeeImg from "../public/img/facilities/coffee.jpg";
// import coffeeBannerImg from "../public/img/facilities/coffeeBanner.jpg";
// import rooftopImg from "../public/img/facilities/golf.jpg";
// import rooftopBannerImg from "../public/img/facilities/golfBanner.jpg";
// import lodgesImg from "../public/img/facilities/golf.jpg";
// import lodgesBannerImg from "../public/img/facilities/golfBanner.jpg";
// import banHallImg from "../public/img/facilities/golf.jpg";
// import banHallBannerImg from "../public/img/facilities/golfBanner.jpg";
// import confRoomImg from "../public/img/facilities/golf.jpg";
// import confRoomBannerImg from "../public/img/facilities/golfBanner.jpg";
// import arabianCourtyardImg from "../public/img/facilities/golf.jpg";
// import arabianCourtyardBannerImg from "../public/img/facilities/golfBanner.jpg";
// import hallsImg from "../public/img/facilities/golf.jpg";
// import hallsBannerImg from "../public/img/facilities/golfBanner.jpg";
// import lawnsImg from "../public/img/facilities/golf.jpg";
// import lawnsBannerImg from "../public/img/facilities/golfBanner.jpg";

const golfData = {
  bannerData: {
    title: "QCL Golf Course",
    subtitle: "Beyond Par!",
    punchline: "Over 30,000 calories burned every minute",
    coverImg: { src: golfBannerImg.src, className: "border-8 border-red-900" },
    desc: "A refreshing and soothing run awaits you",
  },
  sectionData: {
    title: "Golf Course",
    desc: "Our pristine 18-hole championship golf course offers a challenging yet rewarding experience for players of all skill levels. With meticulously manicured fairways, scenic views, and strategically placed hazards, our course provides an unforgettable golfing experience. Tee times are available throughout the week, and our professional staff is on hand to provide expert instruction and coaching. Experience the ultimate in golfing luxury and become a member today!",
    image: golfImg,
    bullets: [
      {
        title: "Championship Course",
        desc: "Designed by renowned architect, this challenging yet fair layout offers a world-class golfing experience for players of all skill levels.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Breathtaking Scenery",
        desc: "Nestled amidst the majestic mountains of Quetta, the course boasts stunning views, making your game even more memorable.",
        icon: <EyeIcon />,
      },
      {
        title: "Beyond the Green",
        desc: "More than just golf, our course provides a relaxing and enjoyable experience for the whole family with amenities like Golfee, lush lawns & on-site spa.",
        icon: <SunIcon />,
      },
    ],
  },
};
const poloData = {
  bannerData: {
    title: "QCL Polo Club",
    subtitle: "Giggy up!",
    punchline: "Over 30 horse power",
    coverImg: { src: poloBannerImg.src, className: "border-8 border-red-900" },
    desc: "Immerse Yourself in the Majesty of Polo at QCL",
  },
  sectionData: {
    title: "Polo Club",
    desc: "Step into a world of equestrian grace, strategic brilliance, and heart-pounding action at QCL. Witness the ancient sport of polo come alive as skilled riders and their magnificent steeds battle for victory on our pristine polo field.",
    image: poloImg,
    bullets: [
      {
        title: "Unleash the Thrill",
        desc: "Immerse yourself in the electrifying atmosphere as riders push their limits, maneuvering their mounts with incredible skill and precision. Feel the adrenaline surge as the thunder of hooves echoes across the field, culminating in the satisfying crack of the mallet striking the polo ball.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Embrace the Elegance",
        desc: "Be captivated by the graceful movements of the horses, their powerful strides intertwined with the elegant maneuvers of the riders. Witness the timeless beauty of polo unfold, where athleticism and strategy find a harmonious balance.",
        icon: <EyeIcon />,
      },
      {
        title: "Experience the Legacy",
        desc: "Become part of the rich tradition of polo, a sport dating back centuries and cherished for its unique blend of competition, horsemanship, and social sophistication. Discover a world steeped in history, where the spirit of competition thrives alongside a deep respect for both horse and rider.",
        icon: <SunIcon />,
      },
    ],
  },
};

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const facilitiesData = {
  names: [
    "Golf Course",
    "Polo Ground",
    "Swimming Pool",
    "Men's Gym",
    "Ladies Gym",
    "Sauna Bath",
    "Steam Bath",
    "Billiards Room",
    "Chess & Cards Room",
    "Coffee Shop",
    "Rooftop Restaurant",
    "Lodges",
    "Banquet Hall",
    "Conference Room",
    "Arabian Courtyard",
    "Halls",
    "Lawns",
  ],
  objs: [
    golfData,
    poloData,
    // poolData,
    // gymMData,
    // gymFData,
    // saunaData,
    // steamData,
    // billiardData,
    // chessData,
    // coffeeData,
    // rooftopData,
    // lodgesData,
    // banHallData,
    // confRoomData,
    // arabianCourtyardData,
    // hallsData,
    // lawnsData,
  ],
};

export { facilitiesData, benefitOne, benefitTwo, golfData, poloData };

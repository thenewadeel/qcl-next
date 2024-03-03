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
import poolImg from "../public/img/facilities/pool.jpg";
import poolBannerImg from "../public/img/facilities/poolBanner.jpg";
import gymMImg from "../public/img/facilities/gymM.jpg";
import gymMBannerImg from "../public/img/facilities/gymMBanner.jpg";
import gymFImg from "../public/img/facilities/gymF.jpg";
import gymFBannerImg from "../public/img/facilities/gymFBanner.jpg";
import saunaImg from "../public/img/facilities/sauna.jpg";
import saunaBannerImg from "../public/img/facilities/saunaBanner.jpg";
import steamImg from "../public/img/facilities/steam.jpg";
import steamBannerImg from "../public/img/facilities/steamBanner.jpg";
import billiardImg from "../public/img/facilities/billiard.jpg";
import billiardBannerImg from "../public/img/facilities/billiardBanner.jpg";
import chessImg from "../public/img/facilities/chess.jpg";
import chessBannerImg from "../public/img/facilities/chessBanner.jpg";
import coffeeImg from "../public/img/facilities/coffee.jpg";
import coffeeBannerImg from "../public/img/facilities/coffeeBanner.jpg";
import rooftopImg from "../public/img/facilities/rooftop.jpg";
import rooftopBannerImg from "../public/img/facilities/rooftopBanner.jpg";
import lodgesImg from "../public/img/facilities/lodges.jpg";
import lodgesBannerImg from "../public/img/facilities/lodgesBanner.jpg";
import banHallImg from "../public/img/facilities/banHall.jpg";
import banHallBannerImg from "../public/img/facilities/banHallBanner.jpg";
import confRoomImg from "../public/img/facilities/confRoom.jpg";
import confRoomBannerImg from "../public/img/facilities/confRoomBanner.jpg";
import arabianCourtyardImg from "../public/img/facilities/arabianCourtyard.jpg";
import arabianCourtyardBannerImg from "../public/img/facilities/arabianCourtyardBanner.jpg";
// import hallsImg from "../public/img/facilities/halls.jpg";
// import hallsBannerImg from "../public/img/facilities/hallsBanner.jpg";
// import lawnsImg from "../public/img/facilities/lawns.jpg";
// import lawnsBannerImg from "../public/img/facilities/lawnsBanner.jpg";

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
const poolData = {
  bannerData: {
    title: "QCL Swimming Pool",
    subtitle: "",
    punchline: "Dive into Relaxation and Recreation ",
    coverImg: { src: poolBannerImg.src, className: "border-8 border-red-900" },
    desc: "Ready to make a splash?",
  },
  sectionData: {
    title: "Swimming Pool",
    desc: "Dive into Relaxation and Recreation. Escape the ordinary and discover a refreshing oasis at QCL Swimming Pool . Immerse yourself in the crystal-clear waters, unwind under the warm sun, or invigorate your body with a refreshing swim. Whether you're seeking a leisurely escape, an active workout, or quality family time, our inviting pool caters to all preferences and provides the perfect setting to relax, reconnect, and recharge.",
    image: poolImg,
    bullets: [
      {
        title: "Unwind",
        desc: "Glide through the refreshing water, enjoying the invigorating sensation of a leisurely swim or challenging laps.",
        icon: <DevicePhoneMobileIcon />,
      },
    ],
  },
};
const gymMData = {
  bannerData: {
    title: "QCL Men's Gym",
    subtitle: "!",
    punchline: "Ignite Your Fitness Journey",
    coverImg: { src: gymMBannerImg.src, className: "border-8 border-red-900" },
    desc: "Unleash Your Potential at QCL",
  },
  sectionData: {
    title: "Men's Gym",
    desc: "Empower yourself to reach your fitness goals in a supportive and motivating environment at [Gym Name]. We offer state-of-the-art equipment, diverse fitness programs, and expert guidance, catering to all experience levels and aspirations. Whether you're seeking to build strength, improve endurance, or enhance your overall well-being, we're here to support you every step of the way.",
    image: gymMImg,
    bullets: [
      {
        title: "World-class equipment",
        desc: "Train with a comprehensive range of weight training machines, cardio equipment, and functional training tools.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Expert guidance",
        desc: "Our certified trainers are dedicated to helping you achieve your fitness goals with personalized training and support.",
        icon: <EyeIcon />,
      },
      {
        title: "Welcoming atmosphere",
        desc: "Feel motivated and inspired by our friendly staff and supportive community of fellow fitness enthusiasts.",
        icon: <SunIcon />,
      },
    ],
  },
};
const gymFData = {
  bannerData: {
    title: "QCL Ladies Gym",
    subtitle: "!",
    punchline: "Ignite Your Fitness Journey",
    coverImg: { src: gymFBannerImg.src, className: "border-8 border-red-900" },
    desc: "Empower Yourself in a Supportive Space",
  },
  sectionData: {
    title: "Ladies Gym",
    desc: "Embrace your fitness journey in a dedicated and empowering environment at QCL Ladies Gym. We offer a welcoming space designed specifically for women, equipped with top-notch facilities, diverse programs, and supportive guidance to help you achieve your unique goals.",
    image: gymFImg,
    bullets: [
      {
        title: "Specialized classes",
        desc: "Choose from a variety of group fitness classes designed for women, including strength training, cardio, and mind-body programs.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Expert female trainers",
        desc: "Receive personalized guidance and motivation from our certified female trainers who understand your specific needs and goals.",
        icon: <EyeIcon />,
      },
      {
        title: "Privacy and security",
        desc: "Enjoy dedicated ladies-only areas for training and relaxation, prioritizing your comfort and privacy.",
        icon: <SunIcon />,
      },
    ],
  },
};
const saunaData = {
  bannerData: {
    title: "QCL Sauna Bath",
    subtitle: "!",
    punchline: "Rejuvenate",
    coverImg: { src: saunaBannerImg.src, className: "border-8 border-red-900" },
    desc: "Empower Yourself in a Supportive Space",
  },
  sectionData: {
    title: "Sauna Bath",
    desc: "Experience the restorative power of heat therapy in our serene sauna. Immerse yourself in a warm, dry environment, allowing relaxation to wash over you as your body releases stress and tension. Whether you're seeking post-workout recovery, improved circulation, or simply a moment of self-care, our sauna provides the perfect sanctuary for rejuvenation.",
    image: saunaImg,
    bullets: [
      {
        title: "Relaxation and stress relief",
        desc: "De-stress and unwind in the soothing heat, allowing your worries to melt away.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Muscle recovery",
        desc: "Promote muscle relaxation and improve recovery after exercise or physical activity.",
        icon: <EyeIcon />,
      },
      {
        title: "Improved circulation",
        desc: "Enhance blood flow throughout your body for increased oxygen delivery and detoxification.",
        icon: <SunIcon />,
      },
    ],
  },
};
const steamData = {
  bannerData: {
    title: "QCL Steam Bath",
    subtitle: "!",
    punchline: "Soothing Steam Bath",
    coverImg: { src: steamBannerImg.src, className: "border-8 border-red-900" },
    desc: "Empower Yourself in a Supportive Space",
  },
  sectionData: {
    title: "Steam Bath",
    desc: "Indulge in the therapeutic warmth and gentle humidity of our inviting steam bath. Immerse yourself in a cloud of invigorating steam, letting your worries dissipate as your body and mind find complete relaxation.  Whether you're seeking to ease muscle tension, soothe respiratory discomfort, or simply escape the daily grind, our steam bath offers a haven for rejuvenation and well-being.",
    image: steamImg,
    bullets: [
      {
        title: "Deep relaxation and stress relief",
        desc: "Allow the soothing warmth and humidity to melt away stress and tension, promoting a sense of calm and well-being.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Muscle tension relief",
        desc: "Ease muscle aches and stiffness, promoting improved flexibility and range of motion.",
        icon: <EyeIcon />,
      },
      {
        title: "Respiratory benefits",
        desc: "Open and clear your airways, potentially easing symptoms of congestion and promoting clearer breathing.",
        icon: <SunIcon />,
      },
    ],
  },
};
const billiardData = {
  bannerData: {
    title: "QCL Billiards",
    subtitle: "",
    punchline: "",
    coverImg: { src: billiardBannerImg.src, className: "border-8 border-red-900" },
    desc: "Sharpen Your Skills and Challenge Your Friends",
  },
  sectionData: {
    title: "Billiards Room",
    desc: "Elevate your game night or enjoy a casual afternoon honing your skills in our inviting billiards room at [Facility Name]. Whether you're a seasoned pool shark or a curious beginner, our welcoming atmosphere and top-notch equipment provide the perfect setting for a game of billiards, snooker, or other cue sports.",
    image: billiardImg,
    bullets: [
      {
        title: "State-of-the-art table",
        desc: "Enjoy competitive games on our meticulously maintained pool tables and high-quality equipment.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Casual and competitive environments",
        desc: "Whether you're seeking a fun social gathering or a challenging match, our billiards room caters to both.",
        icon: <EyeIcon />,
      },
    ],
  },
};
const chessData = {
  bannerData: {
    title: "QCL Chess & Cards Room",
    subtitle: " ",
    punchline: " ",
    coverImg: { src: chessBannerImg.src, className: "border-8 border-red-900" },
    desc: "Engage Your Mind and Socialize",
  },
  sectionData: {
    title: "Chess & Cards Room",
    desc: "Step away from the ordinary and delve into the stimulating world of strategy and friendly competition at our Chess & Cards Room. Whether you're a seasoned chess player, a card game enthusiast, or simply seeking a relaxing social space, our welcoming environment provides the perfect platform to connect, challenge your mind, and enjoy the company of others.",
    image: chessImg,
    bullets: [
      {
        title: "Relaxing Ambiance",
        desc: "Unwind and focus in our quiet and comfortable space, designed for enjoyable game sessions.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Socialize",
        desc: "Connect with friends, meet new people, and foster social interaction through engaging games and friendly competition.",
        icon: <EyeIcon />,
      },
    ],
  },
};
const coffeeData = {
  bannerData: {
    title: "Coffee Shop",
    subtitle: " ",
    punchline: " ",
    coverImg: { src: coffeeBannerImg.src, className: "border-8 border-red-900" },
    desc: "Engage Your Mind and Socialize",
  },
  sectionData: {
    title: "Coffee Shop @ Golfee",
    desc: "Embrace the aroma of freshly brewed coffee and indulge in delectable treats at our cozy coffee shop. Whether you're seeking a quiet place to work, a casual meeting spot with friends, or simply a moment to relax and recharge, our welcoming atmosphere and delicious offerings cater to all your needs.",
    image: coffeeImg,
    bullets: [
      {
        title: "Premium coffee selection",
        desc: "Savor a variety of expertly crafted espresso drinks, brewed coffee, and specialty beverages to suit your taste.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Delectable pastries and snacks",
        desc: "Indulge in fresh-baked pastries, savory sandwiches, and other delectable treats alongside your coffee.",
        icon: <EyeIcon />,
      },
      {
        title: "Free Wi-Fi and comfortable seating",
        desc: "Unwind or work productively in our comfortable setting, complete with free Wi-Fi access.",
        icon: <EyeIcon />,
      },
    ],
  },
};
const rooftopData = {
  bannerData: {
    title: "QCL Rooftop Restaurant",
    subtitle: " ",
    punchline: " ",
    coverImg: { src: rooftopBannerImg.src, className: "border-8 border-red-900" },
    desc: "Savor Exquisite Cuisine with Breathtaking Views",
  },
  sectionData: {
    title: "Rooftop Restaurant",
    desc: "Elevate your dining experience and embark on a culinary journey under the stars at QCL's captivating rooftop restaurant. Perched atop [mention location description], our restaurant offers a unique blend of delectable cuisine, stunning panoramic vistas, and an unforgettable ambiance.",
    image: rooftopImg,
    bullets: [
      {
        title: "breathtaking natural landscapes",
        desc: "Immerse yourself in the captivating views of [mention specific sights or scenery] while you dine.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Exquisite cuisine",
        desc: "Savor meticulously prepared dishes crafted with seasonal ingredients, showcasing the culinary artistry of our talented chefs.",
        icon: <EyeIcon />,
      },
      {
        title: "relaxed atmosphere",
        desc: "Enjoy a sophisticated dining experience with a relaxed and inviting ambience, perfect for intimate gatherings or special occasions.",
        icon: <EyeIcon />,
      },
    ],
  },
};
const lodgesData = {
  bannerData: {
    title: "QCL Lodges",
    subtitle: " ",
    punchline: " ",
    coverImg: { src: lodgesBannerImg.src, className: "border-8 border-red-900" },
    desc: "Our Inviting Lodges",
  },
  sectionData: {
    title: "Lodges",
    desc: "Escape the ordinary and discover a haven of comfort and tranquility at our charming lodges. Nestled amidst [mention surroundings, e.g., serene landscapes, vibrant cityscapes, or historical landmarks], our lodges offer the perfect blend of relaxation and exploration, catering to both short and extended stays.",
    image: lodgesImg,
    bullets: [
      {
        title: "Spacious and well-appointed",
        desc: "Relax and recharge in our comfortable guest rooms, featuring modern amenities and thoughtful touches to ensure a pleasant stay.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Diverse lodging options",
        desc: "Choose from a variety of room types to suit your needs, whether you're a solo traveler, a couple, or a family seeking a getaway.",
        icon: <EyeIcon />,
      },
      {
        title: "Convenient amenities",
        desc: "Enjoy access to essential amenities like Wi-Fi, laundry facilities, and on-site parking, making your stay effortless and enjoyable.",
        icon: <EyeIcon />,
      },
    ],
  },
};
const banHallData = {
  bannerData: {
    title: "QCL Banquet Halls",
    subtitle: " ",
    punchline: " ",
    coverImg: { src: banHallBannerImg.src, className: "border-8 border-red-900" },
    desc: "Celebrate in Style",
  },
  sectionData: {
    title: "Banquet Halls",
    desc: "Plan your dream events, a premier venue renowned for its elegant ambiance, exceptional service, and attention to detail. Whether you're hosting a wedding reception, corporate gathering, social celebration, or any other special occasion, our versatile space and dedicated team cater to every aspect of your vision, ensuring a truly unforgettable experience.",
    image: banHallImg,
    bullets: [
      {
        title: "Elegant and spacious setting",
        desc: "Immerse your guests in a sophisticated atmosphere with our beautifully designed banquet hall.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Customizable event space",
        desc: "Tailor the venue to suit your needs with flexible room configurations and customizable decor options to create the perfect setting for your event.",
        icon: <EyeIcon />,
      },
      {
        title: "Impeccable culinary experience",
        desc: "Delight your guests with exquisite cuisine prepared by our in-house culinary team, offering a variety of catering options to suit your taste and preferences.",
        icon: <EyeIcon />,
      },
    ],
  },
};
const confRoomData = {
  bannerData: {
    title: "QCL Conference Room",
    subtitle: " ",
    punchline: " ",
    coverImg: { src: confRoomBannerImg.src, className: "border-8 border-red-900" },
    desc: "Celebrate in Style",
  },
  sectionData: {
    title: "Conference Room",
    desc: "Elevate your meetings and foster collaboration in our state-of-the-art conference rooms. Whether you require an intimate space for brainstorming sessions or a larger venue for presentations and conferences, our diverse selection of rooms caters to all your business needs. Embrace a productive and inspiring environment equipped with the latest technology and dedicated support to ensure the success of your gathering.",
    image: confRoomImg,
    bullets: [
      {
        title: "Modern technology integration",
        desc: "Utilize high-definition screens, video conferencing capabilities, and reliable Wi-Fi to enhance your presentations and facilitate seamless communication.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Flexible room configurations",
        desc: "Adjust the layout of the room to suit your specific needs, fostering collaboration and engaging discussions among participants.",
        icon: <EyeIcon />,
      },
      {
        title: "Dedicated support staff",
        desc: "Benefit from the assistance of our experienced event coordinators who will handle logistical details, ensuring your meeting runs smoothly.",
        icon: <EyeIcon />,
      },
    ],
  },
};
const arabianCourtyardData = {
  bannerData: {
    title: "QCL Arabian Courtyard",
    subtitle: " ",
    punchline: " ",
    coverImg: { src: arabianCourtyardBannerImg.src, className: "border-8 border-red-900" },
    desc: "Dine in Enchanting Eastern Ambiance",
  },
  sectionData: {
    title: "Arabian Courtyard",
    desc: "Embark on a culinary journey through the heart of Arabia within the Arabian Courtyard Hotel. Immerse yourself in the captivating atmosphere, inspired by traditional Arabian architecture and design, as you savor authentic dishes prepared with fresh, local ingredients. Whether you're seeking a romantic evening or a memorable gathering with friends and family, our restaurant promises an unforgettable dining experience.",
    image: arabianCourtyardImg,
    bullets: [
      {
        title: "Authentic Arabian cuisine",
        desc: "Explore the rich culinary tapestry of Arabia, featuring succulent grilled meats, aromatic stews, and flavorful vegetarian options.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Locally sourced ingredients",
        desc: "Savor the freshness and quality of locally sourced ingredients, ensuring a true taste of Arabian culinary tradition.",
        icon: <EyeIcon />,
      },
      {
        title: "Warm and inviting ambiance",
        desc: "Step into a world of intricate patterns, soft lighting, and traditional Arabian design elements, creating an enchanting dining atmosphere.",
        icon: <EyeIcon />,
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
    // "Halls",
    // "Lawns",
  ],
  objs: [
    golfData,
    poloData,
    poolData,
    gymMData,
    gymFData,
    saunaData,
    steamData,
    billiardData,
    chessData,
    coffeeData,
    rooftopData,
    lodgesData,
    banHallData,
    confRoomData,
    arabianCourtyardData,
    // hallsData,
    // lawnsData,
  ],
  facilitiesMenuGp: {
    "Social and Dining": ["Coffee Shop", "Rooftop Restaurant", "Arabian Courtyard"],
    Fittness: ["Swimming Pool", "Men's Gym", "Ladies Gym", "Sauna Bath", "Steam Bath"],
    Sports: ["Golf Course", "Polo Ground"],
    "Indoor Games": ["Billiards Room", "Chess & Cards Room"],
  },
};
export { facilitiesData, benefitOne, benefitTwo, golfData, poloData };

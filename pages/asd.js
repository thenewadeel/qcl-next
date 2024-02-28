import Head from "next/head";
import Hero from "../components/hero";
import Banner from "../components/banner";
import History from "../components/history";
import Splide1 from "../components/splide1";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import contactImage from "../public/img/contact.jpg";
import FacilityTemplate from "../components/facilityTemplate";
// // import addData from "@/firebase/firestore/addData";
// import addData from "./_firebaseFuncs";
// const handleForm = async () => {
//   const data = {
//     name: "John snow",
//     house: "Stark",
//   };
//   const { result, error } = await addData("users", "user-id", data);
//   console.log(result);
//   if (error) {
//     return console.log(error);
//   }
// };

const Home = () => {
  return (
    <>
      <Head>
        <title>Quetta Club Limited</title>
        <meta name="description" content="Quetta Club Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {console.log(handleForm())} */}
      <Navbar />
      {/* <Banner /> */}
      <hr />
      asd
      <Banner data={{ subtitle: "qweqweqwe" }} />
      <FacilityTemplate />
      <Benefits data={benefitOne} />
      <Faq />
      <Cta />
      <Contact
        data={{
          title: "ASD",
          description: "DDD",
          image: contactImage,
          bullets: [
            {
              title: "Understand your customers",
              desc: "Then explain the first point breifly in one or two lines.",
            },
            {
              title: "Improve acquisition",
              desc: "Here you can add the next benefit point.",
            },
            {
              title: "Drive customer retention",
              desc: "This will be your last bullet point in this section.",
            },
          ],
        }}
      />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;

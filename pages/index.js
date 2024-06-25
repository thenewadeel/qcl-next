import Head from "next/head";
import Hero from "../components/hero";
import Banner1 from "../components/banner1";
import History from "../components/history";
import Splide1 from "../components/splide1";
import SplideCarousal from "../components/splideCarousel";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Facilities from "../components/facilities";
import Contact from "../components/contact";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Contact2 from "../components/contact copy";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import SplideContent from "../components/splideContent";
import SplideContentCarousal from "../components/splideContentCarousal";

import contactImage from "../public/img/contact.jpg";
import SplideContentOver from "../components/splideContentOver";
import CtaBanner from "../components/ctaBanner";
import ListPosts from "./app/listPosts";
import CSSCarousal from "../components/cssCarousal";

const Home = () => {
  return (
    // <>
    <div className="w-full self-center flex flex-col">
      <Head>
        <title>Quetta Club Limited</title>
        <meta name="description" content="Quetta Club Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner1 />
      {/* <CSSCarousal /> */}
      <hr />
      <div name="history" className="pt-12">
        <SectionTitle pretitle="History" title="Through Time"></SectionTitle>
        <History />
      </div>
      <div name="facilities" className="pt-12">
        <SectionTitle pretitle="Facilities" title="Our Facilities"></SectionTitle>
        <Facilities />
      </div>
      <div name="gallery" className="pt-12">
        <SectionTitle pretitle="Gallery" title="A Window through Time">
          Our vibrant community thrives on a diverse range of activities, catering to a multitude of interests.
        </SectionTitle>
        <SplideCarousal />
      </div>
      <div name="blog" className="pt-12">
        <SectionTitle pretitle="Events" title="Past and Upcoming">
          Stay updated on our exciting events and activities. Whether it's a golf tournament, a charity event, or a
          social gathering, we hope to see you there.
        </SectionTitle>
        <ListPosts />
      </div>
      <div name="contact" className="pt-12 h-max">
        <SectionTitle pretitle="Contact Us" title=" ">
          Learn about the club & community
        </SectionTitle>
        <Contact />
      </div>
      <div className="w-full   mt-12">
        <Cta />
      </div>

      <div className="w-full   mt-24">
        <CtaBanner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

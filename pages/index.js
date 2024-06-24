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
      {/* <SectionTitle pretitle="Nextly Benefits" title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups and indie projects. Its built with
        Next.js & TailwindCSS. And its completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="Watch a video" title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product. Analysts says a landing page with video has
        3% more conversion rate. So, don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="Testimonials" title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your
        popular customers.
      </SectionTitle>
      <Testimonials /> */}
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the conversion rate as well as support or chat
        requests.
      </SectionTitle>
      <Faq /> */}
      <div name="contact" className="pt-12 h-screen">
        <SectionTitle pretitle="Contact Us" title=" ">
          Learn about the club & community
        </SectionTitle>
        <Contact />
      </div>
      <div className="w-full h-40  space-y-12"></div>
      <Cta />

      {/* <SplideContent />
      <SplideContentOver />
    <SplideContentCarousal /> */}
      <div className="w-full h-40  space-y-24"></div>
      <CtaBanner />
      <Footer />
      {/* <PopupWidget /> */}
      {/* </> */}
    </div>
  );
};

export default Home;

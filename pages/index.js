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

const Home = () => {
  return (
    <>
      <Head>
        <title>Quetta Club Limited</title>
        <meta name="description" content="Quetta Club Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <hr />
      <History />
      <Splide1 />
      <SectionTitle pretitle="Nextly Benefits" title=" Why should you use this landing page">
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
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the conversion rate as well as support or chat
        requests.
      </SectionTitle>
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

import Head from "next/head";
import Navbar from "../components/navbar";
import Join from "../components/joinForm";
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
      <Join />
      <Faq
        data={[
          {
            question: "What are the Requirements for Permanent Membership?",
            answer: "Form must be sponsored by two members of Quetta Club.",
          },
          {
            question: "What are the Documents Required for Permanent Membership?",
            answer: (
              <>
                <ul>
                  <li>- Photo copy of CNIC (3)</li>
                  <li>- Photographs (3)</li>
                  <li>- B-Form with Family Details</li>
                  <li>- Photo copy of Domicile</li>
                  <li>- Official/ Business Card</li>
                  <li>- NOC & Verification of BPS from Department</li>
                  <li>- Notification of Appointment</li>
                  <li>- Cross Checque in favor of Quetta Club Ltd. as per fee structure</li>
                  <li>- Form Fee (10,000)</li>
                </ul>
              </>
            ),
          },
          {
            question: "What is Fee Structure for Civilians?",
            answer: (
              <>
                <div className="font-bolder text-lg">Civilians:</div>
                <div className="indent-8">
                  <ul>
                    <li> - Entrance Fee -Rs. 2,450,000/-</li>
                    <li> - Security Fee -Rs. 50,000/- (Refundable)</li>
                    <li> - Total -Rs. 2,500,000/-</li>
                    <li> - Yearly Subscription - Rs. 50,500/-</li>
                  </ul>
                </div>
              </>
            ),
          },
          {
            question: "What is Fee Structure for Government Officials?",
            answer: (
              <>
                <div className="font-bolder text-lg">Government Officials:</div>
                <div className="indent-8">
                  <ul>
                    <li> - Entrance Fee -Rs. 1970,000/-</li>
                    <li> - Security Fee -Rs. 30,000/- (Refundable)</li>
                    <li> - Total -Rs. 2,000,000/-</li>
                    <li> - Yearly Subscription - Rs. 50,500/-</li>
                  </ul>
                </div>
                <div className="font-bolder text-lg">Retired Government Officials:</div>
                <div className="indent-8">
                  <ul>
                    <li> - Entrance Fee -Rs. 1970,000/-</li>
                    <li> - Security Fee -Rs. 30,000/- (Refundable)</li>
                    <li> - Total -Rs. 2,000,000/-</li>
                    <li> - Yearly Subscription - Rs. 50,500/-</li>
                  </ul>
                </div>
              </>
            ),
          },
          {
            question: "What is Format for NOC for Government Officers?",
            answer: (
              <>
                <div className="font-bolder text-lg underline text-center">DRAFT NOC REQUIRED FOR GOVT OFFICERS</div>
                <div className="indent-8">
                  <p>
                    It is certified that Mr.__________ is a permanent employ / gazetted officer in __________ as
                    __________ . His grade is equivalent __________ . This department has no objection if membership is
                    granted to him.
                  </p>
                </div>
              </>
            ),
          },
        ]}
      />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;

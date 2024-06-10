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
                  <li className="font-bold">- Form Fee (10,000)</li>
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
                    <li className="w-full flex flex-row">
                      <div className="text-left w-full"> - Entrance Fee</div>
                      <div className="text-start italic w-full">Rs. 2,450,000/-</div>
                    </li>
                    <li className="w-full flex flex-row">
                      <div className="text-left w-full"> - Security Fee</div>
                      <div className="text-start italic w-full">Rs. 50,000/- (Refundable)</div>
                    </li>
                    <li className="font-bold w-full flex flex-row">
                      <div className="text-left w-full"> - Total</div>
                      <div className="text-start italic w-full">Rs. 2,500,000/-</div>
                    </li>
                    <li className="font-bold w-full flex flex-row">
                      <div className="text-left w-full"> - Yearly Subscription</div>
                      <div className="text-start italic w-full">Rs. 50,500/-</div>
                    </li>
                  </ul>
                </div>
              </>
            ),
          },
          {
            question: "What is Fee Structure for Government Officials?",
            answer: (
              <>
                <div className="font-bold text-lg">Government Officials:</div>
                <div className="indent-8">
                  <ul className="flex flex-col justify-between w-full">
                    <li className="w-full flex flex-row">
                      <div className="text-left w-full"> - Entrance Fee</div>
                      <div className="text-start italic w-full">Rs. 1970,000/-</div>
                    </li>
                    <li className="w-full flex flex-row">
                      <div className="text-left w-full"> - Security Fee</div>
                      <div className="text-start italic w-full">Rs. 30,000/- (Refundable)</div>
                    </li>
                    <li className="font-bold w-full flex flex-row">
                      <div className="text-left w-full">- Total</div>
                      <div className="text-start italic w-full"> Rs. 2,000,000/-</div>
                    </li>
                    <li className="font-bold w-full flex flex-row">
                      <div className="text-left w-full"> - Yearly Subscription</div>
                      <div className="text-start italic w-full">Rs. 50,500/-</div>
                    </li>
                  </ul>
                </div>
                <div className="font-bold text-lg">Retired Government Officials:</div>
                <div className="indent-8">
                  <ul>
                    <li className="w-full flex flex-row">
                      <div className="text-left w-full"> - Entrance Fee</div>
                      <div className="text-start italic w-full">Rs. 1970,000/-</div>
                    </li>
                    <li className="w-full flex flex-row">
                      <div className="text-left w-full"> - Security Fee</div>
                      <div className="text-start italic w-full">Rs. 30,000/- (Refundable)</div>
                    </li>
                    <li className="font-bold w-full flex flex-row">
                      <div className="text-left w-full">- Total</div>
                      <div className="text-start italic w-full"> Rs. 2,000,000/-</div>
                    </li>
                    <li className="font-bold w-full flex flex-row">
                      <div className="text-left w-full"> - Yearly Subscription</div>
                      <div className="text-start italic w-full">Rs. 50,500/-</div>
                    </li>
                  </ul>
                </div>
              </>
            ),
          },
          {
            question: "What is Format for NOC for Government Officers?",
            answer: (
              <>
                <div className="font-bold text-lg underline text-center">DRAFT NOC REQUIRED FOR GOVT OFFICERS</div>
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

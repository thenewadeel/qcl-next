import { useRouter } from "next/router";
import FacilityTemplate from "../../components/facilityTemplate";
import { facilitiesData } from "../../components/data";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Faq from "../../components/faq";
import Footer from "../../components/footer";

export default function Page() {
  const router = useRouter();
  let index = facilitiesData.names.indexOf(router.query.slug);
  if (index >= 0)
    return (
      <>
        <Head>
          <title>Quetta Club Limited</title>
          <meta name="description" content="Quetta Club Limited" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <hr />
        <FacilityTemplate data={facilitiesData.objs[index]} />
        <p>Post: {router.query.slug}</p>;
        <Faq />
        <Footer />
      </>
    );
  else return <>Invalid slug::{router.query.slug}</>;
}
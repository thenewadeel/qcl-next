import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Faq from "../../../components/faq";
import Footer from "../../../components/footer";
import { useEffect } from "react";
import ViewPost from "./viewPost";
import ListPosts from "../listPosts";
import SectionTitle from "../../../components/sectionTitle";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.slug);
  }, []);

  // let index = facilitiesData.names.indexOf(router.query.slug);
  // if (index >= 0)
  return (
    <>
      <div className="w-full self-center flex flex-col">
        <Head>
          <title>{router.query.slug} - Quetta Club Limited</title>
          <meta name="description" content="Quetta Club Limited" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />

        <ViewPost postId={router.query.slug} />

        {/* <div name="blog" className="pt-12">
          <SectionTitle pretitle="Events" title="Past and Upcoming">
            Stay updated on our exciting events and activities. Whether it's a golf tournament, a charity event, or a
            social gathering, we hope to see you there.
          </SectionTitle>
          <ListPosts />
        </div> */}
        <Footer />
      </div>
    </>
  );
  // else return <>Invalid slug::{router.query.slug}</>;
}

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";

import firebase_app from "./_firebaseConfig";
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
import { useEffect, useState, setState } from "react";
import db from "./_firebaseConfig";

const Qwe = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    // data: [],``assssssaw465
    loading: false,
    text: "default",
  });
  // this.state = {
  //   quantity: 1,
  //   counter: 0,
  // };
  async function loadCity(name) {
    const cityDoc = doc(getFirestore(), `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }
  // Get a list of cities from your database
  async function getCities(d) {
    // console.log({ db });
    console.log({ d });
    const citiesCol = collection(d.db, "cities");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }

  useEffect(() => {
    console.log("loading");
    setState({ loading: true });
    console.log(db);

    const fetchData = async () => {
      const snapshot = await getCities(db)
        .then((res) => {
          console.log({ res });
          const newData = res.map((doc) => doc);
          setData(newData);
          setState({ loading: false });

          return res;
          // setState("success");
        })
        .catch((err) => {
          console.error("Error:", err);
          console.log("error");
          // setError(err);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Quetta Club Limited</title>
        <meta name="description" content="Quetta Club Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {console.log(handleForm())} */}
      <Navbar />
      <Banner />
      <h1>state:</h1>
      {state.loading && "Loading"}
      <hr />
      {data.map((dataObj) =>
        Object.keys(dataObj).map((k, index) => (
          <p>
            {k} - {dataObj[k]}
          </p>
        ))
      )}
      {/* {getCities(db).map((linkText, index) => ({ linkText }))} */}
      <Faq />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Qwe;

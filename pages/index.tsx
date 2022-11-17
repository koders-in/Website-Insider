import React, { useRef } from "react";
import AOS from "aos";
import Head from "next/head";

import "aos/dist/aos.css";

import { Footer, Navbar } from "../components";
import {
  Clients,
  Hero,
  Newsletter,
  Pricing,
  Technologies,
  Testmonials,
  WhyKoders,
} from "../sections";
// import { testMain } from "../helper";

export default function Home() {
  // const isRender = useRef(false);

  React.useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 1500,
    });
  }, []);
  // ------------
  // React.useEffect(() => {
  //   const ab = () => {
  //     testMain();
  //   };
  //   if (!isRender.current) {
  //     isRender.current = true;
  //     ab();
  //   }
  // });
  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Koders</title>
      </Head>
      <Navbar />
      <Hero />
      <WhyKoders />
      <Clients />
      <Technologies />
      <Testmonials />
      <Pricing />
      <Newsletter />
      <Footer />
    </div>
  );
}

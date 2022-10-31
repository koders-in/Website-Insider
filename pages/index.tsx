import React from "react";
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

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 1500,
    });
  }, []);
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

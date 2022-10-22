import React from "react";
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

const Home = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div>
      <Hero />
      <WhyKoders />
      <Clients />
      <Technologies />
      <Testmonials />
      <Pricing />
      <Newsletter />
    </div>
  );
};

export default Home;

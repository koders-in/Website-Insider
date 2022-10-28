import Head from "next/head";
import Image from "next/image";
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
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-main-primary overflow-hidden relative">
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

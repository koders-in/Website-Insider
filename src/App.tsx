import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { useRedirectToPricing } from "./helper/hook";
import {
  Blog,
  Cancellation,
  Home,
  Jobs,
  PrivacyPolicy,
  ReadMoreBlog,
  StartProject,
  TermsOfServic,
  Testmonials,
} from "./pages";

import "./style.css";

export const App = () => {
  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Jobs />} />
        <Route path="/reviews" element={<Testmonials />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="/blog/read-more" element={<ReadMoreBlog />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfServic />} />
      </Routes>
      <Footer />
    </div>
  );
};

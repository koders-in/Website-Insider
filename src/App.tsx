import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  Blog,
  Home,
  PrivacyPolicy,
  ReadMoreBlog,
  StartProject,
  Testmonials,
} from "./pages";

import "./style.css";

export const App = () => {
  return (
    <div className="bg-main-primary overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reviews" element={<Testmonials />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="/blog/read-more" element={<ReadMoreBlog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};

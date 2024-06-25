import React from "react";
import Navbar from "../components/common/navbar";
import BlogOneHero from "../components/BlogOneSection/BlogOneHero";
import Footer from "../components/common/footer";
import BlogOneMain from "../components/BlogOneSection/BlogOneMain";
import AboutWrap from "../components/InnerSection/InnerWrap";
import AboutWrapper from "../components/InnerSection/InnerWrapper";

export default function BlogOne() {
  return (
    <div>
      <section className="w-full bg-black">
        <div className=" max-w-[1620px] m-auto">
          <Navbar />
        </div>
      </section>
      <section className="bloghero">
        <div className=" max-w-[1620px] m-auto">
          <BlogOneHero />
        </div>
      </section>
      <section className="w-full bg-white mb-[300px]">
        <div className="max-w-[1620px] m-auto">
          <BlogOneMain />
        </div>
      </section>
      <section className="w-full bg-white">
        <div className=" max-w-[1620px] m-auto">
          <AboutWrap />
        </div>
      </section>
      <section className="aboutImages">
        <div className=" max-w-[1620px] m-auto">
          <AboutWrapper />
        </div>
      </section>
      <section className="w-full bg-[#000] ">
        <div className="max-w-[1620px] m-auto">
          <Footer />
        </div>
      </section>
    </div>
  );
}

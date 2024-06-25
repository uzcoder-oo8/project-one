import React from "react";
import Navbar from "../components/common/navbar";
import AboutHero from "../components/InnerSection/InnerHero";
import AboutWrap from "../components/InnerSection/InnerWrap";
import Footer from "../components/common/footer";
import AboutWrapper from "../components/InnerSection/InnerWrapper";
import Itemms from "../components/core/About/Itemms";

export default function About() {
  return (
    <div>
      <section className="w-full bg-black">
        <div className=" max-w-[1620px] m-auto">
          <Navbar />
        </div>
      </section>
      <section className="abouthero">
        <div className=" max-w-[1620px] m-auto">
          <AboutHero />
        </div>
      </section>
      <section className="w-full bg-white">
        <div className=" max-w-[1620px] m-auto">
          <Itemms />
          <AboutWrap />
        </div>
      </section>
      <section className="aboutImages">
        <div className=" max-w-[1620px] m-auto">
          <AboutWrapper />
        </div>
      </section>
      <section className="w-full bg-[#000]">
        <div className="max-w-[1620px] m-auto">
          <Footer />
        </div>
      </section>
    </div>
  );
}

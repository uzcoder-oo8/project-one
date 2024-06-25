import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import HomeHero from "../components/HomaSections/HomeHero";
import HomeAsida from "../components/HomaSections/HomeAsida";
import HomeWrap from "../components/HomaSections/HomeWrap";
import HomeWrapper from "../components/HomaSections/HomeWrapper";
import HomeLocation from "../components/HomaSections/HomeLocation";
import HomeIcon from "../components/HomaSections/HomeIcon";
import HomeInner from "../components/HomaSections/HomeInner";
export default function HomePage() {
  return (
    <React.Fragment>
      <section className="w-full bg-black">
        <div className=" max-w-[1620px] m-auto">
          <Navbar />
        </div>
      </section>
      <section className="homehero">
        <div className=" max-w-[1620px] m-auto">
          <HomeHero />
        </div>
      </section>
      <section className="w-full bg-black">
        <div className=" max-w-[1620px] m-auto">
          <HomeAsida />
        </div>
      </section>
      <section className="w-full bg-[#EFEFEF]">
        <div className=" max-w-[1620px] m-auto">
          <HomeWrap />
        </div>
      </section>
      <section className="w-full bg-[#fff] pb-[100px]">
        <div className=" max-w-[1620px] m-auto">
          <HomeWrapper />
        </div>
      </section>
      <section className="Location">
        <div className=" max-w-[1620px] m-auto">
          <HomeLocation />
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="max-w-[1620px] m-auto">
          <HomeIcon />
        </div>
      </section>
      <section className="w-full bg-[#EFEFEF]">
        <div className="max-w-[1620px] m-auto">
          <HomeInner />
        </div>
      </section>
      <section className="w-full bg-[#000]">
        <div className="max-w-[1620px] m-auto">
          <Footer />
        </div>
      </section>
    </React.Fragment>
  );
}

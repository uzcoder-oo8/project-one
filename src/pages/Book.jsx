import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/HomePageLogo.png";

// icons

import Footer from "../components/common/footer";
import Bookone from "../components/Books/Bookone";

export default function Book() {
  return (
    <>
      <section className="w-full bg-black pt-5 pb-5">
        <div className="max-w-[1500px] m-auto">
          <header className="flex justify-between">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
            <Link
              className="text-[#fff] font-[700] text-[35px] right-[50px] mt-[25px] ml-[30px]"
              to={"/"}
            >
              Home
            </Link>
          </header>
        </div>
      </section>
      <h4 className="text-center font-[500] text-[20px] mt-[100px]">
        let´s book your court
      </h4>
      <p className="text-center font-[600] text-[13px] mt-[10px] text-[#737373]">
        Powered by bookandgo.app
      </p>

      <Bookone />
      <section className="booksection">
        <div className="max-w-[1620px] m-auto flex gap-[350px]">
          <li className="">
            <h4 className="font-[900] text-[50px]">Download our app</h4>
            <p className="font-[500]">Join our community.</p>
            <p className="w-[650px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
            <div className="flex w-[280px] mt-[50px]">
              <button className="books google-play m-auto block  hover:scale-95"></button>
              <button className="books app-store m-auto block  hover:scale-95 "></button>
            </div>
          </li>
          <li className="booksmain"></li>
        </div>
      </section>
      <section className="w-full bg-[#000] -mt-[65px]">
        <div className="max-w-[1620px] m-auto">
          <Footer />
        </div>
      </section>
    </>
  );
}

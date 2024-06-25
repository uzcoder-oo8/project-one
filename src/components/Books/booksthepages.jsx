import { AiOutlineCheckCircle } from "react-icons/ai";
import React, { useState } from "react";
import { BiTime } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import Logo from "../../assets/HomePageLogo.png";
import { Link } from "react-router-dom";
import Footer from "../common/footer";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function BookonePage1() {
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
      <div>
        <ul className="flex gap-[12px] w-[1070px] m-auto mt-[68px] mb-[50px]">
          <button className="w-[214px] border rounded-[10px] bg-[#000] text-white  font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[3px]" />
            Search
            <AiOutlineCheckCircle className="text-[25px] -ml-[10px] mt-[3px]" />
          </button>
          <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[7px]" />
            Time Slot
          </button>
          <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[7px]" />
            Player Info
          </button>
          <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[7px]" />
            Payment
          </button>
          <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[30px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[7px]" />
            Payment
          </button>
        </ul>
        <div className="max-w-[1500px] m-auto">
          <h4 className="text-center font-[500] text-[20px] mt-[100px]">
            let´s book your court
          </h4>
          <p className="text-center font-[600] text-[13px] mt-[10px] text-[#737373]">
            Powered by bookandgo.app
          </p>

          <div className="">
            <p className="text-[#737373] ml-[200px]">
              Select a different date directly in the calendar to see avaialble
              slots. Then select the timeslot you want to book.
            </p>
            <h4 className="font-[700] text-[#737373] text-center mt-[20px]">
              You are searching for: 
              <span className="text-[#000]">90 minutes</span>
            </h4>
            <ul className="flex gap-[40px] w-[1000px] m-auto mt-[50px] mb-[50px]">
              <li className="w-[500px] border-[3px] rounded-md py-2 pl-2">
                <div className="flex justify-between">
                  <span className="text-[#737373] font-[600] flex gap-2">
                    May 2022 <IoIosArrowDown className="mt-[5px]" />
                  </span>
                  <span className="flex text-[#737373] mt-1">
                    <IoIosArrowBack />
                    <IoIosArrowForward />
                  </span>
                </div>
                <ul className="w-[450px] m-auto flex gap-[60px] mt-[20px]">
                  <li>S</li>
                  <li>M</li>
                  <li>T</li>
                  <li>W</li>
                  <li>T</li>
                  <li>F</li>
                  <li>S</li>
                </ul>
                <ul className="w-[450px] m-auto flex gap-[58px] mt-[10px]">
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    1
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    2
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    3
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    4
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    5
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    6
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    7
                  </li>
                </ul>
                <ul className="w-[450px] m-auto flex gap-[52px] mt-[10px]">
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    8
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    9
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    10
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    11
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    12
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    13
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    14
                  </li>
                </ul>
                <ul className="w-[450px] m-auto flex gap-[49px] mt-[10px]">
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    15
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    16
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    17
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    18
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    19
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    20
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    21
                  </li>
                </ul>
                <ul className="w-[450px] m-auto flex gap-[49px] mt-[10px]">
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    22
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    23
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    24
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    25
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    26
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    27
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    28
                  </li>
                </ul>
                <ul className="w-[450px] m-auto flex gap-[54px] mt-[10px]">
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    29
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    30
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    31
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    1
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    2
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    3
                  </li>
                  <li className="py-[5px] pl-[2px] rounded-md cursor-pointer hover:bg-black hover:text-white">
                    4
                  </li>
                </ul>
              </li>
              <li className="">
                <div className="w-[500px] text-center font-[700] rounded-md py-3 p-[20px] bg-[#CED4DA]">
                  Thu, Jun 06
                </div>
                <div className="flex -ml-[20px] mt-[30px]">
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    07:00
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    07:30
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    08:00
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    08:10
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    07:25
                  </li>
                </div>
                <div className="flex -ml-[20px]">
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    08:30
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    09:00
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    09:10
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    09:25
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    09:30
                  </li>
                </div>
                <div className="flex -ml-[20px]">
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    10:00
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    10:10
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    10:25
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    10:30
                  </li>
                  <li className="w-[109px] rounded-full text-center text-black hover:bg-black  hover:text-white py-2">
                    11:00
                  </li>
                </div>
              </li>
            </ul>
          </div>
          <div className=" w-[1100px] m-auto flex mt-[50px] justify-between mb-[50px]">
            <Link to={"/book"}>
              <button className="w-[120px] h-[52px] bg-black text-white rounded-md">
                Go back
              </button>
            </Link>
            <Link to={"/player"}>
              <button className="w-[105px] h-[52px] bg-black text-white rounded-md font-[300] ">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
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

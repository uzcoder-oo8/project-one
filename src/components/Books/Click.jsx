import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/footer";
import Logo from "../../assets/HomePageLogo.png";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaCircleDot } from "react-icons/fa6";
import { BsQuestionCircle } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

const Click = () => {
  return (
    <div>
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
      <div>
        <ul className="flex gap-[12px] w-[1070px] m-auto mt-[68px] mb-[50px]">
          <button className="w-[214px] border rounded-[10px] bg-[#000] text-white  font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Search
            <AiOutlineCheckCircle className="text-[25px] ml-[35px] mt-[4px]" />
          </button>
          <button className="w-[214px] border rounded-[10px] bg-[#000] text-white font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Time Slot
            <AiOutlineCheckCircle className="text-[25px] ml-[10px] mt-[4px]" />
          </button>
          <button className="w-[254px] border rounded-[10px] bg-[#000] text-white font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Player Info
            <AiOutlineCheckCircle className="text-[25px] ml-[32px] mt-[4px]" />
          </button>
          <button className="w-[254px] border rounded-[10px] bg-[#000000] text-white font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Payment
            <AiOutlineCheckCircle className="text-[25px] ml-[50px] mt-[4px]" />
          </button>
          <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Payment
          </button>
        </ul>
        <div className="w-[574px] h-[547px] rounded-[40px] gap-[23px] bg-[#E9ECEF] m-auto">
          <div className="">
            <FaCheckCircle className="text-[80px] translate-y-[40px] text-[#23A26D] rounded-[50px] m-auto" />
            <p className="w-[494px] h-[17px] text-[16px] text-center mt-[56px] m-auto">
              Booking price
            </p>
            <p className="w-[494px] h-[54px] text-[24px] text-center mt-[13px] m-auto font-bold">
              Rp 600,000K IDR
            </p>
          </div>
          <hr className="w-[494px] m-auto h-[1px] mt-[10px] bg-[#CED4DA] border-none" />
          <div className="">
            <div className="flex w-[494px] h-[30px] gap-[26px] m-auto justify-between mt-[23px]">
              <p className="text-[#707070] text-[20px]">Time</p>
              <p className="text-[#121212] text-[20px]">15:30</p>
            </div>
            <div className="flex w-[494px] h-[30px] gap-[26px] m-auto justify-between mt-[23px]">
              <p className="text-[#707070] text-[20px]">Date</p>
              <p className="text-[#121212] text-[20px]">June 6, 2024</p>
            </div>
            <div className="flex w-[494px] h-[30px] gap-[26px] m-auto justify-between mt-[23px]">
              <p className="text-[#707070] text-[20px]">Booking length</p>
              <p className="text-[#121212] text-[20px]">1 h 30 min</p>
            </div>
            <div className="flex w-[494px] h-[30px] gap-[26px] m-auto justify-between mt-[23px]">
              <p className="text-[#707070] text-[20px]">Location</p>
              <p className="text-[#121212] text-[20px]">Le Rose</p>
            </div>
          </div>
        </div>
        <div className="flex w-[1070px] m-auto justify-between">
          <Link to={"/payment"}>
            <button className="w-[137px] h-[52px] bg-black text-white rounded-md font-[300] mt-[50px]">
              Go back
            </button>
          </Link>
          <Link to={"/"}>
            <button className="w-[105px] h-[52px] bg-black text-white rounded-md font-[300] mt-[50px] ">
              Next
            </button>
          </Link>
        </div>
      </div>
      <section className="booksection mt-[91px]">
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
    </div>
  );
};

export default Click;

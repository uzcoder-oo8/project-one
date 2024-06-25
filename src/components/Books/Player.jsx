import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/footer";
import Logo from "../../assets/HomePageLogo.png";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const Player = () => {
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
          <button className="w-[254px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Player Info
          </button>
          <button className="w-[254px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Payment
          </button>
          <button className="w-[214px] border rounded-[10px] bg-[#E9ECEF] font-[500] text-[20px] flex gap-[10px] text-center py-2 pl-[30px]">
            <AiOutlineFileSearch className="text-[25px] mt-[5px] ml-[-13px]" />
            Payment
          </button>
        </ul>
        <div className="mt-[33px]">
          <p className="w-[1068px] m-auto text-[#737373]">
            Your are going to play 
            <span className="text-black font-semibold">90 minutes</span> in 
            <span className=" text-black font-semibold">Le Rose</span>
             at 12:30 on 
            <span className=" text-black font-semibold">June 6, 2024.</span> The
            price is 
            <span className=" text-black font-semibold">Rp 600,000</span> K IDR.
          </p>
          <p className="w-[1068px] m-auto text-[#737373] mt-[15px]">
            Please provide your information on this form to proceed with the
            field reservation.
          </p>
          <div className="flex w-[1068px] mt-[30px] justify-between m-auto">
            <div className="w-[360px] mt-[30px] flex flex-col m-auto">
              <label
                htmlFor="Last Name"
                className="w-[188px] h-[24px] font-bold"
              >
                First and Last Name
              </label>
              <input
                className="w-[360px] h-[38px] rounded-[4px] border-spacing-1 mt-[10px]"
                type="text"
                id="Last Name"
                placeholder="  example"
              />
            </div>
            <div className="w-[1068px] mt-[30px] flex flex-col m-auto">
              <label
                htmlFor="Last Name"
                className="w-[188px] h-[24px] font-bold"
              >
                Whatsapp Number
              </label>
              <input
                className="w-[360px] h-[38px] rounded-[4px] border-spacing-1 mt-[10px]"
                type="number"
                id="Last Name"
                placeholder="  +91"
              />
            </div>
            <div className="w-[1068px] mt-[30px] flex flex-col m-auto">
              <label
                htmlFor="Last Name"
                className="w-[188px] h-[24px] font-bold"
              >
                Email
              </label>
              <input
                className="w-[360px] h-[38px] rounded-[4px] border-spacing-1 mt-[10px]"
                type="text"
                id="Last Name"
                placeholder="  example"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-[129px] w-[1070px] m-auto justify-between">
          <Link to={"/TimeSlot"}>
            <button className="w-[137px] h-[52px] bg-black text-white rounded-md font-[300] mt-[50px]">
              Go back
            </button>
          </Link>
          <Link to={"/payment"}>
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

export default Player;

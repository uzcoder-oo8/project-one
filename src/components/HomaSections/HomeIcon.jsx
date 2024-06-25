import React from "react";
import CTAButton from "../core/Home/Button";
import HomeIcons1 from "../../assets/HomeIcons1.png";
import HomeIcons2 from "../../assets/HomeIcons2.png";
import HomeIcons3 from "../../assets/HomeIcons3.png";
import Images1 from "../../assets/dronos-768x768 1.png";
import Images2 from "../../assets/dronos-768x768 2.png";
import Images3 from "../../assets/dronos-768x768 3.png";
import Images4 from "../../assets/dronos-768x768 3.png";
import Images5 from "../../assets/iconss.png";

export default function HomeIcon() {
  return (
    <div>
      <ul className="flex">
        <li className="w-[540px] h-[450px] bg-[#EFEFEF] hover:scale-95">
          <h3 className="text-center text-[65px] mt-[40px] uppercase">
            Find players
          </h3>
          <p className="w-[450px] m-auto mt-[50px]">
            Looking for new Padel opponents? Download our Milo’s Padel app,
            create a match and start a game with newfound friends. What are you
            waiting for?
          </p>
          <div className="w-[160px] m-auto mt-[50px]">
            <CTAButton children={"READ MORE"} active={true} linkto={"/book"} />
          </div>
        </li>
        <li className="w-[540px] h-[450px] hover:scale-95">
          <img className="w-[540px] h-[450px]" src={HomeIcons1} alt="" />
        </li>
        <li className="w-[540px] h-[450px] bg-[#EFEFEF] hover:scale-95">
          <h3 className="text-center text-[65px] mt-[40px] uppercase">
            Padel Academy
          </h3>
          <p className="w-[450px] m-auto mt-[50px]">
            Join our Padel club and book personalized coaching or group lessons
            to level up your game. Unlock your Padel potential with our
            experienced coaches at Milo’s Padel in Bali!
          </p>
          <div className="w-[160px] m-auto mt-[50px]">
            <CTAButton children={"READ MORE"} active={true} linkto={"/book"} />
          </div>
        </li>
      </ul>
      <ul className="flex">
        <li className="w-[540px] h-[450px] hover:scale-95">
          <img className="w-[540px] h-[450px]" src={HomeIcons2} alt="" />
        </li>
        <li className="w-[540px] h-[450px] bg-[#EFEFEF] hover:scale-95  ">
          <h3 className="text-center text-[55px] mt-[40px] uppercase">
            activites & events
          </h3>
          <p className="w-[450px] m-auto mt-[50px]">
            Whether you’re a seasoned player or just starting, our jungle oasis
            is the perfect place to enjoy the game and create unforgettable
            memories. Come by and be a part of the fun at
          </p>
          <div className="w-[190px] m-auto mt-[50px]">
            <CTAButton
              children={"explore more"}
              active={true}
              linkto={"/book"}
            />
          </div>
        </li>
        <li className="w-[540px] h-[450px] hover:scale-95">
          <img className="w-[540px] h-[450px]" src={HomeIcons3} alt="" />
        </li>
      </ul>
      <h4 className="mt-[120px] text-center font-[700] text-[35px] mb-[40px]">
        Pro Shop
      </h4>
      <ul className="flex gap-[42px] w-[1000px] m-auto pb-[50px]">
        <li className="w-[250px] h-[500px] rounded-[48px] shadow-2xl hover:scale-90">
          <img
            src={Images1}
            className="w-[110px] h-[180px] m-auto mt-5 "
            alt=""
          />
          <h3 className="w-[180px] text-center m-auto font-[700] mt-[12px]">
            Starvie Dronos galaxy speed Pro 2.0
          </h3>
          <p className="w-[170px] m-auto text-center">
            The padel racket from Dronos Galaxy Speed 2.0 is combines the
            strength of 3K Carbon in the head with the rigidity of Carbon Fiber
            and Aluminium in the frame. 
          </p>
          <h5 className="text-center font-[800]">Rp 4.300.000</h5>
        </li>
        <li className="w-[250px] h-[500px] rounded-[48px] shadow-2xl hover:scale-90">
          <img
            src={Images2}
            className="w-[110px] h-[180px] m-auto mt-5 "
            alt=""
          />
          <h3 className="w-[180px] text-center m-auto font-[700] mt-[12px]">
            Starvie basaito Osiris Pro 2.0
          </h3>
          <p className="w-[170px] m-auto text-center">
            Perfect for those seeking an aggressive playing style, this model
            boasts a PRO 50 medium-density rubber, high balance, and a teardrop
            shape.
          </p>
          <h5 className="text-center font-[800]">Rp 4.700.000</h5>
        </li>
        <li className="w-[250px] h-[500px] rounded-[48px] shadow-2xl hover:scale-90">
          <img
            src={Images3}
            className="w-[110px] h-[180px] m-auto mt-5 "
            alt=""
          />
          <h3 className="w-[180px] text-center m-auto font-[700] mt-[12px]">
            Titania Kepler Pro 2.0
          </h3>
          <p className="w-[170px] m-auto text-center">
            Padel racket with its cutting-edge PRO 50 rubber core and 100%
            Carbon 3K composition, the Titania Kepler Pro 2.0 racket not only
            offers superior power and control but also proves to be
          </p>
          <h5 className="text-center font-[800]">Rp 3.600.000</h5>
        </li>
        <li className="w-[250px] h-[500px] rounded-[48px] shadow-2xl hover:scale-90">
          <img
            src={Images5}
            className="w-[150px] h-[180px] m-auto mt-5 "
            alt=""
          />
          <h3 className="w-[180px] text-center m-auto font-[700] mt-[12px]">
            Milo’s Padel Totebag
          </h3>
          <p className="w-[170px] m-auto text-center">
            A simple, stylish and comfortable tote bag from Milo’s Padel.
          </p>
          <h5 className="text-center font-[800]">Rp 4.00.000</h5>
        </li>
      </ul>
      <div className="w-[250px] m-auto pb-[50px]">
        <CTAButton
          children={"VISIT OUR PRO-SHOP"}
          active={true}
          linkto={"/book"}
        />
      </div>
    </div>
  );
}

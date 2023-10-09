import React from "react";
import Home from "../assets/home.png";
import Kalender from "../assets/kalender.png";
import Timer from "../assets/timer.png";
import Gift from "../assets/gift.png";
import Message from "../assets/message.png";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="relative">
        <div className="sm:w-[50%] w-[80%] bg-orange-400 flex justify-evenly p-4 mx-auto rounded-lg fixed sm:bottom-10 bottom-8 sm:left-80 left-9 z-10 ">
          <div onClick={() => scrollToSection("beranda")} className="cursor-pointer">
            <img src={Home} alt="" className="w-8  hover:scale-110" />
            <p className="-ml-3 sm:visible hidden">Beranda</p>
          </div>
          <div onClick={() => scrollToSection("acara")} className="cursor-pointer">
            <img src={Kalender} alt="" className="w-8  hover:scale-110 cursor-pointer" />
            <p className="-ml-1 sm:visible hidden">Acara</p>
          </div>
          <div onClick={() => scrollToSection("countdown")} className="cursor-pointer">
            <img src={Timer} alt="" className="w-8  hover:scale-110 cursor-pointer" />
            <p className="-ml-5 sm:visible hidden">Countdown</p>
          </div>
          <div onClick={() => scrollToSection("gift")} className="cursor-pointer">
            <img src={Gift} alt="" className="w-8  hover:scale-110 cursor-pointer" />
            <p className="-ml-2 sm:visible hidden">Hadiah</p>
          </div>
          <div onClick={() => scrollToSection("ucapan")} className="cursor-pointer">
            <img src={Message} alt="" className="w-8  hover:scale-110 cursor-pointer" />
            <p className="-ml-2 sm:visible hidden">Ucapan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

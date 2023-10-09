import React from "react";
import Home from "../assets/home.png";
import Kalender from "../assets/kalender.png";
import Timer from "../assets/timer.png";
import Gift from "../assets/gift.png";
import Message from "../assets/message.png";

function Navbar() {
  return (
    <>
      <div className="relative">
        <div className="w-[50%] bg-orange-400 flex justify-evenly p-4 mx-auto rounded-md sm:fixed sm:bottom-10 sm:left-80 z-10 ">
          <div>
            <div className="">
              <img src={Home} alt="" className="sm:w-8 w- hover:scale-110 cursor-pointer" />
            </div>
            <p className="-ml-3">Beranda</p>
          </div>
          <div>
            <img src={Kalender} alt="" className="w-8 hover:scale-110 cursor-pointer" />
            <p className="-ml-1">Acara</p>
          </div>
          <div>
            <img src={Timer} alt="" className="w-8 hover:scale-110 cursor-pointer" />
            <p className="-ml-5">Countdown</p>
          </div>
          <div>
            <img src={Gift} alt="" className="w-8 hover:scale-110 cursor-pointer" />
            <p className="-ml-2">Hadiah</p>
          </div>
          <div>
            <img src={Message} alt="" className="w-8 hover:scale-110 cursor-pointer" />
            <p className="-ml-2">Ucapan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

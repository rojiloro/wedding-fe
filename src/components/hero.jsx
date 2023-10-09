import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="-z-10 absolute">
        <img src={bg} />
      </div>
      <div className="text-center flex justify-center items-center min-h-screen relative">
        <div className="font-custom2">
          {/* <div className="text-md font-thin mb-10 ">
            <p>Kami Bermaksud Mengundang Anda</p>
            <p>untuk hadir di acara pernikahan</p>
          </div> */}
          <div className="sm:text-7xl text-5xl font-custom4 font-bold text-slate-800 mb-10">
            <h1 data-aos="fade-right">Rifkiyantoro, S.Kom</h1>
            <p className="text-8xl">&</p>
            <h1 data-aos="fade-left">Zumrotun Alfiyah, S.Pd</h1>
          </div>
          <div data-aos="zoom-in" className="mb-16 font-bold sm:text-sm text-xs uppercase  sm:tracking-[1em] tracking-[0.5em] text-slate-800 decoration-black">
            <p>Kamis, 19 Oktober 2023</p>
          </div>
          {/* <div className="mb-10">
            <p>Untuk</p>
            <p className="italic">nama orang</p>
            <p>lokasi</p>
          </div> */}
          <div data-aos="fade-up" className="border border-slate-800 cursor-pointer sm:w-[50%] w-[75%] shadow-lg rounded-full p-2 mx-auto font-semibold font-custom2 ">
            <Link to="/landing">
              <button className="uppercase sm:text-base text-sm tracking-[0.1em]">Buka Undangan</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

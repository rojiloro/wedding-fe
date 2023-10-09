import React, { useEffect } from "react";
import Detail from "./detail";
import Countdown from "./countdown";
import bg from "../assets/bg6.jpg";
import Form from "./form";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";

function Landing() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="absolute -z-40 ">
        <img src={bg} alt="" className="" />
      </div>
      <div className="text-center py-[10%] sm:min-h-screen min-h-0 relative">
        <div className="sm:text-7xl text-5xl font-custom4 font-bold text-slate-800 mb-10">
          <h1 data-aos="fade-left">Rifkiyantoro, S.Kom</h1>
          <p className="text-8xl">&</p>
          <h1 data-aos="fade-right">Zumrotun Alfiyah, S.Pd </h1>
        </div>
        <div data-aos="zoom-in" className="mb-16 font-bold sm:text-sm text-xs uppercase  sm:tracking-[0.8em] tracking-[0.5em] text-slate-800 decoration-black">
          <p>Kamis, 19 Oktober 2023</p>
        </div>
      </div>
      <Navbar />
      <Detail />
      <Countdown />
      <Form />
    </>
  );
}

export default Landing;

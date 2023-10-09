import React, { useState, useEffect } from "react";
import Mandiri from "../assets/mandiri.png";
import DANA from "../assets/dana.png";
import QR from "../assets/qr dana ceritanya.png";

function Countdown() {
  const tanggalPernikahan = new Date("2023-10-19T00:00:00");
  const [hitungMundur, setHitungMundur] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  const hitungSisaWaktu = () => {
    const sekarang = new Date();
    const selisih = tanggalPernikahan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    setHitungMundur({ hari, jam, menit, detik });
  };

  useEffect(() => {
    const interval = setInterval(hitungSisaWaktu, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="text-center sm:text-2xl text-xl py-10 min-h-screen font-monserat">
        <div className="font-bold">
          <h2>Countdown</h2>
        </div>
        <div className="flex justify-evenly mt-10">
          <div data-aos="zoom-in" className="bg-slate-800 text-white rounded-lg h-20 p-3 text-center">
            <p>{hitungMundur.hari}</p>
            <p>Hari</p>
          </div>
          <div data-aos="zoom-in" className="rounded-lg h-20 p-3 text-center bg-slate-800 text-white">
            <p>{hitungMundur.jam}</p>
            <p>Jam</p>
          </div>
          <div data-aos="zoom-in" className="rounded-lg h-20 p-3 text-center bg-slate-800 text-white">
            <p>{hitungMundur.menit}</p>
            <p>Menit</p>
          </div>
          <div data-aos="zoom-in" className="rounded-lg h-20 p-3 text-center bg-slate-800 text-white">
            <p>{hitungMundur.detik}</p>
            <p>Detik</p>
          </div>
        </div>
        <div className="bg-orange-100 -mb-10 font-monserat">
          <div className="mt-60">
            <h1 className="font-bold">Gift</h1>
          </div>
          <div className="sm:flex block sm:m-0 mx-auto justify-evenly sm:p-28 p-4 ">
            <div data-aos="fade-right" className="p-5 sm:w-[35%] w-[90%] sm:my-0 my-5 mx-auto bg-white rounded-md shadow-lg hover:shadow-xl hover:scale-110 transition flex items-center">
              <div className="font-semibold text-start w-1/2 sm:text-base text-lg">
                <p className="font-semibold">Mandiri</p>
                <p className="font-light">Rifkiyantoro</p>
                <p>1850004966948</p>
              </div>
              <div className="w-1/2 flex justify-end">
                <img src={Mandiri} alt="bri" className="w-[30%]" />
              </div>
            </div>
            <div data-aos="fade-left" className="p-5 sm:w-[35%] w-[90%] mx-auto bg-white rounded-md shadow-lg hover:shadow-xl hover:scale-110 transition flex items-center">
              <div className="font-semibold text-start w-1/2 text-base">
                <p className="font-semibold">Dana</p>
                <p className="font-light">Rifkiyantoro</p>
                <p>081237339956</p>
              </div>
              <div className="w-1/2 flex justify-end">
                <img src={DANA} alt="bri" className="w-[30%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Countdown;

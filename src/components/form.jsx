import React, { useState, useEffect } from "react";
import profil from "../assets/profil.png";

import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import Pagination from "./pagination";
import moment from "moment";

function Form() {
  const [nama, setNama] = useState("");
  const [kedatangan, setKedatangan] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [show, setShow] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const data = {
    nama: nama,
    kehadiran: kedatangan,
    ucapan: ucapan,
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      if (!data) {
        return false;
      }
      e.preventDefault();
      const response = await API.post("/user", data);
      console.log("ter submit", response);

      setNama("");
      setKedatangan("");
      setUcapan("");
    } catch (error) {
      console.log("error ya..", error);
    }
  });

  let { data: users, refetch } = useQuery("usersCache", async () => {
    const response = await API.get("/users");
    const item = response.data.data.allData;
    setShow(item);
    return response.data.data;
  });

  useEffect(() => {
    refetch();
  }, [users]);

  // pagination
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = show?.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="text-center min-h-screen bg-orange-50 py-10">
        <h1 className="text-2xl font-bold">Guest Book</h1>
        <div className="sm:w-1/2 w-[90%] bg-white py-3 px-10 mx-auto rounded-md mt-5">
          <form onSubmit={(e) => handleSubmit.mutate(e)}>
            <div className="flex justify-start mb-2">
              <label htmlFor="name">Nama</label>
            </div>
            <div className="flex justify-start mb-2">
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
                id="name"
                required
                className="border border-orange-400 w-[100%] rounded-lg p-2 focus:outline-none focus:ring focus:border-none text-lg font-light"
              />
            </div>
            <div className="flex justify-start mb-2">
              <label htmlFor="kedatangan">Kedatangan</label>
            </div>
            <div className="flex justify-start mb-2">
              <select id="kedatangan" value={kedatangan} required onChange={(e) => setKedatangan(e.target.value)} className="w-[100%] p-1 border border-orange-400 rounded-lg focus:ring focus:border-none focus:outline-none">
                <option hidden>Pilih</option>
                <option value="hadir">Hadir</option>
                <option value="tidakHadir">Tidak Hadir</option>
              </select>
            </div>
            <div className="flex justify-start mb-2">
              <label htmlFor="ucapan">Ucapan dan Doa</label>
            </div>
            <div className="flex justify-start mb-10">
              <textarea
                required
                value={ucapan}
                onChange={(e) => setUcapan(e.target.value)}
                placeholder="ucapan dan doa"
                id="ucapan"
                className="resize-none w-[100%] border border-orange-400 rounded-lg p-2 focus:ring focus:border-none focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-start mb-2">
              <button type="submit" className="py-2 px-5 bg-orange-400 hover:bg-orange-800 font-semibold text-white w-[100%] rounded-full  ">
                Kirim
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10">
          {currentPosts?.map((item, index) => (
            <>
              <div key={index} className="lg:w-1/2 w-[90%] flex bg-white rounded-lg mx-auto">
                <div className="px-3 py-5 sm:w-[10%] w-[20%]">
                  <img src={profil} alt="profil" />
                </div>
                <div className="w-[90%] bg-orange-300 my-auto rounded-md mt-5 mb-5 mr-8">
                  <div className="text-start py-2 px-4 flex">
                    <p className="font-semibold">{item.nama}</p>
                    {item.kehadiran === "hadir" ? <p className="ml-5 bg-green-200 py-1 px-2">hadir</p> : <p className="ml-5 bg-red-200 py-1 px-2">Tidak hadir</p>}
                  </div>
                  <div className="text-start py-2 px-4 flex">
                    <p>{item.ucapan}</p>
                  </div>
                  <div className="sm:-ml-[75%]  mb-1">
                    <p>
                      {item.createdAt.slice(0, 10)} {item.createdAt.slice(12, 16)}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <Pagination totalPosts={currentPosts?.length} postPerPage={postPerPage} />
      </div>
    </>
  );
}

export default Form;

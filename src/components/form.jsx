import React, { useState, useEffect } from "react";
import profil from "../assets/profil.png";
import moment from "moment";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";

function Form() {
  const [nama, setNama] = useState("");
  const [kedatangan, setKedatangan] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [json, setJson] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

      setNama("");
      setKedatangan("");
      setUcapan("");
    } catch (error) {
      console.log("error ya..", error);
    }
  });

  let { data: users, refetch } = useQuery(
    "usersCache",
    async () => {
      const response = await API.get(`/users?page=${currentPage}&size=5`);
      const item = response.data.data;

      setJson(item);
      return item;
    },
    [currentPage]
  );

  useEffect(() => {
    refetch();
  }, [currentPage]);

  const currentData = json?.allData;
  const tanggal = moment(currentData?.createdAt).format("D MMMM YYYY");
  const jam = moment(currentData?.createdAt).format("HH:mm");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div id="ucapan">
        <div className="text-center min-h-screen bg-orange-50 py-10 font-monserat">
          <h1 className="text-2xl font-bold font-custom2">Guest Book</h1>
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
                  <option hidden className="text-slate-600">
                    Pilih
                  </option>
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
            {currentData?.length < 1 ? (
              <h2 className="text-2xl font-bold">Belum ada ucapan</h2>
            ) : (
              currentData?.map((item, index) => (
                <>
                  <div key={index} className="lg:w-1/2 w-[90%] flex bg-white rounded-lg mx-auto">
                    <div className="px-3 py-5 sm:w-[10%] w-[20%]">
                      <img src={profil} alt="profil" />
                    </div>
                    <div className="w-[90%] bg-orange-300 my-auto rounded-md mt-5 mb-5 mr-8">
                      <div className="text-start py-2 px-4 flex">
                        <p className="font-semibold text-base">{item.nama}</p>
                        {item.kehadiran === "hadir" ? <p className="ml-5 bg-green-200 text-sm font-semibold rounded-md py-1 px-2">hadir</p> : <p className="ml-5 bg-red-200 text-sm rounded-md font-semibold py-1 px-2">Tidak hadir</p>}
                      </div>
                      <div className="text-start py-2 px-4 flex">
                        <p>{item.ucapan}</p>
                      </div>
                      <div className="sm:-ml-[70%]  mb-1">
                        <p>
                          {tanggal} {jam}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
          <div className="flex justify-center">
            <div>
              <div className="pagination">
                {Array.from({ length: Math.ceil(json?.totalItem / itemsPerPage) }).map((_, index) => (
                  <button className="text-lg bg-orange-600 p-3 rounded-lg text-white font-semibold mx-6" key={index} onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;

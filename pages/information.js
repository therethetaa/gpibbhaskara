import "animate.css";
import Head from "next/head";
import { useMemo, useState } from "react";
import CardContent from "../src/components/card/information/information";
import contentID from "../src/content/indonesia/information.json";
import contentEN from "../src/content/english/information.json";
import Link from "next/link";

export default function Contact({ language }) {
  const [content, setContent] = useState();

  useMemo(() => {
    setContent(language === "ID" ? contentID : contentEN);
  }, [language]);

  return (
    <>
      <Head>
        <title>Information</title>
        <link rel="icon" href="/logo-gpib-new.png" />
      </Head>
      <main className="min-h-screen">
        <div className="  md:w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto dark:bg-gray-200 bg-slate-300 ">
          <picture className="special-image ml-20  md:px-4 md:py-0 lg:p-0 w-full max-w-[200px] md:max-w-[200px] lg:max-w-[452px] active-hover h-auto transition-all duration-500">
            <img
              src="./gpib-indonesia.png "
              loading=" eager"
              height={600}
              width={600}
              className=" mt-10 rounded-md shadow-lg shadow-black"
              draggable="false"
              style={{ opacity: 1 }}
            />
          </picture>
          <div className=" md:w-8/12 ml-36 -mt-20  flex overflow-hidden  md:h-min dark:bg-gray-500 bg-slate-600 ">
            <div className="h-full p-60 ml-16 md:px-1 md:pb-72 relative ">
              <div className=" justify-start items-start  h-full relative">
                <p className=" text-5xl mr-10 mt-40 uppercase font-serif text-white">
                  Informasi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------- Second Screen --------------------------- */}
        <marquee className="mt-3" behavior="scroll" direction="left">
          <p className=" text-red-500 font-bold">
            {`!!UPDATE!!`}{" "}
            <a className=" font-normal dark:text-white text-black">{`Warta Jemaat Hari Minggu, 12 November 2023 dapat didownload di bawah`}</a>
          </p>
        </marquee>
        <div className="flex flex-row justify-center items-center">
          <div className="sm:mx-14 pt-20 flex flex-col ">
            {/* IHM 5 Nov */}
            <p
              className=" text-4xl dark:text-white text-gray-700 font-semibold text-center"
              data-aos="fade-down"
              data-aos-delay="0"
            >{`Pelayan Ibadah Hari Minggu, 5 November 2023`}</p>
            <div data-aos="fade-right" data-aos-delay="0">
              <p className="mt-5 font-bold">
                {`Pelayan Firman`}
                <a className=" font-normal">
                  <a> {`:`}</a> {`Pdt. Kailany M. Luhulima, M. Si`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 1`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Pnt. Roberto Simanjuntak`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 2`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Pnt. Ny. Vonny Kusharjanto - Kansil`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 3`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Dkn. Syarif Permana`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 4`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Dkn. Reynholf Frans Sohilait`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 5`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Dkn. Andi Wicaksono`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 6`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Pnt. Rehanto O. Lumingas`}
                </a>
              </p>
            </div>

            <div
              className="flex flex-col relative -rotate-90 ml-72 -mt-20 w-40 border-1 border dark:border-white border-gray-600 justify-between rounded-full items-center"
              // data-aos="fade-down"
              // data-aos-delay="0"
            />
            <div className="-mt-20 ml-96 mb-20">
              <div data-aos="fade-left" data-aos-delay="0">
                <p className="font-bold">
                  {`Pemusik I`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Sdr. Fernando Wungkana`}
                  </a>
                </p>
                <p className="font-bold">
                  {`Pemusik II`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Bpk. Rudy Bravy Porung`}
                  </a>
                </p>
                <p className="font-bold">
                  {`Pemandu Lagu`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Ibu Julia Wicaksono`}
                  </a>
                </p>
                <p className="font-bold">
                  {`Penatalayan MM`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Sdr. Juan Lumingas`}
                  </a>
                </p>
                <p className="font-bold">
                  {`PS/VG`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Pelkat PKB`}
                  </a>
                </p>
              </div>
            </div>
            <div
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            {/* IHM 12 Nov */}
            <p
              className=" mt-10 text-4xl text-center dark:text-white text-gray-700 font-semibold "
              data-aos="fade-down"
              data-aos-delay="0"
            >{`Pelayan Ibadah Hari Minggu, 12 November 2023`}</p>
            <div data-aos="fade-right" data-aos-delay="0">
              <p className="mt-5 font-bold">
                {`Pelayan Firman`}
                <a className=" font-normal">
                  <a> {`:`}</a> {`Pdt. (Em.) Melkisedek Eka Puimera, M. Si`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 1`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Pnt. Frangky Wungkana`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 2`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Pnt. Hari Basuki Notobroto`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 3`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Pnt. Ny. Sukiyani Ransun`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 4`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Dkn. Denny Melhin Porung`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 5`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Dkn. Ny. Fenny Staal – Dendeng`}
                </a>
              </p>
              <p className="font-bold">
                {`Pelayan 6`}
                <a className="font-normal">
                  <a> {`:`}</a> {`Dkn. Rudy Bravy Porung`}
                </a>
              </p>
            </div>

            <div className="flex flex-col relative -rotate-90 ml-72 -mt-16 w-36 border-1 border dark:border-white border-gray-600 justify-between rounded-full items-center"></div>
            <div className="-mt-16 ml-96 mb-20">
              <div data-aos="fade-left" data-aos-delay="0">
                <p className="font-bold">
                  {`Pemusik I`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Sdri. Joana Sohilait`}
                  </a>
                </p>
                <p className="font-bold">
                  {`Pemusik II`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Sdri. Jersy`}
                  </a>
                </p>
                <p className="font-bold">
                  {`Pemandu Lagu`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Ibu Nancy Porung`}
                  </a>
                </p>
                <p className="font-bold">
                  {`Penatalayan MM`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Ibu Dida Devina`}
                  </a>
                </p>
                <p className="font-bold">
                  {`PS/VG`}
                  <a className="font-normal">
                    <a> {`:`}</a> {`Sektor I`}
                  </a>
                </p>
              </div>
            </div>
            <div
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            <div className="mb-20 mt-10 text-4xl text-center dark:text-white text-gray-700 font-semibold">
              <p
                data-aos="fade-down"
                data-aos-delay="0"
              >{`Kegiatan Sepekan 6 - 12 November 2023`}</p>
              <a
                href="./jadwal-sepekan.jpg"
                // data-aos="zoom-in"
                // data-aos-delay="150"
              >
                <img
                  className="mt-5 ml-72 shadow-lg dark:shadow-black shadow-gray-500"
                  src="./jadwal-sepekan.jpg"
                  height={250}
                  width={250}
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
              </a>
            </div>
            <div
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            <div className="mb-20 mt-10 ml-5 text-4xl text-center dark:text-white text-gray-700 font-semibold">
              <p data-aos="fade-down" data-aos-delay="0">{`Warta Jemaat`}</p>
              <p
                className=" mt-2 font-normal text-sm dark:text-white text-black"
                data-aos="fade-left"
                data-aos-delay="0"
              >
                <a
                  className=" hover:underline hover:text-blue-600"
                  href="./Warta-Jemaat-5-Nov-2023.pdf"
                  download
                >{`Unduh`}</a>
                {` Warta Jemaat Hari Minggu, 5 November 2023`}
              </p>

              <img
                className="ml-64 mt-3 rounded-md shadow-lg dark:shadow-black shadow-gray-500"
                data-aos="zoom-in"
                data-aos-delay="10"
                src="./warta-jemaat-5-nov-2023.jpg"
                height={250}
                width={250}
              />
            </div>
          </div>
          {/* <div className="mt-1 mb-2" /> */}
        </div>
      </main>
    </>
  );
}

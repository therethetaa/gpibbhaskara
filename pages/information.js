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
        <div className="w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto dark:bg-gray-200 bg-slate-300 ">
          <picture className="special-image ml-2 lg:ml-20  md:px-4 md:py-0 lg:p-0 w-full max-w-[180px] md:max-w-[200px] lg:max-w-[452px] active-hover h-auto transition-all duration-500">
            <img
              src="./gpib-indonesia.png "
              loading=" eager"
              height={600}
              width={600}
              className=" mt-10 ml-2 lg:ml-0 rounded-md shadow-lg shadow-black"
              draggable="false"
              style={{ opacity: 1 }}
            />
          </picture>
          <div className="lg:w-8/12 w-12/12 ml-9 lg:ml-36 -mt-14 lg:-mt-16  flex overflow-hidden  md:h-min dark:bg-gray-500 bg-slate-600 ">
            <div className="h-full -ml-60 p-60 lg:l-16 md:px-1 md:pb-72 relative ">
              <div className=" justify-start items-start  h-full relative">
                <p className="lg:text-5xl text-3xl ml-2 lg:ml-72 mt-28 mr-10 lg:mt-40 uppercase font-serif font-semibold text-white">
                  Informasi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------- Second Screen --------------------------- */}
        <marquee className="mt-3" behavior="scroll" direction="left">
          <p className=" text-red-500 text-xl font-bold">
            {`!!UPDATE!!`}{" "}
            <a className=" font-normal dark:text-white text-black">{`Warta Jemaat Hari Minggu, 12 November 2023 dapat didownload di bawah`}</a>
          </p>
        </marquee>
        {/* IHM 5 Nov  */}
        <div
          className=" text-2xl lg:text-4xl ml-8 mr-10 mt-10  lg:mr-0 lg:ml-0 dark:text-white text-gray-700 font-semibold text-center"
          data-aos="fade-down"
          data-aos-delay="0"
        >{`Pelayan Ibadah Hari Minggu, 5 November 2023`}</div>
        <table
          className="printable ml-4 mr-3 mt-6 lg:ml-[30rem] lg:mr-0 lg:mt-5 table table-fixed rounded-md whitespace-break-spaces ring-1 ring-slate-500"
          data-aos="zoom-in"
          data-aos-delay="0"
        >
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan Firman</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Pdt. Kailany M. Luhulima, M. Si
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 1</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Pnt. Roberto Simanjuntak
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 2</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Pnt. Ny. Vonny Kusharjanto - Kansil
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 3</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Dkn. Syarif Permana
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 4</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Dkn. Reynholf Frans Sohilait
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 5</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Dkn. Andi Wicaksono
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 6</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Pnt. Rehanto O. Lumingas
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pemusik I</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Sdr. Fernando Wungkana
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pemusik II</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Bpk. Rudy Bravy Porung
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pemandu Lagu</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Ibu Julia Wicaksono
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Penatalayan MM</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Sdri. Theta
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">PS/VG</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Pelkat PKB
            </td>
          </tr>
        </table>
        <div
          className="border-t mt-10 dark:border-white border-gray-400 mx-36"
          data-aos="zoom-in"
        />
        {/* IHM 12 Nov */}
        <div
          className=" text-2xl lg:text-4xl ml-8 mr-10 mt-10  lg:mr-0 lg:ml-0  dark:text-white text-gray-700 font-semibold text-center"
          data-aos="fade-down"
          data-aos-delay="0"
        >{`Pelayan Ibadah Hari Minggu, 12 November 2023`}</div>
        <table
          className="printable ml-4 mr-3 mt-6 lg:ml-[30rem] lg:mr-0 lg:mt-5 table table-fixed rounded-md whitespace-break-spaces ring-1 ring-slate-500"
          data-aos="zoom-in"
          data-aos-delay="0"
        >
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan Firman</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Pdt. (Em.) Melkisedek Eka Puimera, M. Si
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 1</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Pnt. Frangky Wungkana
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 2</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Pnt. Hari Basuki Notobroto
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 3</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Pnt. Ny. Sukiyani Ransun
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 4</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Dkn. Denny Melhin Porung
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 5</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Dkn. Ny. Fenny Staal – Dendeng
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pelayan 6</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Dkn. Rudy Bravy Porung
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pemusik I</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Sdri. Joana Sohilait
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pemusik II</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Sdri. Jersy
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Pemandu Lagu</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Ibu Nancy Porung
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">Penatalayan MM</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Ibu Dida Devina
            </td>
          </tr>
          <tr>
            <td className="border-y border-x-2 ring-black">PS/VG</td>
            <td colSpan={3} className="border-y border-l border-primary">
              Sektor I
            </td>
          </tr>
        </table>
        <div className="flex flex-row justify-center items-center">
          <div className="sm:mx-14 pt-20 flex flex-col ">
            <div
              className="border-t -mt-6 dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            <div className="mb-20 mt-10 text-3xl lg:text-4xl text-center dark:text-white text-gray-700 font-semibold">
              <p data-aos="fade-down" data-aos-delay="0">
                {`Kegiatan Sepekan `} <p>{`6 - 12 November 2023`}</p>
              </p>
              <a href="./jadwal-sepekan.jpg">
                <img
                  className="mt-5 ml-10 lg:ml-16  shadow-lg dark:shadow-black shadow-gray-500"
                  src="./jadwal-sepekan.jpg"
                  height={250}
                  width={250}
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
              </a>
            </div>
            <div
              className="border-t mt-10 dark:border-white border-gray-400 mx-16"
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
                  className="lg:ml-0 -ml-4 hover:underline hover:text-blue-600"
                  href="./Warta-Jemaat-5-Nov-2023.pdf"
                  download
                >{`Unduh`}</a>
                {` Warta Jemaat Hari Minggu, 5 November 2023`}
              </p>

              <img
                className="lg:ml-12 ml-5 mt-3 rounded-md shadow-lg dark:shadow-black shadow-gray-500"
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

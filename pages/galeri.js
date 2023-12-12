import "animate.css";
import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import contentEN from "../src/content/english/index.json";
import contentID from "../src/content/indonesia/index.json";
import { ModalGambar } from "../src/components/ModalGambar";

export default function Home({ language }) {
  const [content, setContent] = useState();
  const [showModal, setShowModal] = useState(false);

  useMemo(() => {
    setContent(language === "ID" ? contentID : contentEN);
  }, [language]);

  useEffect(() => {
    const sto = setTimeout(() => {
      setShowModal(true);
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <title>Galeri</title>
        <link rel="icon" href="/logo-gpib-new.png" />
      </Head>

      <main className=" min-h-screen">
        <div className="  md:w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto dark:bg-gray-200 bg-slate-300 ">
          <picture className="special-image ml-60 mr-3  md:px-4   md:py-0 lg:p-0 w-full max-w-[200px] md:max-w-[200px] lg:max-w-[280px] active-hover h-auto transition-all duration-500">
            <img
              src="./gpib-bhaskara.jpg "
              loading=" eager"
              height={200}
              width={250}
              className=" mt-14 rounded-lg shadow-lg shadow-black"
              draggable="false"
              style={{ opacity: 1 }}
            />
          </picture>
          <div className=" md:w-8/12 ml-36 -mt-20 -mr-10  flex overflow-hidden  md:h-min dark:bg-gray-500 bg-slate-600 ">
            <div className="h-full p-60 ml-16 md:px-1 md:pb-72 relative ">
              <div className=" justify-start items-start  h-full relative">
                <p className=" text-5xl text-white -mr-10 mt-40 uppercase font-serif">
                  Galeri
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- Second Screen -------------------------- */}
        <div className="min-h-screen flex flex-col items-center justify-center my-14">
          {/* <div className="text-4xl text-gray-700" data-aos="fade-down">
            {content?.motto.title}
          </div>
          <div
            className="text-xm text-gray-500 mx-10 animate__animated"
            data-aos="fade-up"
          >
            {content?.motto.body}
          </div> */}

          {/* <div className=" justify-center items-center">
            <p className=" ml-20 text-3xl dark:text-white text-gray-700">{`Selamat datang di website resmi GPIB Bhaskara Surabaya`}</p>
          </div> */}

          {/* <div className="max-w-full mt-40 mx-0">
            <a href="./jadwal-sepekan.jpg">
              <CardContent
                title={content?.section_1.title}
                content={content?.section_1.body}
                buttonText={content?.section_1.button_label}
                imgPath={"./jadwal-sepekan.jpg"}
                align="left"
                buttonLink="/information"
              />
            </a>

            <div
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            <a href="./jadwal-sepekan.jpg">
              <CardContent
                title={content?.section_2.title}
                content={content?.section_2.body}
                buttonText={content?.section_2.button_label}
                imgPath={"./jadwal-sepekan.jpg"}
                align="right"
                buttonLink="/information"
              />
            </a>

            <div
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
          </div>
          <div
            className="mt-10 text-center text-lg text-gray-500 animate__animated px-10 sm:px-30 md:px-40 lg:px-196"
            data-aos="fade-up"
          >
            <div>{content?.closure}</div>
            <br></br>
            <b>{content?.closure2}</b>
            <p>
              <b>{content?.closure3}</b>{" "}
            </p>
            <br></br>
            <b>{content?.closure4}</b>
          </div> */}
        </div>
      </main>
    </>
  );
}

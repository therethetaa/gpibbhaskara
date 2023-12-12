import "animate.css";
import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import CardContent from "../src/components/card/index";
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
        <title>GPIB Bhaskara Sby</title>
        <link rel="icon" href="/logo-gpib-new.png" />
      </Head>

      <main className=" min-h-screen">
        <section className="  ">
          <div className="  md:w-12/12 flex justify-center items-center overflow-hidden max-sm:w-21/12 h-[75vh] md:h-auto dark:bg-gray-200 bg-slate-300">
            <picture className="special-image max-sm:ml-10 ml-60 mr-3  md:px-4  md:py-0 lg:p-0 w-full max-w-[150px] md:max-w-[200px] lg:max-w-[280px] active-hover h-auto transition-all duration-500">
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
            <div className=" md:w-8/12 max-sm:w-60 max-sm:ml-1 ml-36 -mt-20 -mr-10  flex overflow-hidden  md:h-min dark:bg-gray-500 bg-slate-600 ">
              <div className="h-full p-60 max-sm:-ml-44 ml-16 md:px-1 md:pb-72 relative ">
                <div className=" justify-start items-start  h-full relative">
                  <p className=" text-5xl max-sm:text-3xl max-sm:mt-16 -ml-14 -mr-10 mt-40 uppercase font-serif font-semibold text-white">
                    GPIB Bhaskara Surabaya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------- Second Screen -------------------------- */}
        <section className="  ">
          <div className="min-h-screen flex flex-col items-center justify-center my-20">
            <div
              className="text-4xl max-sm:text-3xl max-sm:text-center dark:text-gray-500 text-gray-700"
              data-aos="fade-down"
            >
              {content?.motto.title}
            </div>
            <div
              className="text-lg mt-3 dark:text-gray-300 text-gray-500 mx-10 animate__animated"
              data-aos="fade-up"
            >
              {content?.motto.body}
            </div>

            {/* <div className=" justify-center items-center">
            <p className=" ml-20 text-3xl dark:text-white text-gray-700">{`Selamat datang di website resmi GPIB Bhaskara Surabaya`}</p>
          </div> */}

            <div className="max-w-full mt-10 mx-0">
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
              <div
                className="mt-10 max-sm:mt-3"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <strong className=" ml-32 text-xl text-center font-serif">
                  <p>Channel Youtube</p> <p>GPIB Bhaskara Surabaya</p>
                </strong>
                <iframe
                  className="ml-40 max-sm:ml-12 mt-5 mb-12"
                  // data-aos="fade-up"
                  // data-aos-delay="0"
                  width="300"
                  height="200"
                  src="https://youtube.com/@gpibbhaskara687?si=0esCBZj1RG4kXyev"
                  frameborder="0"
                  allowfullscreen
                />
                <div
                  className="border-t dark:border-white border-gray-400 mx-16"
                  data-aos="zoom-in"
                />
              </div>
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

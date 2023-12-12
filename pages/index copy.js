import "animate.css";
import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import CardContent from "../src/components/card/product";
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

      <main>
        <div
          className=" min-h-screen bg-cover bg-no-repeat bg-center w-full"
          style={{ backgroundImage: `url("./gpib-bhaskara.jpg")` }}
        >
          <div className="w-full absolute bottom-10 right-0 text-right h-max bg-zinc-900 bg-opacity-70 backdrop-blur-md pt-8 pb-10 pl-8 pr-8 md:max-w-2xl md:rounded-l-full md:text-right md:pl-24 animate__animated animate__fadeIn">
            <div className="text-3xl font-semibold text-white animate__animated animate__fadeInDown">
              {content?.floating_card.title}
            </div>
            {/* <div className="mt-2 text-lg text-yellow-100 font-light animate__animated animate__fadeInUp">
              {content?.floating_card.body}
            </div> */}
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

          <div className=" justify-center items-center">
            <p className=" ml-20 text-3xl dark:text-white text-gray-700">{`Selamat datang di website resmi GPIB Bhaskara Surabaya`}</p>
          </div>

          <div className="max-w-full mx-0">
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
          </div>
        </div>
      </main>
    </>
  );
}

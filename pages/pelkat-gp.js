import "animate.css";
import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import CardContent from "../src/components/card/gp/pelkat-gp";
import contentEN from "../src/content/english/pelkat-gp.json";
import contentID from "../src/content/indonesia/pelkat-gp.json";
import { ModalGambar } from "../src/components/ModalGambar";

export default function PelkatGp({ language }) {
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
        <title>Pelkat GP</title>
        <link rel="icon" href="/pelkat-gp.png" />
      </Head>
      <main className="min-h-screen">
        <div className="  md:w-12/12 max-sm:w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto bg-slate-300 ">
          <picture className="special-image max-sm:ml-3 ml-20  md:px-4 md:py-0 lg:p-0 w-full max-w-[200px] md:max-w-[200px] lg:max-w-[452px] active-hover h-auto transition-all duration-500">
            <img
              src="./img3.jpg "
              loading=" eager"
              height={600}
              width={600}
              className=" mt-10 max-sm:ml-3 rounded-md shadow-lg shadow-black"
              draggable="false"
              style={{ opacity: 1 }}
            />
          </picture>
          <div className=" md:w-8/12 max-sm:ml-10 ml-36 -mt-16  flex overflow-hidden  md:h-min bg-slate-600 ">
            <div className="h-full p-60 ml-16 md:px-1 md:pb-72 relative ">
              <div className=" justify-start items-start  h-full relative">
                <p className=" text-6xl max-sm:text-3xl max-sm:-ml-72 max-sm:mt-28 mr-10 mt-40 uppercase font-serif font-semibold text-white ">
                  Pelkat GP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- Second Screen -------------------------- */}
        <div className="min-h-screen flex flex-col items-center justify-center my-14">
          {/* <div className="text-4xl text-gray-700" data-aos="fade-down">
            {content?.motto.title}
          </div> */}
          <div
            className="text-lg text-left dark:text-gray-300 text-gray-800 mx-10 animate__animated"
            data-aos="fade-up"
          >
            {content?.motto.body1}
          </div>
          <br></br>
          <div
            className="text-lg text-left dark:text-gray-300 text-gray-800 mx-10 animate__animated"
            data-aos="fade-up"
          >
            {content?.motto.body2}
          </div>
          <br></br>
          <div
            className="text-lg text-left dark:text-gray-300 text-gray-800 mx-10 animate__animated"
            data-aos="fade-up"
          >
            {content?.motto.body6}
          </div>
          <div className="max-w-full mx-0">
            <CardContent
              title={content?.section_1.title}
              content1={content?.section_1.body1}
              content2={content?.section_1.body2}
              content3={content?.section_1.body3}
              content4={content?.section_1.body4}
              content5={content?.section_1.body5}
              content6={content?.section_1.body6}
              content7={content?.section_1.body7}
              content8={content?.section_1.body8}
              content9={content?.section_1.body9}
              content10={content?.section_1.body10}
              content11={content?.section_1.body11}
              content12={content?.section_1.body12}
              content13={content?.section_1.body13}
              content14={content?.section_1.body14}
              content15={content?.section_1.body15}
              buttonText={content?.section_1.button_label}
              imgPath={"./pelkat-gp.png"}
              align="right"
            />
            <div
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            <CardContent
              title={content?.section_2.title}
              content16={content?.section_2.body1}
              content17={content?.section_2.body2}
              content18={content?.section_2.body3}
              content19={content?.section_2.body4}
              content20={content?.section_2.body5}
              content21={content?.section_2.body6}
              content22={content?.section_2.body7}
              content23={content?.section_2.body8}
              content24={content?.section_2.body9}
              content25={content?.section_2.body10}
              content26={content?.section_2.body11}
              buttonText={content?.section_2.button_label}
              imgPath={"./pengurus-gp.jpg"}
              align="left"
            />
            <div
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            <CardContent
              title={content?.section_3.title}
              content27={content?.section_3.body1}
              content28={content?.section_3.body2}
              content29={content?.section_3.body3}
              buttonText={content?.section_1.button_label}
              imgPath={"./img10.jpg"}
              align="right"
            />
          </div>
        </div>
      </main>
    </>
  );
}

import "animate.css";
import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import CardContent from "../src/components/card/pkp/pelkat-pkp";
import contentEN from "../src/content/english/pelkat-gp.json";
import contentID from "../src/content/indonesia/pelkat-pkp.json";
import { ModalGambar } from "../src/components/ModalGambar";

export default function PelkatPkp({ language }) {
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
        <title>Pelkat PKP</title>
        <link rel="icon" href="/pelkat-pkp.png" />
      </Head>
      <main className="min-h-screen">
        <div className="  md:w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto bg-slate-300 ">
          <picture className="special-image ml-20  md:px-4 md:py-0 lg:p-0 w-full max-w-[200px] md:max-w-[200px] lg:max-w-[452px] active-hover h-auto transition-all duration-500">
            <img
              src="./img13.jpg "
              loading=" eager"
              height={600}
              width={600}
              className=" mt-10 rounded-md shadow-lg shadow-black"
              draggable="false"
              style={{ opacity: 1 }}
            />
          </picture>
          <div className=" md:w-8/12 ml-36 -mt-20  flex overflow-hidden  md:h-min bg-slate-600 ">
            <div className="h-full p-60 ml-16 md:px-1 md:pb-72 relative ">
              <div className=" justify-start items-start  h-full relative">
                <p className=" text-6xl mr-10 mt-40 uppercase font-serif text-white ">
                  Pelkat PKP
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
            {/* <CardContent
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
              buttonText={content?.section_1.button_label}
              imgPath={"./pelkat-gp.png"}
              align="right"
            />
            <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            /> */}
            <CardContent
              title={content?.section_2.title}
              content7={content?.section_2.body1}
              content8={content?.section_2.body2}
              content9={content?.section_2.body3}
              content10={content?.section_2.body4}
              content11={content?.section_2.body5}
              content12={content?.section_2.body6}
              content13={content?.section_2.body7}
              content14={content?.section_2.body8}
              content15={content?.section_2.body9}
              content16={content?.section_2.body10}
              content17={content?.section_2.body11}
              buttonText={content?.section_2.button_label}
              imgPath={"./img13.jpg"}
              align="left"
            />
            <div
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            <CardContent
              title={content?.section_3.title}
              content18={content?.section_3.body1}
              content19={content?.section_3.body2}
              content20={content?.section_3.body3}
              buttonText={content?.section_1.button_label}
              imgPath={"./img13.jpg"}
              align="right"
            />
          </div>

          {/* <div
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

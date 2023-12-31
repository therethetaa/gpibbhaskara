import "animate.css";
import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import CardContent from "../src/components/card/pkp/pelkat-pkp";
import contentEN from "../src/content/english/pelkat-gp.json";
import contentID from "../src/content/indonesia/pelkat-pkb.json";
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
        <title>Pelkat PKB</title>
        <link rel="icon" href="/pelkat-pkp.png" />
      </Head>
      <main>
        <div
          className="min-h-screen bg-cover bg-no-repeat bg-center w-full bg-black"
          // style={{ backgroundImage: `url("./img13.jpg")` }}
        >
          <div className="w-full absolute bottom-10 right-0 text-right h-max bg-zinc-900 bg-opacity-70 backdrop-blur-md pt-5 pb-8 pl-8 pr-8 md:max-w-xs md:rounded-l-full md:text-right animate__animated animate__fadeIn">
            <div className="text-5xl font-semibold text-white animate__animated animate__fadeInDown">
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
              title={content?.section_2.title}
              content7={content?.section_2.body1}
              content8={content?.section_2.body2}
              content9={content?.section_2.body3}
              content10={content?.section_2.body4}
              content11={content?.section_2.body5}
              content12={content?.section_2.body6}
              content13={content?.section_2.body7}
              buttonText={content?.section_2.button_label}
              imgPath={"./img15.jpg"}
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
              imgPath={"./img15.jpg"}
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

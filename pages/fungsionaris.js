import "animate.css";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardContent from "../src/components/card/fungsionaris/fungsionaris";
import contentID from "../src/content/indonesia/fungsionaris.json";
import contentEN from "../src/content/english/fungsionaris.json";

export default function Fungsionaris({ language }) {
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(language === "ID" ? contentID : contentEN);
  }, [language]);

  return (
    <>
      {language === "ID" ? (
        <Head>
          <title>Fungsionaris</title>
          <link rel="icon" href="/logo-gpib-new.png" />
        </Head>
      ) : (
        <Head>
          <title>Functionary</title>
          <link rel="icon" href="/logo-gpib-new.png" />
        </Head>
      )}

      <main className=" min-h-screen">
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
                <p className=" text-5xl mr-10 mt-40 uppercase font-serif text-white ">
                  Fungsionaris
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="min-h-screen bg-white bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./gpib-indonesia.png')" }}
        >
          <div className="w-full absolute bottom-10 bg-zinc-900 bg-opacity-70 backdrop-blur-md text-left pb-10 pt-6 px-6 sm:px-12 md:rounded-r-full md:max-w-3xl md:pl-14 animate__animated animate__fadeIn">
            <div className="text-7xl sm:text-7xl text-white font-semibold animate__animated animate__fadeInDown">
              {content?.floating_card.title}
            </div>
          </div>
        </div> */}

        {/* --------------------------- Second Screen -------------------------- */}
        <div className="min-h-screen flex flex-col items-center justify-center my-14">
          {/* <div className="text-4xl text-gray-700" data-aos="fade-down">
            {content?.motto.title}
          </div>
          <div
            className="text-xm text-center text-gray-500 mx-10 animate__animated"
            data-aos="fade-up"
          >
            {content?.motto.body}
          </div> */}
          <div className="max-w-full mx-0">
            <CardContent
              title={content?.section_1?.title}
              content={content?.section_1?.body}
              buttonText={content?.section_1?.button_label}
              imgPath={"./img19.jpg"}
              align="left"
              buttonLink="/phmj"
            />
            <div
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            <CardContent
              title={content?.section_2?.title}
              content={content?.section_2?.body}
              buttonText={content?.section_2?.button_label}
              imgPath={"./teamwork.webp"}
              align="right"
              buttonLink="/unit-misioner"
            />
            {/* <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            />
            <br></br>
            <div className="text-lg text-center dark:text-gray-300 text-gray-800 mx-10 animate__animated">
              <strong>Channel Youtube Pelkat PA GPIB Bhaskra Surabaya </strong>
              <iframe
                width="560"
                height="315"
                src="https://youtube.com/@gpibbhaskara687?si=81R_cIIXyLVPfMPS"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div> */}
            {/* <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            /> */}
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

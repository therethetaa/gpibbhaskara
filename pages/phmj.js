import "animate.css";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardContent from "../src/components/card/phmj/phmj";
import contentID from "../src/content/indonesia/phmj.json";
import contentEN from "../src/content/english/fungsionaris.json";

export default function Pmhj({ language }) {
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(language === "ID" ? contentID : contentEN);
  }, [language]);

  return (
    <>
      <Head>
        <title>PHMJ</title>
        <link rel="icon" href="/logo-gpib-new.png" />
      </Head>
      <main className="min-h-screen">
        <div className="w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto dark:bg-gray-200 bg-slate-300 ">
          <picture className="special-image ml-14 lg:ml-20  md:px-4 md:py-0 lg:p-0 w-full max-w-[600px] md:max-w-[200px] lg:max-w-[452px] active-hover h-auto transition-all duration-500">
            <img
              src="./img19.jpg "
              loading=" eager"
              height={600}
              width={600}
              className=" mt-10 -ml-6 lg:ml-0 rounded-md shadow-lg shadow-black"
              draggable="false"
              style={{ opacity: 1 }}
            />
          </picture>
          <div className=" md:w-8/12 ml-1 lg:ml-36 -mt-20  flex overflow-hidden  md:h-min dark:bg-gray-500 bg-slate-600 ">
            <div className="h-full p-60 ml-16 md:px-1 md:pb-72 relative ">
              <div className=" justify-start items-start  h-full relative">
                <p className="lg:text-6xl text-3xl mr-0 -ml-72 lg:ml-0 mt-32 max lg:mr-10 lg:mt-40 uppercase font-serif font-semibold text-white ">
                  PHMJ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- Second Screen -------------------------- */}
        <div className="min-h-screen flex flex-col items-center justify-center my-14">
          <div
            className="text-4xl lg:ml-48 ml-36 -mt-10 lg:mt-0 dark:text-gray-600 text-gray-700"
            data-aos="fade-down"
          >
            <b>{content?.floating_card.title}</b>
            <p className="lg:text-sm text-lg text-center lg:-ml-40 -ml-24 mr-16 lg:mr-0 dark:text-gray-400 text-gray-500 mt-3 mx-10 animate__animated">
              {content?.floating_card.body}
            </p>
          </div>
          {/* <div
            className="text-xm text-center max-sm: dark:text-gray-400 text-gray-500 mt-3 mx-10 animate__animated"
            data-aos="fade-down"
          >
            {content?.floating_card.body}
          </div> */}
          <div className="max-w-full mx-0 mt-10 lg:mt-0">
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
              content16={content?.section_1.body16}
              buttonText={content?.section_1.button_label}
              imgPath={"./img19.jpg"}
              align="right"
            />
            {/* <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            /> */}
            {/* <CardContent
              title={content?.section_2.title}
              content={content?.section_2.body}
              buttonText={content?.section_2.button_label}
              imgPath={"./pelkat-pt.png"}
              align="right"
              buttonLink="/phmj"
            /> */}
            {/* <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            /> */}
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

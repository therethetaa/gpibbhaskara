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
        <div className="md:w-12/12 max-sm:w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto dark:bg-gray-200 bg-slate-300 ">
          <picture className="special-image max-sm:ml-14 ml-20  md:px-4 md:py-0 lg:p-0 w-full max-w-[600px] md:max-w-[200px] lg:max-w-[452px] active-hover h-auto transition-all duration-500">
            <img
              src="./img19.jpg "
              loading=" eager"
              height={600}
              width={600}
              className=" mt-10 max-sm:-ml-6 rounded-md shadow-lg shadow-black"
              draggable="false"
              style={{ opacity: 1 }}
            />
          </picture>
          <div className=" md:w-8/12 max-sm:ml-1 ml-36 -mt-20  flex overflow-hidden  md:h-min dark:bg-gray-500 bg-slate-600 ">
            <div className="h-full p-60 ml-16 md:px-1 md:pb-72 relative ">
              <div className=" justify-start items-start  h-full relative">
                <p className=" text-6xl max-sm:text-3xl max-sm:mr-0 max-sm:-ml-72 max-sm:mt-32 max mr-10 mt-40 uppercase font-serif font-semibold text-white ">
                  PHMJ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- Second Screen -------------------------- */}
        <div className="min-h-screen flex flex-col items-center justify-center my-14">
          <div
            className="text-4xl ml-48 max-sm:ml-36 max-sm:-mt-24 dark:text-gray-600 text-gray-700"
            data-aos="fade-down"
          >
            <b>{content?.floating_card.title}</b>
            <p className="text-sm max-sm:text-lg text-center -ml-40 max-sm:-ml-24 max-sm:mr-16 dark:text-gray-400 text-gray-500 mt-3 mx-10 animate__animated">
              {content?.floating_card.body}
            </p>
          </div>
          {/* <div
            className="text-xm text-center max-sm: dark:text-gray-400 text-gray-500 mt-3 mx-10 animate__animated"
            data-aos="fade-down"
          >
            {content?.floating_card.body}
          </div> */}
          <div className="max-w-full mx-0 max-sm:mt-10">
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

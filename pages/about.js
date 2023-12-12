import "animate.css";
import Head from "next/head";
import contentID from "../src/content/indonesia/about.json";
import contentEN from "../src/content/english/about.json";
import { useEffect, useState } from "react";

export default function About({ language }) {
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(language === "ID" ? contentID : contentEN);
  }, [language]);

  return (
    <>
      {language === "ID" ? (
        <Head>
          <title>Profil Gereja</title>
          <link rel="icon" href="/logo-gpib-new.png" />
        </Head>
      ) : (
        <Head>
          <title>Church Profile</title>
          <link rel="icon" href="/logo-gpib-new.png" />
        </Head>
      )}
      <main className="min-h-screen">
        <div className="  md:w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto dark:bg-gray-200 bg-slate-300">
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
                <p className=" text-5xl -mr-10 mt-40 uppercase font-serif text-white">
                  Profil Gereja
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------- Second Screen --------------------------- */}
        <div className="min-h-screen mt-14">
          {/* <div className="flex justify-center items-center">
            <div className="text-justify text-4xl text-gray-700">
              {content?.motto.title}
            </div>
          </div>
          <div className="mx-10 flex justify-center items-center">
            <div className="text-justify text-xm text-gray-500">

              {content?.motto.body}
            </div>
          </div> */}
          <div className="sm:mx-14">
            {/* <CardContent
              title={content?.section_1.title}
              content={content?.section_1.body}
              buttonText={content?.section_1.button_label}
              buttonLink="#section-2"
              imgPath="./about-product.webp"
              align="left"
            /> */}
            <div
              id="section-2"
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
            {/* <CardContent
              title={content?.section_2.title}
              content={content?.section_2.body}
              buttonText={content?.section_2.button_label}
              buttonLink="/events"
              imgPath="./about-top-class.webp"
              align="right"
            /> */}
            <div
              id="section-3"
              className="border-t dark:border-white border-gray-400 mx-16"
              data-aos="zoom-in"
            />
          </div>
          <div className="mt-6" />
          {/* <div className="text-center text-xl text-slate-200 font-medium">
            {content?.company_legality.title}
          </div> */}
          {/* <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 mt-5 sm:mx-44">
            <div className="w-4/5 md:w-1/3 text-slate-300 text-center p-5 bg-dark-gray rounded-lg min-h-[160px]">
              {content?.company_legality.left_section.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="first:text-slate-200 first:font-medium text-sm first:text-[16px]"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="w-4/5 md:w-1/3 text-slate-300 text-center p-5 bg-dark-gray rounded-lg min-h-[160px]">
              {content?.company_legality.middle_section.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="first:text-slate-200 first:font-medium text-sm first:text-[16px]"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="w-4/5 md:w-1/3 text-slate-300 text-center p-5 bg-dark-gray rounded-lg min-h-[160px]">
              {content?.company_legality.right_section.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="first:text-slate-200 first:font-medium text-sm first:text-[16px]"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div> */}
          {/* Sertifikat */}
          {/* <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 mt-5 sm:mx-44">
            <img
              className="p-5"
              src="https://www.apli.or.id/assets/images/anggota/sertifikat/thumb/4581792306-pt-berkat-iman-hidup.jpg"
            ></img>
          </div> */}
          <div className="mt-12" />
        </div>
      </main>
    </>
  );
}

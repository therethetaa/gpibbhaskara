import "animate.css";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardContent from "../src/components/card/unitmisioner/unitmisioner";
import contentID from "../src/content/indonesia/unit-misioner.json";
import contentEN from "../src/content/english/unit-misioner.json";
import Image from "next/image";

export default function UnitMisioner({ language }) {
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(language === "ID" ? contentID : contentEN);
  }, [language]);

  return (
    <>
      {language === "ID" ? (
        <Head>
          <title>Unit Misioner</title>
          <link rel="icon" href="/logo-gpib-new.png" />
        </Head>
      ) : (
        <Head>
          <title>Missionary Unit</title>
          <link rel="icon" href="/logo-gpib-new.png" />
        </Head>
      )}
      <main className="min-h-screen">
        <div className="  md:w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto dark:bg-gray-200 bg-slate-300 ">
          <picture className="special-image ml-20  md:px-4 md:py-0 lg:p-0 w-full max-w-[200px] md:max-w-[200px] lg:max-w-[452px] active-hover h-auto transition-all duration-500">
            <img
              src="./img18.jpg "
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
                  Unit Misioner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- Second Screen -------------------------- */}
        <div className="min-h-screen flex flex-col items-center justify-center my-14">
          <div
            className="text-4xl dark:text-gray-600 text-gray-700 -mt-32"
            data-aos="fade-down"
          >
            <b>{content?.motto.title}</b>
          </div>
          <div
            className="text-xm text-center dark:text-gray-400 text-gray-500 mx-10 ml-48 mr-48 mt-2 animate__animated"
            data-aos="fade-up"
          >
            {content?.motto.body}
          </div>
          <br></br>
          <div className="text-4xl text-center dark:text-white text-gray-600 font-semibold mt-10">
            <p
              data-aos="fade-left"
              data-aos-delay="0"
              s
            >{`Pelayanan Kategorial`}</p>
            <div className="mt-5" />
            <div className="row">
              <Link href="/pelkat-pa">
                <div className="col" data-aos="fade-right" data-aos-delay="0">
                  <img
                    className=" cursor-pointer -ml-5 hover"
                    src="/pelkat-pa.png"
                    width={120}
                    height={120}
                  />
                </div>
              </Link>
              <Link href="/pelkat-pt">
                <div
                  className="-mt-32 ml-28 "
                  data-aos="fade-right"
                  data-aos-delay="0"
                >
                  <img
                    className=" cursor-pointer"
                    src="/pelkat-pt.png"
                    width={120}
                    height={120}
                  />
                </div>
              </Link>

              <Link href="/pelkat-gp">
                <div
                  className="-mt-36 ml-60"
                  data-aos="fade-right"
                  data-aos-delay="0"
                >
                  <img
                    className=" cursor-pointer"
                    src="/pelkat-gp.png"
                    width={120}
                    height={120}
                  />
                </div>
              </Link>

              <div className="col mt-5">
                <Link href="/pelkat-pkp">
                  <div
                    className="-ml-12"
                    data-aos="fade-left"
                    data-aos-delay="0"
                  >
                    <img
                      className=" cursor-pointer"
                      src="/pelkat-pkp.png"
                      width={150}
                      height={150}
                    />
                  </div>
                </Link>
                <Link href="/pelkat-pkb">
                  <div
                    className="-mt-36 ml-24"
                    data-aos="fade-left"
                    data-aos-delay="0"
                  >
                    <img
                      className=" cursor-pointer"
                      src="/pelkat-pkb.png"
                      width={140}
                      height={140}
                    />
                  </div>
                </Link>
                <Link href="/pelkat-pklu">
                  <div
                    className="-mt-36 ml-60"
                    data-aos="fade-left"
                    data-aos-delay="0"
                  >
                    <img
                      className=" cursor-pointer"
                      src="/pelkat-pklu.png"
                      width={140}
                      height={140}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="max-w-full mx-0">
            <CardContent
              title={content?.section_1.title}
              content={content?.section_1.body}
              buttonText={content?.section_1.button_label}
              imgPath={"./pelkat-pa.png"}
              align="left"
              buttonLink="/pelkat-pa"
            />
            <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            />
            <CardContent
              title={content?.section_2.title}
              content={content?.section_2.body}
              buttonText={content?.section_2.button_label}
              imgPath={"./pelkat-pt.png"}
              align="right"
              buttonLink="/pelkat-pt"
            />
            <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            />
            <CardContent
              title={content?.section_3.title}
              content={content?.section_3.body}
              buttonText={content?.section_3.button_label}
              imgPath={"./pelkat-gp.png"}
              align="left"
              buttonLink="/pelkat-gp"
            />
            <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            />
            <CardContent
              title={content?.section_4.title}
              content={content?.section_4.body}
              buttonText={content?.section_4.button_label}
              imgPath={"./pelkat-pkp.png"}
              align="right"
              buttonLink="/pelkat-pkp"
            />
            <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            />
            <CardContent
              title={content?.section_5.title}
              content={content?.section_5.body}
              buttonText={content?.section_5.button_label}
              imgPath={"./pelkat-pkb.png"}
              align="left"
              buttonLink="/pelkat-pkb"
            />
            <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            />
            <CardContent
              title={content?.section_6.title}
              content={content?.section_6.body}
              buttonText={content?.section_6.button_label}
              imgPath={"./pelkat-pklu.png"}
              align="right"
              buttonLink="/pelkat-pklu"
            />
            <div
              className="border-t border-wood-cream mx-16"
              data-aos="zoom-in"
            />
          </div> */}
        </div>
      </main>
    </>
  );
}

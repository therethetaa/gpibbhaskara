import "animate.css";
import Head from "next/head";
import { useMemo, useState } from "react";
import contentID from "../src/content/indonesia/contact.json";
import contentEN from "../src/content/english/contact.json";
import MapComponent from "../src/components/MapComponent";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function Contact({ language }) {
  const [content, setContent] = useState();
  // const center = { lat: -34.397, lng: 150.644 }; // Ganti dengan koordinat yang diinginkan
  // const zoom = 8;

  // API
  // AIzaSyDSBdFCKrn - dYcO6ejQ0Mw0wS_rx1iY7s8

  useMemo(() => {
    setContent(language === "ID" ? contentID : contentEN);
  }, [language]);

  return (
    <>
      {language === "ID" ? (
        <Head>
          <title>Kontak</title>
          <link rel="icon" href="/logo-gpib-new.png" />
        </Head>
      ) : (
        <Head>
          <title>Contact</title>
          <link rel="icon" href="/logo-gpib-new.png" />
        </Head>
      )}
      <main className="min-h-screen">
        <div className="  md:w-12/12 flex justify-center items-center overflow-hidden h-[75vh] md:h-auto dark:bg-gray-200 bg-slate-300 ">
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
                  Kontak
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------- Second Screen --------------------------- */}
        <div className="mt-10 flex flex-row">
          <div
            className=" font-montserrat mt-10 flex flex-col justify-start items-start ml-10 text-3xl"
            // data-aos="zoom-in"
            // data-aos-delay="0"
          >
            <p className="" data-aos="zoom-in" data-aos-delay="35">
              {" "}
              <strong>{`Hubungi Kami`}</strong>
            </p>
            <div className="text-lg mt-3">
              <div data-aos="fade-right" data-aos-delay="0">
                <p className="ml-1">
                  {`📍`}
                  <a
                    className="ml-3"
                    href="https://maps.app.goo.gl/nFTW6RuEE6m2ZoDz5"
                  >{`Jl. Bhaskara Sari No. 47`}</a>
                </p>
                <a
                  className="ml-7"
                  href="https://maps.app.goo.gl/nFTW6RuEE6m2ZoDz5"
                >{`RT.010/RW.02, Kalisari, Kec. Mulyorejo,
            Surabaya, Jawa Timur 60112`}</a>
              </div>
              <div data-aos="fade-right" data-aos-delay="100">
                <p>
                  {`☎`}{" "}
                  <a>
                    {" "}
                    {`031-5934322`} <i>{`(Kantor)`}</i>
                  </a>
                </p>
                <p>
                  <a className="ml-7">
                    {`031-5925756`} <i>{`(Pastori)`}</i>
                  </a>
                </p>
              </div>
              <div data-aos="fade-right" data-aos-delay="200">
                <p>
                  {`✉`}{" "}
                  <a
                    className=" hover:border-b dark:hover:border-white hover:border-black"
                    href="https://www.google.com/intl/id/gmail/about/"
                  >{`gpibbhaskara@gmail.com`}</a>
                  <br />
                  <a
                    className="ml-7 hover:border-b dark:hover:border-white hover:border-black"
                    href="https://www.google.com/intl/id/gmail/about/"
                  >{`bhaskarasurabaya@gpib.or.id`}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col ml-40 mt-8">
            <iframe
              className=" rounded-md"
              data-aos="zoom-in"
              data-aos-delay="0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.083829327488!2d112.7991677!3d-7.266886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa032f6e0f47%3A0xa5d8188908ce245a!2sGPIB%20Jemaat%20Bhaskara%20Surabaya!5e0!3m2!1sid!2sid!4v1700128203746!5m2!1sid!2sid"
              width="500"
              height="300"
              // style="border:0;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mb-40" />
      </main>
    </>
  );
}

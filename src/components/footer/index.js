import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menuLink } from "../header";
import { url } from "../../assets/Conn";

const Footer = ({ language, setLanguage }) => {
  return (
    <>
      <div className="sm:flex bg-gray-200 selection:bg-neutral-700 gap-0 justify-between">
        <div className="flex w-full sm:max-w-xs justify-center items-center align-middle py-4">
          <Image
            src={`./logo-gpib-new.png`}
            alt="Logo"
            width={60}
            height={60}
          />
        </div>
        <div className="w-full md:flex justify-between">
          <div className="flex flex-col gap-3 w-full justify-center items-center py-4 -ml-28">
            <div className="flex flex-wrap gap-2 md:gap-5 mx-4 justify-evenly mt-2">
              {menuLink.map((item, key) => (
                <Link key={key} href={item.link} passHref>
                  <a className="uppercase border-b border-transparent hover:border-b hover:border-black font-semibold text-gray-700">
                    {language === "EN" ? item.name : item.nama}
                  </a>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center items-center text-xs ">
              <p className="px-4 md:px-0 text-slate-600 text-sm text-center">
                © 2023 GPIB Bhaskara Surabaya. All Rights Reserved.
              </p>
              {/* {privacyLink.map((item, key) => (
                <Link key={key} href={item.link} passHref>
                  <a className="border-b border-transparent hover:border-b hover:border-dark-gold text-white">
                    {language === "EN" ? item.title["en"] : item.title["id"]}
                  </a>
                </Link>
              ))} */}
            </div>
          </div>
          <hr />
          {/* <div className="w-full flex md:max-w-xs justify-center items-center">
            <div className="flex items-center gap-4 my-8">
              <p className="text-gray-700">🇮🇩 Indonesia</p>
              <div
                className="cursor-pointer w-12 h-6 bg-dark-navy rounded-full flex items-center"
                onClick={() => setLanguage(language == "ID" ? "EN" : "ID")}
              >
                <div
                  className={`h-full w-1/2 bg-gray-100 rounded-full transform transition ${
                    language == "EN" ? "translate-x-6" : ""
                  }`}
                />
              </div>
              <p className="text-gray-700">🇬🇧 English</p>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="flex text-center w-full text-xs justify-center align-middle items-center bg-gray-800">
        <p className="py-4 px-4 md:px-0 text-white lg:w-1/2">
          © 2023 GPIB Bhaskara Surabaya. All Rights Reserved.
        </p>
      </div> */}
    </>
  );
};

export default Footer;

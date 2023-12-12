import "animate.css";
import Head from "next/head";
import CardContent from "../src/components/card/product";
import contentID from "../src/content/indonesia/faq.json";
import contentEN from "../src/content/english/faq.json";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon } from "@heroicons/react/solid";

export default function About({ language }) {
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(language === "ID" ? contentID : contentEN);
  }, [language]);

  return (
    <>
      <Head>
        <title>FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* ---------------------- Second Screen --------------------------- */}
        <div className="min-h-screen">
          <div className="flex justify-center items-center">
            <div className="text-justify text-4xl text-gray-700 mt-28">FAQ</div>
          </div>
          <div className="mx-10 flex justify-center items-center">
            <div className="text-justify text-lg text-gray-500">Frequently Asked Question</div>
          </div>
          <div className="w-full px-4 mt-6">
          <div className="mx-10 flex justify-center items-center">
            <div className="text-justify text-lg text-gray-500">{content?.umum_faq}</div>
          </div>
            <div className="mx-auto w-full rounded-lg bg-slate-500 p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_1.question}</span>
                      {/* <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        /> */}
                    </Disclosure.Button>
                    {content?.umum_1.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_1.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_2.question}</span>
                    </Disclosure.Button>
                    {content?.umum_2.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_2.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_3.question}</span>
                    </Disclosure.Button>
                    {content?.umum_3.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_3.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_4.question}</span>
                    </Disclosure.Button>
                    {content?.umum_4.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_4.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_5.question}</span>
                    </Disclosure.Button>
                    {content?.umum_5.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_5.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_6.question}</span>
                    </Disclosure.Button>
                    {content?.umum_6.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_6.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_7.question}</span>
                    </Disclosure.Button>
                    {content?.umum_7.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_7.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_8.question}</span>
                    </Disclosure.Button>
                    {content?.umum_8.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_8.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_9.question}</span>
                    </Disclosure.Button>
                    {content?.umum_9.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_9.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_10.question}</span>
                    </Disclosure.Button>
                    {content?.umum_10.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_10.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_11.question}</span>
                    </Disclosure.Button>
                    {content?.umum_11.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_11.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_12.question}</span>
                    </Disclosure.Button>
                    {content?.umum_12.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_12.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.umum_13.question}</span>
                    </Disclosure.Button>
                    {content?.umum_13.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.umum_13.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <div className="mx-10 flex justify-center items-center">
            <div className="text-justify text-lg text-gray-500"> </div>
          </div>
          <div className="w-full px-4 mt-6">
          <div className="mx-10 flex justify-center items-center">
            <div className="text-justify text-lg text-gray-500">{content?.product_faq}</div>
          </div>
            <div className="mx-auto w-full rounded-lg bg-slate-500 p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.product_faq_1.question}</span>
                    </Disclosure.Button>
                    {content?.product_faq_1.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.product_faq_1.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.product_faq_2.question}</span>
                    </Disclosure.Button>
                    {content?.product_faq_2.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.product_faq_2.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.product_faq_3.question}</span>
                    </Disclosure.Button>
                    {content?.product_faq_3.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.product_faq_3.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.product_faq_4.question}</span>
                    </Disclosure.Button>
                    {content?.product_faq_4.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.product_faq_4.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.product_faq_5.question}</span>
                    </Disclosure.Button>
                    {content?.product_faq_5.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.product_faq_5.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.product_faq_6.question}</span>
                    </Disclosure.Button>
                    {content?.product_faq_6.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.product_faq_6.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.product_faq_7.question}</span>
                    </Disclosure.Button>
                    {content?.product_faq_7.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.product_faq_7.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              
            </div>
          </div>
          <div className="mx-10 flex justify-center items-center">
            <div className="text-justify text-lg text-gray-500"> </div>
          </div>
          <div className="w-full px-4 mt-6">
          <div className="mx-10 flex justify-center items-center">
            <div className="text-justify text-lg text-gray-500">{content?.membership_faq}</div>
          </div>
            <div className="mx-auto w-full rounded-lg bg-slate-500 p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.membership_faq_1.question}</span>
                    </Disclosure.Button>
                    {content?.membership_faq_1.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.membership_faq_1.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.membership_faq_2.question}</span>
                    </Disclosure.Button>
                    {content?.membership_faq_2.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.membership_faq_2.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.membership_faq_3.question}</span>
                    </Disclosure.Button>
                    {content?.membership_faq_3.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.membership_faq_3.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.membership_faq_4.question}</span>
                    </Disclosure.Button>
                    {content?.membership_faq_4.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.membership_faq_4.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              
            </div>
          </div>
          <div className="mx-10 flex justify-center items-center">
            <div className="text-justify text-lg text-gray-500"> </div>
          </div>
          <div className="w-full px-4 mt-6">
          <div className="mx-10 flex justify-center items-center">
            <div className="text-justify text-lg text-gray-500">{content?.bonus_faq}</div>
          </div>
            <div className="mx-auto w-full rounded-lg bg-slate-500 p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.bonus_faq_1.question}</span>
                    </Disclosure.Button>
                    {content?.bonus_faq_1.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.bonus_faq_1.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.bonus_faq_2.question}</span>
                    </Disclosure.Button>
                    {content?.bonus_faq_2.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.bonus_faq_2.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.bonus_faq_3.question}</span>
                    </Disclosure.Button>
                    {content?.bonus_faq_3.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.bonus_faq_3.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.bonus_faq_4.question}</span>
                    </Disclosure.Button>
                    {content?.bonus_faq_4.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.bonus_faq_4.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.bonus_faq_5.question}</span>
                    </Disclosure.Button>
                    {content?.bonus_faq_5.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.bonus_faq_5.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.bonus_faq_6.question}</span>
                    </Disclosure.Button>
                    {content?.bonus_faq_6.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.bonus_faq_6.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.bonus_faq_7.question}</span>
                    </Disclosure.Button>
                    {content?.bonus_faq_7.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.bonus_faq_7.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              <div className="mt-2" />
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{content?.bonus_faq_8.question}</span>
                    </Disclosure.Button>
                    {content?.bonus_faq_8.answer.map((item, index) => {
                       return (
                        <Disclosure.Panel className="px-4 pt-2 pb-1 text-sm text-slate-200" key="">
                           {content?.bonus_faq_8.answer[index]}
                        </Disclosure.Panel> 
                        );
                     })}
                  </>
                )}
              </Disclosure>
              
            </div>
          </div>

          <div className="mt-12" />
        </div>
      </main>
    </>
  );
}

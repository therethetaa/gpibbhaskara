import React from "react";
import Link from "next/link";
import { baseURL } from "../assets/Conn";

export const ModalGambar = ({ showModal, setShowModal }) => {
  console.log(baseURL);
  if (showModal) {
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-4xl">
            {/*content*/}
            <div className="border-0 rounded-2xl relative flex flex-col w-full outline-none focus:outline-none bg-slate-300 backdrop-blur-sm bg-opacity-20">
              {/*body*/}
              <div className="relative flex-auto">
                <img
                  src={`${baseURL}/public/images/bg-index.webp`}
                  alt="Girl in a jacket"
                  width="800"
                  height="1300"
                />
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end rounded-b m-2 gap-2">
                <div
                  className="cursor-pointer text-dark-gold font-bold uppercase text-sm rounded-full border border-dark-gold hover:bg-dark-gold hover:text-gray-200 px-6 py-1.5"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-60 fixed inset-0 z-40 bg-black" />
      </>
    );
  } else return null;
};

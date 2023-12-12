import Link from "next/link";
import React from "react";
import { menuLink } from ".";
import { memberUrl } from "../../assets/Conn";
import { AiOutlineLogin } from "react-icons/ai";

const PopupMenu = ({ open, setOpen }) => {
  if (open) {
    return (
      <div
        className="xl:hidden fixed z-50 w-full h-full bg-neutral-900 top-20"
        data-aos="fade-left"
      >
        <div className="flex flex-col items-end gap-2">
          {menuLink.map((menu) => {
            return (
              <Link
                key={menu.link}
                href={`${menu.link}`}
                passHref
                legacyBehavior
              >
                <div
                  className="w-full cursor-pointer py-1 text-xl text-gray-200 hover:text-wood-cream hover:border-wood-cream flex flex-col items-end"
                  onClick={() => setOpen(false)}
                >
                  <a className="px-4 uppercase">{menu.name}</a>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else return null;
};

export default PopupMenu;

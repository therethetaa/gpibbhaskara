import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import PopupMenu from "./PopupMenu";
import { url } from "../../assets/Conn";
import { useTheme } from "next-themes";

export const menuLink1 = [
  {
    name: "Home",
    nama: "Beranda",
    link: "/",
  },
  {
    name: "Functionary",
    nama: "Fungsionaris",
    link: "fungsionaris",
  },
];

export const menuLink2 = [
  {
    name: "Information",
    nama: "Informasi",
    link: "information",
  },
  {
    name: "Church Profile",
    nama: "Profil Gereja",
    link: "about",
  },
  {
    name: "Gallery",
    nama: "Galeri",
    link: "galeri",
  },
  {
    name: "Contact",
    nama: "Kontak",
    link: "contact",
  },
];

export const menuLink = [
  {
    name: "Beranda",
    nama: "Beranda",
    link: "/",
  },
  {
    name: "Fungsionaris",
    nama: "Fungsionaris",
    link: "fungsionaris",
  },

  {
    name: "Informasi",
    nama: "Informasi",
    link: "information",
  },
  {
    name: "Profil Gereja",
    nama: "Profil Gereja",
    link: "about",
  },
  {
    name: "Galeri",
    nama: "Galeri",
    link: "galeri",
  },
  {
    name: "Kontak",
    nama: "Kontak",
    link: "contact",
  },
];

export const Header = ({ cartCounter, language }) => {
  const [onScroll, setScrolling] = useState(false);
  const [qty, setQty] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const onScroll = (e) => {
      setScrolling(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (localStorage.getItem("cart") != null) {
      const LocalCart = JSON.parse(localStorage.getItem("cart"));
      let qtyTemp = 0;
      LocalCart?.map((item) => {
        qtyTemp += item.qty;
      });
      setQty(qtyTemp);
    }
  }, [qty]);

  const headerColor = onScroll > 75 && !menuOpen ? "bg-dark" : "bg-neutral-900";
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <header
        className={`fixed w-full z-20 transition`}
        style={{
          position: "fixed",
          backgroundColor: scrolled ? "#ffffff95" : "transparent",
          transition: "background-color 0.3s ease",
          boxShadow: scrolled ? "0px 0px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="fixed top-6 left-4 flex justify-center mb-4">
          {currentTheme === "dark" ? (
            <button onClick={() => setTheme("light")}>
              {" "}
              <Image src="../sun.svg" alt="logo" height="30px" width="30px" />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")}>
              <Image src="../moon.svg" alt="logo" height="30px" width="30px" />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between text-gray-300">
          {/* Logo */}
          <div className="flex w-[100px] sm:w-full ml-10 lg:ml-0 max-w-xs justify-center py-1">
            <Link href="/" passHref>
              <a className="h-[100%] pt-2">
                <Image
                  src={`./logo-gpib-new.png`}
                  width={65}
                  height={60}
                  alt="logo"
                />
              </a>
            </Link>
          </div>

          <div className="hidden sm:flex w-full justify-between items-center gap-5 uppercase px-2 bg">
            {/* Menu */}
            <div className="flex gap-10 text-gray-700 uppercase bg-transparent h-12 w-full px-3 py-4 items-center justify-between mx-auto relative transition-colors duration-[300ms] reg-header">
              {scrolled === true ? (
                <div className="flex gap-10  uppercase bg-transparent h-12 w-full px-3 py-4 items-center justify-between mx-auto relative transition-colors duration-[300ms] reg-header">
                  {menuLink?.map((menu) => (
                    <Link href={menu.link} key={menu.link} passHref>
                      <a className="text-black font-semibold hover:text-gray-300 hover:border-opacity-100 transition transform hover:scale-105 no-underline">
                        {language == "ID" ? menu.nama : menu.name}
                      </a>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex gap-10  uppercase bg-transparent h-12 w-full px-3 py-4 items-center justify-between mx-auto relative transition-colors duration-[300ms] reg-header">
                  {menuLink1?.map((menu) => (
                    <Link href={menu.link} key={menu.link} passHref>
                      <a className="dark:text-gray-800 text-gray-700 font-semibold dark:hover:text-gray-400 hover:text-white hover:border-opacity-100 transition transform hover:scale-105 no-underline">
                        {language == "ID" ? menu.nama : menu.name}
                      </a>
                    </Link>
                  ))}
                  {menuLink2?.map((menu) => (
                    <Link href={menu.link} key={menu.link} passHref>
                      <a className="text-white font-semibold hover:text-gray-900 hover:border-opacity-100 transition transform hover:scale-105 no-underline">
                        {language == "ID" ? menu.nama : menu.name}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cart and menu */}
          <div className="max-w-xs flex gap-5 justify-between items-center uppercase px-2">
            <div className="flex">
              {/* {qty > 0 && <span className="text-xs text-red-600 bg-white rounded-md w-[100%] h-4 justify-center items-center flex font-bold">{qty}</span>} */}
              {/* <AiOutlineShoppingCart size={30}/> */}
            </div>
            <div>
              {scrolled == true ? (
                <div>
                  {!menuOpen ? (
                    <AiOutlineMenu
                      size="30"
                      className="mr-4 sm:hidden cursor-pointer"
                      style={{ color: "black" }}
                      onClick={() => setMenuOpen(!menuOpen)}
                    />
                  ) : (
                    <AiOutlineClose
                      size="30"
                      className="mr-4 sm:hidden cursor-pointer"
                      style={{ color: "black" }}
                      onClick={() => setMenuOpen(!menuOpen)}
                    />
                  )}
                </div>
              ) : (
                <div>
                  {!menuOpen ? (
                    <AiOutlineMenu
                      size="30"
                      className="mr-4 sm:hidden cursor-pointer"
                      style={{ color: "white" }}
                      onClick={() => setMenuOpen(!menuOpen)}
                    />
                  ) : (
                    <AiOutlineClose
                      size="30"
                      className="mr-4 sm:hidden cursor-pointer"
                      onClick={() => setMenuOpen(!menuOpen)}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <PopupMenu open={menuOpen} setOpen={setMenuOpen} />
    </>
  );
};

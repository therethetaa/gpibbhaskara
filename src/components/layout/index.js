import React, { useState, useEffect } from "react";
import { Header } from "../header";
import Footer from "../footer";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "../scrollbar.module.css";
import { useRouter } from "next/router";

export default function Layout({ children, ...pageProps }) {
  const [cartCounter, setCartCounter] = useState(0);
  const [language, setLanguage] = useState("ID");
  const { asPath, pathname } = useRouter();
  const [showFooterHeader, setShowFooterHeader] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 900 });
    let carts = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    let count = 0;
    if (carts.length > 0) {
      count = carts.reduce((partial_sum, a) => partial_sum + a.qty, 0);
    }
    setCartCounter(count);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("intl") === null) {
      localStorage.setItem("intl", language);
      return;
    }
    setLanguage(localStorage.getItem("intl"));
  }, []);

  useEffect(() => {
    if (pathname === "/joinme/[username]") {
      setShowFooterHeader(false);
    } else {
      setShowFooterHeader(true);
    }
  }, [asPath, pathname]);

  useEffect(() => {
    localStorage.setItem("intl", language);
  }, [language]);

  function recursiveMap(children, fn) {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child) || typeof child.type == "string") {
        return child;
      }

      if (child.props.children) {
        child = React.cloneElement(child, {
          children: recursiveMap(child.props.children, fn),
        });
      }

      return fn(child);
    });
  }

  const childrenWithProps = recursiveMap(children, (child) => {
    //Checking isValidElement is the safe way and avoids a TS error too.
    if (React.isValidElement(child)) {
      // Pass additional props here
      return React.cloneElement(child, {
        language: language,
        counter: cartCounter,
        setCounter: setCartCounter,
      });
    }

    return child;
  });

  return (
    <div className={`scroll-smooth ${style["custom-scrollbar"]}`}>
      <div>
        {showFooterHeader ? (
          <Header cartCounter={cartCounter} language={language} />
        ) : null}
        <main className="selection:bg-neutral-700">{childrenWithProps}</main>
        {showFooterHeader ? (
          <Footer language={language} setLanguage={setLanguage} />
        ) : null}
      </div>
    </div>
  );
}

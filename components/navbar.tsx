"use client";

import React, { useState, useEffect } from "react";
import ThemeChanger from "./DarkSwitch";
import Link from "next/link";
const NavbarLanding = () => {
  const navigation = [
    "About",
    "Features",
    "Product",
    "Partners",
    "Contact",
    "Our Team",
  ];
  const linkUrl = [
    "#about",
    "#features",
    "#product",
    "#partners",
    "#contact",
    "#team",
  ];
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0 bg-slate-900 border-gray-700">
        <nav
          style={{ backgroundColor: "transparent !important" }}
          className={`navbar ${
            isSticky ? "is-sticky" : ""
          } relative  w-full bg-transparent mx-auto sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8`}
        >
          <div className="flex items-center justify-between">
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium  shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-600 transition-all text-sm bg-slate-900 hover:bg-slate-800 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col h-[85px] gap-x-0  sm:flex-row sm:items-center sm:justify-between">
              <div>
                {" "}
                <a
                  className="flex-none text-xl font-semibold text-white"
                  href="/"
                  aria-label="ADAPTA"
                >
                  <Link href="/">
                    <img
                      alt="Adapta"
                      className="w-32 mx-auto"
                      src="/img/logo.png"
                    />
                  </Link>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-end sm:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                  {navigation.map((item, index) => (
                    <Link
                      className="font-medium  sm:py-6  text-white hover:text-gray-400"
                      href={linkUrl[index]}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      window.open(
                        // "https://adaptacs-dashboard.azurewebsites.net",
                        "https://app.adaptacs.com/",
                        "_blank",
                        "noreferrer"
                      )
                    }
                    className="px-6 py-2 text-white bg-blue-800 rounded-md md:ml-5"
                  >
                    Sign In
                  </button>

                  {/* <ThemeChanger /> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ========== END HEADER ========== */}
    </>
  );
};

export default NavbarLanding;

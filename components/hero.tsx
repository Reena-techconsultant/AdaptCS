"use client";
import { ChevronRight, MoveUpRight } from "lucide-react";
import BookSection from "./book";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <>
      <section className="relative">
        <div className="hero-bg"></div>
        <div className=" section-padding heroSection">
          {/* Hero */}
          <div
            className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8"
            id="home"
          >
            {/* Grid */}
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
              <div className="lg:col-span-3 pt-[100px]">
                <h1 className="block text-6xl font-semibold  sm:text-4xl md:text-5xl lg:text-[72px] text-white bg-gradient-to-b from-white to-gray-400 bg-clip-text">
                  ADAPTA Climate Score
                </h1>
                {/* <p className="mt-3 text-lg text-gray-800 text-gray-400">
                AI enabled climate and production risk model to score a farm's
                risk from the comfort of your office
              </p> */}
                <TypeAnimation
                  sequence={[
                    "A Bank's Solution For AI Enabled Climate Risk Calculation.",
                    1000,
                    "A Bank's Solution For Generating Climate and Production Score.",
                    1000,
                    "A Bank's Solution To Increasing  Agricultural Lending.",
                    1000,
                    "A Bank's Solution For Portfolio Management.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{
                    color: "white",
                    fontSize: "18px",
                    display: "inline-block",
                    fontFamily: "sans-serif",
                    paddingTop: "15px",
                  }}
                  repeat={Infinity}
                />
                <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                  <button
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-[#120b40] hover:bg-[#120b40] border border-1 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-[#2a2641] focus:ring-offset-2 focus:ring-offset-white transition py-3 px-5 focus:ring-offset-gray-800"
                    data-hs-overlay="#hs-basic-modal"
                    type="reset"
                  >
                    Book A DEMO <ChevronRight />
                  </button>

                  <BookSection />
                </div>
              </div>
              {/* End Col */}

              <div className="lg:col-span-4 pt-[150px] lg:mt-0">
                <img
                  // width={500}
                  className=""
                  src="/img/hero.gif"
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Hero */}
        </div>
      </section>
    </>
  );
}

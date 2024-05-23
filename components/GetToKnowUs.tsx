"use client";

import React from "react";

export default function GetToKnowUs() {
  return (
    <>
      <>
        <section className="mb-16" id="team">
          <div className="relative mx-auto max-w-5xl mb-10 text-center">
            <span className="text-gray-400  flex items-center justify-center font-medium uppercase tracking-wider">
              Team
            </span>
            {/* <h2 className="block mb-3 w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">

            </h2> */}
            <p className="text-gray-400">
              We are a team of bankers, farmers, scientists, and agronomists who
              came together to transform climate finance. We believe that
              climate change and biodiversity loss pose a signifying risk to
              food systems and millions of farmers worldwide. Mobilizing the
              US$150 trillion global banking industry is key to fighting climate
              change.
            </p>
          </div>
          <div className="container px-6 mx-auto">
            <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2">
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/german-vegarra-14bb366/",
                    "_blank",
                    "noreferrer"
                  )
                }
                className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent "
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/German.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold  text-white group-hover:text-white">
                  German Vegarra
                </h1>

                <p className="mt-2  text-white group-hover:text-gray-300">
                  Founder & CEO{" "}
                </p>
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/madleine-mwithiga-79833899/",
                    "_blank",
                    "noreferrer"
                  )
                }
                className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="img/MADLEINE.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Madleine Mwithiga
                </h1>

                <p className="mt-2 text-white dark:text-gray-300 group-hover:text-gray-300">
                  Co-Founder & Director
                </p>
              </div>
              <div
                // onClick={() =>
                //   window.open(
                //     "https://www.linkedin.com/in/madleine-mwithiga-79833899/",
                //     "_blank",
                //     "noreferrer"
                //   )
                // }
                className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/Gustavo.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Gustavo Flores Coello
                </h1>

                <p className="mt-2 text-white text-center   group-hover:text-gray-300">
                  Head - Climate Smart Agronomist
                </p>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/Penelope.jpg
                  "
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold  text-white group-hover:text-white">
                  Penelope Stockinger
                </h1>

                <p className="mt-2 text-white text-center   group-hover:text-gray-300">
                  Head of Growth & Impact
                </p>
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mercy-muindi/",
                    "_blank",
                    "noreferrer"
                  )
                }
                className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/MERCY2.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Mercy Muindi
                </h1>

                <p className="mt-2 text-white text-center   group-hover:text-gray-300">
                  Co-Founder and Lead Business Developer (Africa)
                </p>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/susan.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Susan Omenyo
                </h1>

                <p className="mt-2 text-center  text-white group-hover:text-gray-300">
                  Co-Founder & Climate Smart Agronomist
                </p>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/sumbono.webp"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Sumbono
                </h1>

                <p className="mt-2 text-white text-center  group-hover:text-gray-300">
                  Backend Developer
                </p>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/sandeep.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Sandeep Thakur
                </h1>

                <p className="mt-2 text-white text-center   group-hover:text-gray-300">
                  Frontend Developer
                </p>
              </div>

              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/SamC.webp
                  "
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Sam Njogu
                </h1>

                <p className="mt-2 text-white text-center   group-hover:text-gray-300">
                  Technology Specialist{" "}
                </p>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/Debra.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Debra Onyango
                </h1>

                <p className="mt-2 text-white text-center  group-hover:text-gray-300">
                  Research Analyst
                </p>
              </div>
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/DamariKikwai.webp"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Damaris Kikwai
                </h1>

                <p className="mt-2 text-white text-center  group-hover:text-gray-300">
                  Climate Smart Dairy Specialist
                </p>
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/lilian-muthoni-1163a5a6/",
                    "_blank",
                    "noreferrer"
                  )
                }
                className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  group hover:bg-blue-600 border-gray-700 hover:border-transparent"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="/img/LilianMuthoni.webp"
                  alt=""
                />

                <h1 className="mt-4 text-[18px] text-center font-semibold text-white group-hover:text-white">
                  Lilian Muthoni
                </h1>

                <p className="mt-2 text-white text-center   group-hover:text-gray-300">
                  Climate Smart Dairy Specialist
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* adviser section start */}
        {/* 
        <div className="container px-5 mt-24 mb-24 mx-auto">
          <h1 className="text-3xl font-bold pb-14 text-center border-[#f4f4f4a3] border-b-2">
            Advisors and Member Blended Finance and<br></br> Credit Committee
            (BFCC)
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10 mt-16 content-center">
            <div>
              <img
                className="w-full h-80  object-cover object-center"
                src="/img/aa.webp"
              />
              <div className="bg-white p-3 border-s-8 border-[#033c6e] shadow-lg">
                <h1 className="font-semibold text-xl text-[#033c6e]">
                  Lilian Ndungu
                </h1>
                <p className="dark:text-[#000]">GeoSpatial Specialist</p>
              </div>
            </div>

            <div>
              <img
                className="h-80 w-full object-cover object-center"
                src="/img/demo-user.png"
              />
              <div className="bg-white p-3 border-s-8 border-[#033c6e] shadow-lg">
                <h1 className="font-semibold text-xl text-[#033c6e]">
                  Coming Soon
                </h1>
                <p className="dark:text-[#000]">Math Spacialist</p>
              </div>
            </div>

            <div>
              <img
                className="h-80 w-full object-cover object-center"
                src="/img/aida.webp"
              />
              <div className="bg-white p-3 border-s-8 border-[#033c6e] shadow-lg">
                <h1 className="font-semibold text-xl text-[#033c6e]">
                  Aida Kimemia
                </h1>
                <p className="dark:text-[#000]">BFCC - Chair</p>
              </div>
            </div>

            <div>
              <img
                className="h-80 w-full object-cover object-center"
                src="/img/sally.webp"
              />
              <div className="bg-white p-3 border-s-8 border-[#033c6e] shadow-lg">
                <h1 className="font-semibold text-xl text-[#033c6e]">
                  Sally Gitonga
                </h1>
                <p className="dark:text-[#000]">BFCC</p>
              </div>
            </div>

            <div>
              <img
                className="h-80 w-full object-cover object-center"
                src="/img/laura.webp"
              />
              <div className="bg-white p-3 border-s-8 border-[#033c6e] shadow-lg">
                <h1 className="font-semibold text-xl text-[#033c6e]">
                  Laura Mecagni
                </h1>
                <p className="dark:text-[#000]">BFCC</p>
              </div>
            </div>

            <div>
              <img
                className="h-80 w-full object-cover object-center"
                src="/img/marc.webp"
              />
              <div className="bg-white p-3 border-s-8 border-[#033c6e] shadow-lg">
                <h1 className="font-semibold text-xl text-[#033c6e]">
                  Marc Ghislain
                </h1>
                <p className="dark:text-[#000]">BFCC</p>
              </div>
            </div>

            <div>
              <img
                className="h-80 w-full object-cover object-center"
                src="/img/demo-user.png"
              />
              <div className="bg-white p-3 border-s-8 border-[#033c6e] shadow-lg">
                <h1 className="font-semibold text-xl text-[#033c6e]">
                  Coming Soon
                </h1>
                <p className="dark:text-[#000]">Math Spacialist</p>
              </div>
            </div>

            <div>
              <img
                className="h-80 w-full object-cover object-center"
                src="/img/demo-user.png"
              />
              <div className="bg-white p-3 border-s-8 border-[#033c6e] shadow-lg">
                <h1 className="font-semibold text-xl text-[#033c6e]">
                  Coming Soon
                </h1>
                <p className="dark:text-[#000]">Math Spacialist</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* adviser section ends */}

        {/* partner section start */}

        {/* partner section ends */}

        {/* footer start */}

        {/* footer ends */}
      </>
    </>
  );
}

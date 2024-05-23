import {
  ArrowUpRight,
  ChevronRight,
  ClipboardPlus,
  MoveUpRight,
} from "lucide-react";
import { Asterisk } from "lucide-react";
import { MapPinned } from "lucide-react";
export default function FeaturesSection() {
  return (
    <>
      {/* Card Blog */}
      <section className="relative" id="features">
        <div className="hero-bg"></div>
        <div className="section-padding about-us-section py-16 sm:py-16">
          <div className="relative mx-auto max-w-5xl pb-5 text-center">
            <span className="text-gray-400 my-1 flex items-center justify-center font-medium uppercase tracking-wider">
              Three Easy Steps
            </span>
            <h2 className="block w-full mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Calculate climate score in three simple steps
            </h2>
          </div>
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-5 px-4 sm:px-6 lg:px-8">
              <ul
                role="list"
                className="grid gap-x-2 gap-y-12 sm:grid-cols-1 sm:gap-y-6 xl:col-span-1"
              >
                <li className="border border-1  px-4 py-[20px] rounded-xl border-gray-600">
                  <span className="md:flex">
                    <span className="w-[30px]">
                      <MapPinned color="white" width={30} />
                    </span>
                    <span className="md:grow md:ml-5">
                      <span className="mb-2 text-2xl hs-tab-active:text-blue-600 block font-semibold   text-gray-200">
                        Enter the location or provide GPS coordinates to find
                        farm
                      </span>

                      {/* <span className="hidden lg:block mt-2 text-gray-800 text-gray-200">
                  Our advanced climate risk assessment tools streamline the due
                  diligence process, saving you time and resources.
                </span> */}
                    </span>
                  </span>
                </li>
                <li className="border border-1  px-4 py-[20px] rounded-xl border-gray-600">
                  <span className="md:flex">
                    <span className="w-[30px]">
                      <MapPinned color="white" width={30} />
                    </span>
                    <span className="md:grow md:ml-5">
                      <span className="mb-2 text-2xl block font-semibold  hs-tab-active:text-blue-500 text-gray-200">
                        Enter loan period
                      </span>

                      {/* <span className="hidden lg:block mt-2 text-gray-800 text-gray-200">
                  Our advanced climate risk assessment tools streamline the due
                  diligence process, saving you time and resources.
                </span> */}
                    </span>
                  </span>
                </li>
                <li className="border border-1  px-4 py-[20px] rounded-xl border-gray-600">
                  <span className="md:flex">
                    <span className="w-[30px]">
                      <MapPinned color="white" width={30} />
                    </span>
                    <span className="md:grow md:ml-5">
                      <span className="mb-2 text-2xl  block font-semibold  hs-tab-active:text-blue-500 text-gray-200">
                        Enter crop or livestock
                      </span>

                      {/* <span className="hidden lg:block mt-2 text-gray-800 text-gray-200">
                  Our advanced climate risk assessment tools streamline the due
                  diligence process, saving you time and resources.
                </span> */}
                    </span>
                  </span>
                </li>
                {/* <li className="border border-1  px-4 py-[20px] rounded-xl border-gray-600">
              <span className="md:flex">
                <span className="w-[30px]">
                  <Asterisk />
                </span>
                <span className="md:grow md:ml-5">
                  <span className=" text-2xl hs-tab-active:text-blue-600 block font-semibold text-gray-800 hs-tab-active:text-blue-500 text-gray-200">
                    AI enabled algorithm to score climate and production risks.
                  </span>
                  <p>Whether you have a team of 2 or 200, our shared team.</p>
                  <a href="#" className="gap-1 flex mt-3">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-move-right"
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                  {/* <span className="hidden lg:block mt-2 text-gray-800 text-gray-200">
                  Our advanced climate risk assessment tools streamline the due
                  diligence process, saving you time and resources.
                </span> */}
                {/* </span>
              </span>
            </li>
            <li className="border border-1  px-4 py-[20px] rounded-xl border-gray-600">
              <span className="md:flex">
                <span className="w-[30px]">
                  <ClipboardPlus />
                </span>
                <span className="md:grow md:ml-5">
                  <span className=" text-2xl hs-tab-active:text-blue-600 block font-semibold text-gray-800 hs-tab-active:text-blue-500 text-gray-200">
                    View full generated report.{" "}
                  </span>
                  <p>Whether you have a team of 2 or 200, our shared team.</p>
                  <a href="#" className="gap-1 flex items-center mt-3">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-move-right"
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                  {/* <span className="hidden lg:block mt-2 text-gray-800 text-gray-200">
                  Our advanced climate risk assessment tools streamline the due
                  diligence process, saving you time and resources.
                </span> */}
                {/* </span>
              </span>
            </li> */}
              </ul>
              <div className="max-w-2xl">
                <div className="mt-6 col-start-1 col-end-7 ">
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    {/* Devices */}
                    <div className="aspect-w-14 h-96">
                      <img
                        className="w-full object-cover rounded-xl opacity-[0.7]"
                        src="/img/fullDashboard.png"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Card Blog */}
    </>
  );
}

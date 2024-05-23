export default function AboutSection() {
  return (
    <>
      {/* Features */}
      <div
        className="section-padding about-us-section py-16 sm:py-16"
        id="about"
      >
        <div className="relative mx-auto max-w-5xl pb-3 text-center">
          <span className="text-gray-400  flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block mb-4 w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            How can we help?
          </h2>
        </div>
        <div className="">
          <ul role="list" className="flex gap-4 items-center justify-center">
            <li className="border border-1  px-4 py-3 rounded-xl border-gray-600">
              <span className="md:flex gap-3">
                <svg
                  className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 hs-tab-active:text-blue-500 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <span className="md:grow md:ml-5">
                  <span className="mb-2 pb-1 text-xl hs-tab-active:text-blue-600 block font-semibold   text-gray-200">
                    Reduce early due diligence costs
                  </span>

                  {/* <span className="hidden lg:block mt-2 text-gray-800 text-gray-200">
                  Our advanced climate risk assessment tools streamline the due
                  diligence process, saving you time and resources.
                </span> */}
                </span>
              </span>
            </li>
            <li className="border border-1  px-4 py-3 rounded-xl border-gray-600">
              <span className="md:flex gap-3">
                <svg
                  className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 hs-tab-active:text-blue-500 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                  />
                </svg>
                <span className="md:grow md:ml-5">
                  <span className="mb-2 text-xl pb-1 block font-semibold  hs-tab-active:text-blue-500  text-gray-200">
                    Reduce losses by enhancing your client's climate resilience
                  </span>
                  {/* <span className="hidden lg:block mt-2 text-gray-800 text-gray-200">
                  By identifying and addressing climate risks, you can minimize
                  losses and protect your assets.
                </span> */}
                </span>
              </span>
            </li>
            <li className="border border-1  px-4 py-3 rounded-xl border-gray-600">
              <span className="md:flex gap-3">
                <svg
                  className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 hs-tab-active:text-blue-500 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                </svg>
                <span className="md:grow md:ml-5">
                  <span className="mb-2 text-xl pb-1 block font-semibold  hs-tab-active:text-blue-500 text-gray-200">
                    Increase your agricultural lending
                  </span>
                  {/* <span className="hidden lg:block mt-2 text-gray-800 text-gray-200">
                  With improved climate risk assessment capabilities, you can
                  confidently extend credit to more farmers and increasing
                  revenue.
                </span> */}
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className="w-[100%]">
          <div className="mt-12 col-start-1 col-end-7 ">
            <div
              id="tabs-with-card-1"
              role="tabpanel"
              aria-labelledby="tabs-with-card-item-1"
            >
              {/* Devices */}
              <div className=" justify-center  flex relative">
                {" "}
                <img
                  width={1200}
                  className="rounded-xl"
                  src="/img/womenphone.png"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Features */}
    </>
  );
}

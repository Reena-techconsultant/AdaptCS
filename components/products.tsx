export default function ProductsSection() {
  return (
    <>
      <section
        className=" section-padding about-us-section text-gray-600 body-font"
        id="product"
      >
        <div className="container py-32 mx-auto">
          {/* <div className="max-w-2xl text-center mx-auto mb-20">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl text-white">
              Global Impact and Climate Finance{" "}
              <span className="text-blue-600">simple</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 text-gray-400">
              Discover a New Era in Agricultural Risk Assessment and Mitigation.
            </p>
          </div> */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 text-center">
            <a
              href="#"
              className="flex flex-col gap-4 items-center  border  rounded-lg shadow md:flex-row  border-gray-700 bg-[#03022f] hover:bg-[#03022f]"
            >
              <img
                className="object-cover w-full h-full rounded-t-lg md:w-60 md:rounded-none md:rounded-s-lg"
                src="/img/Deep-dive.png"
                alt=""
              />
              <div className="flex flex-col justify-between leading-normal p-3">
                <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-white">
                  ADAPTA Deep Dive
                </h5>
                <p className="mb-3 font-normal text-left text-gray-400">
                  {" "}
                  The ADAPTA Deep Dive involves field due diligence where we
                  collect soil, water, and environmental data to validate the
                  early score from ADAPTA CS. It involves taking soil, water,
                  and tissue samples for analysis and interviewing stakeholders
                  to understand the local environment and situations. The
                  information and results from Deep Dive and Early score then
                  inform a detailed Climate Adaptation Plan for the client.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 items-center  rounded-lg shadow md:flex-row border border-gray-700 bg-[#03022f] hover:bg-[#03022f]"
            >
              <img
                className="object-cover h-full w-full rounded-t-lg md:w-60 md:rounded-none md:rounded-s-lg"
                src="/img/security_lock.svg"
                alt=""
              />
              <div className="flex flex-col justify-between leading-normal p-3">
                <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-white">
                  Security & Protection
                </h5>
                <p className="mb-3 text-left  font-normal text-gray-400">
                  At ADAPTA, we are committed to providing a secure and safe
                  platform for our users. We understand the importance of
                  security and have implemented several measures to ensure that
                  your data is protected. If you have any questions about our
                  security measures, please do not hesitate to contact us.
                </p>
              </div>
            </a>
            {/* <div className=" mb-10 px-4 border border-1  py-[50px] rounded-xl border-gray-600">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/img/hero_lady.svg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                ADAPTA Deep Dive
              </h2>
              <p className="leading-relaxed text-base">
                The ADAPTA Deep Dive involves field due diligence where we
                collect soil, water, and environmental data to validate the
                early score from ADAPTA CS. It involves taking soil, water, and
                tissue samples for analysis and interviewing stakeholders to
                understand the local environment and situations. The information
                and results from Deep Dive and Early score then inform a
                detailed Climate Adaptation Plan for the client.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Request A Deep Dive
              </button>
            </div>
            <div className=" mb-10 px-4 border border-1  py-[50px] rounded-xl border-gray-600">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/img/security_lock.svg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Security & Protection
              </h2>
              <p className="leading-relaxed text-base">
                At ADAPTA, we are committed to providing a secure and safe
                platform for our users. We understand the importance of security
                and have implemented several measures to ensure that your data
                is protected. If you have any questions about our security
                measures, please do not hesitate to contact us.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

const ClientsSection = () => {
  return (
    <>
      <section className="relative md:py-12 py-16 " id="partners">
        {/* Clients */}
        <div className="container px-4  sm:px-6 lg:px-8  mx-auto">
          {/* Title */}
          <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
            <h2 className="text-3xl font-semibold md:text-3xl md:leading-tight  text-gray-200">
              Our Trusted Partners
            </h2>
            <p className="mt-2  text-gray-400 text-xl">
              We are proud to collaborate with a diverse range of partners who
              share our vision and values.
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-5 gap-3 lg:gap-6">
            <div className="p-1 md:p-1 border bg-white border-[#5e5e5e] rounded-lg  flex justify-center items-center">
              <img
                className="logo-img"
                src="/img/clients/bill.png"
                alt="N"
                width="120"
                height="32"
                // className="w-20"
              />
            </div>
            <div className="p-1 md:p-1 border bg-white border-[#5e5e5e] rounded-lg flex justify-center items-center">
              <img
                className="logo-img"
                src="/img/clients/usaid.png"
                alt="N"
                width="120"
                height="32"
                // className="w-20"
              />
            </div>
            <div className="p-1 md:p-1 border bg-white border-[#5e5e5e] rounded-lg flex justify-center items-center">
              <img
                className="logo-img"
                src="/img/clients/ktda.webp"
                alt="N"
                width="120"
                height="32"
                // className="w-20"
              />
            </div>
            <div className="p-1 md:p-1 border bg-white border-[#5e5e5e] rounded-lg  flex justify-center items-center">
              <img
                className="logo-img"
                src="/img/clients/weblogo.webp"
                alt="N"
                width="100"
                height="32"
                // className="w-20"
              />
            </div>
            <div className="p-1 md:p-1 border bg-white border-[#5e5e5e] rounded-lg   flex justify-center items-center">
              <img
                className="logo-img"
                src="/img/clients/gdc_logo.webp"
                alt="N"
                width="80"
                height="20"
                // className="w-20"
              />
            </div>
          </div>
          {/* End Grid */}
        </div>
        {/* End Clients */}
      </section>
    </>
  );
};

export default ClientsSection;

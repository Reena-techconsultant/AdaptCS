"use client";

const ClientsSection = () => {
  return (
    <>
      <section className="relative md:py-12 py-16 " id="partners">
        {/* Clients */}
      
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

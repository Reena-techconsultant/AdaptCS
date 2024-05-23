"use client";

const FooterSection = () => {
  return (
    <>
      <footer className="pt-10 lg:pt-[60px] bg-[url('/abs-items/footer-ellipse-2.png')] bg-n900 bg-bottom">
        <div className="container py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <a
                className="flex-none text-xl font-semibold text-white"
                href="#"
                aria-label="Brand"
              >
                <span>
                  <img
                    className="logo-img"
                    src="/img/logo.png"
                    alt="N"
                    width="120"
                    height="32"
                    // className="w-20"
                  />
                </span>
              </a>
            </div>
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Company</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="https://www.adapta.earth/"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="https://www.adapta.earth/"
                  >
                    Adapta Earth
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="/policy"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="/terms"
                  >
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            {/* End Col */}
            <div className="col-span-2">
              <h4 className="font-semibold text-gray-100">Contact Us</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#products"
                  >
                    Email Address: info@adapta.earth
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">
                Copyright © {new Date().getFullYear()}.
                <a href="/" target="_blank" rel="noopener">
                  ADAPTA.
                </a>
              </p>
            </div>
            {/* End Col */}
            {/* Social Brands */}
            <div>
              <a className="text-sm text-gray-400" href="/terms">
                Terms and Conditions
              </a>
            </div>
            {/* End Social Brands */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;

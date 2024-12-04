import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const Hero = (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <header>
      <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50">
        <div className="sm:flex sm:items-center sm:justify-center sm:h-[110px] mx-auto my-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="backdrop relative flex  justify-center items-center sm:w-[928px] sm:px-3 h-[80px] sm:rounded-full border-buttonBorder border-[1px] border-solid bg-backgroundGray1 bg-opacity-75 ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 m-4 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-buttonGreen">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className=" flex flex-1 items-center justify-center sm:items-center sm:justify-between sm:mx-2">
              <div
                onClick={(e) => {
                  Hero(e);
                }}
                className="flex shrink-0 items-center"
              >
                <img alt="Spark" src="/sparklogo.PNG" className="h-8 w-auto" />
              </div>
              <div className="sm:flex sm:items-center sm:justify-around md:gap-24 hidden">
                <div className="sm:flex sm:items-center sm:justify-around md:gap-10 gap-5 hidden pr-16">
                  <a
                    href="#"
                    onClick={(e) => {
                      smoothScroll(e, "about-us");
                    }}
                  >
                    About
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      smoothScroll(e, "services");
                    }}
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      smoothScroll(e, "testimonials");
                    }}
                  >
                    Results
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      smoothScroll(e, "faqs");
                    }}
                  >
                    FAQ
                  </a>
                </div>
                <div className="hvr-animation bg-buttonGreen cursor-pointer hidden rounded-full sm:flex items-center justify-center pl-5 py-2 lg:gap-5 gap-3">
                  <div>Get template</div>
                  <div className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center mr-2">
                    <img
                      src="/right-arrow.svg"
                      alt="right-arrow"
                      className="h-[20px] w-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DisclosurePanel className="sm:hidden  backdrop bg-backgroundGray1 bg-opacity-75 ">
          <div className="space-y-1 pb-4 ">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
            <DisclosureButton
              as="a"
              href="#"
              onClick={(e) => {
                smoothScroll(e, "about-us");
              }}
              className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
            >
              About
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              onClick={(e) => {
                smoothScroll(e, "services");
              }}
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Services
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              onClick={(e) => {
                smoothScroll(e, "testimonials");
              }}
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Testimonials
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              onClick={(e) => {
                smoothScroll(e, "faqs");
              }}
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              FAQ
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
};

export default Nav;

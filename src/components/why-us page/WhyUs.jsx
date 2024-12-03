import WhyusCard from "./WhyusCard";

const WhyUs = () => {
  return (
    <div
      id="why-us"
      className="text-5xl text-black w-[100vw] flex flex-col  items-center justify-center gap-[50px] py-10"
    >
      <div className="rounded-full border-buttonBorder border-[1px] border-solid bg-backgroundGray2 text-sm text-light flex items-center justify-center p-2 w-[90px]">
        <div>Why us?</div>
      </div>
      <div className="text-center">
        <div className="darker">Unmatched Expertise</div>
        <div className="darker pt-3">and Proven Results</div>
      </div>
      <div className="text-base font-light">This is why we are the best.</div>
      <div className="flex lg:flex-row flex-col flex-wrap gap-6 w-full lg:items-stretch items-center justify-center">
        <WhyusCard
          title="Expertise in Web3 
          Technologies"
          body="Our team has deep knowledge and
            hands-on experience in Web3
            innovative solutions."
        />
        <WhyusCard
          title="Customized Solutions"
          body="We tailor our services to meet your
           specific needs, providing bespoke 
           solutions for your business."
        />
        <WhyusCard
          title="Comprehensive Support"
          body="From consultation to implementation,
          we offer end-to-end support to ensure"
        />
      </div>
      <div className="w-[165px] bg-buttonGreen rounded-full flex items-center justify-center pl-5 py-2 gap-5">
        <div className="text-medium text-base">Contact us</div>
        <div className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center mr-2">
          <img src="/right-arrow.svg" className="h-[20px] w-[20px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

const Hero = () => {
  return (
    <div
      id="hero"
      className="lg:text-6xl sm:text-5xl text-5xl text-black w-[100vw] flex items-center justify-center flex-col sm:gap-10 gap-5 mt-[100px] md:py-[150px] sm:py-48 py-44 mb-5"
    >
      <div className="flex items-center justify-center flex-col gap-5 text-center">
        <div className="darker px-3">Revolutionize Your Operations</div>
        <div className="darker px-3">with our Web3 Expertise</div>
      </div>
      <div className="flex items-center justify-center flex-col lg:text-lg text-sm text-[9px] text-medium text-center">
        <div className="px-3">
          Comprehensive solutions for blockchain integration,
        </div>
        <div className="px-3">smart contracts, and more.</div>
      </div>
      <div className="bg-buttonGreen rounded-full flex items-center justify-center pl-5 py-2 gap-5">
        <div className="text-medium text-base">Contact us</div>
        <div className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center mr-2">
          <img src="/right-arrow.svg" className="h-[20px] w-[20px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

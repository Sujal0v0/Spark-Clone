import ContactUs from "../Button/ContactUs.jsx";
const Hero = () => {
  return (
    <div
      id="hero"
      className="lg:text-6xl sm:text-5xl text-5xl text-black w-[100vw] flex items-center justify-center flex-col sm:gap-10 gap-5 mt-[100px] md:py-[190px] sm:py-52 xs:py-48 py-24 mb-5"
    >
      <img
        src="/left.PNG"
        alt="left"
        className="lg:w-[160px] md:w-[142px] xs:w-[80px] w-[50px] absolute left-0 md:bottom-48 bottom-12 "
      />
      <img
        src="/right.PNG"
        alt="right"
        className=" lg:w-[150px] md:w-[132px] xs:w-[70px] w-[50px] absolute right-0 md:bottom-48 bottom-12 "
      />
      <div className="flex items-center justify-center flex-col gap-5 text-center">
        <div className="darker px-3 z-10">Revolutionize Your Operations</div>
        <div className="darker px-3 z-10">with our Web3 Expertise</div>
      </div>
      <div className="flex items-center justify-center flex-col lg:text-lg text-sm text-[9px] text-medium text-center">
        <div className="px-3 z-10">
          Comprehensive solutions for blockchain integration,
        </div>
        <div className="px-3 z-10">smart contracts, and more.</div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Hero;

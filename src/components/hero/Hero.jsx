import ContactUs from "../Button/ContactUs.jsx";
const Hero = () => {
  return (
    <div
      id="hero"
      className="lg:text-6xl sm:text-5xl text-5xl text-black w-[100vw] flex items-center justify-center flex-col sm:gap-10 gap-5 mt-[100px] md:py-[190px] sm:py-52 py-48 mb-5"
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
      <ContactUs />
    </div>
  );
};

export default Hero;

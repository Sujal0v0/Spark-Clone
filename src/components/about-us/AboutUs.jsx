import ContactUs from "../Button/ContactUs.jsx";
const AboutUs = () => {
  return (
    <article id="about-us" className="mx-auto">
      <div className="sm:text-5xl text-5xl text-black w-[100vw] md:h-[120vh] flex md:flex-nowrap items-center justify-center lg:gap-[150px] gap-20 flex-wrap pb-20 px-20">
        <div className="flex flex-col md:gap-20 gap-10 justify-center">
          <div className="rounded-full border-buttonBorder border-[1px] border-solid bg-backgroundGray1 text-sm text-light flex items-center justify-center p-2 w-[95px] md:mx-0 mx-auto">
            <div>About us</div>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="darker">Transforming</div>
            <div className="darker">Business with Web3</div>
            <div className="darker">Technology</div>
          </div>
          <div className="sm:text-base text-sm text-normal">
            <div>
              At Spark, we specialize in providing cutting-edge Web3 consulting
            </div>
            <div>services to help businesses navigate the complexities of</div>
            <div>decentralized technologies.</div>
          </div>
          <ContactUs />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/spark1.PNG"
            alt="spark1"
            className="lg:w-[80%] md:w-[100%] w-[80%] mb-5"
          />
        </div>
      </div>
    </article>
  );
};

export default AboutUs;

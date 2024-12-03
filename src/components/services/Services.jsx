import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div
      id="services"
      className="text-5xl text-black bg-backgroundGray2 w-[100vw] flex flex-col items-center justify-center gap-[50px] py-28 px-[20px]"
    >
      <div className="rounded-full border-buttonBorder border-[1px] border-solid bg-white text-sm text-light flex items-center justify-center p-2 w-[90px]">
        <div>Services</div>
      </div>
      <div className="darker">Ways How we can Help you</div>
      <div className="text-[16px] font-light">
        Tailored solutions for your decentralized journey.
      </div>
      <div className="flex items-stretch justify-center gap-8 flex-wrap w-full">
        <ServiceCard
          title="Blockchain Integration"
          body="Seamlessly integrate blockchain technology into your existing
            systems to enhance security, transparency, and efficiency."
        />
        <ServiceCard
          title="Smart Contracts Development"
          body="Design and implement smart contracts that automate processes, reduce
            costs, and ensure tamper-proof transactions."
        />
        <ServiceCard
          title="Decentralized Applications"
          body="Develop robust and scalable decentralized applications that leverage
            the power of blockchain technology."
        />
        <ServiceCard
          title="Blockchain Integration"
          body="Seamlessly integrate blockchain technology into your existing
            systems to enhance security, transparency, and efficiency."
        />
        <ServiceCard
          title="Smart Contracts Development"
          body="Design and implement smart contracts that automate processes, reduce
            costs, and ensure tamper-proof transactions."
        />
        <ServiceCard
          title="Decentralized Applications"
          body="Develop robust and scalable decentralized applications that leverage
            the power of blockchain technology."
        />
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

export default Services;

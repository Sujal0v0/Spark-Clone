import CaseCard from "./CaseCard";

const CaseStudy = () => {
  return (
    <div
      id="case-studies"
      className="text-5xl text-black w-full flex xl:flex-row flex-col items-center justify-center lg:gap-[100px] gap-[50px] py-40 lg:px-32 md:px-20 px-10"
    >
      <div className="flex flex-col gap-8">
        <div className="rounded-full border-buttonBorder border-[1px] border-solid bg-backgroundGray2 text-sm text-light flex items-center justify-center p-2 w-[120px]">
          <div>Case studies</div>
        </div>
        <div>
          <div className="darker">Proven Impact with</div>
          <div className="darker">our Web3 Solutions</div>
        </div>
        <div className="text-base font-normal ">
          Discover how we&apos;ve helped businesses scale and innovate with Web3
          technology.
        </div>
        <div className="w-[165px] bg-buttonGreen rounded-full flex items-center justify-center pl-5 py-2 gap-5">
          <div className="text-medium text-base">Contact us</div>
          <div className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center mr-2">
            <img src="/right-arrow.svg" className="h-[20px] w-[20px]" alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-6 lg:w-[100%] w-[100%]">
        <CaseCard
          title="40% increase in customer retention"
          description="LoOo needed to enhance customer loyalty and retention. We
            implemented a blockchain-based rewards program that provided secure
            and transparent tracking of customer points, resulting in a 40%
            increase in customer retention within 3 months."
        />
        <CaseCard
          title="50% reduction in fraud"
          description="Logoipsum faced significant challenges with fraudulent activities.
            We integrated a blockchain solution for secure and immutable
            transaction records, which led to a 50% reduction in fraud incidents
            and boosted overall trust in their platform."
        />
      </div>
    </div>
  );
};

export default CaseStudy;

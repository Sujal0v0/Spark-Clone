import OurTeamCard from "./OurTeamCard";

const OurTeam = () => {
  return (
    <div
      id="our-team"
      className="text-5xl text-black bg-backgroundGray2 w-[100vw]  flex flex-col items-center justify-center gap-[40px] py-20 w-max-7xl"
    >
      <div className="rounded-full border-buttonBorder border-[1px] border-solid bg-white text-sm text-light flex items-center justify-center p-2 w-[90px]">
        <div>Our team</div>
      </div>
      <div className="darker px-4">Meet our Team</div>
      <div className="flex flex-col items-center justify-center text-base font-light">
        <div>A squad of web3 professionals ready to</div>
        <div>help you transform your business.</div>
      </div>
      <div className="flex flex-wrap gap-8 w-full items-center justify-center my-10">
        <OurTeamCard
          position="CEO"
          name="Peter Kane"
          description="
              Visionary leader driving innovation and growth with a strategic
              mindset and a passion for building transformative Web3 solutions."
          imgLocation="/team1.PNG"
        />
        <OurTeamCard
          position="CTO"
          name="Adam Smith"
          description="Visionary leader driving innovation and growth with a strategic
              mindset and a passion for building transformative Web3 solutions."
          imgLocation="/team2.PNG"
        />
        <OurTeamCard
          position="Lead designer"
          name="Alice Cooper"
          description="Creative powerhouse blending aesthetics with functionality,
              crafting visually stunning and user-centric designs that elevate
              digital experiences."
          imgLocation="/team3.PNG"
        />
        <OurTeamCard
          position="Lead marketer"
          name="Lucy Aston"
          description="
              Data-driven marketer with a knack for storytelling, spearheading brand strategies and campaigns that resonate
              and convert in competitive markets."
          imgLocation="/team4.PNG"
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

export default OurTeam;

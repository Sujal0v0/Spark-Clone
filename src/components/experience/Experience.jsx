import ExperienceCard from "./ExperienceCard";
import ContactUs from "../Button/ContactUs.jsx";

const Experience = () => {
  return (
    <div id="experience" className="mx-auto">
      <div className="sm:text-5xl text-5xl text-black w-[100vw] flex flex-col items-center gap-[50px] md:px-[80px] px-[20px] pb-[70px] md:text-left text-center">
        <div className="rounded-full border-buttonBorder border-[1px] border-solid bg-backgroundGray1 text-sm text-light flex items-center justify-center p-2 w-[95px]">
          <div>Experience</div>
        </div>
        <div>
          <div className="darker">We have experience with</div>
          <div className="darker">bringing results</div>
        </div>
        <div className="text-sm text-medium">The numbers speak for us.</div>
        <div className="flex gap-9 py-4 xl:flex-nowrap flex-wrap justify-center">
          <ExperienceCard
            svg="/clock.svg"
            title="Years of Web3 experience"
            number="5+"
            svgSize="25px"
          />
          <ExperienceCard
            svg="/butterfly.svg"
            title="Businesses transformed"
            number="20+"
            svgSize="25px"
          />
          <ExperienceCard
            svg="/dollar.svg"
            title="Dollars generated"
            number="80M"
            svgSize="45px"
          />
          <ExperienceCard
            svg="/plane.svg"
            title="Projects completed"
            number="100+"
            svgSize="35px"
          />
        </div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Experience;

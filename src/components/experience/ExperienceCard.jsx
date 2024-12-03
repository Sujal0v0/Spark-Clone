const ExperienceCard = ({ number, title, svg, svgSize }) => {
  return (
    <div className="xl:w-[256px] md:w-[calc(50%-4rem)] w-[95%] h-[238px] bg-backgroundGray2 rounded-2xl p-8 flex flex-col gap-6">
      <div className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-lg">
        <img src={svg} alt="" className={`w-[${svgSize}] h-[${svgSize}]`} />
      </div>
      <div className="darker">{number}</div>
      <div className="text-base">{title}</div>
    </div>
  );
};

export default ExperienceCard;

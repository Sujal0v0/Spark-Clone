const CaseCard = ({ title, description }) => {
  return (
    <div className="lg:w-[69%] md:w-[85%] w-[95%] bg-backgroundGray3 border-buttonBorder border border-solid rounded-lg lg:p-8 p-4 flex flex-col gap-5">
      <div className="text-xl pt-[10px]">{title}</div>
      <div className="text-base">{description}</div>
    </div>
  );
};

export default CaseCard;

const WhyusCard = ({ title, body }) => {
  return (
    <div className="lg:w-1/4 w-[80%] bg-backgroundGray2 rounded-2xl p-8 flex flex-col gap-6">
      <div className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-lg">
        <img src="/clock.svg" alt="" className="w-[25px] h-[25px]" />
      </div>
      <div className="text-xl">
        <div className="w-[80%]">{title}</div>
      </div>
      <div className="text-base font-light w-[80%]">{body}</div>
    </div>
  );
};

export default WhyusCard;

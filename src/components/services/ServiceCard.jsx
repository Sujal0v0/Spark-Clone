const ServiceCard = ({ title, body }) => {
  return (
    <div className="bg-white rounded-lg lg:w-1/4 md:w-[calc(25%+3rem)] w-[95%] flex gap-4 flex-col justify-between p-8">
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-base font-normal">{body}</div>
      <div className="text-base font-semibold flex gap-2">
        Learn More
        <img src="/long-arrow.svg" alt="" className="w-[16px]" />
      </div>
    </div>
  );
};

export default ServiceCard;

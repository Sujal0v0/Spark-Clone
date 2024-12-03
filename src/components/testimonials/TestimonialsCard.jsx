const TestimonialsCard = ({ comment, name, company }) => {
  return (
    <div className="h-[232px] w-[352px] rounded-xl bg-backgroundGray2 flex flex-col justify-between gap-3 px-6 py-8 flex-shrink-0">
      <div className="text-base font-normal">{comment}</div>
      <div className="items-center p-1 w-full">
        <div className="w-8 h-8 rounded-full bg-black inline-block"></div>
        <div className="px-4 py-2 inline-block">
          <div className="text-base font-semibold">{name}</div>
          <div className="text-sm font-light">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;

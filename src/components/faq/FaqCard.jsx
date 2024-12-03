import { useState } from "react";

const FaqCard = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <div className=" md:w-[545px] w-[80%] bg-backgroundGray2 transition ease-in-out duration-500 hover:bg-hoverBackground rounded-lg flex flex-col items-center justify-center py-3">
      <div className="text-lg w-full font-medium flex items-center justify-between px-6">
        <div>{question}</div>
        <div className="w-10 h-10 p-3" onClick={handleToggle}>
          <img src="/downArrow.svg" alt="" />
        </div>
      </div>
      <div
        className={`${
          !isVisible
            ? "opacity-0 max-h-0 py-0"
            : "opacity-100 max-h-[190px] py-4"
        } text-base px-6 transition-all duration-300 ease-in overflow-hidden`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FaqCard;

const Button = ({ content }) => {
  return (
    <div className="hvr-animation bg-buttonGreen hover:bg-buttonHover cursor-pointer hidden rounded-full md:flex items-center justify-center pl-5 py-2 gap-5">
      <div className="font-medium text-base">{content}</div>
      <div className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center mr-2">
        <img src="/right-arrow.svg" className="h-[20px] w-[20px]" />
      </div>
    </div>
  );
};

export default Button;

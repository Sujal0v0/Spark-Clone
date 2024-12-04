const ContactUs = () => {
  return (
    <div className="z-10 cursor-pointer hvr-animation bg-buttonGreen rounded-full flex items-center justify-center pl-5 py-2 gap-5 w-[165px]">
      <div className="text-medium text-base">Contact us</div>
      <div className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center mr-2">
        <img
          src="/right-arrow.svg"
          className="h-[20px] w-[20px]"
          alt="right-arrow"
        />
      </div>
    </div>
  );
};

export default ContactUs;

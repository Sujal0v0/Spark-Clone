const Contact = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="bg-backgroundContact text-white px-8 py-24 xl:w-[1200px] w-[95%] rounded-3xl flex flex-col gap-10 items-center justify-between">
        <div className="rounded-full bg-buttonContact text-sm font-medium flex items-center justify-center p-2 w-[98px]">
          <div>Contact us</div>
        </div>
        <div className="text-5xl font-semibold">
          Let&apos;s Scale your Business
        </div>
        <div className="text-[15px]">
          Discover how we can help your business grow.
        </div>
        <div className="bg-white text-black text-base font-medium rounded-full flex items-center justify-center pl-5 py-2 gap-5">
          Book a Call
          <div className="h-[42px] w-[42px] bg-black rounded-full flex items-center justify-center mr-2 p-[0.90rem]">
            <img src="/right-arrow-white.svg" className="h-[20px] w-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

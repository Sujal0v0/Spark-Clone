const OurTeamCard = ({ position, name, description, imgLocation }) => {
  return (
    <div className="xs:h-[340px] w-[545px] bg-white rounded-2xl flex xs:gap-8 gap-4 xs:py-0 py-2">
      <div>
        <img
          src={imgLocation}
          alt=""
          className="sm:h-[340px] xs:h-[300px] xs:w-full w-[200px] sm:p-6 xs:p-4 p-2"
        />
      </div>
      <div className="flex flex-col gap-4 w-1/3 justify-center">
        <div className="md:text-base text-sm font-light">{position}</div>
        <div className="md:text-xl text-lg font-semibold">{name}</div>
        <div className="md:text-base text-sm font-light">{description}</div>
        <a href="#!" className="me-6 [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default OurTeamCard;

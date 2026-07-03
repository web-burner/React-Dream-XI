// import React from 'react';
import bannerShadow from "../../assets/bg-shadow.png";
import bannerMainImage from "../../assets/banner-main.png";
const Banner = () => {
  return (
    <div className=" bg-black  rounded-3xl mb-7">
      <div
        className="h-120 bg-center bg-no-repeat bg-cover rounded-3xl flex flex-col justify-center items-center gap-4 "
        style={{ backgroundImage: `url(${bannerShadow})` }}
      >
        <img className=" h-50" src={bannerMainImage} alt="" />
        <div className="text-white text-center">
          <h2 className=" text-3xl font-bold mb-2">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p>Beyond Boundaries Beyond Limits</p>
        </div>
        <button className=" btn bg-[#E7FE29] border-none rounded-lg outline-1 outline-offset-4 outline-[#E7FE29] text-black">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;

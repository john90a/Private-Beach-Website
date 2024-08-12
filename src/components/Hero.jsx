import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/24033245/pexels-photo-24033245/free-photo-of-tropical-summer-resort-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="/"
      />
      <div className="bg-black/20 absolute top-0 left-0 w-full h-screen" />

      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white ">
        <div className="md:left-[10%] max-w-[2000px] m-auto p-4 ">
          <p>Explore More and Worry Less</p>
          <h1 className="font-bold text-4xl md:text-6xl drop-shadow-2xl">
            Private Beach & Gateways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Your Key to Comfort and Convenience{" "}
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;

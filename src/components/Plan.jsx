import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1300px] m-auto p-4 py-16 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-8 h-[300vh]">
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/24196289/pexels-photo-24196289/free-photo-of-boats-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=800 "
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=800 "
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/417083/pexels-photo-417083.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3757141/pexels-photo-3757141.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <img
          className="object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
      </div>

      {/* right side */}

      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-5xl">Plan Your Next Trip</h3>
        <p className=" text-2xl py-6"> The place to be for your next Safari</p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="border-black  bg-black/90 text-white mr-4 hover:shadow-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

import React from "react";

const Rooms = () => {
  return (
    <div className=" max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[36%] px-4 grid lg:grid-col-3 gap-4">
      <div className="">
        <h3 className="font-bold 4xl:">Fine Interior</h3>
        <p className="pt-2">The best vacation spot in kenya</p>
      </div>
      <div div className="grid grid-cols-4 col-span-2 gap-2 ">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/5028915/pexels-photo-5028915.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
      </div>
    </div>
  );
};

export default Rooms;

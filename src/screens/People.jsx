import React from "react";
// import One from "../assets/media/1.png";
// import Two from "../assets/media/2.png";
// import Three from "../assets/media/3.png";
// import Four from "../assets/media/4.png";
import Hello from "../assets/media/ello.png";
import ImageGrid from "../Compnents/ImageGrid";
const People = () => {
  return (
    <div className="bg-[#F4F4F4] rounded-2xl  flex font-sans">
      <div className="max-w-8xl rounded-lg p flex flex-col md:flex-row ">
        {/* Left */}
        <div
          className="flex-2 font-sans font-bold leading-9 pl-12
        "
        >
          {/* <h1 className="text-green-500 text-4xl font-bold mb-6">£llo</h1> */}
          <img className="h-[80px] mt-2 " src={Hello} />
          <p className="text-[#161421] text-[30px] font-semibold tracking-[0.15px] p-7">
            We are a bunch of people <br /> obsessed with all things <br />
            food! Two of us had <br /> startups in
            <span className="text-[#161421] rounded-[20px] p-1 font-semibold bg-[#4ff072]">
              food
            </span>
            <br />
            previously, and one comes <br />
            from a family of chefs. <br />
            Culinary is
            <span className="text-[#161421] rounded-[20px] p-1 font-semibold bg-teal-300">
              close to our
            </span>
            <br />
            <span className="text-[#161421] rounded-[20px] p-1 font-semibold bg-violet-300">
              hearts
            </span>
            , hence this is our <br />
            attempt to bring people <br />
            away from home closer to
            <br />
            home food. Curb cravings,
            <br /> indulge, meet people, <br /> spread joy.
          </p>
        </div>

        {/* Right */}
        {/* <div className="flex-1 grid grid-cols-2  ">
          <div className=" flex justify-center items-center h-21 rounded-md">
            <img src={One} />
          </div>
          <div className=" flex justify-center items-center h-21 rounded-md">
            <img src={Two} />
          </div>
          <div className=" flex justify-center items-center h-21 rounded-md">
            <img src={Three} />
          </div>
          <div className=" flex justify-center items-center h-19 rounded-md">
            <img height="200" src={Four} />
          </div>
        </div> */}
        <div className="pl-60 pt">
          <ImageGrid />
        </div>
      </div>
    </div>
  );
};

export default People;

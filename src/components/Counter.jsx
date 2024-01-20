import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setCounter(true);
      }}
      onExit={() => {
        setCounter(false);
      }}
    >
      <div className="py-32 bg-[#5D61BF] flex justify-center items-center">
        {counter && (
          <div className="flex gap-6">
            <div className="count px-10 py-2 border rounded-md">
              <span className="text-5xl text-white font-semibold">
                <CountUp end={35000} duration={2.75} separator=" " />
              </span>
              <h3 className="text-lg text-white">Resumes built</h3>
            </div>
            <div className="count px-10 py-2 border rounded-md">
              <span className="text-5xl text-white font-semibold">
                <CountUp end={76342} duration={2.75} separator=" " />
              </span>
              <h3 className="text-lg text-white">Cover Letter built</h3>
            </div>
            <div className="count px-10 py-2 border rounded-md">
              <span className="text-5xl text-white font-semibold">
                <CountUp end={6554} duration={2.75} separator=" " />
              </span>
              <h3 className="text-lg text-white">Website built</h3>
            </div>
            <div className="count px-10 py-2 border rounded-md">
              <span className="text-5xl text-white font-semibold">
                <CountUp end={643534324} duration={2.75} separator=" " />
              </span>
              <h3 className="text-lg text-white">Signups</h3>
            </div>
          </div>
        )}
      </div>
    </ScrollTrigger>
  );
};

export default Counter;

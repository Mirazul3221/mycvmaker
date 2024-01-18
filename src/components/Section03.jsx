import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Section03 = () => {
  const ref = useRef(null);
  const main = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ele = ref.current;
    const mainDiv = main.current;
    gsap.to(ele, {
      scrollTrigger: {
        trigger: mainDiv,
      },
      x: 200,
    });
  }, []);

  return (
    <div ref={main} className="h-screen bg-sky-500">
      <div ref={ref} className="w-28 h-28 bg-amber-500">
        I am amber
      </div>
    </div>
  );
};

export default Section03;

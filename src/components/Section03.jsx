import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Section03 = () => {
  const ref = useRef(null);
  const main = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ele = ref.current;
    const mainDiv = main.current;
    console.log(ele, mainDiv);
    gsap.to(ele, {
      scrollTrigger: {
        trigger: ele,
        start: "top center",
        markers: true,
        scrub: true,
      },
      x: 700,
      rotate: 360,
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

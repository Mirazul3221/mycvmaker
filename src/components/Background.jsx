import React, { useEffect, useRef } from "react";
// import img from "../back-img/background.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Background = () => {
  const ref = useRef(null);
  const navBox = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const containerRef = ref.current;
    const pinBox = containerRef.offsetWidth;
    const navigate = navBox.current;
    console.log(pinBox);
    gsap.to(containerRef, {
      scrollTrigger: {
        trigger: containerRef,
        start: "top top",
        end: 5 * pinBox,
        pin: true,
        scrub: true,
        markers: true,
      },
    });
    gsap.to(navigate, {
      scrollTrigger: {
        trigger: navigate,
        start: "top top",
        end: 5 * pinBox,
        pin: true,
        scrub: true,
        // markers: true,
      },
      x: -1500,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div
        ref={ref}
        className="banner_img h-screen flex justify-center items-center overflow-hidden"
      >
        <div ref={navBox} className="ml-[1500px]">
          <p className="w-1/2 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In saepe
            vero quo consectetur delectus sed ratione kconsequuntur aspernatur,
            cum necessitatibus fuga molestiae!jhjhn
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;

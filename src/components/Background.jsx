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
        end: "bottom 100%",
        // pin: true,
        scrub: true,
        markers: true,
      },
      x: 600,
    });
    gsap.to(navigate, {
      scrollTrigger: {
        trigger: navigate,
        start: "top top",
        end: pinBox,
        pin: true,
        scrub: true,
        // markers: true,
      },
      x: -7000,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div
        ref={ref}
        className="banner_img min-h-screen flex justify-center items-center overflow-hidden"
      >
        <div ref={navBox} className="ml-[1200px]">
          <p>
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

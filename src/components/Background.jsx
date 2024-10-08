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
        end: 4 * pinBox,
        pin: true,
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(navigate, {
      scrollTrigger: {
        trigger: navigate,
        start: "top top",
        end: 4 * pinBox,
        pin: true,
        scrub: true,
        // markers: true,
      },
      x: -1000,
    });
  }, []);

  return (
    <div className="min-h-screen md:block hidden">
      <div
        ref={ref}
        className="banner_img h-screen flex justify-center items-center overflow-hidden relative"
      >
        <div ref={navBox} className="ml-[1600px] w-[60vw] h-full">
          <div className="left mt-28">
            <h2 className="text-6xl text-white text-[#212529] font-semibold">
              Get Better Solution For <br /> Your Resume.
            </h2>
            <p className="text-white w-1/2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              et voluptas magni ullam eos qui, velit sapiente consectetur
              placeat, magnam harum a blanditiis! Rem pariatur atque corrupti
              aut sit et?
            </p>
            <div className="mt-4">
              <a
                className="py-2 px-6 bg-[#5D61BF] text-white rounded-md"
                href="./hello"
              >
                ORDER A RESUME NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;

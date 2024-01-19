import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Banner = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    // const main = ref.current;
    const desktop = ref1.current;
    const laptop = ref2.current;
    const mobile = ref3.current;
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to(desktop, {
    //   x:500
    // })
    // const tl = gsap.timeline();

    gsap.from(desktop, {
      // scrollTrigger: {
      //   trigger: desktop,
      //   start: "top top",
      //   end: "center 10%",
      //   scrub: true,
      //   markers: true,
      // },
      y: -100,
      scale: 2.5,
      opacity: 0,
      ease: "power3",
      duration: 0.2,
    });
    gsap.from(laptop, {
      // scrollTrigger: {
      //   trigger: main,
      //   start: "top 50%",
      //   end: "center 10%",
      //   scrub: true,
      // },
      x: 100,
      rotate: 360,
      y: -500,
      scale: 2.5,
      opacity: 0,
      ease: "power3",
      duration: 0.5,
    });
    gsap.from(mobile, {
      // scrollTrigger: {
      //   trigger: main,
      //   start: "top 50%",
      //   end: "top 10%",
      //   scrub: true,
      // },
      x: -500,
      duration: 1,
      rotate: -360,
      scale: 2.5,
      opacity: 0,
      ease: "power3",
    });
  }, []);

  return (
    <div className="mx-20">
      <h2 className="text-lg font-medium text-[#5D61BF]">
        WELCOME TO MY CV CREATOR
      </h2>
      <div className="mt-4">
        <h2 className="text-6xl text-[#212529] font-semibold">
          Create a <br /> compelling CV with <br /> AI assistance in <br />{" "}
          minutes.
        </h2>
      </div>
      <div className="bottom flex justift-between">
        <div className="left w-1/2">
          <h3 className="text-2xl font-medium mt-8">
            Online resume builder with AI assistance
          </h3>
          <p className="mt-2 w-2/3 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            commodi, rem, molestias illum praesentium provident doloremque
          </p>
          <div className="mt-4">
            <a
              className="py-2 px-6 bg-[#5D61BF] text-white rounded-md"
              href="./hello"
            >
              GET START
            </a>
          </div>
        </div>
        <div ref={ref} className="right w-1/2 px-10">
          <div className="relative w-full -mt-[35%]">
            <img ref={ref1} src="./images/desktop.png" alt="" />
            <img
              ref={ref2}
              className="absolute bottom-0 -left-48 w-[600px]"
              src="./images/laptop.png"
              alt="ddsg"
            />
            <img
              ref={ref3}
              className="absolute bottom-0 -right-24 h-96"
              src="./images/mobile.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

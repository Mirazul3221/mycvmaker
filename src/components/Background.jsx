import React, { useEffect, useRef } from "react";
// import img from "../back-img/background.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Background = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const containerRef = ref.current;
    console.log(containerRef);
    gsap.to(containerRef, {
      scrollTrigger: {
        trigger: containerRef,
        start: "top top",
        end: 12000,
        pin: true,
        scrub: true,
        markers: true,
      },
      x: 7000,
    });
  }, []);

  return (
    <div ref={ref} className="banner_img min-h-screen">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. In saepe vero
      quo consectetur delectus sed ratione consequuntur aspernatur, cum
      necessitatibus fuga molestiae! Aliquid aperiam velit, magnam saepe ipsam
      dolores ratione.
    </div>
  );
};

export default Background;

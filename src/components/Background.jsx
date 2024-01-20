import React, { useEffect, useRef } from "react";
// import img from "../back-img/background.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Background = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const containerRef = ref.current;
    // const currentRef = testRef.current;
    // console.log(currentRef);
    gsap.to(containerRef, {
      scrollTrigger: {
        trigger: containerRef,
        start: "top top",
        end: 12000,
        pin: true,
        scrub: true,
        markers: true,
      },
    });
    // gsap.to(currentRef, {
    //   scrollTrigger: {
    //     trigger: currentRef,
    //     start: "top center",
    //     end: 12000,
    //     pin: true,
    //     scrub: true,
    //     markers: true,
    //   },
    //   x: 7000,
    // });
  }, []);

  return (
    <div className="min-h-screen">
      <div ref={ref} className="banner_img min-h-screen">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In saepe vero
        quo consectetur delectus sed ratione kconsequuntur aspernatur, cum
        necessitatibus fuga molestiae!jhjhn
      </div>
    </div>
  );
};

export default Background;

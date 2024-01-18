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
        start: "top center",
        markers: true,
      },
      x: 200,
    });
  }, []);

  return (
    <div ref={main} className="h-screen bg-sky-500">
      <div ref={ref} className="w-28 h-28 bg-amber-500">
        I am amber
      </div>
      <div className="h-screen bg-gray-500">sfvzdf</div>
      <div className="h-screen bg-gray-500">sfvzdf</div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        molestias consectetur laudantium doloremque tempora, unde dolorum,
        voluptatibus illo hic quia asperiores necessitatibus a corporis aliquam.
        Eveniet itaque ut doloribus.
      </p>

      <div className="h-screen bg-gray-500">sfvzdf</div>
      <div className="h-screen bg-gray-500">sfvzdf</div>
      <div className="h-screen bg-gray-500">sfvzdf</div>
    </div>
  );
};

export default Section03;

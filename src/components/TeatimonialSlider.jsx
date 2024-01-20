import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TeatimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-20 bg-gray-200">
      <div className="py-10">
        <div className="text-center mt-10">
          <h2 className="text-2xl">TESTIMONIALS</h2>
          <h3 className="text-5xl font-medium">
            Some Lovely Feedback From <br /> Our Clients.
          </h3>
        </div>
      </div>
      <Slider {...settings}>
        <div className="item gap-10 p-10 bg-gray-100 rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum
            incidunt autem corrupti libero molestias, temporibus eum repellat
            dignissimos perspiciatis esse, commodi, blanditiis cumque doloremque
            explicabo ipsa in rerum possimus?
          </p>
          <div className="mt-4">
            <img
              className="w-20 border-2 border-black h-20 rounded-full"
              src="./images/man.png"
              alt="gzdf"
            />
            <p>John Doe</p>
          </div>
        </div>
        <div className="item gap-10 p-10 bg-gray-100 rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum
            incidunt autem corrupti libero molestias, temporibus eum repellat
            dignissimos perspiciatis esse, commodi, blanditiis cumque doloremque
            explicabo ipsa in rerum possimus?
          </p>
          <div className="mt-4">
            <img
              className="w-20 border-2 border-black h-20 rounded-full"
              src="./images/man01.jpg"
              alt="gzdf"
            />
            <p>John Doe</p>
          </div>
        </div>
        <div className="item gap-10 p-10 bg-gray-100 rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum
            incidunt autem corrupti libero molestias, temporibus eum repellat
            dignissimos perspiciatis esse, commodi, blanditiis cumque doloremque
            explicabo ipsa in rerum possimus?
          </p>
          <div className="mt-4">
            <img
              className="w-20 border-2 border-black h-20 rounded-full"
              src="./images/man02.jpg"
              alt="gzdf"
            />
            <p>John Doe</p>
          </div>
        </div>
        <div className="item gap-10 p-10 bg-gray-100 rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum
            incidunt autem corrupti libero molestias, temporibus eum repellat
            dignissimos perspiciatis esse, commodi, blanditiis cumque doloremque
            explicabo ipsa in rerum possimus?
          </p>
          <div className="mt-4">
            <img
              className="w-20 border-2 border-black h-20 rounded-full"
              src="./images/man.png"
              alt="gzdf"
            />
            <p>John Doe</p>
          </div>
        </div>
        <div className="item gap-10 p-10 bg-gray-100 rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum
            incidunt autem corrupti libero molestias, temporibus eum repellat
            dignissimos perspiciatis esse, commodi, blanditiis cumque doloremque
            explicabo ipsa in rerum possimus?
          </p>
          <div className="mt-4">
            <img
              className="w-20 border-2 border-black h-20 rounded-full"
              src="./images/man01.jpg"
              alt="gzdf"
            />
            <p>John Doe</p>
          </div>
        </div>
        <div className="item gap-10 p-10 bg-gray-100 rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum
            incidunt autem corrupti libero molestias, temporibus eum repellat
            dignissimos perspiciatis esse, commodi, blanditiis cumque doloremque
            explicabo ipsa in rerum possimus?
          </p>
          <div className="mt-4">
            <img
              className="w-20 border-2 border-black h-20 rounded-full"
              src="./images/man02.jpg"
              alt="gzdf"
            />
            <p>John Doe</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TeatimonialSlider;

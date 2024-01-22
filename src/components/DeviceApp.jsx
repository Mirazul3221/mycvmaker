import React from "react";

const DeviceApp = () => {
  return (
    <div>
      <div className="py-20">
        <div className="text-center mt-10">
          <h2 className="md:text-2xl text-lg">OUR PRODUCT</h2>
          <h3 className="md:text-5xl text-3xl font-medium">
            Download any of our Apps
          </h3>
        </div>
        <h3 className="mt-4 text-center text-4xl text-rose-500">
          DesktopDesktop
        </h3>
        <div className="flex flex-col md:flex-row px-4 md:px-0 justify-center gap-6 mt-6">
          <img src="./images/app01.png" alt="" />
          <img src="./images/app02.png" alt="" />
          <img src="./images/app03.png" alt="" />
          <img src="./images/app04.png" alt="" />
        </div>
        <h3 className="mt-4 text-center text-4xl text-green-500">Mobile</h3>
        <div className="flex flex-col md:flex-row px-4 md:px-0 justify-center gap-6 mt-6">
          <img src="./images/app05.png" alt="" />
          <img src="./images/app06.png" alt="" />
          <img src="./images/app07.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DeviceApp;

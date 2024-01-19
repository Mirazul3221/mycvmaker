// import React from "react";
import { MdAddCall } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="bg-[#212529] pt-20">
      <div className="top grid grid-cols-3 gap-10">
        <div className="item px-10">
          <div className="heading">
            <h2 className="mb-2 text-2xl text-white">Contact Info</h2>
            <div className="w-full h-[1px] bg-gray-600">
              <div className="w-1/3 h-[1px] bg-white"></div>
            </div>
          </div>
          <div className="mt-4 space-y-6">
            <div className="call flex gap-4 items-center">
              <MdAddCall size={40} color="gray" />
              <div className="">
                <p className="text-md text-gray-300">MON TO SUN : 24/7</p>
                <h3 className="text-2xl text-gray-300">UK +</h3>
              </div>
            </div>
            <div className="call flex gap-4 items-center">
              <MdOutlineMessage size={40} color="gray" />
              <div className="">
                <p className="text-md text-gray-300">DO YOU HAVE A QUESTION?</p>
                <h3 className="text-2xl text-gray-300">
                  lorem ipsum dolor.com
                </h3>
              </div>
            </div>
            <div className="call flex gap-4 items-center">
              <IoShareSocialOutline size={40} color="gray" />
              <div className="">
                <p className="text-md text-gray-300">DO YOU HAVE A QUESTION?</p>
                <h3 className="text-2xl text-gray-300">
                  lorem ipsum dolor.com
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="item px-10">
          <div className="heading">
            <h2 className="mb-2 text-2xl text-white">Quick Links</h2>
            <div className="w-full h-[1px] bg-gray-600">
              <div className="w-1/3 h-[1px] bg-white"></div>
            </div>
          </div>
          <div className="body flex gap-10 mt-4">
            <div className="left">
              <ul className="text-gray-300 space-y-3">
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="./">Order a Resume</a>
                </li>
                <li>
                  <a href="./">Cover Letter</a>
                </li>
                <li>
                  <a href="./">Word Template</a>
                </li>
                <li>
                  <a href="./">Blog</a>
                </li>
                <li>
                  <a href="./">Url to PDF</a>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul className="text-gray-300 space-y-3">
                <li>
                  <a href="./">Download Apps</a>
                </li>
                <li>
                  <a href="./">Resume</a>
                </li>
                <li>
                  <a href="./">Website</a>
                </li>
                <li>
                  <a href="./">Job Alert</a>
                </li>
                <li>
                  <a href="./">Career</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item px-10">
          <div className="heading">
            <h2 className="mb-2 text-2xl text-white">Our Company</h2>
            <div className="w-full h-[1px] bg-gray-600">
              <div className="w-1/3 h-[1px] bg-white"></div>
            </div>
          </div>
          <div className="body flex gap-10 mt-4">
            <div className="left">
              <ul className="text-gray-300 space-y-3">
                <li>
                  <a href="./">About Us</a>
                </li>
                <li>
                  <a href="./">Order a Resume</a>
                </li>
                <li>
                  <a href="./">Privacy Policy</a>
                </li>
                <li>
                  <a href="./">Affiliate Program</a>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul className="text-gray-300 space-y-3">
                <li>
                  <a href="./">Contact Us</a>
                </li>
                <li>
                  <a href="./">Terms & Conditions</a>
                </li>
                <li>
                  <a href="./Sponsorship">Sponsorship Program</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-10">
        <div className="border-t-[1px] border-gray-600 py-8 flex justify-between">
          <h3 className="text-gray-300">
            Copyright 2024 My Cv Creator. All rights reserved
          </h3>
          <div>
            <ul className="text-gray-300 flex gap-2">
              <li className="px-4">Terms & Conditions</li>

              <li className="">
                <a className="border-x-[1px] px-4" href="./">
                  Privacy Policy
                </a>
              </li>

              <li className="px-4">Affiliate Program</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

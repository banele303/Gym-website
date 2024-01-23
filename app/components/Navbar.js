"use client";
import '../globals.css';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div>
        <div
          className={
            scrolled
              ? "scrolled w-screen h-[80px] z-10  fixed drop-shadow-lg pt-[2rem] bg-gray-900 pb-[2rem]"
              : " w-screen h-[80px] z-10  fixed drop-shadow-lg pt-[3rem] "
          }
        >
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center pl-6 realtive  md:pl-[4rem]">
              <Image
                src="/sectiona.png"
                alt="logo"
                className="py-[1rem] absolute w-[22rem] h-[7rem]"
                width={200}
                height={50}
              />
            </div>
            <div className="hidden md:flex pr-4">
              <ul className="hidden md:flex ">
                <li className="md:ml-3 py-3  text-[19px] font-Poppins  px-6  border-5 border-sky-900 cursor-pointer text-white  font-bold">
                  <Link href="/">Home</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-white font-bold">
                  <Link href="/gym">GYMS</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-white font-bold">
                  <Link href="/about-us">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={handleClick}
                className="outline-none mobile-menu-button"
              >
                {nav ? (
                  <XIcon className="h-6 w-6 text-white" />
                ) : (
                  <MenuIcon className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "mobile-menu flex flex-col items-center justify-center bg-sky-900 text-white h-screen w-screen fixed top-0 left-0 z-50"
              : "hidden"
          }
        >
          <ul className="text-center">
            <li className="py-3 border-b-2 border-gray-400">
              <Link href="/">Home</Link>
            </li>
            <li className="py-3 border-b-2 border-gray-400">
              <Link href="/gym">GYMS</Link>
            </li>
            <li className="py-3 border-b-2 border-gray-400">
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

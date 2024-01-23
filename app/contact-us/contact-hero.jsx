"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./contact-form";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function ContactHero() {
  return (
    <motion.div className="">
      <section className="bg-gray-900 flex justify-center items-center h-[300px] w-full">
        <h2 className="text-[20px] md:text-[38px] text-center text-blue-500 font-bold pt-[3rem]">
          Contact Us
        </h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 p-[2rem]">
        <Card
          color="gray"
          variant="gradient"
          className="w-full max-w-[20rem] p-8"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal text-[20px] md:text-[25px] italic uppercase"
            >
              CONTACT INFORMATION
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="self-end text-[15px] md:text-[16px]">
                Fitness Gym Northlands Corner
              </span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

                <Typography className="font-normal text-blue-400 opacity-70">
                  sales@fitness.co.za
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Typography className="font-normal">
                  +278 732 723 7547
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Avianto Estate, Clubhouse Entrance.
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Monthly MemberShip
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Yearly MemberShip
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Buy Now
            </Button>
          </CardFooter>
        </Card>

        <Card
          color="gray"
          variant="gradient"
          className="w-full max-w-[20rem] p-8"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal text-[20px] md:text-[22px] italic uppercase"
            >
              MEMBERSHIP PRICING SUMMARY
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="self-end text-[15px] md:text-[16px]">
                Fitness Gym Northlands Corner
              </span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">BASE: R500 p/m</Typography>
              </li>
              <li className="flex items-center gap-4">
                <Typography className="font-normal opacity-80">
                  DROP IN RATE FOR THE GYM: R100 per session
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <Typography className="font-normal font-bold opacity-80">
                  DROP IN RATE FOR BOXING: R200 per Session
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <Typography className="font-normal font-bold opacity-80">
                  One membership allows you access to both gym's, Northlands
                  Corner and Avianto.
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <Typography className="font-normal font-bold opacity-80">
                  For additional options, i.e. private sessions, semi-private
                  sessions etc, please click{" "}
                  <span className="text-blue-500">here</span>
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Buy Now
            </Button>
          </CardFooter>
        </Card>

        <Card color="" variant="gradient" className="w-full  max-w-[30rem] p-8">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none   pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal text-black text-[20px] md:text-[25px] italic uppercase"
            >
              OPENINGS TIMES
            </Typography>
            <Typography
              variant="h1"
              color="black"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="self-end text-[15px] text-black md:text-[16px]">
                Fitness Gym Northlands Corner
              </span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  MONDAY - FRIDAY 05:00 - 20:30
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Saturday 07:00 - 14:00
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Sunday 07:00 - 12:00
                </Typography>
              </li>
            </ul>
          </CardBody>
        </Card>
      </section>

      <h2 className="text-[22px] pt-[4rem] font-semibold md:text-[35px] text-center">
        Send us a <span className="text-blue-500">Message</span>
      </h2>

      <section className="flex flex-col md:flex-row justify-center gap-10 items-center px-2 md:px-[2rem]">
        <ContactForm />

        <Card
          color=""
          variant="gradient"
          className="w-full md:px-[2rem] px-[1rem] pb-[3rem] mb-[3rem]  max-w-[40rem]"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none   pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal text-black text-bold text-[20px] md:text-[25px]  uppercase"
            >
              GYM OWNER
            </Typography>
            <Typography
              variant="h1"
              color="black"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="self-end text-[15px] fotn-semibold  text-gray-500 md:text-[16px]">
                OWNER NAME
              </span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Email: gymowner@fit.co.za
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Phone : 078 133 5432
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Cell : 122 432 3421
                </Typography>
              </li>
            </ul>
          </CardBody>
        </Card>
      </section>
    </motion.div>
  );
}

export default ContactHero;

"use client"

import React from "react";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Vivian W",
    text: "This product was easy to use and very impactful on the marketing of my company.",
    role: "Gym Owner",
  },
  {
    name: "Mike M",
    text: "I highly recommend them for any company that wants to create more value in the marketplace and see potential profits",
    role: "Fitness Instructor",
  },
  {
    name: "Naido v",
    text: '"The support staff was so helpful, and there is nothing that I do not like about their marketing system',
    role: "Gym owner",
  },
  {
    name: "Lorien",
    text: "No need to look any further for a marketing company to handle your business needs. We cant imagine a better choice than SouthFlow Marketing",
    role: "Owner/Mananger",
  },
  {
    name: "Mlamuleli p",
    text: "The SEO has been successful in pushing us up the ranks.",
    role: "Studio Mananger",
  },
  {
    name: "Denzel B",
    text: "Our overall experience has been amazing in terms of value and customer support",
    role: "Martial arts Studio owner",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const TestimonialPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-[3rem] md:pl-[4rem] mx-auto">
      <h2 className="text-[18px] md:text-[35px] text-blue-500 text-center pb-9 py-4">
        What Our Clients Are Saying
      </h2>

      <div className="flex flex-wrap w-full justify-center items-center mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8"
          >
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[20rem] bg-gray-900 p-[2rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="md"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h6" color="white">
                      {testimonial.name}
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography color="white">
                    {testimonial.role}
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography className="text-white opacity-70">
                  {testimonial.text}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="container bg-gray-900 mx-auto px-4 py-8 flex flex-col items-center">
      <h2 className="text-[19px] md:text-[40px] font-bold text-center italic mb-8">
        Trusted And Loved By Hundreds <br /> Of South Africans
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div>
                  <h2 className="text-lg font-Poppins font-bold text-gray-800">
                    {testimonial.name}
                  </h2>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 text-yellow-500 ml-1 ${
                          testimonial.rating >= i + 1 ? "fill-current" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0l2.157 6.608h6.993l-5.67 4.127 2.19 6.686L10 14.47l-5.671 4.127 2.19-6.686L.85 6.608h6.993L10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 font-Poppins text-[16px]">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialPage;

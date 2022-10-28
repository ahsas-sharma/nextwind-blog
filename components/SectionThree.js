import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SectionThree() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      {/* SWIPER */}
      <Swiper slidesPerView={2} spaceBetween={50}>
        <SwiperSlide>{post()}</SwiperSlide>
        <SwiperSlide>{post()}</SwiperSlide>
        <SwiperSlide>{post()}</SwiperSlide>
        <SwiperSlide>{post()}</SwiperSlide>
      </Swiper>
    </section>
  );
}

function post() {
  return (
    <div className="grid ">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} width="600" height="400" alt="" />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel{" "}
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-600 hover:text-gray-800">
              - October 27, 2022
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning.
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          This is some random text that goes below the main title. Ideally,
          there should be a lot to learn from unhappy customers. But we often
          become so defensive and try our level best to avoid any sort of
          criticism that many of these learning opportunities simply disappear.
        </p>
        <Author />
      </div>
    </div>
  );
}

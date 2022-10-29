import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";
import useFetcher from "../lib/fetcher";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SectionThree() {
  const { data, isLoading, isError } = useFetcher("/api/popular");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      {/* SWIPER */}
      <Swiper slidesPerView={2} spaceBetween={50}>
        {data.map((data) => (
          <SwiperSlide key={data.id}>{<Post data={data} />}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Post({ data }) {
  const { id, category, img, published, author, title, subtitle } = data;
  return (
    <div className="grid ">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || "/"}
              width="600"
              height="400"
              alt=""
              className="rounded"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <a className="text-orange-600 hover:text-orange-800">{category}</a>

          <a className="text-gray-600 hover:text-gray-800">- {published}</a>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle}</p>
        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";
import useFetcher from "../lib/fetcher";

export default function SectionOne() {
  const { data, isLoading, isError } = useFetcher("/api/trending");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2000,
          }}
        >
          {data.map((data, index) => (
            <SwiperSlide key={index}>{Slide((data = { data }))}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { id, category, img, published, author, title, subtitle } = data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img || "/"} width="600" height="600" alt="" />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col mx-10">
        <div className="cat">
          <a className="text-orange-600 hover:text-orange-800">
            {category || "Unknown"}{" "}
          </a>
          <a className="text-gray-600 hover:text-gray-800">
            - {published || "Unknown"}
          </a>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title || "Unknown"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle || "Unknown"}</p>
        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}

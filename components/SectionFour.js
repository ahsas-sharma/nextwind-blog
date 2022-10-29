import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";
import useFetcher from "../lib/fetcher";

export default function SectionFour() {
  const { data, isLoading, isError } = useFetcher("/api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className="container mx-auto md:px-20 py-5">
      <div className="grid lg:grid-cols-2 gap-x-16 ">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {/* POSTS */}
            {data.map(
              (value, index) =>
                value.category.includes("Business") && (
                  <Post key={index} data={value} />
                )
            )}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {/* POSTS */}
            {data.map(
              (value, index) =>
                value.category.includes("Travel") && (
                  <Post key={index} data={value} />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, category, img, published, author, title } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || "/"}
              className="rounded"
              width="450"
              height="300"
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <a className=" text-sm text-orange-600 hover:text-orange-800">
            {category}
          </a>

          <a className="text-sm text-gray-600 hover:text-gray-800">
            - {published}
          </a>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-l font-black text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>
        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}

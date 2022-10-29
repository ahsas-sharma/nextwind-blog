import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";
import useFetcher from "../lib/fetcher";

export default function SectionTwo() {
  const { data, isLoading, isError } = useFetcher("/api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  if (data) {
    return (
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
        {/* GRID COLUMNS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {data.map((value, index) => (
            <Post data={value} key={value.id} />
          ))}
        </div>
      </section>
    );
  }
}

function Post({ data }) {
  const { id, category, img, published, author, title, subtitle } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || "/"}
              width="500"
              height="300"
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
            <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
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

import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
export default function Related({ post }) {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
        <Post data={post} />
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, category, img, published, author, title, subtitle, description } =
    data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || "/"}
              className="rounded"
              width="500"
              height="300"
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}

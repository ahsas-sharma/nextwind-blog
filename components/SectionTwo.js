import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";

export default function SectionTwo() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      {/* GRID COLUMNS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {post()} {post()} {post()}
        {post()} {post()} {post()}
      </div>
    </section>
  );
}

function post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/img1.jpg"}
              width="500"
              height="350"
              alt=""
              className="rounded"
            />
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
            <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
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

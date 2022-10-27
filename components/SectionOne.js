import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

export default function SectionOne() {
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {slide()}
      </div>
    </section>
  );
}

function slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} width="600" height="600" alt="" />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col mx-10">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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

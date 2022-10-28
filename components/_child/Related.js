import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
export default function Related() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">{post()}</div>
    </section>
  );
}

function post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/img1.jpg"}
              className="rounded"
              width="300"
              height="300"
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
        <Author />
      </div>
    </div>
  );
}

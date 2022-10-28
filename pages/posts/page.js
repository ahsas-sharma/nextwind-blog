import Format from "../../layout/Format";
import Author from "../../components/_child/Author";
import Image from "next/image";
import Link from "next/link";
import Related from "../../components/_child/Related";
export default function Page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Your most unhappy customers are your greatest source of learning.
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="py-10">
            <Image
              src={"/images/img1.jpg"}
              width={900}
              height={900}
              alt="Blog Image"
            />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <p></p>
        </div>
        <Related />
      </section>
    </Format>
  );
}

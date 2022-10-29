import Format from "../../layout/Format";
import Author from "../../components/_child/Author";
import Image from "next/image";
import Link from "next/link";
import Related from "../../components/_child/Related";
import getPost from "../../lib/helper";

export default function Page({ post, relatedPost }) {
  const { category, img, published, author, title, subtitle, description } =
    post;
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{title}</h1>
          <p className="text-gray-500 text-xl text-center">{subtitle}</p>
          <div className="py-10">
            <Image src={img || "/"} width={900} height={600} alt="Blog Image" />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description}
          </div>
          <p></p>
        </div>
        {}
        <Related post={relatedPost} />
      </section>
    </Format>
  );
}
export async function getStaticProps({ params: { postId } }) {
  const post = await getPost(postId);
  const randomId = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  const relatedPost = await getPost(randomId);
  return {
    props: { post, relatedPost },
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

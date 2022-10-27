import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function Format({ children }) {
  return (
    <>
      <Head>
        <title>Nextwind-Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

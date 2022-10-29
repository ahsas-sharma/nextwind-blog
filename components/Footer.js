import Link from "next/link";
import Image from "next/image";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Newsletter from "./_child/Newsletter";

export default function Footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12 ">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImYoutube color="#888888" />
              </a>
            </Link>
          </div>
          <div className="text-center">
            <p className="pt-5 text-gray-600 ">
              Copyright © 2022 All rights reserved
            </p>
            <p className="py-1 text-gray-600">
              This template was made possible by Daily Tution&apos;s awesome
              tutorials on Youtube.
            </p>
            <p className="text-gray-400 text-center">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

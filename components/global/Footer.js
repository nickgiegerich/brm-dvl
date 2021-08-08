import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";

const logo = "/images/home/logo.svg";
const svgLogo = "/images/home/svg_logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="flex flex-row flex-wrap-reverse mx-auto justify-evenly w-screen">
        <div className="flex-col sm:text-left text-center">
          <Image src={svgLogo} alt="Balance Logo" height={150} width={150} />
          <p className="max-w-lg text-left px-5">
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Hi omnes lingua,
            institutis, legibus inter se differunt.
          </p>
          <p className="max-w-lg text-left pt-3 px-5 pb-3">
            Copyright © 2021 Balance Regenrative Medicine. All rights reserved.
          </p>
        </div>
        <div className="flex-col ">
          <div className="py-5">
            <Link href="/">Home</Link>
          </div>
          <div className="py-5">
            <Link href="/team/providers">Providers</Link>
          </div>
          <div className="py-5">
            <Link href="/newpatients">New Patients</Link>
          </div>
          <div className="py-5">
            <Link href="#">Services</Link>
          </div>
        </div>
        <div className="flex-col sm">
          <div className="py-5">
            <p>Sign Up For Emails</p>
          </div>
          <form className="my-4 flex">
            <input
              className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="your@mail.com"
            />
            <button className="px-8 rounded-r-lg bg-tan text-gray-800 font-bold p-4 uppercase border-yellow-800 border-t border-b border-r">
              Subscribe
            </button>
          </form>
          <div>
            <p>
              <span className="underline">
                <a href="#">Click Here</a>
              </span>{" "}
              to read our privacy policy
            </p>
          </div>
          <div className="flex flex-row pt-3">
            <a className="text-4xl pr-5" href="#">
              <FaFacebook />
            </a>
            <a className="text-4xl pr-5" href="#">
              <FaInstagramSquare />
            </a>
            <a className="text-4xl pr-5" href="#">
              <FaTwitterSquare />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

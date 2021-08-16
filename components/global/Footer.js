import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";

const logo = "/images/home/logo.svg";
const svgLogo = "/images/home/svg_logo.svg";
const white_svgLogo = "/images/home/logo-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white bg-opacity-75">
      <div className="flex flex-row flex-wrap-reverse mx-auto justify-evenly w-screen">
        <div className="flex-col sm:text-left text-center">
          <Image
            src={white_svgLogo}
            alt="Balance Logo"
            height={150}
            width={150}
          />
          <div className="-mt-7 pb-8">
            <span>
              <a
                target="_blank"
                href="http://maps.google.com/?q=621+North+College+Rd,+Suite+103,+Twin+Falls,+Idaho+83301"
                rel="noopener noreferrer"
                className="text-green-400 lg:text-2xl md:text-xl text-xl hover:underline"
              >
                621 North College Rd, Suite 103, Twin Falls, Idaho 83301
              </a>
            </span>
          </div>
          <div className="grid grid-rows-3">
            <div>
              Phone:{" "}
              <span>
                <Link href="tel:2085393155">(208) 539-3155</Link>
              </span>
            </div>
            <div>
              Email:{" "}
              <span>
                <a href="mailto:info@balanceregenrative.org">
                  info@balanceregenrative.org
                </a>
              </span>
            </div>
            <div>
              Fax:{" "}
              <span>
                <Link href="tel:18665072545">1(866) 507-2545</Link>
              </span>
            </div>
          </div>
          <p className="max-w-lg text-left pt-3  pb-3">
            Copyright © 2021 Balance Regenrative Medicine. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col justify-evenly">
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
            <Link href="/services">Services</Link>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="py-5 hidden">
            <p>Sign Up For Emails</p>
          </div>
          <form className="my-4 hidden">
            <input
              className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="your@mail.com"
            />
            <button className="px-8 rounded-r-lg bg-tan text-gray-800 font-bold p-4 uppercase border-yellow-800 border-t border-b border-r">
              Subscribe
            </button>
          </form>

          <div className="flex flex-row justify-evenly pt-3">
            <a className="text-4xl pr-5" href="#">
              <FaFacebook className="text-white hover:text-brown" />
            </a>
            <a className="text-4xl pr-5" href="#">
              <FaInstagramSquare className="text-white hover:text-brown" />
            </a>
            <a className="text-4xl pr-5" href="#">
              <FaTwitterSquare className="text-white hover:text-brown" />
            </a>
          </div>
          <div className="hidden">
            <p>
              <span className="underline">
                <a href="#">Click Here</a>
              </span>{" "}
              to read our privacy policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

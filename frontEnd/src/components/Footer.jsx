import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-5 ">
      <div className="container mx-auto grid grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Servicios
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Web design</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">SEO</li>
            <li className="my-2">E-commerce</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contacto
          </h2>
          <p className=" md:text-[16px] sm:text-xl  my-4">Email: carlos911.cp@gmail.com</p>
          <p className=" md:text-[16px] sm:text-xl   my-4">Telefono: +56 9 49013663</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 lg:ml-3 uppercase">
            Sigueme
          </h2>
          <div className="flex space-x-3 ">
            <a
              href=""
              className="text-white hover:bg-fuchsia-400/50 rounded-full glow lg:p-2 "
            >
              <AiFillGithub className="text-[28px]" />
            </a>
            <a
              href="http://www.youtube.com"
              className="text-white hover:bg-fuchsia-400/50 rounded-full glow lg:p-2"
            >
              <FaLinkedin className="text-[28px]" />
            </a>
            <a
              href=""
              className="text-white hover:bg-fuchsia-400/50 rounded-full glow lg:p-2"
            >
              <FaTwitter className="text-[28px]" />
            </a>
            <a
              href=""
              className="text-white hover:bg-fuchsia-400/50 rounded-full glow lg:p-2"
            >
              <FaDiscord className="text-[28px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

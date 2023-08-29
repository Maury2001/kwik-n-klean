"use client";

import { Facebook, GoogleMaps, InstagramIcon, TwitterIcon } from "./icons";
import { motion } from "framer-motion";
import Footer from "./footer";

export default function Location() {
  return (
    <section className="flex flex-col justify-between mt-6 bg-[#3CAEF7] text-white">
      <div className=" flex justify-end sm:justify-center w-full  ">
        <div className="w-1/2 sm:w-full flex flex-col justify-center">
          <div className=" w-full flex justify-center">
            <div className=" w-1/2 sm:w-full h-1/2 p-4 m-4 mt-6 grid justify-center items-center text-center  border shadow-lg">
              <p>We Are Located 
                <span className=" font-medium text-[#F05F0A]">
                  
                  Opposite Kahuho Road Academy ... On your Way To kabiria
                </span>
              </p>
              <div className=" flex flex-row justify-center items-center backdrop-blur-xl">
                <motion.a
                  href="https://goo.gl/maps/bhN8UcGzohgcN8Sp8"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  className="w-6 h-6 ml-6 sm:mx-1 animate-bounce"
                  whileTap={{ scale: 0.9 }}
                >
                  <GoogleMaps />
                </motion.a>
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap justify-center p-4 m-6 gap-4 backdrop-blur-xl rounded-2xl">
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 h-6 ml-6 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 h-6 ml-6 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <Facebook />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 h-6 ml-6 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon />
            </motion.a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

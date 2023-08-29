'use client'
import Image from "next/image";
import React from "react";
import carman from "../public/images/kwikcar.png";
import AnimatedText from "./AnimatedText";
import { Call } from "./icons";
import { Chonburi } from "next/font/google";
import { motion } from "framer-motion";

const nosifer = Chonburi({
  subsets: ['latin'],
  weight: "400"
})

export default function Landing() {
  return (
    <section className=" grid grid-cols-2 sm:grid-cols-1 w-full sm:h-fit sm:mb-0">
      <div className=" flex flex-col col-span-1 justify-evenly sm:mb-4">
        <AnimatedText
          text={"Kwik n Klean CarWash & Carpet Cleaning"}
          className={`!text-4xl sm:!text-3xl sm:mb-6 !font-bold text-center !text-[#F05F0A] ${nosifer.className}`}
        />
        
      </div>
      <div className=" flex flex-col justify-center sm:w-screen col-span-1 sm:mb-0 sm:mt-10">
        <Image src={carman} priority/>
        <motion.div 
        initial={{opacity:0, scale:0}}
        animate={{ rotate: 360, scale: 1 }}
        whileInView={{opacity:1}}
        transition={{type:'spring', duration:2,stiffness: 260,
    damping: 20, delay:1, ease:' easeIn'}}
        className=" text-black hidden sm:visible font-base p-4 mx-3 flex-row w-full justify-center items-center mt-10 text-center opacity-0 sm:opacity-100">
          <button className=" bg-[#F05F0A] w-1/2 rounded-full shadow-2xl p-6">We get it Done Kwik n Klean
         <motion.div className=" animate-pulse-slow flex flex-row justify-center items-center m-4">
         <a href="tel:+254702750393"><Call/></a>
         </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

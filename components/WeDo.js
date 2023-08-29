"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import AnimatedText from "./AnimatedText";
import Link from "next/link";
import head from "../public/images/headlight.jpg";
import buff from "../public/images/buff.jpg";
import vacuum from "../public/images/vacuum.jpg";
import engine from "../public/images/engine.jpg";
import carpet from "../public/images/carpet.jpg";
import car from "../public/images/car.jpg";

const Services = ({ title, img, link }) => {
  return (
    <motion.article
      className=" w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-xl
       lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 hover:shadow-2xl "
      initial={{ y: 50 }}
      whileInView={{ y: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={""}
        target=" _blank"
      >
        <Image src={img} alt={title} className=" w-full h-[200px]" />
      </Link>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span></span>
        <Link
          href={""}
          target=" _blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold sm:text-base">
            {title}
          </h2>
        </Link>
      </div>
    </motion.article>
  );
};

export default function WeDo() {
  return (
    <section>
    <AnimatedText className=' !text-3xl md:!text-2xl sm:!text-xl !text-[#F05F0A]' text={`What We Do..`}/>
        <div className=" w-full flex justify-center my-8 md:my-6 sm:my-4">
     
      <div className=" w-4/5 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-4 my-8 md:my-6 sm:my-4 sm:gap-y-10 gap-6">
        <Services img={carpet} title={`CARPET CLEANING`} />
        <Services img={car} title={`CAR BODY WASHING`} />
        <Services img={head} title={`HEADLIGHTS RESTORATION`} />
        <Services img={buff} title={`BUFFING`} />
        <Services img={vacuum} title={`VACUUM CLEANING`} />
        <Services img={engine} title={`ENGINE WASHING`} />
      </div>
    </div>
    </section>
  );
}

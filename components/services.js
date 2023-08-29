"use client";
import carwash from "../public/images/carwash.png";
import carpet from "../public/images/man.png";
import AnimatedText from "./AnimatedText";
import Card from "./cards";

export default function Services() {
  return (
    <section className="w-full h-screen flex flex-col mt-10 md:mt-7 sm:mt-0 justify-center">
      <AnimatedText
        text={`Services`}
        className=" !text-5xl sm:!text-3xl sm:!font-bold my-6 !text-[#F05F0A]"
      />
      <hr className=" w-3/4 border border-[#F05F0A] mx-auto mb-4"/>
      <div className=" flex flex-row sm:flex-row justify-around sm:gap-2 mt-6">
        <Card head={``} service={`Charges`} image={carwash} />
        <Card head={``} service={`Charges`} image={carpet} />
      </div>
    </section>
  );
}

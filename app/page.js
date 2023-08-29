import WeDo from "@/components/WeDo";
import Card from "@/components/cards";
import Landing from "@/components/landing";
import Location from "@/components/location";
import Navbare from "@/components/nav";
import Save from "@/components/save";
import Services from "@/components/services";


export default function Home() {
  return (
    <>
      <main className=" bg-white text-black flex flex-col justify-center">
        <Navbare />
        <Landing />
        <Services />
        <WeDo />

        <Save />
        <Location />
      </main>
    </>
  );
}

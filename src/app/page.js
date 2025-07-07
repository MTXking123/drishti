import Hero from "@/components/Hero";
import Aboutus from "@/components/home/Aboutus";
import Banner from "@/components/home/Banner";
import Banner2 from "@/components/home/Banner2";
import Doctor from "@/components/home/Doctor";
import Heroslider from "@/components/home/Heroslider";
import Imgsec from "@/components/home/Imgsec";
import Rev from "@/components/home/Rev";
// import Section1 from "@/components/home/Section1";
import Service from "@/components/home/Service";
import Stats from "@/components/home/Stats";
import Whatsapp from "@/components/Whatsapp";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-24 ">
      <Heroslider/>
     {/* <Hero/> */}
     <Stats/>
     <Imgsec/>
     <Aboutus/>
     <Banner2/>
     <Service/>
     {/* <Section1/> */}
     <Doctor/>
    <Banner/>
    <Rev/>
    <Whatsapp/>
    </div>
  );
}

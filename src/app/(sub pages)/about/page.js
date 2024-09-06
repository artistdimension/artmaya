"use client"
import Image from "next/image";
import bg from "../../../../public/background/hand.jpg"
import RenderModels from "@/components/RenderModels";
import AboutDetails from "@/components/about";
import Robot from "@/components/models/Robot";
import Skills from "@/components/Technologies";
import AnimatedCursor from "react-animated-cursor";
import CustomAnimatedCursor from "react-animated-polyline-cursor";
import Head from "@/components/models/Head";
import { OrbitControls } from "@react-three/drei";


export default function Home() {
  return (
    < >
    <Skills   />
    <div>
    <AnimatedCursor/>
    <CustomAnimatedCursor
    dotColor={"#2AFADF"}
    lineColor={"#2AFADF"}
    markerColor={"#2AFADF"}
    dotSize={[15]}
    dotReductionRatio={[.5]}
    

    
    
    />
    </div>
   
      <Image src={bg} alt="background-image"  className="w-full h-full  top-0 left-0 fixed object-cover -z-30 object-center opacity-20"/>

       
       <div  className="w-full h-3/5 xs:h-3/4 sm:h-screen sm:my-12   my-32 absolute top-1/2 -translate-y-1/2 left-0 -z-10 " >
       
      <RenderModels>
        <OrbitControls/>
     <Head  />
       </RenderModels>
       </div>
       

      <div  className="relative w-full h-screen flex  m-2 sm:my-24 flex-col items-center justify-center sm:bottom-36 -z-50 ">
      <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2  -translate-y-1/2 -translate-x-1/2 ">
        <h1 className="font-bold text-6xl xs:text-7xl  sm:text-8xl lg:text-8xl text-accent hover:text-blue-500 hover:animate-pulse m-2 "  >Artist Dimension</h1>
        <p className="font-light text-foreground text-xl  hover:text-blue-300">Meet the Creator behind this portfolio</p>
       </div>
      </div>


      <AboutDetails/>
   </>
    
  );
}
 
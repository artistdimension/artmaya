"use client"
import Image from "next/image";
import bg from "../../../../public/background/high-fg.jpg"
import ProjectsList from "@/components/projects";
import { projectsData } from "../../data";
import Build from "@/components/models/Staff";
import RenderModels from "@/components/RenderModels";
import AnimatedCursor from "react-animated-cursor";
import CustomAnimatedCursor from "react-animated-polyline-cursor";
import Alien from "@/components/models/Alien";
import TenderModels from "@/components/TenderModels";



export default function Home() {
  return (                        
    < >
    <div>
      <CustomAnimatedCursor
      
      dotColor={"#2AFADF"}
      lineColor={"#2AFADF"}
      markerColor={"#2AFADF"}
      dotSize={[15]}
      dotReductionRatio={[.5]}
      />


     <AnimatedCursor/>
     </div>
      <Image src={bg} alt="background-image"  className="w-full h-full  top-0 left-0 fixed object-cover -z-30 object-center opacity-20"/>

        <ProjectsList projects={projectsData} />

       <div className="flex  items-center justify-center fixed top-16 lg:top-20 h-screen   left-1/3 lg:-left-1/3  w-screen
      "   >  
      
        <TenderModels>
        <Build/>
       
        </TenderModels>

       </div>
       <div  className="flex  items-center justify-center fixed top-16 lg:top-20 h-screen w-screen right-1/3 lg:-right-1/3  "      >
      <RenderModels>
      <Alien/>
       </RenderModels>
       </div>
   </>
    
  );
}
 
"use client"
import Image from "next/image";
import bg from "../../public/background/hero.bg.png"
import RenderModels from "@/components/RenderModels";
import Navigation from "@/components/navigation";
import React, { useEffect, useState } from "react";
import Typewritter from "@/components/Typewriter";
import {IconAdCircleFilled
} from "@tabler/icons-react";
import AnimatedCursor from "react-animated-cursor";
import CustomAnimatedCursor from "react-animated-polyline-cursor";
import Manny from "@/components/models/Manny";
import Animate from "@/components/Animate";









export default function Home() {
  
  // loader state 
  const [isLoading, setIsLoading] = useState(true);
  // Let create assync method to fetch fake data
  useState (()  =>{
    const fakeDatafetch =() =>{
    setTimeout(() =>{
      setIsLoading(false);

     },4000 );
    };
     fakeDatafetch();  
     
    },[] )
    
  
  return (
    <>
  
   
    <CustomAnimatedCursor
    
      dotColor={"#2AFADF"}
      lineColor={"#2AFADF"}
      markerColor={"#2AFADF"}
      dotSize={[15]}
      dotReductionRatio={[.5]}
    
    
    
    />
    
      
     <AnimatedCursor
       dotColor={"#2AFADF"}
       lineColor={"#2AFADF"}
       markerColor={"#2AFADF"}
       dotSize={[15]}
       dotReductionRatio={[.5]}
       />
      {


     isLoading ? <Animate/>:(<main className="flex min-h-screen flex-col items-center justify-between  relative">
 
    
    
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover -z-30 object-center opacity-20"/>
        <IconAdCircleFilled
  size={48} color="yellow" stroke={4} />

      <div className="w-full h-screen z-50">
        {/* navigation and 3d model */}
        {/* Typewritter */}
      
        <Typewritter/>
        <Navigation/>
        
        <RenderModels>
        
         <Manny/>
       </RenderModels>
  
      </div>



      
      
    </main>)

      }
   
        
   
  
    </>
  );
}
 
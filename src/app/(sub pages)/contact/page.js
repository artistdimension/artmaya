"use client"
import Image from "next/image";
import bg from "../../../../public/background/contact.jpg"
import Form from "@/components/contact/Form";
import PArticleBackground from "@/components/ParticleBackground";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Footr from "@/components/Footr";
import Buster from "@/components/Buster";
import { motion } from "framer-motion";
import CustomAnimatedCursor from "react-animated-polyline-cursor";
import AnimatedCursor from "react-animated-cursor";



const iconVariants =(duration) =>({
  initial:{y:-10},
  animate:{
      y:[10,-10],
      transition:{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType:"reverse",


      },


  },



})





export default function Contact() {
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


      <Image src={bg} 
      alt="background-image" 
       className="w-full h-full  top-0 left-0 fixed object-cover -z-30 object-center opacity-20"
       />

   <article  className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0  space-y-8" >  
    <div className="flex flex-col items-center justify-center w-full  space-y-6 sm:w-3/4" >
    <motion.h1 
    
    initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.5, delay:1}}
    
    className="text-green-600 font-semibold text-center text-6xl capitalize">
      Call the Creator
    </motion.h1>
    <p className="  text-center font-extralight xs:text-2xl text-sm">
    Website visitors will typically also leave feedback or ask general questions through a contact page. 
    These pieces of information are valuable to businesses because they learn more about consumer expectations and preferences.
    </p>
      </div> 
      <section>

     <PArticleBackground/>   
      </section  >
      <div className=" w-screen  h-[50vh] sm:w-full sm:h-[50vh] sm:fixed bg-transparent cursor-pointer -left-96 mb-96  top-24 -z-0"  >
      <Canvas>
        <OrbitControls/>
        <Environment preset="park" />
        <ambientLight/>
        <directionalLight position={[-5,5,5]}/>
     <Buster/>
      </Canvas>
     </div>
      <Form/>
      <Footr/>
   
     
    </article>
   
   </>
    
  );
}
 
import React from 'react'
import { Icon2fa,} from '@tabler/icons-react'
import { BsBadge3dFill } from "react-icons/bs";
import { SiCinema4D } from "react-icons/si";
import { SiAutodeskmaya } from "react-icons/si";
import { RiBlenderFill } from "react-icons/ri";
import { SiUnrealengine } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { animate, motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";

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
const Skills = () => {
  return (
    <motion.div>
      <motion.div className=" border-neutral-800 hover:text-yellow-400 cursor-pointer font-semibold -m-10 text-teal-500 pb-24">

        <motion.h1
        initial={{x:-100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.5, delay:2}}
        
        
        className="my-2 text-center text-2xl" >Software Skills</motion.h1>


        <motion.div className="flex flex-wrap  p-2 items-center justify-center gap-4">
            <motion.div  
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            
            className="rounded-2xl border-4 border-neutral-800 p-4"  >  
            <SiAutodeskmaya  className="text-4xl text-cyan-500"  />  

           </motion.div>
           <motion.div 
           
           variants={iconVariants(3)}
           initial="initial"
           animate="animate"
           
           
           className="rounded-2xl border-4 border-neutral-800 p-4"  >  
            <RiBlenderFill   className="text-4xl text-green-600"  />  

           </motion.div>


           <motion.div  
           
           variants={iconVariants(3.5)}
           initial="initial"
           animate="animate"
           
           
           className="rounded-2xl border-2 border-neutral-800 p-4"  >  
            <SiCinema4D   className="text-2xl text-blue-400"  />  

           </motion.div>


           <motion.div  

           variants={iconVariants(4)}
           initial="initial"
           animate="animate"


           className="rounded-2xl border-4 border-neutral-800 p-4"  >  
            <SiUnrealengine   className="text-2xl text-yellow-300"  />  
           </motion.div>


           <motion.div  
           
           variants={iconVariants(4.5)}
           initial="initial"
           animate="animate"


           
           className="rounded-2xl border-4 border-neutral-800 p-4"  >  
            <SiAdobephotoshop    className="text-2xl text-violet-400"  />  

           </motion.div>


           <motion.div 
           
           variants={iconVariants(5)}
           initial="initial"
           animate="animate"
           


           
           className="rounded-2xl border-4 border-neutral-800 p-4"  >  
            <SiDavinciresolve     className="text-2xl text-indigo-600"  />  

           </motion.div>


           <motion.div 
           
           variants={iconVariants(5.5)}
           initial="initial"
           animate="animate"
           
           
           className="rounded-2xl border-4 border-neutral-800 p-4"  >  
            <SiAdobeaftereffects      className="text-2xl text-teal-400"  />  
           </motion.div>
           <motion.div 
           
           variants={iconVariants(6)}
           initial="initial"
           animate="animate"
           
           
           className="rounded-2xl border-4 border-neutral-800 p-4"  >  
            <FaReact        className="text-2xl text-orange-400"  />  
           </motion.div>
           <motion.div 
           
           variants={iconVariants(6.5)}
           initial="initial"
           animate="animate"
           
           
           className="rounded-2xl border-4 border-neutral-800 p-4"  >  
            <TbBrandThreejs            className="text-2xl text-indigo-600"  />  
           </motion.div>
           
           
           
           

        </motion.div>







      </motion.div>
    </motion.div>
  )
}

export default Skills

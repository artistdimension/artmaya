"use client"
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const Sound = () => {

    const audioRef = useRef(null)
 const [isPlaying, setIsPlaying]  = useState(false);


 const handleFirstUserInteraction =() =>{
    const musicConsent = localStorage.getItem("musicConsent");
    if(musicConsent === "true" && !isPlaying  ) {
        audioRef.current.play()
        setIsPlaying(true);
    }
    ["click", "keydown", "toucgstart"] .forEach((event) =>
        document.removeEventListener(event, handleFirstUserInteraction)
)



 }



 useEffect(() =>{
    const consent = localStorage.getItem("musicConsent")
    if(consent) {
        setIsPlaying(consent === "true")

        if(consent === "true"){
            ["click", "keydown", "toucgstart"] .forEach((event) =>
              
                document.addEventListener(event, handleFirstUserInteraction)
        )



        }


    }

// eslint-disable-next-line
 } , []  )

 const toggle = ()  =>{
    const newState = !isPlaying
    setIsPlaying(!isPlaying)
    newState ? audioRef.current.play() : audioRef.current.pause()
  localStorage.setItem("musicConsent", String(!isPlaying))

 }



  return (
    <div className='fixed top-4 right-4 xs:right-4 z-50'  >
        <audio ref={audioRef}loop>

        <source src={"/audio/dark-action.mp3"} type="audio/mpeg" />
        your browser does not support audio the  element.
        </audio>
        <motion.button 
    onClick={toggle}
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{delay:1}}
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{
      scale: 0.8,
      rotate: -90,
      borderRadius: "100%"
    }}
    
    
     className="w-12 h-12 xs:w-14  xs:h-14 text-foreground rounded-full  flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg
    
    "
    aria-label={"home"} name={"home"} 
    >
  {  
   
      isPlaying ?
     <Volume2 className='w-full h-full text-foreground  group-hover:text-accent' strokeWidth={1.5} />
     :
     <VolumeX className='w-full h-full text-foreground  group-hover:text-accent' strokeWidth={1.5} />


  }
  
    </motion.button >
      
    </div>
  )
}

export default Sound
 
"use client"
import React from "react"
import Typewritter from 'typewriter-effect';

function App  ()  {

  return (
    
     <div
       
      className=' container fixed sm:m-36 cursor-pointer top-0 left-6 sm:p-6 sm:text-2xl m-14 p-10 text-2xl animate-pulse  md:-left-36 xl:font-bold sm:font-normal justify-center font-sans text-fuchsia-400'>
      
         <h1  >
            
            <Typewritter
            
             options ={{
               strings : ["Im, Kannan Arunachalam", "From India"," Senior 3d Artist","Doing", "All Kind of 3D Works","Maya","ZBrush",
                  "Blender","Mari","Substance Painter","Unreal Engine","Cinema4d" ],
               
               autoload:true,
               autoStart:true,
               loop: true,
               delay:100,
               typeSpeed:10,
               deleteSpeed:10,
                }}
            />
          </h1>
        </div>
    
  );
}

export default App;

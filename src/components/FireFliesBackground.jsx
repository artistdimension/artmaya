"use client"
import React, { useEffect, useState } from "react";

const createFireFly =()=> ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
    const [fireflies, setFireflies]  =  useState ([]);

       useEffect (() => { 
        const addFireflyperiodically  = () =>{
            const newFirefly = createFireFly ();
            setFireflies(currentFireflies =>

                [
                    ...currentFireflies.slice(-19),
                    newFirefly
                ]
          );

         };

        const  interval = setInterval(addFireflyperiodically, 1000);


        return() => clearInterval(interval);
      },[] );

      return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden  animate-pulse">
       {fireflies.map((firefly) => {
       return (
        <div 
            key={firefly.id} 
            className="absolute rounded-full bg-accent  w-[8px] h-[8px] bg-firefly-radial animate-pulse"
            style={{
            top: firefly.top,
            left: firefly.left,
             animation:`move ${firefly.animationDuration} infinite alternate`
        }}
     > </div>
    );
 })}
</div>
  );
};

export default FireFliesBackground;

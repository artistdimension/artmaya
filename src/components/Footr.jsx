"use client"
import React from "react";
import {Icon123, IconBrandFacebook,IconBrandFacebookFilled} from'@tabler/icons-react';
import { Facebook, Github, icons, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion"

const sections = [
    {

    title:'Solution',
   items:['Modelling','Character Design','Sculpting','Rendering','Post Production']

    },
    {

     title:'Support',
     items:['Pricing','Documentation','Guides','API','Status']
     
    },
    {

        title:'Company',
        items:['About','Blog','Jobs','Press','Partners']
        
    },
    {

        title:'Legal',
        items:['Claims','Privacy','Terms','Policies','Conditions']
        
    },
]

const items =[
    {
       name:'Facebook',
       icons:Facebook,
       link:'http://facebook.com/'
    },
    {
        name:'Instagram',
        icons:Instagram,
        link:'http://instagram.com/'
     },
     {
        name:'Twitter',
        icons:Twitter,
        link:'http://twitter.com/'
     },
     {
        name:'Linkedin',
        icons:Linkedin,
        link:'http://linkedin.com/'
     },
     {
        name:'Github',
        icons:Github,
        link:'http://github.com/'
     },



    ]
const Footr = () => {
    
  return(
    <>
    
      <div className=" w-full  mt-24 bg-base text-gray-300 py-y px-6 m-2" >
        <div className="max-w-[1240px]  mx-auto grid grid-cols-2 md:grid-cols-6  border-t-4 border-b-4 border-yellow-200 py-8"  >
           {
            
             sections.map((section,index) => (
                <div key={index} > 
                <h6 className="font-bold  uppercase pt-2"  >
                 {section.title}
                </h6>
                <ul>
                 {section.items.map((item,i)=>(
                    <li key={i}
                    className="py-1 text-gray-500 hover:text-white
                    cursor-pointer" >
                        {item}


                    </li>


                 ))}

                </ul>
            
             

                </div>


             ))
           }
           
           <div className="col-span-2 pt-8 md:pt-2" >
            
            <p className="font-bold uppercase"  >
                Subscribe to our newsleeter

            </p>
            <p  className="py-4 px-3 " >
             The latest updates ,3D works and resources ,sent to your inbox weekly  
            </p>
              <form className="flex flex-col sm:flex-row "  >
                <input type="email" placeholder="Enter your email adress"
                className="w-full p-2 mr-4 rounded-2xl mb-4  font-bold"/>
                <button className="p-2 mb-4 font-serif font-semibold xl:rounded-2xl hover:animate-pulse hover:bg-green-500 xl:bg-slate-600 text-white "  >
                   subscribe 
                </button>
              </form>
           </div>
        </div>
       
        {/* Copyright & Social Icons*/}
        
        <div className="flex flex-col max-w-[1240px] py-2 px-4 mx-auto  justify-between sm:flex-row text-center text-gray-500" >
            <p className="py-4">
            @{new Date().getFullYear()} Artist Dimesion. All right reserved.  
            
            </p>
            
            <a   href="/home">
          <motion.p 
          
          
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            animationDelay:[1,1,1]
          }}
          
          className="font-semibold text-foreground rounded-3xl bg-gray-600 border-y-emerald-500  bg-clip-text rounded-s-sm hover:animate-pulse text-yellow-600  border-t-8 border-b-8 hover:border-cyan-400 text-cyan-400" > Home</motion.p>
           </a>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl" >
            {
                items.map((x,index)=>{
                    return <x.icons key={index} className=" cursor-pointer rounded-3xl hover:antialiased bg-black hover:rotate-45 text-green-800 hover:animate-pulse hover:text-red-500 transition-all"/>



                })
                
            }
 
  
        </div>
        </div>
         </div>
    </>
  )
}

export default Footr

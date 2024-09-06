"use client"
import Particles from "react-tsparticles"
import particlesconfig from "./config/particlles-config"

const PArticleBackground = () => {
  return (
    <div  className=" flex relative -z-50">
  
        <Particles paramas = {particlesconfig}>


    </Particles>
      
    </div>
    
   
  )
}

export default PArticleBackground

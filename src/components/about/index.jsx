import React   from "react";
import ItemLayout from "./ItemLout";
import Image from "next/image";





const AboutDetails= () => {
  return (
    <section className="py-20 w-full" > 
       <div className="grid  grid-cols-12  gap-4 xs:gap-6  md:gap-8 w-full">


        <ItemLayout className={'col-span-full lg:col-span-8  row-span-2 flex-col items-start -z-10'}>
        <h2 className="  text-xl md:text-2xl text-left w- capitalize" >
        About Me as 3D Artist
        </h2>
        <p className="font-light text-xs sm:text-sm md:text-base "  >
             Since I was 12years old, I have dreamed of working in the film industry.
            At 30, I decided to change my life’s direction and go for my childhood dream,
             where I worked every day on developing these skills. 
            The goal was to grow up combined with learning to increase my talent. 
            With my studies at 3D, and with my personal projects, 
            I learnt to do full images with stakes very high.

        </p>
       </ItemLayout>

       
       <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent -z-10'}>
         <p className="font-semibold w-full text-left text-2xl sm:text-5xl" >
       25 + <sub className="font-semibold text-base"  >Projects</sub> 
        </p>
       </ItemLayout>


       <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent text-balance -z-10'}>
       <p className="font-semibold w-full text-lefttext-2xl sm:text-5xl" >
      2+ <sub className="font-semibold text-base"  >years of experience</sub> 
        </p>
       </ItemLayout>


       <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 -z-10"}   >
        <img  className="w-full h-auto relative"   src="https://github-readme-stats.vercel.app/api?username=artistdimension&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&theme_transparent&bg_color=e4e2e2" alt="ArtistDimension" loading="lazy" />
       </ItemLayout>
       
       <ItemLayout className={"col-span-full md:col-span-8 !p-0"}   >
        <img  className="w-full h-auto"   src="https://github-readme-streak-stats.herokuapp.com/?user=artistdimension&theme=dark&hide_border=false" alt="ArtistDimension" loading="lazy" />
       </ItemLayout>

       <ItemLayout className={"col-span-full md:col-span-full"}   >
        <img  className="w-full h-auto"   src="https://i.ibb.co/xHdhM7K/icon-design-software-20.png" alt="icon-design-software-20" border="0" loading="lazy" />
       </ItemLayout>
       
        
       <ItemLayout className={"col-span-6 !p-0"}   >
        <img  className="w-full h-auto"   src="https://i.ibb.co/J5fyQcT/cartoon-478.gif" alt="cartoon-478" border="0" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={"col-span-6 !p-0"}   >
        <img  className="w-full h-auto"   src="https://i.ibb.co/1dG1LQ1/cartoon-480.gif" alt="cartoon-480" border="0" loading="lazy" />
        </ItemLayout>
     
        
      

     </div>
 </section>
  );
};

export default AboutDetails;

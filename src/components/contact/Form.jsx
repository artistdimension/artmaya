"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser"
import { Toaster, toast } from 'sonner'
import { motion } from 'framer-motion';

motion
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition:{
      staggerChildren: 0.3,
      delayChildren :0.2,
    }

  }
}

const item = {
  hidden : {scale: 0},
  show : {scale: 1}
}
  



export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const sendEmail = (params) => {

    
  
  const toastId = toast.loading("sending your message, please wait...")
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
         {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        LimiteRate:{
             throttle: 5000, //  you can not send more then 1 email per 5 seconds
        }
       }
      )
      .then(
        () => {
          toast.success("I have received your message, I will get back to you soon as possible!",{
            id:toastId

          })
        },
        (error) => {
        // console.log('FAILED...', error.text);
         toast.error("There wa an error sending your message,please try again later!")

        },
     );
  };



  const onSubmit = data => {

    const templateParams ={
      to_name: "Artist Dimension",
      from_name: data.name,
      reply_to: data.email,
      message:data.message,
    }


    sendEmail(templateParams )
  };

  
  return (

    <>
    <Toaster richColors = {true} />
    <motion.form 
     variants={container}
     initial="hidden"
     animate="show"
    
    
    onSubmit={handleSubmit(onSubmit)}
    className='max-w-md w-full flex flex-col items-center justify-center space-y-6'
    
    
    >
      <motion.input 
      
      variants={item}
      type="text" placeholder="name" {...register("name", {required: 'This field is required!',
      minLength:{
        value:3,
        message:"Name should be atleast 3 character long."

       }
     })} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none  focus:ring-2 focus:ring-cyan-500 
      custom-bg'
      />
      {
        errors.name && <span className="inline-block self-start text-accent"  >{errors.name.message}</span>

      }
      <input type="email" placeholder="email" {...register("email", {required: 'This field is required!'})}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none  focus:ring-2 focus:ring-cyan-500 custom-bg'
      
      />
       {  
        errors.email && <span className="inline-block self-start text-accent"  >{errors.email.message}</span>

      }
      <motion.textarea 
       variants={item}
      
      {...register("message", {required: 'This field is required!', maxLength:{
        value: 500,
        message : " message should be less than 500 characters"
      }, minLength:{
        value: 50,
        message : " message should be more than 50 characters" 
      }  })} 
        className='w-full  p-2 rounded-md shadow-lg text-foreground focus:outline-none  focus:ring-2 focus:ring-cyan-500 custom-bg'
      
      />
       {
        errors.message && <span className="inline-block self-start text-accent"  >{errors.message.message}</span>

      }
      <motion.input 
      variants={item}
      value="SEND TO THE OUTER SPACE"
      
      className='px-10 py-6 rounded-md shadow-lg animate-pulse text-yellow-300 border border-accent/30 border-solid hover:shadow-glass-sm
       bg-cyan-50/20 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2
        focus:ring-cyan-500 cursor-pointer capitalize hover:caret-blue-500'   type="submit" />
    </motion.form>
    
    </>
  );
}
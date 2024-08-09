"use client"
import React, { useEffect, useContext, useRef } from 'react'

// import jsIcon from '@/public/shape.svg'

import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import { PortfolioContext } from '@/Context/context';
import Link from 'next/link';

const Skills = () => {
  const {contact } = useContext(PortfolioContext)
  const banner = useRef(null)

 

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.to(banner.current, {
      scrollTrigger: {
        trigger: banner.current,
      },
      y: 0,
      opacity: 1,
      ease: "power3",
      duration: 2,
    });
  }, []);
  return (
    <section  ref={banner} id="works" className='text-white  w-full   flex flex-wrap flex-row items-start justify-evenly gap-8  relative  translate-y-14  opacity-0'>
            
            
            
            <div className='w-full  flex  items-center justify-between px-4 md:px-0 gap-x-14   '>
                
        <div className='flex items-center gap-x-2 flex-1 p-0 '>
          <h2 className='text-white text-[32px]  font-medium  tracking-wide '>
            <span className='text-primary'>#</span>
           contact
          </h2>
         <span className='block bg-primary w-[30%] h-[1px] ' ></span>
        </div>
      </div>
        <div className='w-full h-full flex  flex-col md:flex-row  px-4 lg:px-0  items-center justify-start gap-x-4 cursor-pointer    '>
        <div className='w-full md:w-[60%] h-[200px] flex flex-col items-start  justify-around  ' >
               <article className='self-start w-[100%] md:w-[80%] text-gray h-full  flex flex-col items-start justify-start  '>
                <p className='text-base w-[80%]'>
                I’m interested in internship , job or  freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </p>
               </article>
              </div>
            <div className=' lg:w-fit h-full border border-gray flex flex-col items-start gap-3 p-2 '>
                    <h1 className='capitalize text-white text-xl'>message me here</h1>
                    <div className='flex flex-col gap-4'>
                        {
                            contact.map((ele, index) => {
                                const { title, icon } = ele;
                               return( <div key={index} className='flex items-center  gap-2'>
                                    <Image src={icon} alt='icon' width={20} height={20} className='text-gray' />
                                    <p className='text-gray text-base text-wrap w-fit'>{title}</p>
                                </div>)

                            }
                            ) 
 
                        }
                    </div>
            </div>
              

        </div>
        <div className='absolute  w-[84px] h-[84px] flex items-center justify-between gap-8 flex-wrap top-20 -left-60 '>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
              </div>
    </section>
  )
}

export default Skills
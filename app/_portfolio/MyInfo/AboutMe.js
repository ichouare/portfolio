"use client"
import React, { useEffect, useContext , useRef} from 'react'


import Image from 'next/image';
import heroIcon from '@/public/hero-icon.svg';

import { PortfolioContext } from '@/Context/context';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const {icons, tools } = useContext(PortfolioContext)
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
    <section ref={banner} id="works" className='text-white  w-full      flex flex-wrap flex-row items-start justify-evenly gap-8  translate-y-14  opacity-0  '>
            
            
            
            <div className='w-full  flex  items-center justify-between px-4 lg:px-0 gap-x-14   '>
                
        <div className='flex items-center gap-x-2 flex-1 p-0 '>
          <h2 className='text-white text-[32px]  font-medium  tracking-wide '>
            <span className='text-primary'>#</span>
            about-me
          </h2>
         <span className='block bg-primary w-[30%] h-[1px] ' ></span>
        </div>
      </div>
        <div className='w-full h-full flex  flex-col lg:flex-row  items-center gap-4 cursor-pointer     '>
        <div className='md:w-full lg:w-[60%] h-full flex flex-col  items-start px-4 lg:px-0 gap-8  ' >
               <article className='w-[80%] md:w-[60%] text-gray h-full  flex flex-col items-start gap-8  '>
                <h6>Hello, i’m Issame!</h6>
                <p>I’m a self-taught begginer full stack developer based in Sefrou, Morroco. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
                <p>
                Transforming my creativity and knowledge into a websites has been my passion for over a three years. I always strive to learn about the newest technologies and frameworks.</p>
               </article>
               <Link href='' className='btn capitalize text-center text-base'> read more &#x2192;</Link>
              </div>
            <div className='hidden w-full lg:block lg:w-[50%] h-full   relative p-4'>
            <div className='absolute  w-[84px] h-[84px] flex items-center justify-between gap-6 flex-wrap top-0 end-0 '>
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
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
              </div>
              <Image src={heroIcon} alt="hero icon"  className='absolute w-[100px] h-[100px] '/>
              <div className='absolute  w-[84px] h-[84px] flex items-center justify-between gap-6 flex-wrap bottom-10 left-0 '>
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
                <span className='block w-[3px] h-[3px] rounded-full bg-gray'></span>
              </div>
            </div>
              

        </div>

    </section>
  )
}

export default Skills
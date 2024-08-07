"use client"
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import React, {useContext} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';




import heroImg from '@/public/Image.png';
import heroIcon from '@/public/hero-icon.svg';
const MyInfo = () => {
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
          <section  ref={banner} id="hero"  className='text-white  w-full px-8   h-auto md:h-[35rem] lg:h-[27rem]  flex flex-col  flex-wrap md:flex-row items-center justify-between gap-y-8 translate-y-14  opacity-0 '>
            <div className='md:w-[50%] w-full h-[100%] flex   flex-col text-Fira   items-start pt-20 gap-y-4 '>
              <h1 className='text-[2rem] font-semibold first-letter:uppercase leading-10' >
              issam i'm 
                <strong className='text-primary'> beginner full stack develloper </strong>
              motived
              </h1>
              <p className='w-[80%] text-base text-gray  first-letter:uppercase '>
                i'm making responsive website with multiple tools and language
              </p>

              <button className='btn  first-letter:uppercase'>
                contact me!!
              </button>

            </div>
            <div className='md:w-[50%] w-full  relative flex flex-col items-center justify-start  p-0 '>
              <Image src={heroIcon}    alt="hero icon"  className='absolute w-[155px] h-[155px] left-10 top-24'/>
              <Image src={heroImg}     alt="hero image"  className='object-cover z-10'/>
              <p className='w-fit p-2 md:w-[78%] text-base  text-gray flex items-center border border-gray  me-4'>
                <span className='block w-[16px] h-[16px] bg-primary me-2'></span>
                currently i working to build <span className='capitalize ms-2 text-white inline'> redis</span>  
              </p>
              <div className='absolute bottom-24 end-10 z-20 w-[84px] h-[84px] flex items-center justify-between gap-6 flex-wrap '>
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
          </section>
        )
    {

    }
}

export default MyInfo
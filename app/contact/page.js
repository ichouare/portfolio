"use client"
import React, {useEffect, useRef} from 'react'
import AboutMe from './Component/contact';
import EmailForm from './Component/EmailForm';
import Medark from '@/public/meDark.webp'
import Image from 'next/image';
import styles from './index.module.css'
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const page = () => {
  const art = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.to(art.current, {
      scrollTrigger: {
        trigger: art.current,
      },
      y: 0,
      opacity: 1,
      ease: "power3",
      duration: 2,
    });
  }, []);
  return (
    <section className="   flex  flex-1 md:min-h-screen  h-auto lg:w-[64rem] md:w-full  flex-col items-center gap-4 p-8 md:p-0    relative ">
            <AboutMe />
            <EmailForm />
            <div className='relative w-full h-[400px]  flex items-end justify-end  '>
              <article ref={art} className="absolute flex flex-col  top-8 end-52 translate-y-20 opacity-0">
                <p className='w-fit md:w-[300px] md:h-[120px] border p-2 md:p-3  border-white rounded-[20px] bg-white text-black'>Hi friend! Hope I didn't startle you. Can i know ur feedback about my profil!!</p>
              <svg fill="none" className='self-end absolute -bottom-6 -right-16 rotate-180 w-[100px]   h-[100px]  '>
                <path   d="M 0 0 C 0 0 24.8936 38.9937 47 58 C 57.5966 67.1106 73.8292 77.0249 84.1762 83 C 90.03 86.3804 94 95 94 95 L 94.5 36 C 94.5 36 88.5727 43.1045 81 41.4825 C 70.8874 39.3165 56.9488 35.8549 47 31.5 C 26.7586 22.6397 0 0 0 0 Z"
                    fill="white"></path>
              </svg>
                </article>
            <div className='bg-white w-[200px]  h-[200px]  rounded-full relative shadow'>
              <Image src={Medark} alt="me-dark"   className=' absolute -top-32' />
            </div>
            </div>
    </section>
  )
}

export default page
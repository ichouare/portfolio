"use client"
import { useRef, useEffect } from'react';
import React from 'react'
import Image from 'next/image';
import profil from '@/public/profil.webp';
import Quote from '@/public/quote.svg'; 
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Myprinciple = () => {
  const quote = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.to(quote.current, {
      scrollTrigger: {
        trigger: quote.current,
      },
      y: 0,
      opacity: 1,
      ease: "power3",
      duration: 2,
    });
  }, []);

  return (
    <section className='flex flex-col px-3 md:px-0 translate-y-14  opacity-0 ' ref={quote}>
    <div className='w-full md:w-[712px] md:h-[95px] p-4  border border-gray text-white first-letter:uppercase grid place-content-center relative'  >
      <span className="block w-[42px] h-[28px] absolute  -top-3 left-3">
        <Image src={Quote} alt='quote' className='w-full h-full object-fill' />
      </span>
      <p className='font-medium text-[24px] tracking-wide max-w-fit '>What I cannot create, I do not understand</p>
      <span className="block w-[42px] h-[28px] absolute  end-2 -bottom-2">
        <Image src={Quote} alt='quote'   className='w-full h-full object-fill' />
      </span>
    </div>
    <div className='self-end w-[260px] h-[63px] border border-gray text-white first-letter:uppercase grid place-content-center relative border-t-0'  >
      <p className='font-medium text-[24px] tracking-wide'>- Richard Feynman</p>
    </div>
    <div className='w-[100px] h-[60px] border border-gray absolute -right-64'>

    </div>

    </section>
  )
}

export default Myprinciple
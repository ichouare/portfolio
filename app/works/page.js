"use client"
import { useRef, useState,useEffect } from 'react';
import animate from '@/animation/animate'
import Image from 'next/image';
import line from '@/public/line.png'
import { FiChevronRight, FiChevronLeft  } from "react-icons/fi";
import Link from 'next/link';
import CompletProject from './componet/CompletProject';

const Projects = () => {
  const complete = [
    {
      title: 'Ft_Transcendence',
      skills : ['react js ', 'next js ', 'django ', 'postgrest ', 'docker ', 'nginx'],
      description: 'play and chat in secure way in one website',
      image: '/showing-cart-trolley-shopping-online-sign-graphic.jpg',
    },
    {
      title: 'E_commerce',
      skills : ['react js ', 'next js ', 'django ', 'postgrest'],
      description: 'shop website',
      image: '/showing-cart-trolley-shopping-online-sign-graphic.jpg',
    },
    {
      title: 'web server',
      skills : ['C++ ', ' nginx ', 'socket'],
      description: 'build owb web server',
      image: '/showing-cart-trolley-shopping-online-sign-graphic.jpg',
    },
  ]
  useEffect(() => {
    animate()
    // gsap.to(ref.current,  {
    //     xPercent: 100,
    //     duration: 0.8,
    //   })

  })
  return (
    <section className="   flex  flex-1 min-h-screen  h-auto lg:w-[64rem] w-full  flex-col items-center justify-start    relative gap-16 p-16 ">
                <div className='w-full flex flex-col items-start gap-x-2  p-0 '>
                  <h2 className='text-white text-[32px]  font-medium  tracking-wide '>
                    <span className='text-primary inline'>/</span>
                   contact
                  </h2>
                  <p className='capitalize'>list of my projectss</p>
                </div>

      <CompletProject listofproject={complete} title={"complete-projects"} />
      <CompletProject listofproject={complete} title={"small-projects"} />
      </section>
  )
}

export default Projects
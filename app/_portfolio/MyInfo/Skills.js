"use client"
import React, { useEffect, useContext } from 'react'
import {Screen, WebGLRenderbuffer} from 'three'
import { Canvas } from "@react-three/fiber";
import * as THREE from "three"
// import jsIcon from '@/public/shape.svg'

import Image from 'next/image';
import heroIcon from '@/public/hero-icon.svg';

import { PortfolioContext } from '@/Context/context';

const Skills = () => {
  const {icons, tools } = useContext(PortfolioContext)
  const skills = [
    {
        'type': 'languages',
        'element' : ['javascript ', 'c ', 'c++ ', 'python ']
    },
    {
        'type': 'other',
        'element' : ['html ', 'css ', 'scss ', 'redux ', 'docker ', 'git ', 'GitHub']
    },
    {
        'type': 'framework',
        'element' : ['react js ', 'nextjs', 'django']
    },
    {
        'type': 'tools',
        'element' : ['vSCODE ', 'lunix ', 'nginx ']
    },
  ]
  return (
    <section id="works" className='text-white  w-full    md:h-[22rem]  flex flex-wrap flex-row items-start justify-evenly gap-8  '>
            <div className='w-full  flex   items-center justify-between px-4 md:px-0 md:gap-x-14   '>
        <div className='flex items-center gap-x-2 flex-1 p-0 md:px-2 '>
          <h2 className='text-white text-[32px]  font-medium  tracking-wide '>
            <span className='text-primary'>#</span>
            skills
          </h2>
         <span className='block bg-primary w-[30%] h-[1px] ' ></span>
        </div>
      </div>
        <div className='w-full h-full   flex  flex-col md:flex-row  items-center  justify-center   gap-10 cursor-pointer     '>
            <div className='hidden lg:block w-full md:w-[40%] min-h-[200px]   relative p-4'>
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
              <Image src={heroIcon}  alt="hero icon"  className='absolute w-[100px] h-[100px] '/>
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
              <div className='w-full md:w-[60%] min-h-[200px]   relative  grid  grid-rows-2 grid-cols-2 place-content-center  gap-4 p-6 md:p-10 pe-0' >
                {
                    skills.map((skill, index) => {
                         const {type, element} = skill
                      return (
                        <div key={index} className='w-full h-content text-gray border border-gay '>
                            <h4 className='border-b p-2 text-white capitalize'>{type}</h4>
                          <div className='p-2 w-full '>{element.map((ele, index)=>{
                            return(<span className='p-2 uppercase' key={index} >{ele}</span>)
                          })}</div>
                        </div>
                      )
                    })
                }
              </div>

        </div>

    </section>
  )
}

export default Skills
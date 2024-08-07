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
    <section id="works" className='text-white  w-full      flex flex-col items-start justify-start  gap-8 p-8 md:p-0 '>
        <div className=' '>
          <h2 className='text-white text-[32px]  font-medium  tracking-wide '>
            <span className='text-primary'>#</span>
            skills
          </h2>
      </div>
        <div className='w-full  flex  flex-col md:flex-row  items-center    gap-10 cursor-pointer     '>
                {
                    skills.map((skill, index) => {
                         const {type, element} = skill
                      return (
                        <div key={index} className='w-[80%] md:w-full h-content text-gray border border-gay '>
                            <h4 className='border-b p-2 text-white capitalize'>{type}</h4>
                          <div className='p-2 w-full '>{element.map((ele, index)=>{
                            return(<span className='p-2 uppercase' key={index} >{ele}</span>)
                          })}</div>
                        </div>
                      )
                    })
                }
        </div>

    </section>
  )
}

export default Skills
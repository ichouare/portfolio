"use client"
import { useContext } from "react";
import  Union from '@/public/Style=Default.svg'
import Image from 'next/image';
import github from '@/public/github.svg';
import linkedin from '@/public/Linkedin.svg';
import Discord from '@/public/Discord.svg';
import Link from "next/link";

import {PortfolioContext} from '@/Context/context.js'


const PortfolioFooter = () => {
  // const {tools, layoutIcons} = useContext(PortfolioContext);
  const layoutIcons = [github, linkedin, Discord]
  return (
    <footer className='w-full 
  h-[218px] border-t border-white flex  grow-0 flex-col items-center justify-between p-8 pb-0 text-gray gap-4'>
       <div className='lg:w-[64rem] md:w-full flex flex-wrap  justify-between items-center  gap-y-4   '>
            <div className='w-[380px]  flex flex-col  grow-0 items-start    gap-y-4'>
              <div className='flex items-center gap-x-4'>
              <Image src={Union}   alt='union-logo' className=' w-[16px] aspect-square'/>
              <span className='capitalize font-bold tracking-wide text-gray'>
              ichouare
              </span>
              <p className='text-gray'>issam.chouaref1998@gmail.com</p>
              </div>
              <p className='text-gray first-letter:capitalize '>Web designer and front-end developer</p>
            </div>
           
            
            <div className='w-[200px]  flex flex-col  grow-0 items-start      gap-y-4'>
              <h6 className='text-white capitalize text-xl font-medium '>media</h6>
              <div className='flex items-center gap-x-4 '>
              {
                layoutIcons.map((item , _) => {
                  return(
                    <Link href='' target='_blank' rel='noopener noreferrer' className='w-[50px] h-[50px]' key={_}>
                      <Image src={item}  alt="icon"  className=" text-white object-fill"/>
                    </Link>
                  )
                })
              }
              </div>
            </div>
        </div>
         <div>
            <p className='w-full text-center text-base  text-gray capitalize tracking-wide font-medium'>&#169; copyright {new Date().getFullYear().toString()}  - by issame chouaref</p>
        </div>

    </footer>
  )
}

export default PortfolioFooter
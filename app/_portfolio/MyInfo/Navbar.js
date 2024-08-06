"use client"
import React, { useEffect } from 'react'
import { IoIosMore, } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { useContext , useState, useRef} from "react";
import {PortfolioContext} from '@/app/Context/context'
import  Union from '@/public/Style=Default.svg'
import line from '@/public/line.png'
import Image from 'next/image';
import Link from 'next/link';


import Menu from '@/public/menu.svg';
import Close from '@/public/closemenu.svg';


import { gsap } from 'gsap';


const Navbar = () => {
    const {tools, layoutIcons} = useContext(PortfolioContext)
    const [open , setOpen] = useState(false)
    const menu = useRef(null)
    const links = [ {title : "home", link: "/"},{title : "works", link:  "works"},{title : "about-me", link:  "aboutme"}, {title: "contact", link: "contact"}]

    // useEffect(() =>{
     
    // }, [])

    const handleclick = ()  => {
      setOpen(true);
      gsap.to(menu.current, {
        opacity:1,
        position: "absolute",
        top: "50px",
        borderRadius: 0,
        width: "100%",
        height: "100vh",
        bottom:0,
        // overflow: "hidden",
        duration:1
     })
    }
  return (
    <header className = "w-full md:w-[1024px]  md:p-0 h-[61px]  text-gray  md:fixed top-0 z-30 ">
      <div className='hidden  md:flex md:fixed md:top-0 md:left-8  md:flex-col md:items-center  '>
        <Image src={line} alt="line" className = "" />
        <div className=' w-[2rem] h-[7rem] flex flex-col items-center gap-1 ' > 
           {
            layoutIcons.map((icon, _) => {
              return (
                <div className='h-[32px] w-[32px] p-1 ' key={_}>
                    <Image src={icon} alt={icon}  className='object-fill'/>
                </div>
              )
            })
           }
        </div>
      </div>
    <nav className="w-full h-full flex flex-row px-6 md:px-0 justify-between items-center  cursor-pointer   " >
      
    <div className='logo flex items-center text_white   aspect-square w-[72px] h-[21px]  gap-x-2'>
        <Image src={Union} alt='union-logo' className=' w-[16px] aspect-square'/>
      <span className='capitalize font-bold tracking-wide'>
      ichouare
      </span>
    </div>
    <ul className='hidden  md:flex  items-center justify-evenly md:w-[442px]  h-full text-gray text-base  font-medium  '>
      {
        links.map(( item, _ )=> {
          const {title, link} = item
          return (<li key={_}>
              <Link className=''  href={link}><span className='text-primary me-[2px]'>#</span>{title}</Link>
          </li>)
        })
      } 
    <button className='font-semibold text-base uppercase'>
      en<span className='rotate-45'></span>
    </button>
    </ul>
    <div className='absolute md:hidden top-0 p-[20px]  bg-black end-0 w-[50px] h-[50px] overflow-hidden rounded-full -z-10 opacity-0 ' ref={menu}>

    <ul className='relative flex flex-col items-start justify-between gap-8 ' >
    {
      links.map(( item, _ )=> {
        const {title, link} = item
        return (<li key={_}>
              <Link className='text-[32px]'  href={link}><span className='text-primary me-[2px]'>#</span>{title}</Link>
          </li>)
        })
      } 
    <button className='font-semibold text-base uppercase'>
      en<span className='rotate-45'></span>
    </button>

    </ul>
    </div>
    
    {open ? (
      <button className='md:hidden font-semibold text-base uppercase cursor-pointer'  onClick={() => handleclick()}>
  <Image src={Close} alt="close menu"   />
    </button>
) : (
  <button className='md:hidden font-semibold text-base uppercase'  onClick={() => handleclick()}>
  <Image src={Menu} alt="open menu" />
   </button>
)}
   
  </nav>
      </header>
  )
}

export default Navbar
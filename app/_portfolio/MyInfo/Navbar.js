"use client"
import React, { useEffect } from 'react'
import { IoIosMore, } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { useContext , useState, useRef} from "react";
import {PortfolioContext} from '@/Context/context'
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
    const item = useRef(null)
    const links = [ {title : "home", link: "/"},{title : "works", link:  "works"},{title : "about-me", link:  "aboutme"}, {title: "contact", link: "contact"}]

    // useEffect(() =>{
     
    // }, [])

    const handleclick = ()  => {
      setOpen(true);
      let tl = gsap.timeline();
      tl.to(menu.current, {
        width: "150px",
        height: "150px",
        borderRadius : "0%",
        duration : 0.5,
      })
      tl.to(menu.current, {
        borderRadius : "0%",
        opacity:1,
        position: "absolute",
        top: "50px",
        width: "100%",
        height: "400px",
        left: "0%",
        ease : "power4",
        duration:0.5   })
        tl.to(item.current, {
          opacity:0.8,
        })
    }

  const toggleMenu = () => {
    let lt = gsap.timeline();
    lt.to(item.current, {
      opacity : "0",
    })
    lt.to(menu.current, {
      width : "100px",
      height: "100px",
      borderRadius : "100%",
      top : "20%",
      left : "50%",
      overflow : "hidden",
      ease : "power3",
      duration:0.5
    })
    lt.to(menu.current, {
      opacity : "0"
    })
    
    setOpen(false)

  }
  return (
    <header className = "w-full md:w-[1024px]  md:p-0 h-[61px]  text-gray  bg-black md:fixed top-0 z-30 ">
      <div className='hidden   md:flex md:fixed md:top-0 md:left-8  md:flex-col md:items-center  '>
        <Image src={line} alt="line"  className = "" />
        <div className=' w-[2rem] h-[7rem] flex flex-col items-center gap-1 ' > 
           {
            layoutIcons.map((icon, _) => {
              return (
                <div className='h-[32px] w-[32px] p-1 ' key={_}>
                    <Image src={icon} alt={icon}    className='object-fill'/>
                </div>
              )
            })
           }
        </div>
      </div>
    <nav className="w-full  h-full flex flex-row px-6 md:px-0 justify-between items-center  cursor-pointer   " >
      
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
    <div className='absolute md:hidden  p-[20px] top-[10%] left-[50%]  bg-black  w-[20px] h-[20px] overflow-hidden rounded-full -z-10 opacity-0 ' ref={menu}>

    <ul className='relative flex flex-col items-start justify-between gap-8  opacity-0' ref={item} >
    {
      links.map(( item, _ )=> {
        const {title, link} = item
        return (<li key={_} >
              <Link className='text-[1.5rem]'  href={link}><span className='text-primary me-[2px]'>#</span>{title}</Link>
          </li>)
        })
      } 
    <button className='font-semibold text-base uppercase'>
      en<span className='rotate-45'></span>
    </button>

    </ul>
    </div>
    
    {open ? (
      <button className='md:hidden font-semibold text-base uppercase cursor-pointer'  onClick={() => toggleMenu()}>
  <Image src={Close}    alt="close menu"   />
    </button>
) : (
  <button className='md:hidden font-semibold text-base uppercase'  onClick={() => handleclick()}>
  <Image src={Menu}    alt="open menu" />
   </button>
)}
   
  </nav>
      </header>
  )
}

export default Navbar
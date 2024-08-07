import React from 'react'

import Image from 'next/image';
import heroIcon from '@/public/hero-icon.svg';


const Facts = () => {
    const myFacts =[
        "I like winter more than summer",
        "I like football",
        "My favorite movie is what the day Owes the night",
        "I love gnawa music",
    ]
  return (
    <section id="works" className='text-white  w-full      flex flex-col items-start justify-start  gap-8 relative  p-8 md:p-0'>
        <div className=' '>
          <h2 className='text-white text-[32px]  font-medium  tracking-wide '>
            <span className='text-primary'>#</span>
            my-fun-facts
          </h2>
      </div>
        <div className='w-full h-full  flex  flex-row  items-center    gap-10 cursor-pointer    '>
              <div className='w-[50%]  h-full     flex items-center  flex-wrap gap-4' >
                {
                    myFacts.map((fact, index) => {
 
                      return (
                        <p key={index} className='w-fit h-fit text-gray border border-gay p-4' >
                            {fact}
                        </p>
                      )
                    })
                }
              </div>

        <div className='hidden md:block md:w-full lg:w-[50%] h-full   relative p-4'>
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
        </div>

    </section>
  )
}

export default Facts
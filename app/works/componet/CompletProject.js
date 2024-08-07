import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const CompletProject = ({listofproject, title}) => {
  return (
    <section id="works" className='text-white   w-full   flex  flex-wrap md:flex-row items-center lg:items-start  justify-evenly   gap-8  p-8 md:p-0 '>
      <div className='w-full  flex  items-center justify-between gap-x-8   '>
        <div className='flex items-center gap-x-2 flex-1 p-0 '>
          <h2 className='text-white text-[32px]  font-medium  tracking-wide '>
            <span className='text-primary'>#</span>
           {title}
          </h2>
         
        </div>
      </div>
      <div className='w-full  flex  flex-row  items-center  justify-center  md:justify-start flex-wrap gap-4 cursor-pointer     '>

      {
        listofproject.map((project, index) => {
          const {title, description, image, skills} = project
          return (<article className='w-[330px]  flex  flex-col  items-center gap-0 cursor-pointer     border  border-gray ' key={index}>
         
            <div className='w-full h-[200px] p-0'>
              <Image src={image} alt={title}  width={200} height={200} className='w-full h-full object-fill'  />
            </div>
            <div className='border border-gray w-full p-2 '>
              {
                skills.map((skill, index) => {
                return(
                  <span key={index} className=' capitalize text-gray'>{skill}</span>
                )
                })
              }
            </div>
            <div className='flex flex-col items-start gap-3 p-2'>
            <h2 className='capitalize  text-white tracking-wide font-extrabold  '>{title}</h2>
            <p className='w-full text-base  text-gray '>
              {description}
            </p>
              <div className='w-[80%] flex items-center gap-4'>
                  <button className='btn transition-all hover:bg-primary hover:britness '>live</button>
                  <button className='btn !border-gray'>code</button>
              </div>
            </div>
      </article>)
        }
      )
    } 
    </div>
      </section>
  )
}

export default CompletProject
import React from 'react'

const EmailForm = () => {
  return (
    <form className='text-white  w-full   flex flex-col  flex-wrap items-start justify-evenly gap-8   '>
        <div className='flex flex-col items-start gap-x-2 flex-1 p-0 '>
          <h2 className='text-white text-[32px]  font-medium  tracking-wide '>
            <span className='text-primary'>/</span>
           Send Message
          </h2>
        </div>
        <input type="email"  placeholder="enter your email address" className="w-[60%] border border-gray p-3 bg-black outline-0" />
        <textarea placeholder="Message" className='w-[80%] h-[200px] bg-black border border-gray outline-0 p-2'></textarea>
        <button type="submit" className="w-[20%] text-white text-base border border-primary p-3 rounded-md hover:bg-primary-dark">Send</button>
    </form>
  )
}

export default EmailForm
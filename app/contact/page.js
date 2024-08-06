import React from 'react'
import AboutMe from './Component/contact';
import EmailForm from './Component/EmailForm';

const page = () => {
  return (
    <section className="   flex  flex-1 min-h-screen  h-auto lg:w-[64rem] md:w-full  flex-col items-center justify-between    relative">
            <AboutMe />
            <EmailForm />
    </section>
  )
}

export default page
"use client"
import React, {createContext, useContext, useState} from 'react'
import { IoIosSend } from "react-icons/io";
import JsIcon from '@/public/Shape.svg';
import cssIcon from '@/public/css.svg';
import dockerIcon from '@/public/docker.svg';
import Cicon from '@/public/C.svg';
import Cppicon from '@/public/cpp.svg';
import htmlIcon from '@/public/html.svg';
import tailwindIcon from '@/public/tailwind.svg';
import nginxIcon from '@/public/nginx.svg';
import reactIcon from '@/public/react.svg';
import nextIcon from '@/public/next.svg';

import vsIcon from '@/public/vs.svg';
import gitIcon from '@/public/git.svg';
import githubIcon from '@/public/github.svg';

// import icons layout 
import line from '@/public/line.png';
// import github from '@/public/Github.svg'
import linkedin from '@/public/Linkedin.svg';
import Discord from '@/public/Discord.svg';
import Email from '@/public/Vector.svg';
import Call from '@/public/phone.svg';







export const PortfolioContext = createContext()
const ContextProvide = ({children}) => {

const [sendMeMessage, setSendMeMessage] = useState(false)
const icons = [JsIcon, cssIcon, dockerIcon, Cicon, Cppicon, htmlIcon , tailwindIcon, nginxIcon, reactIcon, nextIcon ]
const tools = [vsIcon, gitIcon, githubIcon, line]
const layoutIcons = [githubIcon, linkedin, Discord, Email,]
const contact = [
  {
  'title': 'issam.ichouaref1998@gmail.com',
  'icon': Email,
},
{
  'title': 'ichouare',
  'icon': Discord,
},
{
  'title': 'chouarefissam',
  'icon': linkedin,
},
{
  'title': '0646340298',
  'icon': Call,
}
]
  return (
    <PortfolioContext.Provider value={{icons , tools, layoutIcons, contact}} >
            {children}
    </PortfolioContext.Provider>
  )
}

export default ContextProvide
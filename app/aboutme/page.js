"use client"
import { useContext } from "react";
// import Image from "next/image";
// import {ProtfolioContext} from '@/app/Context/context'
// import MyInfo from "./_portfolio/MyInfo/MyInfo";
// import Myprinciple from "./_portfolio/MyInfo/Myprinciple";
// import Projects from "./_portfolio/Projects/Projects";
// import Skills from "./_portfolio/MyInfo/Skills";
import AboutMe from "./_components/AboutMe";
import Skills from "./_components/skills";
import Facts from "./_components/Facts";
// import Contacts from "./_portfolio/MyInfo/Contacts";




export default function Home() {

  return (
    <section className="   flex  flex-1 min-h-screen  h-auto lg:w-[64rem] md:w-full  flex-col items-center justify-between gap-20   relative">

      <AboutMe />
      <Skills />
      <Facts />
    </section>
  );
}

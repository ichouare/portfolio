
import { Inter } from "next/font/google";
import "./globals.css";

import { FiFacebook , FiLinkedin,} from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import Image from "next/image";
import profil from '@/public/profil.webp';
import Toggle from "./_portfolio/ToggleComp/page";
const inter = Inter({ subsets: ["latin"] });
import ContextProvide from '@/Context/context';
import Navbar from "./_portfolio/MyInfo/Navbar";
import PortfolioFooter from "./_portfolio/MyInfo/PortfolioFooter.js";




export const metadata = {
  title: "ichouare",
  description: "full stack portfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ContextProvide> 
        <Navbar />
        {children}
        <PortfolioFooter />
      </ContextProvide>
      </body>
    </html>
  );
}

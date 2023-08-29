"use client";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText, BsClipboardData } from "react-icons/bs";
import { Link } from "react-scroll";

const MobileNav = () => {
   return (
      <nav className="lg:hidden fixed bottom-6 w-full overflow-hidden z-50 left-0 right-0 px-4">
         <div
            className="container max-w-md bg-black/20 h-[96px] backdrop-blur-2xl rounded-full px-4 flex
             justify-between items-center text-2xl text-white/50">
            <Link
               to="header"
               className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
               activeClass="active"
               smooth={true}
               spy={true}>
               <BiHomeAlt />
            </Link>
            <Link
               to="about"
               className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
               activeClass="active"
               smooth={true}
               spy={true}>
               <BiUser />
            </Link>
            <Link
               to="skills"
               className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
               activeClass="active"
               smooth={true}
               spy={true}>
               <BsClipboardData />
            </Link>
            <Link
               to="projects"
               className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
               activeClass="active"
               smooth={true}
               spy={true}>
               <BsBriefcase />
            </Link>
            <Link
               to="contact"
               className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
               activeClass="active"
               smooth={true}
               spy={true}>
               <BsChatSquareText />
            </Link>
         </div>
      </nav>
   );
};

export default MobileNav;

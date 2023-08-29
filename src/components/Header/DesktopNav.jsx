import ScrollLink from "@/common/ScrollLink";
import { orbitronFont } from "@/constants/localFonts";
import Image from "next/image";

const DesktopNav = () => {
   return (
      <nav className="px-2 py-10 flex items-center justify-between ">
         <Image
            width={"160"}
            height={"160"}
            quality={100}
            placeholder="blur"
            blurDataURL={`/images/logo.png`}
            priority
            src={`/images/logo.png`}
            alt={"logo"}
            className="md:w-[200px]"
         />
         <button
            className={`lg:hidden btn btn-sm ${orbitronFont.variable} font-sans`}>
            Work With Me
         </button>
         <ul className="hidden lg:flex items-center gap-x-4">
            <li>
               <ScrollLink
                  to="about"
                  className="text-white text-xl p-4 cursor-pointer font-medium hover:text-accent transition-all">
                  About
               </ScrollLink>
            </li>
            <li>
               <ScrollLink
                  to="skills"
                  className="text-white text-xl p-4 cursor-pointer font-medium hover:text-accent transition-all">
                  Skills
               </ScrollLink>
            </li>
            <li>
               <ScrollLink
                  to="projects"
                  className="text-white text-xl p-4 cursor-pointer font-medium hover:text-accent transition-all">
                  Projects
               </ScrollLink>
            </li>
            <li>
               <ScrollLink
                  to="contact"
                  className="text-white text-xl p-4 cursor-pointer font-medium hover:text-accent transition-all">
                  Contact
               </ScrollLink>
            </li>
         </ul>
      </nav>
   );
};

export default DesktopNav;

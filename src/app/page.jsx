import ScrollLink from "@/common/ScrollLink";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header/Header";
import MobileNav from "@/components/MobileNav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { BiUpArrow } from "react-icons/bi";

const page = () => {
   return (
      <div>
         <Header />
         <About />
         <Skills />
         <Projects />
         <Contact />
         <MobileNav />
         <div dir="rtl">
            <div className="hidden lg:block fixed bottom-12">
               <ScrollLink
                  to="header"
                  className="bg-accent p-2 rounded-full flex items-center justify-center cursor-pointer">
                  <BiUpArrow className="w-7 h-7" />
               </ScrollLink>
            </div>
         </div>
      </div>
   );
};

export default page;

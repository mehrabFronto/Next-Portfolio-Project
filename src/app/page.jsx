import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header/Header";
import MobileNav from "@/components/MobileNav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const page = () => {
   return (
      <div className="space-y-20">
         <Header />
         <About />
         <Skills />
         <Projects />
         <Contact />
         <MobileNav />
      </div>
   );
};

export default page;

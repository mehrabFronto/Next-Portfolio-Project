import WithMotion from "@/HOC/WithMotion";
import { orbitronFont } from "@/constants/localFonts";
import { fadeIn } from "@/utils/variants";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const skills = [
   {
      id: 1,
      name: "HTML & CSS",
      description:
         "HTML is a markup language for documents designed to be displayed in a web browser and CSS is a style sheet language used for design and style document written in HTML",
      link: "https://www.w3schools.com/html/html_css.asp",
   },
   {
      id: 2,
      name: "Tailwindcss",
      description:
         "Tailwind CSS is a utility-first CSS framework designed to enable users to create custom designed applications faster and easier.",
      link: "https://tailwindcss.com/",
   },
   {
      id: 3,
      name: "javaScript ",
      description:
         "javaScript is a High level, Object oriented and multi-paradigm programming language to dynamic our static HTML & CSS website.",
      link: "https://www.w3schools.com/whatis/whatis_js.asp",
   },
   {
      id: 4,
      name: "React.js",
      description:
         "React is a powerful javaScript library. javaScript is the core of this liberary and you must to know it so deep to use this library. we still are using HTML, CSS and JS but in a diffrent mideset ",
      link: "https://react.dev/",
   },
];

const Skills = () => {
   return (
      <div
         className="min-h-screen pt-8 flex items-center justify-center"
         id="skills">
         <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-10 gap-y-12">
            {/* text */}
            <WithMotion
               variants={fadeIn("down", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className=" lg:bg-skills bg-no-repeat mix-blend-lighten bg-bottom">
               <div className="max-w-screen-sm">
                  <h2
                     className={`h2 text-accent ${orbitronFont.variable} font-sans`}>
                     My Skills.
                  </h2>
                  <h3 className={`h3 ${orbitronFont.variable} font-sans`}>
                     I&apos;m a junior front-end developer and i develop the UI
                     designs and i handle the front side actions.
                  </h3>
                  <button
                     className={`btn btn-sm ${orbitronFont.variable} font-sans`}>
                     Downlaod My CV
                  </button>
               </div>
            </WithMotion>

            {/* skills */}
            <WithMotion
               variants={fadeIn("up", 0.4)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}>
               <div className="flex flex-col gap-y-5 max-w-screen-md">
                  {skills.map((skill) => {
                     return (
                        <div
                           key={skill.id}
                           className="flex items-start justify-center border-b border-white/25 pb-4">
                           <div>
                              <h3
                                 className={`h3 ${orbitronFont.variable} font-sans`}>
                                 {skill.name}
                              </h3>
                              <p>{skill.description}</p>
                           </div>
                           <div className="pt-2">
                              <Link
                                 href={skill.link}
                                 target="_blank"
                                 className="btn w-8 h-8 flex items-center justify-center ">
                                 <BsArrowUpRight />
                              </Link>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </WithMotion>
         </div>
      </div>
   );
};

export default Skills;

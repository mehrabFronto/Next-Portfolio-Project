import WithMotion from "@/HOC/WithMotion";
import ScrollLink from "@/common/ScrollLink";
import { orbitronFont } from "@/constants/localFonts";
import { fadeIn } from "@/utils/variants";
import Image from "next/image";

const About = () => {
   return (
      <div
         className="min-h-screen flex items-center justify-center px-2"
         id="about">
         <div
            className="w-full flex flex-col lg:flex-row lg:justify-between 
            gap-y-6 lg:gap-x-4 pb-24">
            {/* image */}

            <WithMotion
               className="w-full flex-1 flex items-center justify-center"
               variants={fadeIn("down", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}>
               <Image
                  width={"600"}
                  height={"600"}
                  quality={100}
                  placeholder="blur"
                  blurDataURL={`/images/about.png`}
                  priority
                  src={`/images/about.png`}
                  alt={"logo"}
                  className="w-full md:max-w-md xl:max-w-lg 2xl:max-w-xl"
               />
            </WithMotion>

            {/* text */}

            <WithMotion
               className="w-full flex-1 lg:mt-28"
               variants={fadeIn("up", 0.4)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}>
               <div className="flex flex-col items-start w-full">
                  <h2
                     className={`h2 text-accent ${orbitronFont.variable} font-sans`}>
                     About me.
                  </h2>
                  <h3 className={`h3 ${orbitronFont.variable} font-sans`}>
                     I&apos;m a junior front-end developer with about 1 year
                     experience.
                  </h3>
                  <p className="mb-6">
                     I&apos;m good at css and styles so i can develop the UI
                     design like the exact design that has given to me. I have a
                     deep knowledge of javaScript that is the most important
                     part of React.js library and i have a complete knowledge of
                     react mindset <br />
                     I&apos;m always looking for learning new thing and debuging
                     is my favorite part of programming.
                  </p>
                  <div
                     className={`${orbitronFont.variable} font-sans flex items-center gap-x-4 mb-8`}>
                     <ScrollLink
                        to="contact"
                        className="btn btn-lg block text-center pt-4 cursor-pointer">
                        Contact Me
                     </ScrollLink>
                     <p>
                        <ScrollLink
                           to="projects"
                           className="text-link">
                           My Projects
                        </ScrollLink>
                     </p>
                  </div>
               </div>
            </WithMotion>
         </div>
      </div>
   );
};

export default About;

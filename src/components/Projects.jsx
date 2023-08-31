import WithMotion from "@/HOC/WithMotion";
import { orbitronFont } from "@/constants/localFonts";
import { fadeIn } from "@/utils/variants";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
   return (
      <div
         className="min-h-screen pt-8"
         id="projects">
         <div className="p-2 md:p-4 lg:p-6 2xl:p-12">
            <WithMotion
               className="grid grid-cols-2 gap-8"
               variants={fadeIn("down", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}>
               {/* text */}
               <div className="col-span-2 lg:col-span-1 space-y-8 xl:space-y-16 2xl:space-y-20 mb-6 lg:mb-0">
                  <h2
                     className={`h2 text-accent ${orbitronFont.variable} font-sans`}>
                     My Lastest <br />
                     Work.
                  </h2>
                  <p className="max-w-sm">
                     You can visit the projects online and also you have access
                     the source codes on my github account.
                  </p>
                  <Link
                     href={"https://github.com/mehrabFronto"}
                     target="_blank"
                     className={`block w-60`}>
                     <button
                        className={`btn btn-sm ${orbitronFont.variable} font-sans`}>
                        Other Projects On Github
                     </button>
                  </Link>
               </div>
               {/* image 1 */}
               <div className="col-span-2 lg:col-span-1 group">
                  <div
                     className="aspect-w-16 aspect-h-9 w-full mb-6 rounded-2xl border-2 border-white/50
                   overflow-hidden relative">
                     <Link
                        href={`https://contacts-list-app-md.netlify.app`}
                        target="_blank"
                        className="block">
                        {/* overlay */}
                        <div
                           className="absolute w-full h-full lg:group-hover:bg-black/60 z-40 transition-all
                        duration-300 ease-in-out"></div>

                        {/* title */}
                        <p
                           className={`text-link absolute z-50 bottom-[-300px] left-10 ${orbitronFont.variable} font-sans
                        lg:group-hover:bottom-10 transition-all duration-500 text-3xl`}>
                           Contacts List Project
                        </p>

                        <Image
                           width={"1000"}
                           height={"1000"}
                           quality={100}
                           placeholder="blur"
                           blurDataURL={`/images/portfolio-img-1.png`}
                           priority
                           src={`/images/portfolio-img-1.png`}
                           alt={"project"}
                           className="w-full h-full max-w-3xl lg:group-hover:scale-125 transition-all ease-in-out 
                        duration-500"
                        />
                     </Link>
                  </div>
               </div>
            </WithMotion>

            <WithMotion
               className="grid grid-cols-2 gap-8"
               variants={fadeIn("up", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}>
               {/* image 2 */}
               <div className="col-span-2 lg:col-span-1 group">
                  <div
                     className="aspect-w-16 aspect-h-9 w-full mb-6 rounded-2xl border-2 border-white/50
                   overflow-hidden relative">
                     <Link
                        href={`https://ir-shopping-app.netlify.app/`}
                        target="_blank"
                        className="block">
                        {/* overlay */}
                        <div
                           className="absolute w-full h-full lg:group-hover:bg-black/60 z-40 transition-all
                        duration-300 ease-in-out"></div>

                        {/* title */}
                        <p
                           className={`text-link absolute z-50 bottom-[-300px] left-10 ${orbitronFont.variable} font-sans
                        lg:group-hover:bottom-10 transition-all duration-500 text-3xl`}>
                           React Shopping App Project
                        </p>

                        <Image
                           width={"1000"}
                           height={"1000"}
                           quality={100}
                           placeholder="blur"
                           blurDataURL={`/images/portfolio-img-2.png`}
                           priority
                           src={`/images/portfolio-img-2.png`}
                           alt={"project"}
                           className="w-full h-full max-w-3xl lg:group-hover:scale-125 transition-all ease-in-out 
                        duration-500"
                        />
                     </Link>
                  </div>
               </div>
               {/* image 3 */}
               <div className="col-span-2 lg:col-span-1 group">
                  <div
                     className="aspect-w-16 aspect-h-9 w-full mb-6 rounded-2xl border-2 border-white/50
                   overflow-hidden relative">
                     <Link
                        href={`https://iventory-app.netlify.app`}
                        target="_blank"
                        className="block">
                        {/* overlay */}
                        <div
                           className="absolute w-full h-full lg:group-hover:bg-black/60 z-40 transition-all
                        duration-300 ease-in-out"></div>

                        {/* title */}
                        <p
                           className={`text-link absolute z-50 bottom-[-300px] left-10 ${orbitronFont.variable} font-sans
                        lg:group-hover:bottom-10 transition-all duration-500 text-3xl`}>
                           Iventory App Project
                        </p>

                        <Image
                           width={"1000"}
                           height={"1000"}
                           quality={100}
                           placeholder="blur"
                           blurDataURL={`/images/portfolio-img-3.png`}
                           priority
                           src={`/images/portfolio-img-3.png`}
                           alt={"project"}
                           className="w-full h-full max-w-3xl lg:group-hover:scale-125 transition-all ease-in-out 
                        duration-500"
                        />
                     </Link>
                  </div>
               </div>
            </WithMotion>
         </div>
      </div>
   );
};

export default Projects;

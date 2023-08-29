"use client";

import ScrollLink from "@/common/ScrollLink";
import TypingAnimation from "@/common/TypingAnimation";
import { orbitronFont } from "@/constants/localFonts";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Banner = () => {
   return (
      <div className="flex items-start justify-center lg:justify-between flex-wrap mt-20">
         {/* text */}
         <div className="flex flex-col items-center lg:items-start gap-y-4 text-center lg:text-left lg:mt-12">
            {/* name */}
            <motion.h1
               className="font-bold text-[55px] lg:text-7xl leading-[50px]"
               variants={fadeIn("up", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}>
               Mehrab Dehghan
            </motion.h1>
            {/* typing animation */}
            <motion.div
               className="uppercase flex items-center gap-x-2 text-3xl lg:text-5xl font-semibold"
               variants={fadeIn("up", 0.4)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}>
               <p>i am </p>
               <TypingAnimation
                  sequence={[
                     "a programmer",
                     2000,
                     "a developer",
                     2000,
                     "an engineer",
                     2000,
                  ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
               />
            </motion.div>
            {/* about */}
            <motion.p
               className="mb-4 max-w-md lg:text-xl"
               variants={fadeIn("up", 0.5)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}>
               I am a front-end developer so i develop the UI designs and i
               handle the front side actions.
            </motion.p>
            {/* buttons */}
            <motion.div
               className={`${orbitronFont.variable} font-sans flex items-center gap-x-4 mb-8`}
               variants={fadeIn("up", 0.6)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}>
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
            </motion.div>
            {/* social */}
            <motion.div
               className="flex items-center gap-x-8 text-xl"
               variants={fadeIn("up", 0.7)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}>
               <Link
                  href="https://github.com/mehrabFronto"
                  target="_blank"
                  className="lg:hover:scale-125 transition-all">
                  <FaGithub />
               </Link>
               <Link
                  href="https://www.linkedin.com/in/mehrab-dehghan"
                  target="_blank"
                  className="lg:hover:scale-125 transition-all">
                  <FaLinkedin />
               </Link>
               <Link
                  href="https://t.me/mehrabd20"
                  target="_blank"
                  className="lg:hover:scale-125 transition-all">
                  <FaTelegram />
               </Link>
            </motion.div>
         </div>
         {/* avatar */}
         <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}>
            <Image
               width={"450"}
               height={"450"}
               quality={100}
               placeholder="blur"
               blurDataURL={`/images/avatar.png`}
               priority
               src={`/images/avatar.png`}
               alt={"logo"}
               className="hidden lg:block"
            />
         </motion.div>
      </div>
   );
};

export default Banner;

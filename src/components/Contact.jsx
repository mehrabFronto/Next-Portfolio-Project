import WithMotion from "@/HOC/WithMotion";
import { orbitronFont } from "@/constants/localFonts";
import { fadeIn } from "@/utils/variants";

const Contact = () => {
   return (
      <div
         className="min-h-screen pt-8 flex items-center justify-center"
         id="contact">
         <div className="flex flex-col lg:flex-row items-start md:items-center justify-between w-full">
            <WithMotion
               className="w-full md:flex items-center justify-center lg:block"
               variants={fadeIn("down", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}>
               <div className="flex flex-col items-start mb-8 lg:mb-0">
                  <h4 className="text-accent uppercase text-xl">
                     get in touch
                  </h4>
                  <h2 className={`text-6xl lg:text-7xl 2xl:text-8xl`}>
                     Let&apos;s work <br />
                     together!
                  </h2>
               </div>
            </WithMotion>
            <WithMotion
               className="w-full md:flex items-center justify-center lg:block"
               variants={fadeIn("up", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}>
               <form
                  className="w-full max-w-xl 2xl:max-w-screen-md flex flex-col items-start gap-y-12
            border p-6 pb-20 rounded-2xl">
                  <input
                     type="text"
                     className="w-full bg-transparent outline-none border-b py-4 placeholder:text-white
                  focus:border-accent transition-all"
                     placeholder="Your name..."
                  />
                  <input
                     type="text"
                     className="w-full bg-transparent outline-none border-b py-4 placeholder:text-white
                  focus:border-accent transition-all"
                     placeholder="Your email..."
                  />
                  <textarea
                     type="text"
                     placeholder="Your message..."
                     className="w-full bg-transparent outline-none border-b py-4 placeholder:text-white
                  focus:border-accent transition-all resize-none h-28"></textarea>
                  <button
                     className={`btn btn-lg ${orbitronFont.variable} font-sans`}>
                     Send Message
                  </button>
               </form>
            </WithMotion>
         </div>
      </div>
   );
};

export default Contact;

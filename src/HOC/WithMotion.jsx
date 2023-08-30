"use client";
import { motion } from "framer-motion";

const WithMotion = ({ children, variants, initial, whileInView, viewport }) => {
   return (
      <motion.div
         variants={variants}
         initial={initial}
         whileInView={whileInView}
         viewport={viewport}>
         {children}
      </motion.div>
   );
};

export default WithMotion;

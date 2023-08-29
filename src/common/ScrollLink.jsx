"use client";

import { Link } from "react-scroll";

const ScrollLink = ({ children, to, className, activeClass }) => {
   return (
      <Link
         to={to}
         className={className}
         activeClass={activeClass}
         spy={true}
         smooth={true}>
         {children}
      </Link>
   );
};

export default ScrollLink;

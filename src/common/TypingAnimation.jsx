"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = ({ sequence, speed, className, wrapper, repeat }) => {
   return (
      <TypeAnimation
         sequence={sequence}
         speed={speed}
         className={className}
         wrapper={wrapper}
         repeat={repeat}
      />
   );
};

export default TypingAnimation;

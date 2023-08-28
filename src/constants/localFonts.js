import LocalFont from "@next/font/local";

export const orbitronFont = LocalFont({
   src: [
      {
         path: "../../public/fonts/Orbitron/Orbitron-Regular.woff2",
         weight: "400",
         style: "normal",
      },
      {
         path: "../../public/fonts/Orbitron/Orbitron-Medium.woff2",
         weight: "500",
         style: "normal",
      },
      {
         path: "../../public/fonts/Orbitron/Orbitron-SemiBold.woff2",
         weight: "600",
         style: "normal",
      },
      {
         path: "../../public/fonts/Orbitron/Orbitron-Bold.woff2",
         weight: "700",
         style: "normal",
      },
      {
         path: "../../public/fonts/Orbitron/Orbitron-ExtraBold.woff2",
         weight: "800",
         style: "normal",
      },
      {
         path: "../../public/fonts/Orbitron/Orbitron-Black.woff2",
         weight: "900",
         style: "normal",
      },
   ],
   variable: "--font-orbitron",
   style: "normal",
   display: "block",
});

export const rajdhaniFont = LocalFont({
   src: [
      {
         path: "../../public/fonts/Rajdhani/Rajdhani-Light.woff2",
         weight: "300",
         style: "normal",
      },
      {
         path: "../../public/fonts/Rajdhani/Rajdhani-Regular.woff2",
         weight: "400",
         style: "normal",
      },
      {
         path: "../../public/fonts/Rajdhani/Rajdhani-Medium.woff2",
         weight: "500",
         style: "normal",
      },
      {
         path: "../../public/fonts/Rajdhani/Rajdhani-SemiBold.woff2",
         weight: "600",
         style: "normal",
      },
      {
         path: "../../public/fonts/Rajdhani/Rajdhani-Bold.woff2",
         weight: "700",
         style: "normal",
      },
   ],
   variable: "--font-rajdhani",
   style: "normal",
   display: "block",
});

export const aldrichFont = LocalFont({
   src: [
      {
         path: "../../public/fonts/Aldrich/Aldrich-Regular.woff2",
         weight: "400",
         style: "normal",
      },
   ],
   variable: "--font-aldrich",
   style: "normal",
   display: "block",
});

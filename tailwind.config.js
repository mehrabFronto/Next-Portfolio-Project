/** @type {import('tailwindcss').Config} */

module.exports = {
   content: [
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#fff",
            accent: "#c10000",
         },
         backgroundImage: {
            body: "url('/images/body.jpg')",
            skills: "url('/images/skills.png')",
         },
         container: {
            center: true,
         },
         fontFamily: {
            sans: ["var(--font-orbitron)"],
            serif: ["var(--font-rajdhani)"],
            mono: ["var(--font-aldrich)"],
         },
      },
   },
   plugins: [],
};

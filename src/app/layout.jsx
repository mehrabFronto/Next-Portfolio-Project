import { rajdhaniFont } from "@/constants/localFonts";
import "./globals.css";

export const metadata = {
   title: "Mehrab Dehghan Portfolio",
   description: "Mehrab Dehghan Portfolio",
};

const Layout = ({ children }) => {
   return (
      <html lang="en">
         <body
            className={`bg-body bg-no-repeat bg-cover font-serif ${rajdhaniFont.variable}`}>
            <main className="container min-h-screen pb-8 px-2 md:px-0">
               {children}
            </main>
         </body>
      </html>
   );
};

export default Layout;

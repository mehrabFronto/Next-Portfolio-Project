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
            <main className="container min-h-screen pb-8 p-2 md:p-4">
               {children}
            </main>
         </body>
      </html>
   );
};

export default Layout;

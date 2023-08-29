import Banner from "./Banner";
import DesktopNav from "./DesktopNav";

const Header = () => {
   return (
      <header
         className="min-h-screen pb-8"
         id="header">
         <DesktopNav />
         <Banner />
      </header>
   );
};

export default Header;

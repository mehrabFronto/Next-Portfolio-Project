import Banner from "./Banner";
import DesktopNav from "./DesktopNav";

const Header = () => {
   return (
      <div
         className="min-h-screen pb-8"
         id="header">
         <DesktopNav />
         <Banner />
      </div>
   );
};

export default Header;

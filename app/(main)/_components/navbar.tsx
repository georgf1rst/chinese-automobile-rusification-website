import NavbarRoutes from "@/components/navbar-routes";
import { Logo } from "./logo";

const Navbar = () => {
    return ( 
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm justify-between">

            <div className="flex py-28 justify-center md:w-[180px]">
                <Logo />
            </div>

            <NavbarRoutes/>
        
        </div>
     );
}
 
export default Navbar;
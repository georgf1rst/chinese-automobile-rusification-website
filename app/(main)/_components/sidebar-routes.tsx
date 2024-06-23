import { Layout } from "lucide-react";
import SidebarItem from "./sidebar-item";

const mainPageRoutes = [
    {
        icon: Layout,
        label: "Главная",
        href: "/"
    }
]

const SidebarRoutes = () => {

    const routes = mainPageRoutes;

    return (         
        <div className="flex flex-col w-full gap-y-1.5">
            {routes.map((route) => (
                <SidebarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
     );
}
 
export default SidebarRoutes;
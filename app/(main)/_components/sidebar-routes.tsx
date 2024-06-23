import { Handshake, Info, Layout, ShoppingBag, Wrench } from "lucide-react";
import SidebarItem from "./sidebar-item";

const mainPageRoutes = [
    {
        icon: Layout,
        label: "Главная",
        href: "/"
    },
    {
        icon: ShoppingBag,
        label: "Товары",
        href: "/about"
    },
    {
        icon: Wrench,
        label: "Услуги",
        href: "/about"
    },
    {
        icon: Info,
        label: "О нас",
        href: "/about"
    },
    {
        icon: Handshake,
        label: "Сотрудничество",
        href: "/about"
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
"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { GiArtificialIntelligence } from "react-icons/gi";
import {
  IoColorPaletteOutline,
  IoLogoIonitron,
  IoSettingsSharp,
} from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { ModeToggle } from "../ModeToggle";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";

interface LeftSidebarProps {
  className?: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ className }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: IoSettingsSharp,
        label: "Setting",
        active: pathname === "/setting",
        href: "/setting",
      },
      {
        icon: AiOutlineDashboard,
        label: "Dashboard",
        active: pathname === "/dashboard",
        href: "/dashboard",
      },
      {
        icon: BsChatDots,
        label: "AI",
        active: pathname === "/ai",
        href: "/ai",
      },
    ],
    [pathname]
  );

  return (
    <div className={cn("flex", className)}>
      <div className="flex flex-col gap-y-2 h-screen w-[250px] border-r bg-slate-200 dark:bg-slate-900 ">
        <div className="flex flex-col gap-y-2 p-4 text-medium text-sm">
          <section className="px-4 flex items-center gap-x-4 group">
            <IoLogoIonitron
              size={60}
              className="dark:text-slate-400 transition duration-300 dark:group-hover:text-slate-200 group-hover:animate-bounce"
            />
            <div className="text-lg">
              <p className="font-bold">Desk-AI</p>
            </div>
          </section>
          <div className="h-6" />
          <section className="flex items-center gap-x-2 px-4">
            <div className="flex-1 flex items-center gap-x-2">
              <IoColorPaletteOutline size={26} />
              <p className="truncate">Theme</p>
            </div>

            <div className="">
              <ModeToggle />
            </div>
          </section>
          <div className="px-4 my-2">
            <Separator className="bg-slate-300 dark:bg-slate-700" />
          </div>

          <section>
            {routes.map((item: any) => {
              return <SidebarItem key={item.label} {...item} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

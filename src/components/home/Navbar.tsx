import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/shadcn/navigation-menu";

import Image from "next/image";
import { Button } from "@/components/shadcn/button";

export interface NavbarProps {
    id?: string
    items: {title: string, href: string}[]
}

export function Navbar(props: NavbarProps) {
  return (
    <div id={props.id}>
      <header
        className="flex justify-between fixed top-2 left-1/2 
        -translate-x-1/2 w-[98%] z-50 bg-primary rounded-xl shadow-lg px-6 py-3"
      >
        <div className="flex items-center gap-2">
          <Image src={"/logo.png"} alt="logo" width="35" height="35" />
          <span className="text-white font-bold">StockClound</span>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            {props.items.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink href={item.href} className="text-white">
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-row gap-2">
          <Button variant="ghost" className="text-white">
            Login
          </Button>
          <Button variant="secondary">Registre-se</Button>
        </div>
      </header>
    </div>
  );
}
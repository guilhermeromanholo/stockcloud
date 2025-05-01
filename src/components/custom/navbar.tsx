import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

import { Logo } from "./logo";
import { Button } from "../ui/button";

const items: { title: string; href: string }[] = [
  { title: "Início", href: "/" },
  { title: "Sobre", href: "/sobre" },
  { title: "Contato", href: "/contato" },
];

export function Navbar() {
  return (
    <div>
      <header
        className="flex justify-between fixed top-2 left-1/2 
        -translate-x-1/2 w-[98%] z-50 bg-primary rounded-xl shadow-lg px-6 py-3">
        <Logo />

        <NavigationMenu>
          <NavigationMenuList>
            {items.map((item) => (
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

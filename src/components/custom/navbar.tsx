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
    <header className="bg-neutral-800">
      <div className="flex flex-row gap-2 items-center justify-between p-2 mx-5">
        <Logo/>

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
      </div>
    </header>
  );
}

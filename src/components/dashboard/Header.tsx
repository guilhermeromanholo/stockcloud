import { UserNav } from '@/components/dashboard/UserNav'; 
import { Input } from '@/components/shadcn/input';
import { BellIcon, SearchIcon } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/shadcn/sheet'; 

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-800 dark:border-gray-700">
      <div className="container flex h-16 items-center px-4">
        {/* Mobile Sidebar Toggle */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden mr-4">
            <Button variant="ghost" size="icon">
              <SearchIcon className="h-5 w-5" /> {/* Use um ícone de menu, por exemplo */}
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            {/* Aqui você pode renderizar a Sidebar para mobile */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-16 border-b dark:border-gray-700">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h1>
              </div>
              {/* Adapte sua Sidebar aqui ou crie uma versão mobile */}
              {/* Por simplicidade, vou usar um placeholder. Você pode reutilizar o código da Sidebar */}
              <nav className="flex-1 px-2 py-4 space-y-1">
                {/* Itens de navegação para mobile */}
                <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
                <Button variant="ghost" className="w-full justify-start">Produtos</Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white md:block hidden">Dashboard</h2> {/* Ou o título da página atual */}
          <div className="flex-1 ml-4 md:ml-0 max-w-sm">
            <Input
              type="search"
              placeholder="Pesquisar..."
              className="md:w-[100px] lg:w-[300px]"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <BellIcon className="h-5 w-5" />
              <span className="sr-only">Notificações</span>
              {/* Você pode adicionar um badge de notificação aqui */}
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  );
}
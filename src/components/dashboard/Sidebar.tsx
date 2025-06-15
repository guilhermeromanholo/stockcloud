'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; 
import { Button } from '@/components/shadcn/button';
import { Package, LineChart, Home, Settings, DollarSign } from 'lucide-react'; 
import Image from 'next/image';

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Produtos', href: '/dashboard/products', icon: Package },
    { name: 'Lucros', href: '/dashboard/profits', icon: DollarSign },
    { name: 'Relatórios', href: '/dashboard/reports', icon: LineChart },
    { name: 'Configurações', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 shadow-md">
      <div className="flex items-center justify-center h-16 border-b dark:border-gray-700">
        <Image src="/logo.png" alt="Logo" width={45} height={45} />
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">StockCloud</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} passHref>
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start',
                  isActive && 'bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary-foreground'
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
import "./globals.css";

import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/custom/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar/>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}

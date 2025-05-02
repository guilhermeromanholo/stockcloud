import { Footer } from "@/components/custom/footer";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        {children}
        <Toaster position="top-left"/>
      </body>
    </html>
  );
}

import "./globals.css";
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
      </body>
    </html>
  );
}

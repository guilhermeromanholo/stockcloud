import { Navbar } from "@/components/custom/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

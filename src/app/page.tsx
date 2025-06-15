'use client'

import { Banner } from "@/components/home/Banner";
import { Navbar } from "@/components/home/Navbar";

import { ContactPage } from "@/components/contact/ContactPage";
import { AboutPage } from "@/components/about/AboutPage";
import { Footer } from "@/components/home/Footer";
import { useState } from "react";
import { LoginDialog } from "@/components/login/LoginDialog";
import { RegisterDialog } from "@/components/login/RegisterDialog";

const navItems: { title: string, href: string }[] = [
  { title: "Início", href: "#" },
  { title: "Sobre", href: "#sobre" },
  { title: "Contato", href: "#contato" },
];

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

  return (
    <div>
      <Navbar 
        items={navItems} 
        onLoginClick={() => setLoginOpen(true)}
        onRegisterClick={() => setRegisterOpen(true)}
      />
      <Banner id="#"/>

      <LoginDialog
        open={loginOpen} onOpenChange={setLoginOpen}
        onSwitchToRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
      />

      <RegisterDialog
        open={registerOpen} onOpenChange={setRegisterOpen}
        onSwitchToLogin={() => {
          setRegisterOpen(false);
          setLoginOpen(true);
        }}
      />

      <div id="sobre">
        <AboutPage />
      </div>

      <div id="contato">
        <ContactPage />
      </div>

      <Footer />
    </div>
  );
}

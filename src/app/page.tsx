import Sobre from "./_sobre/page";
import Contato from "./_contato/page";

import { Navbar } from "@/components/custom/navbar";
import { Banner } from "@/components/custom/banner";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/custom/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>

      <div className="flex flex-grow flex-col items-center">
        <div id="#"><Banner/></div>
        <div id="sobre"><Sobre/></div>
        <div className="w-[50%]"><Separator className=""/></div>
        <div id="contato" className="w-full"><Contato/></div>
      </div>

      <Footer/>
    </div>
  );
}

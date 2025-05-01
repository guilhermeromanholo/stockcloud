import { ContactForm } from "@/components/custom/contact-form";

export default function Sobre() {
  return (
    <div>
      <div className="bg-net-image w-screen h-80 grid grid-cols-1 grid-rows-3">
        <div />
        <h1 className="font-bold text-5xl text-accent text-center mt-8">
          Entre em contato conosco!
        </h1>
        <h2 className="text-2xl text-accent text-center align-text-bottom">
          Envie sua pergunta, dúvida ou solicite suporte.
        </h2>
      </div>

      <div className="grid grid-cols-2 grid-rows-1">
        <div className="flex flex-col items-center">
          <div className="w-[75%] m-12">
            <ContactForm />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1 m-12">
            <span className="font-bold">Informações:</span>
            <span>Avenida Paulista, 777</span>
            <span>São Paulo, SP</span>
            <span>contato@stockcloud.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

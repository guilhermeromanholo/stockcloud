import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactPage() {
  return (
    <div>
      <h2 className="text-center mt-5 font-bold text-2xl col-span-2">Contato</h2>
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="flex flex-col items-center">
          <ContactForm />
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

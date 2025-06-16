import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactPage() {
  return (
    <div>
      <div className="text-center my-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Entre em contato conosco!
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Discuta com nossa equipe especializada sobre suas principais dúvidas.
        </p>
      </div>
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

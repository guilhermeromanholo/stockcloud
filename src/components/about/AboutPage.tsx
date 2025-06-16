import { aboutCards } from "./data";
import { AboutCard } from "./AboutCard";

export function AboutPage() {
  return (
    <div>
      <div className="text-center my-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Sobre a nossa missão
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          A Stockcloud oferece solução para o meio comercial há mais de 20 anos!
        </p>
      </div>

      <div id="sobre" className="flex gap-5 p-8 justify-center">
        {aboutCards.map((card) => (
          <AboutCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
}

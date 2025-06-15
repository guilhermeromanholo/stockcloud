import { aboutCards } from "./data";
import { AboutCard } from "./AboutCard";

export function AboutPage() {
  return (
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
  );
}

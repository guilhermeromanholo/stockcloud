import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ReactElement } from "react";
import { ChartColumnIncreasing, ChartPie, ClipboardList, Lightbulb } from "lucide-react";

const cards: { icon: ReactElement; title: string; content: string }[] = [
  {
    icon: <Lightbulb className="w-10 h-10"/>,
    title: "Inovação Constante",
    content:
      "Estamos sempre em busca de novas tecnologias para tornar o gerenciamento de estoque mais ágil e eficiente.",
  },
  {
    icon: <ClipboardList className="w-10 h-10"/>,
    title: "Planejamento Estratégico",
    content: "Facilitamos o planejamento de compras e reposição de mercadorias com base em dados atualizados em tempo real."
  },
  {
    icon: <ChartPie className="w-10 h-10"/>,
    title: "Análises Detalhadas",
    content: "Visualize relatórios gráficos que ajudam a identificar tendências de consumo e otimizar seu estoque.",
  },
  {
    icon: <ChartColumnIncreasing className="w-10 h-10"/>,
    title: "Resultados Visíveis",
    content: "Com nossos gráficos e métricas, acompanhe o crescimento do seu negócio e tome decisões mais inteligentes."
  },
];

export default function Sobre() {
  return (
    <div id="#sobre" className="flex gap-5 p-8">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader>
            <CardTitle>{card.icon}</CardTitle>
            <CardTitle className="font-bold">{card.title}</CardTitle>
          </CardHeader>
          <CardContent>{card.content}</CardContent>
        </Card>
      ))}
    </div>
  );
}

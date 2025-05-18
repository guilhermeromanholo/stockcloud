import { ReactElement } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/card";

export interface CardsProps {
    id?: string
    cards: { icon: ReactElement, title: string, content: string }[]
}

export function Cards(props: CardsProps) {
  return (
    <div id={props.id} className="flex gap-5 p-8">
      {props.cards.map((card) => (
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
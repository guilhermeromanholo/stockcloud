import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/card";
import { LucideIcon } from "lucide-react";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export function AboutCard({ icon: Icon, title, content }: AboutCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Icon className="w-10 h-10" />
        </CardTitle>
        <CardTitle className="font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

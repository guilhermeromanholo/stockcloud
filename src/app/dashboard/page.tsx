// app/(dashboard)/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/card';
import { DollarSign, Package, TrendingUp } from 'lucide-react';
import { DailyProfitsChart } from '@/components/dashboard/DailyProfitsChart';
import { RecentSalesTable } from '@/components/dashboard/RecentSalesTable';
import { StatsCard } from '@/components/dashboard/StatsCard';

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Lucro Diário"
        value="R$ 1.250,00"
        description="+20.1% do mês passado"
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Total de Produtos"
        value="256"
        description="+15 novos esta semana"
        icon={<Package className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Vendas Hoje"
        value="R$ 5.789,00"
        description="+5.2% das vendas de ontem"
        icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
      />
      <StatsCard
        title="Estoque Baixo"
        value="12 itens"
        description="Atenção necessária"
        icon={<Package className="h-4 w-4 text-muted-foreground" />}
      />

      <Card className="col-span-4 lg:col-span-2">
        <CardHeader>
          <CardTitle>Lucros Diários</CardTitle>
          <CardDescription>
            Visão geral dos lucros dos últimos 7 dias.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DailyProfitsChart />
        </CardContent>
      </Card>

      <Card className="col-span-4 lg:col-span-2">
        <CardHeader>
          <CardTitle>Vendas Recentes</CardTitle>
          <CardDescription>
            As 10 últimas vendas realizadas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentSalesTable />
        </CardContent>
      </Card>
    </div>
  );
}
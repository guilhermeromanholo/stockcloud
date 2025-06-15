// components/dashboard/RecentSalesTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn/table';

const sales = [
  { id: '1', customer: 'João da Silva', email: 'joao@example.com', amount: 250.00, avatar: 'https://github.com/shadcn.png' },
  { id: '2', customer: 'Maria Oliveira', email: 'maria@example.com', amount: 150.00, avatar: 'https://github.com/shadcn.png' },
  { id: '3', customer: 'Pedro Santos', email: 'pedro@example.com', amount: 300.00, avatar: 'https://github.com/shadcn.png' },
  { id: '4', customer: 'Ana Costa', email: 'ana@example.com', amount: 180.00, avatar: 'https://github.com/shadcn.png' },
  { id: '5', customer: 'Carlos Pereira', email: 'carlos@example.com', amount: 400.00, avatar: 'https://github.com/shadcn.png' },
];

export function RecentSalesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sales.map((sale) => (
          <TableRow key={sale.id}>
            <TableCell className="font-medium">{sale.customer}</TableCell>
            <TableCell>{sale.email}</TableCell>
            <TableCell className="text-right">R${sale.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
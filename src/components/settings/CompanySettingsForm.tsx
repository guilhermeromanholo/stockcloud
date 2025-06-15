// components/settings/CompanySettingsForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/shadcn/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/card';
import { toast } from 'sonner';

const companyFormSchema = z.object({
  companyName: z.string().min(2, { message: 'O nome da empresa deve ter no mínimo 2 caracteres.' }),
  cnpj: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
});

type CompanyFormValues = z.infer<typeof companyFormSchema>;

export function CompanySettingsForm() {
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      companyName: 'Minha Empresa Ltda.', // Dados mockados
      cnpj: 'XX.XXX.XXX/0001-XX',
      address: 'Rua Principal, 123 - Cidade - UF',
      phone: '(XX) XXXX-XXXX',
    },
  });

  function onSubmit(data: CompanyFormValues) {
    // Envie os dados para a API
    console.log('Dados da empresa salvos:', data);
    toast('Configurações da Empresa Salvas!');
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações da Empresa</CardTitle>
        <CardDescription>Gerencie as informações da sua empresa.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Empresa</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CNPJ</FormLabel>
                  <FormControl>
                    <Input placeholder="XX.XXX.XXX/0001-XX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Rua, Número, Bairro, Cidade, UF" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(XX) XXXX-XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Salvar Alterações</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
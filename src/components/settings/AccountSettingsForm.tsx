// components/settings/AccountSettingsForm.tsx
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

const accountFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter no mínimo 2 caracteres.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  currentPassword: z.string().optional(),
  newPassword: z.string().min(6, { message: 'A nova senha deve ter no mínimo 6 caracteres.' }).optional(),
  confirmNewPassword: z.string().optional(),
}).refine((data) => {
  if (data.newPassword && data.newPassword !== data.confirmNewPassword) {
    return false; // Senhas não coincidem
  }
  return true;
}, {
  message: 'As novas senhas não coincidem.',
  path: ['confirmNewPassword'],
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export function AccountSettingsForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      name: 'João Silva', // Dados mockados
      email: 'joao.silva@empresa.com',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  function onSubmit(data: AccountFormValues) {
    // Aqui você enviaria os dados para a sua API
    console.log('Dados da conta salvos:', data);
    toast('Configurações de Conta Salvas!');
    // Resetar campos de senha após salvar, por segurança
    form.reset({
      ...data,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações da Conta</CardTitle>
        <CardDescription>Atualize seu nome, e-mail e senha.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha Atual</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nova Senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar Nova Senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
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
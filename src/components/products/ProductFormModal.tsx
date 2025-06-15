// components/products/ProductFormModal.tsx
'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/shadcn/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import { Button } from '@/components/shadcn/button';
import { Product } from '@/app/dashboard/products/page';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/select';

// Esquema de validação com Zod
const productFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter no mínimo 2 caracteres.' }).max(50, { message: 'O nome deve ter no máximo 50 caracteres.' }),
  sku: z.string().min(3, { message: 'O SKU deve ter no mínimo 3 caracteres.' }).max(20, { message: 'O SKU deve ter no máximo 20 caracteres.' }),
  price: z.preprocess(
    (a) => parseFloat(a as string),
    z.number().min(0.01, { message: 'O preço deve ser maior que zero.' })
  ),
  stock: z.preprocess(
    (a) => parseInt(a as string, 10),
    z.number().int().min(0, { message: 'O estoque não pode ser negativo.' })
  ),
  category: z.string().min(1, { message: 'A categoria é obrigatória.' }),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: ProductFormValues | Product) => void;
  initialData?: Product | null;
}

export function ProductFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: ProductFormModalProps) {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: initialData || {
      name: '',
      sku: '',
      price: 0,
      stock: 0,
      category: '',
    },
  });

  // Resetar o formulário quando o modal for aberto ou o initialData mudar
  useEffect(() => {
    if (isOpen) {
      form.reset(initialData || {
        name: '',
        sku: '',
        price: 0,
        stock: 0,
        category: '',
      });
    }
  }, [isOpen, initialData, form]);

  function handleSubmit(values: ProductFormValues) {
    if (initialData) {
      // Se estiver editando, passa o ID também
      onSubmit({ ...values, id: initialData.id, lastUpdated: initialData.lastUpdated });
    } else {
      onSubmit(values);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{initialData ? 'Editar Produto' : 'Adicionar Novo Produto'}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Produto</FormLabel>
                  <FormControl>
                    <Input placeholder="Smartphone X" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU</FormLabel>
                  <FormControl>
                    <Input placeholder="SMX-001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço (R$)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" placeholder="99.99" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estoque</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Eletrônicos">Eletrônicos</SelectItem>
                      <SelectItem value="Periféricos">Periféricos</SelectItem>
                      <SelectItem value="Fotografia">Fotografia</SelectItem>
                      <SelectItem value="Áudio">Áudio</SelectItem>
                      <SelectItem value="Móveis">Móveis</SelectItem>
                      <SelectItem value="Roupas">Roupas</SelectItem>
                      {/* Adicione mais categorias conforme necessário */}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit">
                {initialData ? 'Salvar Alterações' : 'Adicionar Produto'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
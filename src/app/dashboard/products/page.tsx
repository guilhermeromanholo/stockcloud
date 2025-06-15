// app/(dashboard)/products/page.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/shadcn/button';
import { Input } from '@/components/shadcn/input';
import { PlusCircle } from 'lucide-react';
import { ProductTable } from '@/components/products/ProductTable';
import { ProductFormModal } from '@/components/products/ProductFormModal';
import { Separator } from '@/components/shadcn/separator';
import { toast } from 'sonner'; 

// Tipagem básica para um produto
export type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
  lastUpdated: string;
};

// Dados de exemplo (em um ambiente real, viriam de uma API)
const initialProducts: Product[] = [
  { id: '1', name: 'Smartphone X', sku: 'SMX-001', price: 2500.00, stock: 50, category: 'Eletrônicos', lastUpdated: '2025-06-10' },
  { id: '2', name: 'Notebook Pro 15', sku: 'NBP-002', price: 4800.00, stock: 25, category: 'Eletrônicos', lastUpdated: '2025-06-12' },
  { id: '3', name: 'Teclado Mecânico', sku: 'TKM-003', price: 350.00, stock: 100, category: 'Periféricos', lastUpdated: '2025-06-08' },
  { id: '4', name: 'Mouse Gamer RGB', sku: 'MGR-004', price: 120.00, stock: 80, category: 'Periféricos', lastUpdated: '2025-06-11' },
  { id: '5', name: 'Câmera DSLR Z', sku: 'CDZ-005', price: 3200.00, stock: 15, category: 'Fotografia', lastUpdated: '2025-06-09' },
  { id: '6', name: 'Fone de Ouvido Bluetooth', sku: 'FOB-006', price: 180.00, stock: 200, category: 'Áudio', lastUpdated: '2025-06-13' },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = (newProduct: Omit<Product, 'id' | 'lastUpdated'>) => {
    const productToAdd: Product = {
      id: (products.length + 1).toString(), // ID simples, em produção usaria UUID
      ...newProduct,
      lastUpdated: new Date().toISOString().slice(0, 10), // Data atual
    };
    setProducts(prev => [...prev, productToAdd]);
    toast('Produto Adicionado!');
    setIsModalOpen(false);
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? { ...updatedProduct, lastUpdated: new Date().toISOString().slice(0, 10) } : p))
    );
    toast('Produto Atualizado!');
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
    toast('Produto Excluído!');
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Produtos</h1>
        <Button onClick={openAddModal}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Adicionar Produto
        </Button>
      </div>

      <Separator />

      <div className="flex items-center space-x-4">
        <Input
          placeholder="Pesquisar produtos (nome, SKU)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        {/* Futuramente: Filtros, exportar, etc. */}
      </div>

      <ProductTable
        products={filteredProducts}
        onEdit={openEditModal}
        onDelete={handleDeleteProduct}
      />

      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
        initialData={editingProduct}
      />
    </div>
  );
}
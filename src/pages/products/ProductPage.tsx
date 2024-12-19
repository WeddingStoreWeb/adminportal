import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProductTable } from './ProductTable';
import { ProductModal } from './ProductModal';

export function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>
      <ProductTable />
      <ProductModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
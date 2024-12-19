import React from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';

const products = [
  { id: 1, name: 'Evening Gown', price: 199.99, status: 'Available', category: 'Dresses' },
  { id: 2, name: 'Diamond Necklace', price: 299.99, status: 'Rented', category: 'Accessories' },
];

export function ProductTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Base Rental Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.status}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button variant="secondary" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="secondary" size="sm">
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="danger" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
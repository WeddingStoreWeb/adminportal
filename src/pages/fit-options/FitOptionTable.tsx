import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';

const fitOptions = [
  { id: 1, productId: 'P001', optionType: 'Size Adjustment', priceAdjustment: 29.99, dateCreated: '2024-03-15' },
  { id: 2, productId: 'P002', optionType: 'Length Adjustment', priceAdjustment: 19.99, dateCreated: '2024-03-14' },
];

export function FitOptionTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product ID</TableHead>
          <TableHead>Option Type</TableHead>
          <TableHead>Price Adjustment</TableHead>
          <TableHead>Date Created</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fitOptions.map((option) => (
          <TableRow key={option.id}>
            <TableCell>{option.productId}</TableCell>
            <TableCell>{option.optionType}</TableCell>
            <TableCell>${option.priceAdjustment}</TableCell>
            <TableCell>{option.dateCreated}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
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
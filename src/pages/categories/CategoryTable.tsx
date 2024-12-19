import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';

const categories = [
  { id: 1, name: 'Dresses', description: 'Formal and casual dresses', dateCreated: '2024-03-15' },
  { id: 2, name: 'Accessories', description: 'Jewelry and accessories', dateCreated: '2024-03-14' },
];

export function CategoryTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Date Created</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell>{category.id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.description}</TableCell>
            <TableCell>{category.dateCreated}</TableCell>
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
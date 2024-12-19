import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';

const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446', isPrimary: true, productName: 'Evening Gown' },
  { id: 2, url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f', isPrimary: false, productName: 'Diamond Necklace' },
];

export function PhotoTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Preview</TableHead>
          <TableHead>Is Primary</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {photos.map((photo) => (
          <TableRow key={photo.id}>
            <TableCell>{photo.id}</TableCell>
            <TableCell>
              <img src={photo.url} alt={photo.productName} className="w-16 h-16 object-cover rounded" />
            </TableCell>
            <TableCell>{photo.isPrimary ? 'Yes' : 'No'}</TableCell>
            <TableCell>{photo.productName}</TableCell>
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
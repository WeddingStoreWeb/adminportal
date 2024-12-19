import React from 'react';
import { Card } from '@/components/ui/Card';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/Table';
import { Package, FolderTree, Image } from 'lucide-react';

const stats = [
  { title: 'Total Categories', value: '24', icon: FolderTree },
  { title: 'Total Products', value: '156', icon: Package },
  { title: 'Total Photos', value: '483', icon: Image },
];

const recentUpdates = [
  { id: 1, type: 'Product', name: 'Summer Dress', action: 'Added', date: '2024-03-15' },
  { id: 2, type: 'Category', name: 'Accessories', action: 'Updated', date: '2024-03-14' },
  { id: 3, type: 'Photo', name: 'Product_001.jpg', action: 'Deleted', date: '2024-03-13' },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="flex items-center p-6">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card title="Recent Updates">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentUpdates.map((update) => (
              <TableRow key={update.id}>
                <TableCell>{update.type}</TableCell>
                <TableCell>{update.name}</TableCell>
                <TableCell>{update.action}</TableCell>
                <TableCell>{update.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
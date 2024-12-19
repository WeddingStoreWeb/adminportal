import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
}

export function ProductModal({ open, onClose }: ProductModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <form className="space-y-4">
          <Input label="Name" placeholder="Enter product name" />
          <Input 
            label="Base Rental Price" 
            type="number" 
            step="0.01" 
            placeholder="Enter base rental price" 
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Availability Status
            </label>
            <select className="block w-full rounded-md border border-gray-300 px-3 py-2">
              <option value="available">Available</option>
              <option value="rented">Rented</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select className="block w-full rounded-md border border-gray-300 px-3 py-2">
              <option value="dresses">Dresses</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <Input 
            label="Description" 
            placeholder="Enter product description"
            as="textarea"
            className="h-24"
          />
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
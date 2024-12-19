import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
}

export function CategoryModal({ open, onClose }: CategoryModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Category</h2>
        <form className="space-y-4">
          <Input label="Name" placeholder="Enter category name" />
          <Input label="Description" placeholder="Enter category description" />
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
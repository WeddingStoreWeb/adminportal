import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface PhotoModalProps {
  open: boolean;
  onClose: () => void;
}

export function PhotoModal({ open, onClose }: PhotoModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Photo</h2>
        <form className="space-y-4">
          <Input 
            label="Photo URL" 
            type="url"
            placeholder="Enter photo URL" 
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Product
            </label>
            <select className="block w-full rounded-md border border-gray-300 px-3 py-2">
              <option value="1">Evening Gown</option>
              <option value="2">Diamond Necklace</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              id="isPrimary"
              className="rounded border-gray-300"
            />
            <label htmlFor="isPrimary" className="text-sm font-medium text-gray-700">
              Set as primary photo
            </label>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
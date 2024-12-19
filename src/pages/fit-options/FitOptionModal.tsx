import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface FitOptionModalProps {
  open: boolean;
  onClose: () => void;
}

export function FitOptionModal({ open, onClose }: FitOptionModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Fit Option</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Product
            </label>
            <select className="block w-full rounded-md border border-gray-300 px-3 py-2">
              <option value="P001">Evening Gown</option>
              <option value="P002">Diamond Necklace</option>
            </select>
          </div>
          <Input 
            label="Option Type" 
            placeholder="e.g., Size Adjustment, Length Adjustment" 
          />
          <Input 
            label="Price Adjustment" 
            type="number"
            step="0.01"
            placeholder="Enter price adjustment" 
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
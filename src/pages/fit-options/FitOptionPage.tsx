import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FitOptionTable } from './FitOptionTable';
import { FitOptionModal } from './FitOptionModal';

export function FitOptionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Fit Options</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Option
        </Button>
      </div>
      <FitOptionTable />
      <FitOptionModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PhotoTable } from './PhotoTable';
import { PhotoModal } from './PhotoModal';

export function PhotoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Photos</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Photo
        </Button>
      </div>
      <PhotoTable />
      <PhotoModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
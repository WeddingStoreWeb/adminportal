import React from 'react';
import { Bell, Settings } from 'lucide-react';

export function TopBar() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 fixed top-0 right-0 left-64 z-10">
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-800">Welcome, Admin</h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <Settings className="w-5 h-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
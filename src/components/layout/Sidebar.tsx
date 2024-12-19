import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderTree, Package, Image, LogOut, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
  { icon: FolderTree, label: 'Categories', to: '/categories' },
  { icon: Package, label: 'Products', to: '/products' },
  { icon: Image, label: 'Photos', to: '/photos' },
  { icon: Settings, label: 'FitOnOptions', to: '/fit-options' },
];

export function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="bg-white border-r border-gray-200 w-64 h-screen fixed left-0 top-0">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Admin Portal</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={logout}
            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 w-full px-3 py-2 rounded-md hover:bg-gray-50"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
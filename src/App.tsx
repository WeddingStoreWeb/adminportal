import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { LoginPage } from '@/pages/LoginPage';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { DashboardPage } from '@/pages/DashboardPage';
import { CategoryPage } from '@/pages/categories/CategoryPage';
import { ProductPage } from '@/pages/products/ProductPage';
import { PhotoPage } from '@/pages/photos/PhotoPage';
import { FitOptionPage } from '@/pages/fit-options/FitOptionPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          <Route path="/" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="categories" element={<CategoryPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="photos" element={<PhotoPage />} />
            <Route path="fit-options" element={<FitOptionPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
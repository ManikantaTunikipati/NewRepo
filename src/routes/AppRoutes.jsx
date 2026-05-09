<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import BanglesPage from "../pages/BanglesPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/bangles" element={<BanglesPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
=======
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import CategoriesPage from '../pages/CategoriesPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ContactPage from '../pages/ContactPage';

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
>>>>>>> cbce87c56a5f61a553acae6c7ded62c6758020c7
  );
}

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import products, { categories } from '../data/products';
import useProducts from '../hooks/useProducts';

export default function CategoriesPage() {
  const [params] = useSearchParams();
  const prefilledCategory = params.get('category') || 'All';
  const { query, setQuery, category, setCategory, filtered } = useProducts(products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCategory(prefilledCategory);
  }, [prefilledCategory, setCategory]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">All Jewellery Designs</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by design code" className="rounded-lg border px-4 py-2 md:col-span-2" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-lg border px-4 py-2">
          <option>All</option>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => <LoadingSkeleton key={index} />)
          : filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

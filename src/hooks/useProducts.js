import { useMemo, useState } from 'react';

export default function useProducts(allProducts) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesQuery = product.code.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [allProducts, query, category]);

  return { query, setQuery, category, setCategory, filtered };
}

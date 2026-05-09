import { Link } from 'react-router-dom';
import products, { categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="gold-gradient rounded-3xl p-8 md:p-12" data-aos="fade-up">
        <p className="text-sm uppercase tracking-[0.2em] text-gold-700">Luxury Jewellery</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">Modern Gold Bangle Catalogue</h1>
        <p className="mt-4 max-w-xl text-slate-700">Explore handcrafted bangles, bridal sets, and timeless designs. Share one link with your customers and let them browse with ease.</p>
        <Link to="/categories" className="mt-6 inline-block rounded-lg bg-gold-500 px-5 py-3 font-semibold text-white transition hover:bg-gold-700">Browse Catalogue</Link>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-bold">Featured Designs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-bold">Shop by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category} to={`/categories?category=${encodeURIComponent(category)}`} className="rounded-xl border p-5 text-center font-semibold transition hover:border-gold-500 hover:text-gold-700">
              {category}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

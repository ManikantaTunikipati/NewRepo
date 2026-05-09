<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #fffdf7, #fbf1cf)",
        border: "1px solid #f2e8c8",
        borderRadius: 16,
        padding: 22
      }}
    >
      <p style={{ color: "#8f6f1b", fontWeight: 700, margin: 0 }}>Pamba Bangles</p>
      <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", margin: "8px 0 12px" }}>Pamba Gold Catalogue</h1>
      <p style={{ maxWidth: 700, color: "#4d4d4d", lineHeight: 1.6 }}>
        Welcome to our simple bangle catalogue. Browse our selected gold bangle designs and contact us directly on WhatsApp for enquiry.
      </p>
      <p style={{ marginTop: 8, color: "#333" }}>
        Owner: <strong>Srinivasa Rao</strong> | Contact: <strong>9441518562</strong>
      </p>
      <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn btn-gold" to="/bangles">View Bangles</Link>
        <a className="btn btn-whatsapp" href="https://wa.me/919441518562" target="_blank" rel="noreferrer">WhatsApp Enquiry</a>
      </div>
    </section>
=======
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
>>>>>>> cbce87c56a5f61a553acae6c7ded62c6758020c7
  );
}

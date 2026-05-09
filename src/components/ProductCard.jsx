import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-luxe">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
      </Link>
      <div className="space-y-2 p-4">
        <h3 className="font-semibold text-slate-900">{product.name}</h3>
        <p className="text-sm text-slate-600">Design Code: {product.code}</p>
        <p className="text-sm text-slate-600">Weight: {product.weight}</p>
        <p className="text-sm text-slate-500">{product.description}</p>
        <WhatsAppButton product={product} />
      </div>
    </article>
  );
}

<<<<<<< HEAD
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function ProductCard({ product }) {
  return (
    <article
      style={{
        background: "#fff",
        borderRadius: 14,
        border: "1px solid #f1e6c4",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
      }}
    >
      <img src={product.image} alt={product.name} style={{ width: "100%", height: 230, objectFit: "cover" }} />
      <div style={{ padding: 14 }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 20 }}>{product.name}</h3>
        <p style={{ margin: "4px 0", color: "#555" }}>Design Code: <strong>{product.code}</strong></p>
        <p style={{ margin: "4px 0", color: "#555" }}>Weight: <strong>{product.weight}</strong></p>
        <p style={{ margin: "6px 0 12px", color: "#666" }}>{product.description}</p>
        <div style={{ display: "flex", gap: 10 }}>
          <Link className="btn btn-gold" to={`/product/${product.id}`}>Details</Link>
          <a className="btn btn-whatsapp" href={getWhatsAppLink(product)} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
=======
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
>>>>>>> cbce87c56a5f61a553acae6c7ded62c6758020c7
      </div>
    </article>
  );
}

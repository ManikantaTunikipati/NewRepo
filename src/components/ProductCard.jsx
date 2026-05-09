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
      </div>
    </article>
  );
}

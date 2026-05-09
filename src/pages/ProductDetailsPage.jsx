import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = useMemo(() => products.find((item) => String(item.id) === id), [id]);
  const [activeImage, setActiveImage] = useState(product?.image || "");

  if (!product) {
    return <p>Product not found.</p>;
  }

  async function shareProduct() {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: `${product.name} (${product.code}) - Pamba Gold Catalogue`,
        url: window.location.href
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Product URL copied to clipboard.");
    }
  }

  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 24 }}>
      <div>
        <img
          src={activeImage}
          alt={product.name}
          style={{ width: "100%", borderRadius: 14, border: "1px solid #f1e6c4", objectFit: "cover" }}
        />
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          {product.gallery.map((img) => (
            <button
              key={img}
              onClick={() => setActiveImage(img)}
              style={{
                border: "1px solid #e9d9a5",
                borderRadius: 8,
                padding: 0,
                background: "transparent",
                cursor: "pointer"
              }}
            >
              <img src={img} alt="gallery" style={{ width: 70, height: 70, objectFit: "cover", borderRadius: 8 }} />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 style={{ marginTop: 0 }}>{product.name}</h1>
        <p>Design Code: <strong>{product.code}</strong></p>
        <p>Weight: <strong>{product.weight}</strong></p>
        <p style={{ color: "#555", lineHeight: 1.6 }}>{product.description}</p>
        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          <button className="btn btn-gold" onClick={shareProduct}>Share</button>
          <a className="btn btn-whatsapp" href={getWhatsAppLink(product)} target="_blank" rel="noreferrer">WhatsApp Enquiry</a>
        </div>
      </div>
    </section>
  );
}

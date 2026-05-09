<<<<<<< HEAD
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
=======
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = useMemo(() => products.find((item) => item.id === Number(id)), [id]);
  const [activeImage, setActiveImage] = useState(product?.image);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <img src={activeImage} alt={product.name} className="h-[420px] w-full rounded-2xl object-cover transition hover:scale-[1.02]" />
        <div className="mt-3 grid grid-cols-4 gap-2">
          {product.gallery.map((img) => (
            <button key={img} onClick={() => setActiveImage(img)} className="overflow-hidden rounded-lg border">
              <img src={img} alt={product.name} className="h-20 w-full object-cover" />
>>>>>>> cbce87c56a5f61a553acae6c7ded62c6758020c7
            </button>
          ))}
        </div>
      </div>
<<<<<<< HEAD

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
=======
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p><span className="font-semibold">Design Code:</span> {product.code}</p>
        <p><span className="font-semibold">Weight:</span> {product.weight}</p>
        <p className="text-slate-600">{product.description}</p>
        <div className="flex gap-3">
          <button onClick={() => navigator.share?.({ title: product.name, url: window.location.href })} className="rounded-lg border px-4 py-2 font-semibold">Share</button>
          <WhatsAppButton product={product} />
        </div>
      </div>
    </div>
>>>>>>> cbce87c56a5f61a553acae6c7ded62c6758020c7
  );
}

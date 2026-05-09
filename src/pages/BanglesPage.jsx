import { useMemo, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function BanglesPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((item) => item.code.toLowerCase().includes(search.toLowerCase().trim()));
  }, [search]);

  return (
    <section>
      <h2 style={{ marginTop: 0, fontSize: 30 }}>Bangle Designs</h2>
      <p style={{ color: "#666" }}>Search by design code and click details for full view.</p>

      <input
        type="text"
        placeholder="Search code (example: PB101)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: 380,
          padding: "10px 12px",
          borderRadius: 10,
          border: "1px solid #e3d5a6",
          marginBottom: 18
        }}
      />

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))"
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

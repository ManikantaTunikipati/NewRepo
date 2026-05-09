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
  );
}

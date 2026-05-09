import { NavLink, Outlet } from "react-router-dom";

function navStyle({ isActive }) {
  return {
    padding: "8px 12px",
    borderRadius: 8,
    fontWeight: 600,
    background: isActive ? "#f7ebc3" : "transparent",
    color: isActive ? "#8f6f1b" : "#333"
  };
}

export default function MainLayout() {
  return (
    <div>
      <header style={{ position: "sticky", top: 0, zIndex: 10, background: "#fff", borderBottom: "1px solid #f2e8c8" }}>
        <div className="container" style={{ minHeight: 72, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/images/owner.svg"
              alt="Owner Srinivasa Rao"
              style={{ width: 46, height: 46, borderRadius: "50%", border: "2px solid #c9a227" }}
            />
            <div>
              <div style={{ fontWeight: 800, color: "#8f6f1b" }}>Pamba Bangles</div>
              <div style={{ fontSize: 13, color: "#555" }}>Srinivasa Rao</div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: 6 }}>
            <NavLink style={navStyle} to="/">Home</NavLink>
            <NavLink style={navStyle} to="/bangles">Bangles</NavLink>
            <NavLink style={navStyle} to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="container" style={{ padding: "26px 0 34px" }}>
        <Outlet />
      </main>

      <footer style={{ borderTop: "1px solid #f2e8c8", background: "#fff" }}>
        <div className="container" style={{ padding: "14px 0", color: "#555", fontSize: 14 }}>
          Pamba Gold Catalogue - Contact: 9441518562
        </div>
      </footer>
    </div>
  );
}

import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/categories', label: 'Categories' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-gold-700">Shree Gold Catalogue</Link>
        <div className="flex gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `transition hover:text-gold-700 ${isActive ? 'text-gold-700' : 'text-slate-700'}`}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

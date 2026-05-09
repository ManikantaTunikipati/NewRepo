import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section>
      <h2>Page not found</h2>
      <Link className="btn btn-gold" to="/">Go Home</Link>
    </section>
  );
}

export default function WhatsAppButton({ product }) {
  const phone = '919999999999';
  const text = encodeURIComponent(`Hello, I want details for ${product.name} (${product.code}).`);
  return (
    <a href={`https://wa.me/${phone}?text=${text}`} target="_blank" rel="noreferrer" className="inline-flex rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gold-700">
      Enquire on WhatsApp
    </a>
  );
}

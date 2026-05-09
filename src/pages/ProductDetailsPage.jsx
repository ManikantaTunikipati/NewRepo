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
            </button>
          ))}
        </div>
      </div>
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
  );
}

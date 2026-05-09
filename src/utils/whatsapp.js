export function getWhatsAppLink(product) {
  const phone = "919441518562";
  const message = `Hi Srinivasa Rao garu, I am interested in ${product.name} (Code: ${product.code}, Weight: ${product.weight}) from Pamba Gold Catalogue.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

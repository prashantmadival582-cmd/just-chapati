import Products from "../components/Products";
import useScrollReveal from "../hooks/useScrollReveal";

function ProductsPage({ onAddToCart }) {
  useScrollReveal();

  return (
    <main className="products-page">
      <Products onAddToCart={onAddToCart} />
    </main>
  );
}

export default ProductsPage;
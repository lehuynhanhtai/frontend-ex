import MultiActionAreaCard from "@/app/_components/Products";
import { fetchProducts } from "@/api/fetch";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto">
      <MultiActionAreaCard products={products.data} />
    </div>
  );
}

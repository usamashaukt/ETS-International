import { useParams } from "react-router";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import { isCatalogProduct, isProductHubCategory } from "@/data/productsCatalog";

/**
 * `/products/:id` resolves to a product detail page when `id` is a catalog SKU,
 * otherwise treats `id` as a hub category filter (aviation, industrial, …).
 */
export default function ProductsRouter() {
  const { id = "" } = useParams();

  if (isCatalogProduct(id)) {
    return <ProductDetail />;
  }

  if (isProductHubCategory(id) || id === "all") {
    return <Products />;
  }

  /* Unknown slug — still show hub (Products ignores unknown filter as All) */
  return <Products />;
}

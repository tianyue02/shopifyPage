import { useProductApi } from "../context/product-context";
import ProductList from "../components/product-list";
import { useEffect } from "react";
import { ProductApiProvider } from "../context/product-context";

const AllProducts = () => {
  const { allProduct, fetchProducts, loading } = useProductApi();
  useEffect(() => {
    if (allProduct?.length === 0) {
      fetchProducts("https://dummyjson.com/products?limit=500");
    }
  }, [fetchProducts, allProduct.length]);
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return <ProductList title="All Products" products={allProduct} />;
};
const Products = () => {
  return (
    <div>
      <ProductApiProvider>
        <AllProducts />
      </ProductApiProvider>
    </div>
  );
};
export default Products;

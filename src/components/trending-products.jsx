import ProductList from "./product-list";
import { useProductApi } from "../context/product-context";
import { useEffect } from "react";

const TrendingProducts = () => {
    const { trendingProducts, fetchProducts, loading } = useProductApi();
    
    useEffect(() => {
        if(trendingProducts.length === 0){
            fetchProducts("https://dummyjson.com/products");
        }
    }, [fetchProducts,trendingProducts.length]);
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <ProductList title="Trending Products" products={trendingProducts} />
    );
  };

export default TrendingProducts;

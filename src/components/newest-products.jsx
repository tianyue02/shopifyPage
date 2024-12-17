import ProductList from "./product-list";
import { useProductApi } from "../context/product-context";
import { useEffect } from "react";

const NewestProducts = () => {
    const {newestProducts,fetchProducts,loading} = useProductApi();
    useEffect(() => {
        if(newestProducts?.length === 0){
            fetchProducts("https://dummyjson.com/products");
        }
    },[fetchProducts,newestProducts.length]);
    if(loading){
        return <div>Loading...</div>
    }
    return (
        <ProductList title="Newest Products" products={newestProducts}/>
    );
}
export default NewestProducts;
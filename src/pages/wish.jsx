import ProductList from "../components/product-list";
import { useWishList } from "../context/wishList-context";
const WishPage = () => {
    const {wishList} = useWishList();
    return (
        <div className="wishlist-container">
          <h1>Your Wishlist</h1>
          {wishList.length > 0 ? (
            <ProductList title="Your Wishlist" products={wishList} />
          ) : (
            <p>Your wishlist is empty!</p>
          )}
        </div>
      );
}
export default WishPage;
 

import HeadAdvertise from "../components/head-advertise";
import Features from "../components/features";
import Banner from "../components/banner";
import TrendingProducts from "../components/trending-products";
import NewestProducts from "../components/newest-products";
import { ProductApiProvider } from "../context/product-context";

const MainPage = () => {
  return (
    <div>
      <HeadAdvertise />
      <Features />
      <ProductApiProvider>
        <TrendingProducts />
      </ProductApiProvider>
      <Banner />
      <ProductApiProvider>
        <NewestProducts />
      </ProductApiProvider>
    </div>
  );
};
export default MainPage;

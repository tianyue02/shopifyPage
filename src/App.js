import Footer from "./components/footer";
import NavigationBar from "./components/navigation-bar";
import MainPage from "./pages/main-page";
import LoginPage from "./pages/login-page";
import { AuthProvider } from "./context/auth-context";
import AccountPage from "./pages/account";
import WishPage from "./pages/wish.jsx";
import SingleProduct from "./components/single-product.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { CartProvider } from "./context/cart-context.jsx";
import Products from "../src/pages/all-products.jsx";
import SingleCategory from "./pages/single-categories.jsx";
import { CategoryProvider } from "./context/category-context.jsx";
import Categories from "./pages/categories.jsx";
import "./index.css";
import { ThemeProvider } from "./context/theme-context.jsx";
import ScrollToTopButton from "./components/scroll-to-up-button.jsx";
import Cart from "./components/cart.jsx";
import { WishListProvider } from "./context/wishList-context.jsx";
const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <ScrollToTopButton />
      <Cart />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/wishes" element={<WishPage />} />
        <Route
          path="/product/:productID"
          element={<SingleProduct productID={6} />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:name" element={<SingleCategory />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>
            <CategoryProvider>
              <RouterProvider router={router} />
            </CategoryProvider>
          </WishListProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

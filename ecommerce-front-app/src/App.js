import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Error404 from "./pages/Error/Error404";
import Aboutus from "./pages/AboutUs/aboutus";
import Cart from "./pages/Cart/cart";
import Emptycart from "./pages/Cart/emptycart";
import Checkout from "./pages/Checkout/checkout";
import Compare from "./pages/Compare/compare";
import Contactus from "./pages/Contactus/contactus";
import Faq from "./pages/Faq/faq";
import Login from "./pages/Login/login";
import Myaccount from "./pages/Myaccount/myaccount";
import Privacypolicy from "./pages/Privacypolicy/privacypolicy";
import Wishlist from "./pages/Wishlist/wishlist";
import ProductDetailsAffiliatePage from "./pages/ProductDetails/productDetailsAffiliatePage";
import ProductDetailsDefaultPage from "./pages/ProductDetails/productDetailsDefaultPage";
import ProductDetailsGalleryLeftPage from "./pages/ProductDetails/productDetailsGalleryLeftPage";
import ProductDetailsGalleryRightPage from "./pages/ProductDetails/productDetailsGalleryRightPage";
import ProductDetailsGroupPage from "./pages/ProductDetails/productDetailsGroupPage";
import ProductDetailsSingleSlidePage from "./pages/ProductDetails/productDetailsSingleSlidePage";
import ProductDetailsStickyLeftPage from "./pages/ProductDetails/productDetailsStickyLeftPage";
import ProductDetailsStickyRightPage from "./pages/ProductDetails/productDetailsStickyRightPage";
import ProductDetailsTabLeftPage from "./pages/ProductDetails/productDetailsTabLeftPage";
import ProductDetailsTabRightPage from "./pages/ProductDetails/productDetailsTabRightPage";
import ProductDetailsVariablePage from "./pages/ProductDetails/productDetailsVariablePage";
import ShopFullWidthPage from "./pages/Shop/shopFullWidthPage";
import ShopGridSidebarLeftPage from "./pages/Shop/shopGridSidebarLeftPage";
import ShopGridSidebarRightPage from "./pages/Shop/shopGridSidebarRightPage";
import ShopListSidebarLeftPage from "./pages/Shop/shopListSidebarLeftPage";
import ShopListSidebarRightPage from "./pages/Shop/shopListSidebarRightPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Emptycart" element={<Emptycart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Myaccount" element={<Myaccount />} />
        <Route path="/Privacy-policy" element={<Privacypolicy />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/product-details-Affiliate" element={<ProductDetailsAffiliatePage />} />
        <Route path="/product-details-default" element={<ProductDetailsDefaultPage />} />
        <Route path="/product-details-gallery-left" element={<ProductDetailsGalleryLeftPage />} />
        <Route path="/product-details-gallery-right" element={<ProductDetailsGalleryRightPage />} />
        <Route path="/product-details-group" element={<ProductDetailsGroupPage />} />
        <Route path="/product-details-single-slide" element={<ProductDetailsSingleSlidePage />} />
        <Route path="/product-details-sticky-left" element={<ProductDetailsStickyLeftPage />} />
        <Route path="/product-details-sticky-right" element={<ProductDetailsStickyRightPage />} />
        <Route path="/product-details-tab-left" element={<ProductDetailsTabLeftPage />} />
        <Route path="/product-details-tab-right" element={<ProductDetailsTabRightPage />} />
        <Route path="/product-details-variable" element={<ProductDetailsVariablePage />} />
        <Route path="/shop-full-width" element={<ShopFullWidthPage />} />
        <Route path="/shop-grid-sidebar-left" element={<ShopGridSidebarLeftPage />} />
        <Route path="/shop-grid-sidebar-right" element={<ShopGridSidebarRightPage />} />
        <Route path="/shop-list-sidebar-left" element={<ShopListSidebarLeftPage />} />
        <Route path="/shop-list-sidebar-right" element={<ShopListSidebarRightPage />} />

      </Routes>     
  </Router>
  );
}

export default App;

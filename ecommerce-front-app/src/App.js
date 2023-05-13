import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Error404 from "./Pages/Error/Error404";
import Aboutus from "./Pages/AboutUs/aboutus";
import Cart from "./Pages/Cart/cart";
import Emptycart from "./Pages/Cart/emptycart";
import Checkout from "./Pages/Checkout/checkout";
import Compare from "./Pages/Compare/compare";
import Contactus from "./Pages/Contactus/contactus";
import Faq from "./Pages/Faq/faq";
import Login from "./Pages/Login/login";
import Myaccount from "./Pages/Myaccount/myaccount";
import Privacypolicy from "./Pages/Privacypolicy/privacypolicy";
import Wishlist from "./Pages/Wishlist/wishlist";
import ProductDetailsAffiliatePage from "./Pages/ProductDetails/productDetailsAffiliatePage";
import ProductDetailsDefaultPage from "./Pages/ProductDetails/productDetailsDefaultPage";
import ProductDetailsGalleryLeftPage from "./Pages/ProductDetails/productDetailsGalleryLeftPage";
import ProductDetailsGalleryRightPage from "./Pages/ProductDetails/productDetailsGalleryRightPage";
import ProductDetailsGroupPage from "./Pages/ProductDetails/productDetailsGroupPage";
import ProductDetailsSingleSlidePage from "./Pages/ProductDetails/productDetailsSingleSlidePage";
import ProductDetailsStickyLeftPage from "./Pages/ProductDetails/productDetailsStickyLeftPage";
import ProductDetailsStickyRightPage from "./Pages/ProductDetails/productDetailsStickyRightPage";
import ProductDetailsTabLeftPage from "./Pages/ProductDetails/productDetailsTabLeftPage";
import ProductDetailsTabRightPage from "./Pages/ProductDetails/productDetailsTabRightPage";
import ProductDetailsVariablePage from "./Pages/ProductDetails/productDetailsVariablePage";
import ShopFullWidthPage from "./Pages/Shop/shopFullWidthPage";
import ShopGridSidebarLeftPage from "./Pages/Shop/shopGridSidebarLeftPage";
import ShopGridSidebarRightPage from "./Pages/Shop/shopGridSidebarRightPage";
import ShopListSidebarLeftPage from "./Pages/Shop/shopListSidebarLeftPage";
import ShopListSidebarRightPage from "./Pages/Shop/shopListSidebarRightPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/empty-cart" element={<Emptycart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/my-account" element={<Myaccount />} />
        <Route path="/Privacy-policy" element={<Privacypolicy />} />
        <Route path="/wishlist" element={<Wishlist />} />
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

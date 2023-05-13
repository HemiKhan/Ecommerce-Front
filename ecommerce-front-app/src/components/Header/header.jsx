import React from "react";
import { Link } from "react-router-dom";

export default function header() {

    return(
<>
 {/* Start Header Area  */}
    <header className="header-section d-none d-xl-block">
        <div className="header-wrapper">
            <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-between">
                            {/* Start Header Logo  */}
                            <div className="header-logo">
                                <div className="logo">
                                <Link to='/'>
                                    <img src="assets/images/logo/logo_black.png" alt=""/>
                                </Link>
                                </div>
                            </div>
                             {/* End Header Logo */}

                            {/* <!-- Start Header Main Menu --> */}
                            <div className="main-menu menu-color--black menu-hover-color--golden">
                                <nav>
                                    <ul>
                                        <li className="has-dropdown">
                                            <Link className="active main-menu-link" to="/">Home <i
                                                    className="fa fa-angle-down"></i></Link>
                                            {/* <!-- Sub Menu --> */}
                                            <ul className="sub-menu">
                                                <li><Link to="/">Home 1</Link></li>
                                                <li><Link to="/">Home 2</Link></li>
                                                <li><Link to="/">Home 3</Link></li>
                                                <li><Link to="/">Home 4</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown has-megaitem">
                                            <Link to="/product-details-default">Shop <i
                                                    className="fa fa-angle-down"></i></Link>
                                            {/* <!-- Mega Menu --> */}
                                            <div className="mega-menu">
                                                <ul className="mega-menu-inner">
                                                    {/* <!-- Mega Menu Sub Link --> */}
                                                    <li className="mega-menu-item">
                                                        <Link to="/" className="mega-menu-item-title">Shop Layouts</Link>
                                                        <ul className="mega-menu-sub">
                                                            <li><Link to="/shop-grid-sidebar-left">Grid Left
                                                                    Sidebar</Link></li>
                                                            <li><Link to="/shop-grid-sidebar-right">Grid Right
                                                                    Sidebar</Link></li>
                                                            <li><Link to="/shop-full-width">Full Width</Link></li>
                                                            <li><Link to="/shop-list-sidebar-left">List Left
                                                                    Sidebar</Link></li>
                                                            <li><Link to="/shop-list-sidebar-right">List Right
                                                                    Sidebar</Link></li>
                                                        </ul>
                                                    </li>
                                                    {/* <!-- Mega Menu Sub Link --> */}
                                                    <li className="mega-menu-item">
                                                        <Link to="/" className="mega-menu-item-title">Other Pages</Link>
                                                        <ul className="mega-menu-sub">
                                                            <li><Link to="/cart">Cart</Link></li>
                                                            <li><Link to="/empty-cart">Empty Cart</Link></li>
                                                            <li><Link to="/wishlist">Wishlist</Link></li>
                                                            <li><Link to="/compare">Compare</Link></li>
                                                            <li><Link to="/checkout">Checkout</Link></li>
                                                            <li><Link to="/login">Login</Link></li>
                                                            <li><Link to="/my-account">My Account</Link></li>
                                                        </ul>
                                                    </li>
                                                    {/* <!-- Mega Menu Sub Link --> */}
                                                    <li className="mega-menu-item">
                                                        <a href="/" className="mega-menu-item-title">Product Types</a>
                                                        <ul className="mega-menu-sub">
                                                            <li><a href="product-details-default.html">Product
                                                                    Default</a></li>
                                                            <li><a href="product-details-variable.html">Product
                                                                    Variable</a></li>
                                                            <li><a href="product-details-affiliate.html">Product
                                                                    Referral</a></li>
                                                            <li><a href="product-details-group.html">Product Group</a>
                                                            </li>
                                                            <li><a href="product-details-single-slide.html">Product
                                                                    Slider</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* <!-- Mega Menu Sub Link --> */}
                                                    <li className="mega-menu-item">
                                                        <a href="/" className="mega-menu-item-title">Product Types</a>
                                                        <ul className="mega-menu-sub">
                                                            <li><a href="product-details-tab-left.html">Product Tab
                                                                    Left</a></li>
                                                            <li><a href="product-details-tab-right.html">Product Tab
                                                                    Right</a></li>
                                                            <li><a href="product-details-gallery-left.html">Product
                                                                    Gallery Left</a></li>
                                                            <li><a href="product-details-gallery-right.html">Product
                                                                    Gallery Right</a></li>
                                                            <li><a href="product-details-sticky-left.html">Product
                                                                    Sticky Left</a></li>
                                                            <li><a href="product-details-sticky-right.html">Product
                                                                    Sticky right</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <div className="menu-banner">
                                                    <a href="/" className="menu-banner-link">
                                                        <img className="menu-banner-img"
                                                            src="assets/images/banner/menu-banner.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="has-dropdown">
                                            <a href="blog-single-sidebar-left.html">Blog <i
                                                    className="fa fa-angle-down"></i></a>
                                            {/* <!-- Sub Menu --> */}
                                            <ul className="sub-menu">
                                                <li><a href="blog-grid-sidebar-left.html">Blog Grid Sidebar left</a>
                                                </li>
                                                <li><a href="blog-grid-sidebar-right.html">Blog Grid Sidebar Right</a>
                                                </li>
                                                <li><a href="blog-full-width.html">Blog Full Width</a></li>
                                                <li><a href="blog-list-sidebar-left.html">Blog List Sidebar Left</a>
                                                </li>
                                                <li><a href="blog-list-sidebar-right.html">Blog List Sidebar Right</a>
                                                </li>
                                                <li><a href="blog-single-sidebar-left.html">Blog Single Sidebar left</a>
                                                </li>
                                                <li><a href="blog-single-sidebar-right.html">Blog Single Sidebar
                                                        Right</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown">
                                            <a href="/">Pages <i className="fa fa-angle-down"></i></a>
                                            {/* <!-- Sub Menu --> */}
                                            <ul className="sub-menu">
                                                <li><a href="faq.html">Frequently Questions</a></li>
                                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about-us.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!-- End Header Main Menu Start --> */}

                            {/* <!-- Start Header Action Link --> */}
                            <ul className="header-action-link action-color--black action-hover-color--golden">
                                <li>
                                    <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                                        <i className="icon-heart"></i>
                                        <span className="item-count">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                                        <i className="icon-bag"></i>
                                        <span className="item-count">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#search">
                                        <i className="icon-magnifier"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#offcanvas-about" className="offacnvas offside-about offcanvas-toggle">
                                        <i className="icon-menu"></i>
                                    </a>
                                </li>
                            </ul>
                            {/* <!-- End Header Action Link --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
   {/* Start Header Area  */}

   {/* <!-- Start Mobile Header --> */}
    <div className="mobile-header mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    {/* <!-- Start Mobile Left Side --> */}
                    <div className="mobile-header-left">
                        <ul className="mobile-menu-logo">
                            <li>
                                <a href="index.html">
                                    <div className="logo">
                                        <img src="assets/images/logo/logo_black.png" alt="" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End Mobile Left Side --> */}

                    {/* <!-- Start Mobile Right Side --> */}
                    <div className="mobile-right-side">
                        <ul className="header-action-link action-color--black action-hover-color--golden">
                            <li>
                                <a href="#search">
                                    <i className="icon-magnifier"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                                    <i className="icon-heart"></i>
                                    <span className="item-count">3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                                    <i className="icon-bag"></i>
                                    <span className="item-count">3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#mobile-menu-offcanvas" className="offcanvas-toggle offside-menu">
                                    <i className="icon-menu"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End Mobile Right Side --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Mobile Header --> */}

    {/* <!--  Start Offcanvas Mobile Menu Section --> */}
    <div id="mobile-menu-offcanvas" className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section">
        {/* <!-- Start Offcanvas Header --> */}
        <div className="offcanvas-header text-right">
            <button className="offcanvas-close"><i className="ion-android-close"></i></button>
         </div>
          {/* <!-- End Offcanvas Header --> */} 
        {/* <!-- Start Offcanvas Mobile Menu Wrapper --> */}
        <div className="offcanvas-mobile-menu-wrapper">
            {/* <!-- Start Mobile Menu  --> */}
            <div className="mobile-menu-bottom">
                {/* <!-- Start Mobile Menu Nav --> */}
                <div className="offcanvas-menu">
                    <ul>
                        <li>
                            <a href="/"><span>Home</span></a>
                            <ul className="mobile-sub-menu">
                                <li><a href="index.html">Home 1</a></li>
                                <li><a href="index-2.html">Home 2</a></li>
                                <li><a href="index-3.html">Home 3</a></li>
                                <li><a href="index-4.html">Home 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/"><span>Shop</span></a>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <a href="/">Shop Layout</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="shop-grid-sidebar-left.html">Grid Left Sidebar</a></li>
                                        <li><a href="shop-grid-sidebar-right.html">Grid Right Sidebar</a></li>
                                        <li><a href="shop-full-width.html">Full Width</a></li>
                                        <li><a href="shop-list-sidebar-left.html">List Left Sidebar</a></li>
                                        <li><a href="shop-list-sidebar-right.html">List Right Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <a href="/">Shop Pages</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="empty-cart.html">Empty Cart</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="compare.html">Compare</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <a href="/">Product Single</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="product-details-default.html">Product Default</a></li>
                                        <li><a href="product-details-variable.html">Product Variable</a></li>
                                        <li><a href="product-details-affiliate.html">Product Referral</a></li>
                                        <li><a href="product-details-group.html">Product Group</a></li>
                                        <li><a href="product-details-single-slide.html">Product Slider</a></li>
                                        <li><a href="product-details-tab-left.html">Product Tab Left</a></li>
                                        <li><a href="product-details-tab-right.html">Product Tab Right</a></li>
                                        <li><a href="product-details-gallery-left.html">Product Gallery Left</a></li>
                                        <li><a href="product-details-gallery-right.html">Product Gallery Right</a></li>
                                        <li><a href="product-details-sticky-left.html">Product Sticky Left</a></li>
                                        <li><a href="product-details-sticky-right.html">Product Sticky right</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/"><span>Blogs</span></a>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <a href="/">Blog Grid</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="blog-grid-sidebar-left.html">Blog Grid Sidebar left</a></li>
                                        <li><a href="blog-grid-sidebar-right.html">Blog Grid Sidebar Right</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog-full-width.html">Blog Full Width</a>
                                </li>
                                <li>
                                    <a href="/">Blog List</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="blog-list-sidebar-left.html">Blog List Sidebar left</a></li>
                                        <li><a href="blog-list-sidebar-right.html">Blog List Sidebar Right</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/">Blog Single</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="blog-single-sidebar-left.html">Blog Single Sidebar left</a></li>
                                        <li><a href="blog-single-sidebar-right.html">Blog Single Sidebar Right</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/"><span>Pages</span></a>
                            <ul className="mobile-sub-menu">
                                <li><a href="faq.html">Frequently Questions</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="404.html">404 Page</a></li>
                            </ul>
                        </li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                    </ul>
                </div> 
                {/* <!-- End Mobile Menu Nav --> */}
            </div> 
            {/* <!-- End Mobile Menu --> */}

            {/* <!-- Start Mobile contact Info --> */}
            <div className="mobile-contact-info">
                <div className="logo">
                    <a href="index.html"><img src="assets/images/logo/logo_white.png" alt="" /></a>
                </div>

                <address className="address">
                    <span>Address: Your address goes here.</span>
                    <span>Call Us: 0123456789, 0123456789</span>
                    <span>Email: demo@example.com</span>
                </address>

                <ul className="social-link">
                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                </ul>

                <ul className="user-link">
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                </ul>
            </div>
            {/* <!-- End Mobile contact Info --> */}

        </div> 

        {/* <!-- End Offcanvas Mobile Menu Wrapper --> */}
    </div> 
    {/* <!-- ...:::: End Offcanvas Mobile Menu Section:::... --> */}

    {/* <!-- Start Offcanvas Mobile Menu Section --> */}
    <div id="offcanvas-about" className="offcanvas offcanvas-rightside offcanvas-mobile-about-section">
        {/* <!-- Start Offcanvas Header --> */}
        <div className="offcanvas-header text-right">
            <button className="offcanvas-close"><i className="ion-android-close"></i></button>
        </div> 
        {/* <!-- End Offcanvas Header -->
        <!-- Start Offcanvas Mobile Menu Wrapper -->
        <!-- Start Mobile contact Info --> */}
        <div className="mobile-contact-info">
            <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo_white.png" alt="" /></a>
            </div>

            <address className="address">
                <span>Address: Your address goes here.</span>
                <span>Call Us: 0123456789, 0123456789</span>
                <span>Email: demo@example.com</span>
            </address>

            <ul className="social-link">
                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
            </ul>

            <ul className="user-link">
                <li><a href="wishlist.html">Wishlist</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
            </ul>
        </div>
        {/* <!-- End Mobile contact Info --> */}
    </div>
     {/* <!-- ...:::: End Offcanvas Mobile Menu Section:::... --> */}

    {/* <!-- Start Offcanvas Addcart Section --> */}
    <div id="offcanvas-add-cart" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
        {/* <!-- Start Offcanvas Header --> */}
        <div className="offcanvas-header text-right">
            <button className="offcanvas-close"><i className="ion-android-close"></i></button>
        </div> 
        {/* <!-- End Offcanvas Header --> */}

        {/* <!-- Start  Offcanvas Addcart Wrapper --> */}
        <div className="offcanvas-add-cart-wrapper">
            <h4 className="offcanvas-title">Shopping Cart</h4>
            <ul className="offcanvas-cart">
                <li className="offcanvas-cart-item-single">
                    <div className="offcanvas-cart-item-block">
                        <a href="/" className="offcanvas-cart-item-image-link">
                            <img src="assets/images/product/default/home-1/default-1.jpg" alt=""
                                className="offcanvas-cart-image" />
                        </a>
                        <div className="offcanvas-cart-item-content">
                            <a href="/" className="offcanvas-cart-item-link">Car Wheel</a>
                            <div className="offcanvas-cart-item-details">
                                <span className="offcanvas-cart-item-details-quantity">1 x </span>
                                <span className="offcanvas-cart-item-details-price">$49.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-cart-item-delete text-right">
                        <a href="/" className="offcanvas-cart-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
                <li className="offcanvas-cart-item-single">
                    <div className="offcanvas-cart-item-block">
                        <a href="/" className="offcanvas-cart-item-image-link">
                            <img src="assets/images/product/default/home-2/default-1.jpg" alt=""
                                className="offcanvas-cart-image" />
                        </a>
                        <div className="offcanvas-cart-item-content">
                            <a href="/" className="offcanvas-cart-item-link">Car Vails</a>
                            <div className="offcanvas-cart-item-details">
                                <span className="offcanvas-cart-item-details-quantity">3 x </span>
                                <span className="offcanvas-cart-item-details-price">$500.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-cart-item-delete text-right">
                        <a href="/" className="offcanvas-cart-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
                <li className="offcanvas-cart-item-single">
                    <div className="offcanvas-cart-item-block">
                        <a href="/" className="offcanvas-cart-item-image-link">
                            <img src="assets/images/product/default/home-3/default-1.jpg" alt=""
                                className="offcanvas-cart-image" />
                        </a>
                        <div className="offcanvas-cart-item-content">
                            <a href="/" className="offcanvas-cart-item-link">Shock Absorber</a>
                            <div className="offcanvas-cart-item-details">
                                <span className="offcanvas-cart-item-details-quantity">1 x </span>
                                <span className="offcanvas-cart-item-details-price">$350.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-cart-item-delete text-right">
                        <a href="/" className="offcanvas-cart-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
            </ul>
            <div className="offcanvas-cart-total-price">
                <span className="offcanvas-cart-total-price-text">Subtotal:</span>
                <span className="offcanvas-cart-total-price-value">$170.00</span>
            </div>
            <ul className="offcanvas-cart-action-button">
                <li><a href="cart.html" className="btn btn-block btn-golden">View Cart</a></li>
                <li><a href="compare.html" className=" btn btn-block btn-golden mt-5">Checkout</a></li>
            </ul>
        </div> 
        {/* <!-- End  Offcanvas Addcart Wrapper --> */}

    </div>
     {/* <!-- End  Offcanvas Addcart Section --> */}

    {/* <!-- Start Offcanvas Mobile Menu Section --> */}
    <div id="offcanvas-wishlish" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
        {/* <!-- Start Offcanvas Header --> */}
        <div className="offcanvas-header text-right">
            <button className="offcanvas-close"><i className="ion-android-close"></i></button>
        </div>
         {/* <!-- ENd Offcanvas Header --> */}


        {/* <!-- Start Offcanvas Mobile Menu Wrapper --> */}
        <div className="offcanvas-wishlist-wrapper">
            <h4 className="offcanvas-title">Wishlist</h4>
            <ul className="offcanvas-wishlist">
                <li className="offcanvas-wishlist-item-single">
                    <div className="offcanvas-wishlist-item-block">
                        <a href="/" className="offcanvas-wishlist-item-image-link">
                            <img src="assets/images/product/default/home-1/default-1.jpg" alt=""
                                className="offcanvas-wishlist-image" />
                        </a>
                        <div className="offcanvas-wishlist-item-content">
                            <a href="/" className="offcanvas-wishlist-item-link">Car Wheel</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$49.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-wishlist-item-delete text-right">
                        <a href="/" className="offcanvas-wishlist-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
                <li className="offcanvas-wishlist-item-single">
                    <div className="offcanvas-wishlist-item-block">
                        <a href="/" className="offcanvas-wishlist-item-image-link">
                            <img src="assets/images/product/default/home-2/default-1.jpg" alt=""
                                className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="offcanvas-wishlist-item-content">
                            <a href="/" className="offcanvas-wishlist-item-link">Car Vails</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">3 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$500.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-wishlist-item-delete text-right">
                        <a href="/" className="offcanvas-wishlist-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
                <li className="offcanvas-wishlist-item-single">
                    <div className="offcanvas-wishlist-item-block">
                        <a href="/" className="offcanvas-wishlist-item-image-link">
                            <img src="assets/images/product/default/home-3/default-1.jpg" alt=""
                                className="offcanvas-wishlist-image" />
                        </a>
                        <div className="offcanvas-wishlist-item-content">
                            <a href="/" className="offcanvas-wishlist-item-link">Shock Absorber</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$350.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-wishlist-item-delete text-right">
                        <a href="/" className="offcanvas-wishlist-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
            </ul>
            <ul className="offcanvas-wishlist-action-button">
                <li><a href="/" className="btn btn-block btn-golden">View wishlist</a></li>
            </ul>
        </div> 
        {/* <!-- End Offcanvas Mobile Menu Wrapper --> */}

    </div> 
    {/* <!-- End Offcanvas Mobile Menu Section --> */}

    {/* <!-- Start Offcanvas Search Bar Section --> */}
    <div id="search" className="search-modal">
        <button type="button" className="close">×</button>
        <form>
            <input type="search" placeholder="type keyword(s) here" />
            <button type="submit" className="btn btn-lg btn-golden">Search</button>
        </form>
    </div>
    {/* <!-- End Offcanvas Search Bar Section --> */}

  </>
    );
}
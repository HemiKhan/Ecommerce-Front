import React from 'react'

export default function emptycart() {
  return (
    <>
     {/* <!-- ...:::: Start Breadcrumb Section:::... --> */}
    <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="breadcrumb-title">Empty Cart</h3>
                        <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                            <nav aria-label="breadcrumb">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                                    <li className="active" aria-current="page">Empty Cart</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* <!-- ...:::: End Breadcrumb Section:::... --> */}

    {/* <!-- ...::::Start About Us Center Section:::... --> */}
    <div className="empty-cart-section section-fluid">
        <div className="emptycart-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
                        <div className="emptycart-content text-center">
                            <div className="image">
                                <img className="img-fluid" src="assets/images/emprt-cart/empty-cart.png" alt="" />
                            </div>
                            <h4 className="title">Your Cart is Empty</h4>
                            <h6 className="sub-title">Sorry Mate... No item Found inside your cart!</h6>
                            <a href="shop-grid-sidebar-left.html" className="btn btn-lg btn-golden">Continue Shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    {/* <!-- ...::::End  About Us Center Section:::... --> */}
    </>
  )
}

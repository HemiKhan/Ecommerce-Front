import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Home1 from "../../Components/Home/home1";

export default function home() {
  return( <>
  <Header />
  <div className="p-5">
    <Home1/>
  </div>
  <Footer />
  </>
  )
}

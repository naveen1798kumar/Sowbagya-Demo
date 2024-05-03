import React from 'react'
// import BlogsComp from "../../components/Blogs/BlogsComp";
import Fridges from "../../components/ProductsPage/Fridges"
import WashMash from "../../components/ProductsPage/Washing"
import Fan from "../../components/ProductsPage/Fan"
import TablFan from "../../components/ProductsPage/FanTable"
import Coolers from "../../components/ProductsPage/Cooler"

const HomeAppliances = () => {
  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      {/* <h1>Hello</h1> */}
      <Fridges />
      <WashMash/>
      <Fan/>
      <TablFan/>
      <Coolers/>
    </div>
  );
}

export default HomeAppliances
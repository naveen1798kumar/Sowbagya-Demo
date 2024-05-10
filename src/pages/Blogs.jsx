import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";

import TV from "../pages/RoutePages/TV"
import HomeAppliances from "../pages/RoutePages/HomeAppliances"
import KitchenAppliances from "../pages/RoutePages/KitchenAppliances"
import Furnitures from "../pages/RoutePages/Furnitures"
import Electronics from "../pages/RoutePages/Electronics"
import SmartGadgets from "../pages/RoutePages/SmartGadgets"

const Blogs = () => {
  return (
    <div className="min-h-screen py-14 bg-gray-100">
      {/* <BlogsComp /> */}
      <TV/>
      <HomeAppliances/>
      <KitchenAppliances/>
      {/* <Furnitures/>
      <Electronics/>
      <SmartGadgets/> */}

    </div>
  );
};

export default Blogs;

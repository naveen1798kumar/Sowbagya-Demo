import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerPic1 from "../../assets/Products/Header Icons/TV.webp";
import BannerPic2 from "../../assets/Products/Header Icons/home.webp";
import BannerPic3 from "../../assets/Products/Header Icons/kitchen.webp";
import BannerPic5 from "../../assets/Products/Header Icons/electronics.webp";
import BannerPic4 from "../../assets/Products/Header Icons/furnitures.jpg";
import BannerPic6 from "../../assets/Products/Header Icons/gadgets.jpg";

const productData = [
  { src: BannerPic1, name: "TV & Accessories" },
  { src: BannerPic2, name: "Home Appliances" },
  { src: BannerPic3, name: "Kitchen Appliances" },
  { src: BannerPic4, name: "Furnitures" },
  { src: BannerPic5, name: "Electronics" },
  { src: BannerPic6, name: "Smart Gadgets" },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="absolute bottom-2 w-full ">
      <div className=" grid grid-cols-1 gap-4">
        <div
          data-aos-delay="600"
          className="space-y-4  rounded-md p-4  relative"
        >
          <Slider {...settings}>
            {productData.map((product, index) => (
              <div key={index} className="mx-4 rounded overflow-hidden shadow-lg">
                <div className="relative h-32 w-32 mx-auto mt-6 rounded-full overflow-hidden border-4 border-blue-500 transition duration-300 hover:border-gray-400">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 transform hover:scale-105 cursor-pointer"
                    src={product.src}
                    alt={product.name}
                  />
                </div>
                <div
                  className="font-bold text-white text-xl mb-2 text-center"
                  style={{
                    textShadow:
                      "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
                  }}
                >
                  {product.name}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;


{
  /* <div data-aos="fade-up" data-aos-delay="600" className="space-y-4 bg-white rounded-md p-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Searh your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>

              <div>
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>

              <div className="">
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>

            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div> */
}

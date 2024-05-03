import React from "react";
// import TVd from "../../assets/FR/TV/TVd"; // Assuming TVs is correctly exported as an array of objects
import ProdCard2 from "./ProdCard2"; // Assuming TVCard is the component used to render each TV item


import TV01 from ".././../assets/FR/TV STAND/1.jpg"
import TV02 from ".././../assets/FR/TV STAND/2.jpg"
import TV03 from ".././../assets/FR/TV STAND/3.jpg"
import TV04 from ".././../assets/FR/TV STAND/4.jpg"
import TV05 from ".././../assets/FR/TV STAND/5.jpg"
import TV06 from ".././../assets/FR/TV STAND/6.jpg"
import TV07 from ".././../assets/FR/TV STAND/7.jpg"
import TV08 from ".././../assets/FR/TV STAND/8.jpg"

const TVData = [
    {
      name: "Samsung",
      image: TV01,
    },
    {
      name: "Samsung",
      image: TV02,
    },
    {
        name: "Samsung",
        image: TV03,
      },
      {
        name: "Samsung",
        image: TV04,
      },
      {
        name: "LG",
        image: TV05,
      }  
   ];

const TVComp = () => {
  return (
    <div>
      <div className="dark:bg-gray-900 dark:text-white py-5 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            TV Stands
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {TVData.map((item) => (
              <ProdCard2 key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TVComp;

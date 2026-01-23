import Category from "./Category";
import Products from "./Products";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function App() {

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const[updateCategory, setUpdateCategory] = useState(" ");

    useEffect(()=>{
      if(updateCategory!==" "){
        //fetch products by category from api and set to state
        fetch(`https://dummyjson.com/products/category/${updateCategory}`)
          .then(res => res.json())
          .then(data=>{
              setProduct(data.products);
          });
          
      }
    },[updateCategory])

  return (
    <>
     <div className="min-h-screen max-w-screen mx-auto bg-[#e0cac5] p-4">

        <div className="flex items-center justify-between p-2">
          <img src="./image/lg.jpg" alt="logo" className="w-[50px] bg-cover cursor-none ml-[20px]"/>

          <h2 className="font-semibold text-2xl text-[#f30cd4] text-center p-3 mr-[350px] sm:mr-[110px] lg:mr-[350px] md:mr-[150px]">Our Products</h2>
        </div>

        <div className="grid grid-cols-[30%_auto] mx-auto gap-2 sm:grid-cols-[20%_auto] md:grid-cols-[25%_auto] lg:grid-cols-[30%_auto] min-h-screen max-w-screen  ">

          <div className="h-screen overflow-y-auto">
            <Category category={category} setCategory={setCategory} setUpdateCategory={setUpdateCategory}  />
          </div>

          <div className="h-screen overflow-y-auto">
            <Products setProduct={setProduct} product={product} />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

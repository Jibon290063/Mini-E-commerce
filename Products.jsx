import {useEffect,useState } from "react";
import Items from "./Items";

export default function Products({setProduct, product}) {

    const fetchProducts = ()=>{
        //fetch products from api and set to state
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=>{
            setProduct(data.products);
        });
    }

    useEffect(()=>{
        fetchProducts();
    },[])


    const productList = product.map((value)=>{
        return(
           <Items key={value.id} product={value}/>
        )
    });

  return (
    <>
        <div className="grid grid-cols-4 gap-4 p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 ">

            {(product.length > 0) ? productList : <h2 className="text-center col-span-4 text-xl font-sans font-semibold animate-pulse">Loading Products...</h2>}

        </div>
    </>
  )
}

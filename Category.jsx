import { useEffect, useState } from "react";

export default function Category({category, setCategory,setUpdateCategory}) {


  const fetchCategories = ()=>{
    //fetch categories from api and set to state
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then((finalres)=>{
        setCategory(finalres);
      });

  }

  useEffect(()=>{
    fetchCategories();
  },[])

  
  const handleCategory = category.map((catItem, index)=>{
    return(
      <li onClick={()=>setUpdateCategory(catItem)} key={index} className='p-2 hover:bg-[#818080] cursor-pointer text-lg font-sans hover: font-[300] hover:font-serif hover:text-white hover:rounded transition bg-[#d6d3d0] mb-1 uppercase indent-5'>{catItem}</li>
    )
  });

  return (
    <>
      <div>

        <h2 className='text-center font-semibold font-sans text-[#2c0d9e] text-2xl'>Product Category</h2>
        <ul className='mt-4 ml-2'>
          {(handleCategory.length > 0) ? handleCategory : <h2 className="text-center text-xl font-sans font-semibold animate-pulse">Loading Categories...</h2>}
        </ul>
      </div>
    </>
  )
}

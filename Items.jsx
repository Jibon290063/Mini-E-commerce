import Products from "./Products";

export default function Items({product}) {
    return (
         <>
          <div className="shadow-lg p-3 rounded-xl hover:scale-105 transition cursor-pointer bg-[#e7d6d2] flex flex-col items-center">

                <img src={product.thumbnail} alt={product.title}  className="rounded h-[150px] w-full object-cover"/>

                <h3 className=" font-sens mt-2 text-[13px] font-bold">{product.title}</h3>

                <p>
                    <span className="text-yellow-500">⭐ {product.rating} </span>

                    <span className="text-gray-500">({product.stock} in stock)</span>

                   <span>{product.discountPercentage > 0 ? <span className="text-red-500 ml-2">-{product.discountPercentage}%</span> : null}</span>

                   <span className="inline-block">
                    {product.brand ? <span className="text-blue-500 ml-2 font-semibold">{product.brand}</span> : null}
                   </span>

                </p>

                <p className="text-gray-600 font-bold p-1">${product.price}</p>
            </div>
         </>
    )
}
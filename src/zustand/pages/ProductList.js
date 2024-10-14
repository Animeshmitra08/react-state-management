import React from 'react';
import { useCartStore } from "../store/cartStore";

const ProductList = ({products}) => {
    const addToCart = useCartStore((state)=> state.addToCart);
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-h-[38rem] overflow-auto py-2">
        {
            products?.map((product)=>(
                <div className="bg-slate-50 rounded-lg h-[15rem] flex flex-col p-4 shadow-xl justify-between" key={product.id}>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <div>
                        <p className="text-sm">{product.description}</p>
                        <p className="text-red-600 font-semibold">${product.price}</p>
                    </div>
                    <button className="bg-emerald-400 rounded-lg py-2 shadow-md" onClick={()=> addToCart(product)}>
                        add to cart
                    </button>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default ProductList
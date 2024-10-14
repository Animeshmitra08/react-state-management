import React from 'react';
import { useCartStore } from "../store/cartStore";
import { MdDelete } from "react-icons/md";

const Cart = () => {
    // const {cart, removeFromCart, clearAll} = useCartStore((state)=>({
    //     cart : state.cart,
    //     removeFromCart: state.removeFromCart,
    //     clearAll: state.clearAll,
    // }))
    const cart = useCartStore((state)=>state.cart);
    const removeFromCart = useCartStore((state)=>state.removeFromCart);
    const clearAll = useCartStore((state)=>state.clearAll);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
    <div className="w-2/3 bg-slate-50 h-[35rem]  p-4 rounded-lg divide-y-2">
        <h2 className="text-xl font-semibold">Cart</h2>
        {cart.length === 0 &&
        <h1 className="text-center text-lg">Your cart is empty</h1>}
        <div className="h-96 overflow-auto">
        {cart.map((product)=>(
            <div className="flex justify-between p-3 mt-2 bg-slate-200 rounded-md" key={product.id}>
                <div className="flex flex-col">
                    <span className="font-medium">{product.name}</span>
                    <span>${product.price}</span>
                </div>
                <button className="text-red-600" onClick={()=> removeFromCart(product.id)}><MdDelete size={20}/></button>
            </div>
        ))}
        </div>
        {cart.length > 0 && <button className="border border-red-500 py-1 px-3 bg-red-200 my-3 rounded-md" onClick={clearAll}>Clear All</button>}
        <div className="flex justify-between text-lg font-semibold">
            <h1>Total</h1>
            <p>${totalPrice.toFixed(2)}</p>
        </div>
    </div>
    </>
  )
}

export default Cart
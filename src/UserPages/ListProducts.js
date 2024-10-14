import React from 'react'
import ProductList from '../zustand/pages/ProductList'
import Cart from '../zustand/pages/Cart'
import { PRODUCTS } from '../zustand/apis/products'

const ListProducts = () => {
  return (
    <>
    <div className="py-4 ">
      <div className="p-2 mb-3">
        <h1 className="text-2xl font-bold text-indigo-700 uppercase">Cart Management</h1>
      </div>
        <div className="flex justify-between gap-4">
          <ProductList products={PRODUCTS}/>
          <Cart/>
        </div>
    </div>
    </>
  )
}

export default ListProducts
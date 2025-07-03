import React from 'react'
import { products } from './Data'
import Product_Card from './Product_Card'
import '../Styles/Product.css'
const Products = () => {
  return (
    <div className="product_grid">
    {
        products.map((prod,index)=><Product_Card data={prod}  key={index}/>)
    }
   </div>
  )
}

export default Products
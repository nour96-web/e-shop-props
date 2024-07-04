import React from 'react'
import ProductCard from './Produits'

const Catalogue = ({products}) => {
  return (
    <div><h1>Product List</h1>
    <div className='productList'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div></div>
  )
}

export default Catalogue
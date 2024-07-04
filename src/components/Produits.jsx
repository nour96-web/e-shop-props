import React from 'react';

// ProductCard component to display individual product details
const ProductCard = ({ product }) => {
//   const { name, oldPrice, discount } = product;
console.log(product)
  // Calculate the final price after applying the discount
  const finalPrice = product.OldPrice - (product.OldPrice * product.Remise / 100);

  return (
    <div className='card'>
        <img src={product.imgUrl} alt="prodimg" />
      <h2>{product.name}</h2>
      <p><s>Old Price: {product.OldPrice}$</s></p>
      <p>Discount: {product.Remise}%</p>
      <p>Final Price: {finalPrice}$</p>
    </div>
  );
};

// Styles for the product card


export default ProductCard;

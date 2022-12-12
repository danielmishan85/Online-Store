import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className='small' src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>
      <h3>{product.des}</h3>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}

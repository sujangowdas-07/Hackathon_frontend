import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.imagePlaceholder || '/default-image.png'} alt={product.title} width={150}/>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;


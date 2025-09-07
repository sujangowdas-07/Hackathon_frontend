import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => window.history.back()}>Back</button>
      <img src={product.imagePlaceholder || '/default-image.png'} alt={product.title} width={300}/>
      <h1>{product.title}</h1>
      <p>Category: {product.category}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;

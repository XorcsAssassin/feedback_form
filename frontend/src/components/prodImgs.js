import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProdImgs(){
  const [firstSet, setFirstSet] = useState([]);
  const [secondSet, setSecondSet] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/prodImgs');
        setFirstSet(response.data.firstSet);
        setSecondSet(response.data.secondSet);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="container">
        <h2>First Set</h2>
        <div className="image-grid">
          {firstSet.map((product) => (
            <div key={product._id} className="image-item">
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <h2>Second Set</h2>
        <div className="image-grid">
          {secondSet.map((product) => (
            <div key={product._id} className="image-item">
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProdImgs;

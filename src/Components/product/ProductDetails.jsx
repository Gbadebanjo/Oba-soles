import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PageLoader from './PageLoader';
import {Puff } from 'react-loader-spinner';
import Loader from 'react-loaders';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
                const response = await axios.get(`/product/${id}`);
                setProduct(response.data);
                setLoading(false);
            }
            catch (error) {
                console.error("Error fetching products:", error);
              }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
      return <Loader type="ball-pulse-sync" active />;
    }
  return (
    <div>
    <img src={product.picture} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>₦{product.price}</p>
  </div>
  )
}

export default ProductDetails
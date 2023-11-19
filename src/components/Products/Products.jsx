import React, {useEffect, useContext } from 'react';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

import './Products.css';

function Products() {
  const {products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    // Adicione/remova a classe no body para controlar o overflow
    document.body.style.overflow = loading ? 'hidden' : 'auto';

    // Limpe a classe quando o componente for desmontado
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
  );
}

export default Products;

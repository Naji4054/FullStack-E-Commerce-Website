import React, { useState } from 'react';
import ProductCards from './ProductCards';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const TrendingProducts = () => {
  const { data: productsData, error, isLoading } = useFetchAllProductsQuery();
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  const products = productsData?.products || [];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <section className='section__container product__container'>
      <h2 className='section__header'>Trending Products</h2>
      <p className='section__subheader mb-12'>
        Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
      </p>

      {/* Product Cards */}
      <div className='mt-12'>
        <ProductCards products={products.slice(0, visibleProducts)} />
      </div>

      {/* Load More Button */}
      <div className='product__btn'>
        {visibleProducts < products.length && (
          <button className='btn' onClick={loadMoreProducts}>Load More</button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;

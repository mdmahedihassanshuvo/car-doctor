import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='mb-10'>
            <div className='text-center space-y-5 mb-10'>
                <h2 className='text-2xl font-semibold text-[#FF3811]'>Popular Products</h2>
                <h2 className='text-5xl font-bold'>Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                  products.map(product => <ProductCard
                  key={product.id}
                  product={product}
                  ></ProductCard>)  
                }
            </div>
        </div>
    );
};

export default Products;
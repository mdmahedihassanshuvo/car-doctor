import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ProductCard = ({ product }) => {

    const { id, productName, img, rating, price } = product

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-28" />
            </figure>
            <div className="card-body items-center text-center">
                <p>
                    <Rating className='text-[#FF912C]'
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={<FaStar/>}
                    />
                </p>
                <h2 className="card-title font-bold">{productName}</h2>
                <p className='font-bold text-[#FF3811]'>${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
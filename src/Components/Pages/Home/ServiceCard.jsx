import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    // console.log(service)
    const { _id, img, title, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body font-semibold">
                <div className='flex justify-between items-center'>
                    <div className='space-y-5'>
                        <h2 className="card-title">{title}</h2>
                        <p className='text-[#FF3811]'>Price: ${price}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/book/${_id}`}><button className='text-[#FF3811]'><FaArrowRight /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
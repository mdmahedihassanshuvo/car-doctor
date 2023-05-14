import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {

    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('https://car-server-hazel.vercel.app/services')
        .then(res => res.json())
        .then(data=> setServices(data))
    }, [])

    return (
        <div className='mb-20'>
            <div className='text-center space-y-5 mb-5'>
                <h2 className='text-2xl font-semibold text-[#FF3811]'>Service</h2>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;
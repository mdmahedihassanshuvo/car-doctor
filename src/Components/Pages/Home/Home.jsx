import React from 'react';
import Banner from './Banner';
import About from './About';
import Service from './Service';
import Products from './Products';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <About/>
        <Service/>
        <Products></Products>
        </>
    );
};

export default Home;
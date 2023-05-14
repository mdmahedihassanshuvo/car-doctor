import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen mb-10">
            <div className="hero-content flex-col p-5 lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute top-1/2 right-5 border-white border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-5 space-y-5'>
                    <h1 className="text-2xl font-semibold text-[#FF3811]">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn bg-[#FF3811] border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
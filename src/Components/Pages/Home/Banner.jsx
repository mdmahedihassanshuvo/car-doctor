import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <img src={banner1} className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex gap-5 items-center h-full left-0 top-0 text-white w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 pl-24'>
                            <h2 className='text-6xl mb-7'>Affordable Price For Car Servicing</h2>
                            <p className='mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form  </p>
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ml-4 text-white">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img src={banner2} className="w-full rounded-lg" />
                    <div className="absolute flex rounded-lg gap-5 items-center h-full left-0 top-0 text-white w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 pl-24'>
                            <h2 className='text-6xl mb-7'>Affordable Price For Car Servicing</h2>
                            <p className='mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form  </p>
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ml-4 text-white">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img src={banner3} className="w-full rounded-lg" />
                    <div className="absolute flex rounded-lg gap-5 items-center h-full left-0 top-0 text-white w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 pl-24'>
                            <h2 className='text-6xl mb-7'>Affordable Price For Car Servicing</h2>
                            <p className='mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form  </p>
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ml-4 text-white">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[600px]">
                    <img src={banner4} className="w-full rounded-lg" />
                    <div className="absolute flex rounded-lg gap-5 items-center h-full left-0 top-0 text-white w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 pl-24'>
                            <h2 className='text-6xl mb-7'>Affordable Price For Car Servicing</h2>
                            <p className='mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form  </p>
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline ml-4 text-white">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
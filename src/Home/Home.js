import React from 'react';
import Carousel from './carousel/Carousel';
import Categories from './productCategory/Categories';

const Home = () => {
    return (
        <>
            <div className='container mx-auto'>
            <Carousel></Carousel>
            <Categories></Categories>
            </div>
        </>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner/Banner';
// import Carousel from './carousel/Carousel';
import Categories from './productCategory/Categories';

const Home = () => {
    return (
        <>
            <div className='container mx-auto'>
            {/* <Carousel></Carousel> */}
            <Banner></Banner>
            <Categories></Categories>
            </div>
        </>
    );
};

export default Home;
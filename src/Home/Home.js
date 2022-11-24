import React from 'react';
import Banner from './Banner/Banner';
import Opinion from './CustommerOpinion/Opinion';
// import Carousel from './carousel/Carousel';
import Categories from './productCategory/Categories';

const Home = () => {
    return (
        <>
            <div className='container mx-auto'>
            <Banner></Banner>
            <Categories></Categories>
            <Opinion></Opinion>
            </div>
        </>
    );
};

export default Home;
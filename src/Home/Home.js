import React from 'react';
import AdvertiesItems from './AdvertiseItems/AdvertiesItems';
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
            <AdvertiesItems></AdvertiesItems>
            <Opinion></Opinion>
            </div>
        </>
    );
};

export default Home;
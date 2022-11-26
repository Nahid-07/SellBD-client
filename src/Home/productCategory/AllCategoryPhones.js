import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phones from './Phones';

const AllCategoryPhones = () => {
    const allphones = useLoaderData()
    console.log(allphones);
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                allphones.map(phone => <Phones key={phone._id} phone={phone}></Phones>)
            }
        </div>
    );
};

export default AllCategoryPhones;
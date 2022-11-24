import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    const {data : categories = []} = useQuery({
        queryKey:['category'],
        queryFn: async() =>{
            const res = await fetch('data.json')
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 lg:mt-16'>
            {
                categories.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)
            }
        </div>
        
    );
};

export default Categories;
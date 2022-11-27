import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
  const {data : buyers=[], refetch} = useQuery({
    queryKey:['buyer'],
    queryFn:async()=>{
      const res = await fetch(`http://localhost:5000/users/buyer`)
      const data = await res.json()
      return data
    }
  })

    // Buyer will delete after hitting ta api

    const handleDelete = id =>{
      fetch(`http://localhost:5000/allbuyer/${id}`,{
        method : "DELETE"
      })
      .then(res => res.json())
      .then(data =>{
        if(data.deletedCount > 0){
          const remainingUser = buyers.filter(buyer => buyer._id !== id)
          refetch(remainingUser)
        }
      })
    }
    console.log(buyers);
    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>NO.</th>
              <th>Name</th>
              <th>email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              buyers.map((buyer,i) => <tr key={buyer._id}>
                  <th>{i+1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>
                      <button onClick={()=>handleDelete(buyer._id)} className='btn btn-sm bg-red-700'>Delete</button>
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default AllBuyers;
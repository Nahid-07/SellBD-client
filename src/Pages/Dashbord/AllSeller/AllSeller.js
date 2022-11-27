import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllSeller = () => {
    const [seller, setSeller] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/seller`)
    .then(res => {
        setSeller(res.data)
    })
    },[])
    console.log(seller);
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
        seller.map((slr,i) => <tr key={slr._id}>
            <th>{i+1}</th>
            <td>{slr.name}</td>
            <td>{slr.email}</td>
            <td>
                <button className='btn btn-sm bg-red-700'>Delete</button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default AllSeller;
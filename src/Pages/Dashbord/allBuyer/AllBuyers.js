import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/users/buyer')
        .then(res=> {
            setBuyers(res.data)
        })
    },[])
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
                      <button className='btn btn-sm bg-red-700'>Delete</button>
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default AllBuyers;
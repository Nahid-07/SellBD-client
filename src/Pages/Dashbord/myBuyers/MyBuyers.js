import React, { useEffect, useState } from "react";

const MyBuyers = () => {
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/buyer")
      .then((res) => res.json())
      .then((data) => setBuyers(data));
  }, []);
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Eamil</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((buyer,index) => (
            <tr key={buyer._id}>
              <th>{index + 1}</th>
              <td>{buyer.buyerName}</td>
              <td>{buyer.email}</td>
              <td>{buyer.address}</td>
              <td>{buyer.number}</td>
              <td>{buyer.productName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBuyers;

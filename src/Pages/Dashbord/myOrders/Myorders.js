import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthProvider } from "../../../Context/Context";

const Myorders = () => {
  const { user } = useContext(AuthProvider);
  const { data: myOrders } = useQuery(
    {
      queryKey: ["myOrders"],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/myorders?email=${user?.email}`
        );
        const data = await res.json();
        return data;
      },
    },
    [user?.email]
  );
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Product Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={order.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{order.productName}</td>
              <td>${order.price}</td>
              <th>
                <button className="btn bg-[#293462] btn-xs">PAY</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myorders;

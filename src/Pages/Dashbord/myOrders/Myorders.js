import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../Context/Context";
import Loader from "../../../Loader/Loader";

const Myorders = () => {
  const { user,loader } = useContext(AuthProvider);
  const { data: myOrders= []} = useQuery(
    {
      queryKey: ["myOrders", user?.email],
      queryFn: async () => {
        const res = await fetch(
          `https://assignment-12-server-flame.vercel.app/myorders?email=${user?.email}`,{
            headers : {
                authorization : `bearer ${localStorage.getItem('Token')}`
            }
          });
        const data = await res.json();
        return data
      },
    }
    
  );
  if(loader){
    return <Loader></Loader>
  }
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
                { order.price && !order.paid && 
                  <Link to={`/dashbord/payment/${order._id}`}>
                    <button className="btn bg-[#293462] btn-xs">PAY</button>
                  </Link>
                }
                {
                  order.price && order.paid && <span className="text-green-400">Paid</span>
                }
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myorders;

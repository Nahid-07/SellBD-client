import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../../../Context/Context";
import Loader from "../../../Loader/Loader";

const MyProducts = () => {
  const [myProduct, setMyProduct] = useState([]);
  const { user, loader } = useContext(AuthProvider);
  const [product , setProduct] = useState('')
  console.log(product);
  useEffect(() => {
    axios.get(`https://assignment-12-server-flame.vercel.app/myproduct/${user?.email}`).then((res) => {
      setMyProduct(res.data);
    });
  }, [user?.email]);
  if (loader) {
    return <Loader></Loader>;
  }
  //   console.log(myProduct);
  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure you want to delete this item ?");
    if (agree) {
      fetch(`https://assignment-12-server-flame.vercel.app/product/adverties/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingUser = myProduct.filter((pd) => pd._id !== id);
            setMyProduct(remainingUser);
            toast.success("Delete successfully");
          }
        });
    }
  };
  const handleAd = (pd) => {
    fetch(`https://assignment-12-server-flame.vercel.app/products/adverties`,{
          method : "POST",
          headers:{
            "content-type" : "application/json"
          },
          body: JSON.stringify(pd)
        })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged){
            toast.success('Adverties added to the section')
          }
        })
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Product Name</th>
            <th>Model</th>
            <th>SElling Price</th>
            <th>Sales Status</th>
            <th>Delete Product</th>
            <th>Advertise</th>
          </tr>
        </thead>
        <tbody>
          {myProduct.map((pd, index) => (
            <tr key={pd._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={pd.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{pd.name}</td>
              <td>{pd.model}</td>
              <td>${pd.sellingPrice}</td>
              <td className="text-red-600">Available</td>
              <td>
                <button
                  onClick={() => handleDelete(pd._id)}
                  className="btn btn-sm btn-warning"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleAd(pd)}
                  className="btn btn-sm btn-error"
                >
                  Advertise Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;

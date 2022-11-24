import React from "react";
import { Link } from "react-router-dom";

const Category = ({category}) => {
  const {CategoryName,products,categoryImg,id} =category;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={categoryImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{CategoryName}</h2>
        <div className="badge badge-secondary">Items : {products.length}</div>
        <div className="card-actions justify-end">
          <Link to={`/phones/${id}`}><button className="btn btn-primary">See Items</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Category;

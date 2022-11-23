import React from "react";

const Category = ({category}) => {
    const {CategoryName,products,categoryImg} =category
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={categoryImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{CategoryName}</h2>
        <div className="badge badge-secondary">Items : {products.length}</div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Items</button>
        </div>
      </div>
    </div>
  );
};

export default Category;

import React from "react";
import { Link } from "react-router-dom";

const Category = ({category}) => {
  const {CategoryName,products,categoryImg,id} =category;
  return (
    <div className="card bg-base-100 image-full">
  <figure><img src={categoryImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{CategoryName}</h2>
    <p>Items : {products.length}</p>
    <div className="card-actions justify-end">
      <Link to={`/phones/${id}`}><button className="btn text-white bg-[#293462]">See more</button></Link>
    </div>
  </div>
</div>
  );
};

export default Category;

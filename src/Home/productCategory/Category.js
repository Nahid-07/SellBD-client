import React from "react";

const Category = ({category}) => {
  const {CategoryName,products,categoryImg} =category;
  return (
    <div className="card bg-base-100 image-full">
  <figure><img src={categoryImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{CategoryName}</h2>
    <p>Items : {products.length}</p>
    <div className="card-actions justify-end">
      <button className="btn text-white bg-[#293462]">See more</button>
    </div>
  </div>
</div>
  );
};

export default Category;

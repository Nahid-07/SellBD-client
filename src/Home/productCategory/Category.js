import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { CategoryName, categoryImg, _id } = category;
  return (
    <div className="card bg-base-100 image-full">
      <figure>
        <img src={categoryImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-400">{CategoryName}</h2>
        <div className="card-actions justify-end">
          <Link to={`/allcategoryphones/${_id}`}>
            <button className="btn bg-[#293462] text-yellow-400">
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;

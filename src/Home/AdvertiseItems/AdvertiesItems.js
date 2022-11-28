import axios from "axios";
import React, { useEffect, useState } from "react";

const AdvertiesItems = () => {
  const [adverties, setAdverties] = useState([]);
  useEffect(() => {
    axios.get(`https://assignment-12-server-flame.vercel.app/products/adverties`).then((res) => {
      setAdverties(res.data);
    });
  }, []);
  return (
    <div className="rounded-lg mt-20 bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center text-slate-400">
        Recent Post
      </h1>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {adverties.map((ad) => (
          <div className="max-w-xs p-6 rounded-md shadow-md ">
            <img
              src={ad.img}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 "
            />
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide">{ad.name}</h2>
            </div>
            <p className="dark:text-gray-100">{ad.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertiesItems;

import React from "react";
import { Link } from "react-router-dom";

const DiscountBanner = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-slate-500 mt-16 rounded-lg">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <Link
              href="#"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md block text-white font-semibold bg-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;

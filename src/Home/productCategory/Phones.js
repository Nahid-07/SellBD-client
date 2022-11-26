// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BookNowModal from "./BookNowModal";

const Phones = ({phone}) => {
  console.log(phone);
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md ">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <p className="mb-0 capitalize font-semibold text-xl">
                {" "}
                Seller :{phone.sellerName}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={phone.img}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 "
              />
              <div className="flex items-center text-xs">
                <span>{phone.date}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="block">
                <h3 className="text-xl font-semibold ">
                  {phone.name} ({phone.model})
                </h3>
              </div>
              <div className="leading-7">
                
                <p>
                  <span className="font-semibold">Buying price :</span> $
                  {phone.buyingPrice}
                </p>
                <p>
                  <span className="font-semibold">Selling price :</span> $
                  {phone.sellingPrice}
                </p>
                <p>
                  <span className="font-semibold">Address :</span>{" "}
                  {phone.address}
                </p>
                <p>
                  <span className="font-semibold">Used :</span> {phone.uses}
                </p>
                <p>
                  <span className="font-semibold">Condition :</span> {phone.conditon}
                </p>
                <p>
                  <span className="font-semibold">Seller Number :</span> {phone.number}
                </p>
              </div>
              <div className="flex justify-end">
                <label
                  htmlFor="bookNow"
                  className="btn btn-sm btn-outline hover:bg-[#293462]"
                >
                  Book now <FaArrowRight className="hover:text-white ml-1" />
                </label>
              </div>
            </div>
          </div>
        </div>
      <BookNowModal
        phone={phone}
      ></BookNowModal>
    </div>
  );
};

export default Phones;

import React, { useContext } from "react";
import { AuthProvider } from "../../Context/Context";

const BookNowModal = ({ products}) => {
  const { user } = useContext(AuthProvider);
  // console.log(products);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const address = form.address.value;
    const number = form.number.value;
    const buyerInfo = {
      buyerName,
      email,
      productName,
      address,
      number,
    };
    console.log(buyerInfo);
    form.reset()
  };
  return (
    <div>
      {products.map((prod, index) => (
        <form onSubmit={handleSubmit} key={index}>
          <input type="checkbox" id="bookNow" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="bookNow"
                className="btn btn-sm btn-circle absolute right-2 top-2 bg-[#293462]"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{prod.name}</h3>
              <div className="py-4 grid gap-4">
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.displayName}
                  disabled
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Type here"
                  defaultValue={user?.email}
                  disabled
                  className="input input-bordered w-full"
                />
                <input
                  name="productName"
                  type="text"
                  placeholder="Type here"
                  defaultValue={prod.name}
                  className="input input-bordered w-full"
                />
                <input
                  name="address"
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered w-full"
                />
                <input
                  name="number"
                  type="text"
                  placeholder="Your phone number"
                  className="input input-bordered w-full"
                />
              </div>

              <button type="submit" className="btn bg-[#293462] w-full">
                Submit
              </button>
            </div>
          </div>
        </form>
      ))}
    </div>
  );
};

export default BookNowModal;

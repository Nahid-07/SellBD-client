import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../../Context/Context";

const BookNowModal = ({phone}) => {
  console.log(phone.name);
  const { user } = useContext(AuthProvider);
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
      img : phone.img,
      price : phone.sellingPrice
    };
    fetch('http://localhost:5000/buyer',{
      method : "POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(buyerInfo)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        form.reset()
        toast.success('Item booked')

      };
    })

  };
  return (
    <div>
      <form onSubmit={handleSubmit} >
          <input type="checkbox" id="bookNow" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="bookNow"
                className="btn btn-sm btn-circle absolute right-2 top-2 bg-[#293462]"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{phone.name}</h3>
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
                  defaultValue={phone.name}
                  className="input input-bordered w-full"
                />
                <input
                  name="address"
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  name="number"
                  type="text"
                  placeholder="Your phone number"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <button type="submit" className="btn bg-[#293462] w-full">
                Submit
              </button>
            </div>
          </div>
        </form>
    </div>
  );
};

export default BookNowModal;

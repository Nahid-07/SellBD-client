import React from "react";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value;
    const model = form.model.value;
    const condition = form.condition.value;
    const number = form.number.value;
    const address = form.location.value;
    const id = form.prodCate.value;
    const buyingPrice = form.buyRate.value;
    const sellingPrice = form.sellRate.value;
    const uses = form.uses.value;
    const sellerName = form.sellerName.value;
    const img = form.img.value;
    const item = {
      name,
      model,
      condition,
      number,
      address,
      id,
      buyingPrice,
      sellingPrice,
      uses,
      sellerName,
      img
    };
    fetch('http://localhost:5000/product',{
        method : "POST",
        headers:{
            "content-type" : "application/json"
        },
        body: JSON.stringify(item)
    }).then(res => res.json()).then(data => console.log(data))
    console.log(item);
  };
  return (
    <div className="lg:w-1/2 mx-auto px-5">
      <h1 className="text-center text-3xl font-semibold my-5">Add Product</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 gap-6">
          <input
            name="productName"
            type="text"
            placeholder="product Name"
            className="input input-bordered w-full"
          />
          <input
            name="model"
            type="text"
            placeholder="model"
            className="input input-bordered w-full"
          />
          <input
            name="img"
            type="text"
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
          <input
            name="condition"
            type="text"
            placeholder="condition"
            className="input input-bordered w-full"
          />
          <input
            name="number"
            type="text"
            placeholder="number"
            className="input input-bordered w-full"
          />
          <input
            name="location"
            type="text"
            placeholder="location"
            className="input input-bordered w-full"
          />

          <input
            name="buyRate"
            type="text"
            placeholder="buyRate"
            className="input input-bordered w-full"
          />
          <input
            name="sellRate"
            type="text"
            placeholder="sell Rate"
            className="input input-bordered w-full"
          />
          <input
            name="uses"
            type="text"
            placeholder="Used of year"
            className="input input-bordered w-full"
          />
          <input
            name="sellerName"
            type="text"
            placeholder="seller Name"
            className="input input-bordered w-full"
          />
          <select name="prodCate" className="select select-bordered w-full ">
            <option value="63817d0110d01449e6334983">Samsung mobile phones</option>
            <option value="63817d0110d01449e6334984">Xioami Mobile phones</option>
            <option value="63817d0110d01449e6334985">iPhone Mobile phones</option>
          </select>
        </div>
        <textarea
          className="textarea textarea-bordered w-full mt-6"
          placeholder="Short description"
        ></textarea>
        <button type="submit" className="bg-[#293462] btn w-full my-6">
          {" "}
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

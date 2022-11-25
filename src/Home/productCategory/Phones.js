import { useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import BookNowModal from "./BookNowModal";

const Phones = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {products.map((product, index) => (
        <div key={index} className="max-w-lg p-4 shadow-md ">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <p className="mb-0 capitalize font-semibold text-xl">
                {" "}
                Seller :{product.sellerName}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={product.img}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 "
              />
              <div className="flex items-center text-xs">
                <span>6 min ago</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="block">
                <h3 className="text-xl font-semibold ">
                  {product.name} ({product.model})
                </h3>
              </div>
              <div className="leading-7">
                <h4>
                  <span className="font-semibold">Display :</span> x{" "}
                  {product.details.display}
                </h4>
                <p>
                  <span className="font-semibold">Size :</span>{" "}
                  {product.details.size}
                </p>
                <p>
                  <span className="font-semibold">Main camera :</span>{" "}
                  {product.details.camera.main}
                </p>
                <p>
                  <span className="font-semibold">Selfie camera :</span>{" "}
                  {product.details.camera.selfie}
                </p>
                <p>
                  <span className="font-semibold">Chipset :</span>{" "}
                  {product.details.chipset}
                </p>
                <p>
                  <span className="font-semibold">Memory :</span>{" "}
                  {product.details.memory}
                </p>
                <p>
                  <span className="font-semibold">Battery :</span>{" "}
                  {product.details.battery}
                </p>
                <p>
                  <span className="font-semibold">Buying price :</span> $
                  {product.buyingPrice}
                </p>
                <p>
                  <span className="font-semibold">Selling price :</span> $
                  {product.sellingPrice}
                </p>
                <p>
                  <span className="font-semibold">Address :</span>{" "}
                  {product.address}
                </p>
                <p>
                  <span className="font-semibold">Used :</span> {product.uses}
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
      ))}
      <BookNowModal
        products={products}
      ></BookNowModal>
    </div>
  );
};

export default Phones;

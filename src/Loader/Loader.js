import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[600px] flex items-center">
      <RingLoader
        color="#293462"
        size={100}
        cssOverride={{
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default Loader;

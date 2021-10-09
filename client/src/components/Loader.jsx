import React from "react";
import Loading from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "100vh" }}
    >
      <Loading type="Hearts" color="#3480eb" height={80} width={80} />
    </div>
  );
};

export default Loader;

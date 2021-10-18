import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import JerseyDetails from "../components/JourseyDetails";
import JourseyForm from "../components/JourseyForm";
import Loader from "../components/Loader";
import OrderLists from "../components/OrderLists";
import { JerseyContext } from "../contexts/jerseyContext";
import { UserContext } from "../contexts/userContext";

const Orders = ({ history }) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      history.push("/sign-in");
    }
    if (user && !user.role == "admin") {
      history.push("/dashboard");
    }
  }, [user]);

  const { jersey } = useContext(JerseyContext);

  if (!user) {
    return <Loader />;
  }

  if (user && user.role == "admin") {
    return (
      <div className="w-full py-8 bg-gray-100" style={{ minHeight: "85vh" }}>
        <div className="container-custom mx-auto px-4 flex flex-col items-center">
          <h1 className="text-gray-800 text-3xl text-center mb-8">
            Hi, {user?.name} 😊
          </h1>
          <OrderLists />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="flex justify-center items-center bg-gray-100"
        style={{ minHeight: "85vh" }}
      >
        {" "}
        You are not admin{" "}
      </div>
    );
  }
};

export default Orders;

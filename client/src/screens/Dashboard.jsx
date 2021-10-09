import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import JerseyDetails from "../components/JourseyDetails";
import JourseyForm from "../components/JourseyForm";
import Loader from "../components/Loader";
import { JerseyContext } from "../contexts/jerseyContext";
import { UserContext } from "../contexts/userContext";

const Dashboard = ({ history }) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      history.push("/sign-in");
    }
  }, [user]);

  const { jersey } = useContext(JerseyContext);

  if (!user) {
    return <Loader />;
  }

  return (
    <div className="w-full py-8 bg-gray-100" style={{ minHeight: "85vh" }}>
      <div className="container-custom mx-auto px-4 flex flex-col items-center">
        <h1 className="text-gray-800 text-3xl text-center">
          Hi, {user?.name} 😊
        </h1>
        <div className="flex lg:flex-row flex-col items-center lg:items-center gap-6">
          <div>
            <h1 className="text-gray-700 text-3xl mt-16 mb-4">Jersey Demo</h1>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/final.png`}
              alt="Jersey preview"
            />
          </div>
          {jersey ? <JerseyDetails /> : <JourseyForm />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

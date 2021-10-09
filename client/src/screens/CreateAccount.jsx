import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

const CreateAccount = ({ history }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { user, register } = useContext(UserContext);

  const registerHandler = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Name is required");
      return;
    }
    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!password) {
      toast.error("Password is required");
      return;
    }

    if (!confirmPassword) {
      toast.error("Confirm Password required");
      return;
    }

    if (password != confirmPassword) {
      toast.error("Password does not matched");
      return;
    }

    await register(name, email, password);
  };

  useEffect(() => {
    if (user) {
      history.push("/dashboard");
    }
  }, [user]);

  return (
    <div
      className="w-full flex flex-col items-center bg-gray-100 py-4"
      style={{ minHeight: "85vh" }}
    >
      <div>
        <h1 className="text-3xl text-gray-800 mt-8 mb-4">Create an account</h1>
      </div>
      <form className="form-container bg-white rounded-xl mt-8 px-4 py-8 flex flex-col gap-4 shadow-lg">
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your new password"
            className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm your password"
            className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={registerHandler}
            className="bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1"
          >
            Create account
          </button>
        </div>
        <Link to="/sign-in">
          <p className="text-sm text-indigo-600 hover:underline">
            Already have an account?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default CreateAccount;

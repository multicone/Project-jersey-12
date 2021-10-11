import axios from "axios";
import react, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(undefined);

  const login = async (email, password) => {
    if (email && password) {
      // Login Request
      const loginInfo = {
        email: email,
        password: password,
      };
      try {
        const { data } = await axios.post("/api/users/signin", loginInfo);
        console.log(data);
        // Update Localstorage
        localStorage.setItem("userInfo", JSON.stringify(data));
        // update State
        setUserInfo(data);
        toast.success("Login Successfull", {
          duration: 1500,
        });
      } catch (e) {
        console.log(e.response.data.errors);
        e.response.data?.errors.map((err) => {
          toast.error(err.message, {
            duration: 1500,
          });
        });
        // Alert Errors
      }
    } else {
      toast.error("Email and Password required");
    }
  };

  const register = async (name, email, password) => {
    if (name && email && password) {
      // Login Request
      const loginInfo = {
        name: name,
        email: email,
        password: password,
      };
      try {
        const { data } = await axios.post("/api/users/signup", loginInfo);
        console.log(data);
        // Update Localstorage
        localStorage.setItem("userInfo", JSON.stringify(data));
        // update State
        setUserInfo(data);
        toast.success("Register Successful");
      } catch (e) {
        // console.log(e.response.data.errors)
        e.response.data?.errors.map((err) => {
          toast.error(err.message, {
            duration: 1500,
          });
        });
        // Alert Errors
      }
    } else {
      toast.error("Name , Email and Password required");
    }
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(undefined);
    toast.success("Logout Successful");
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: userInfo,
        login: login,
        logout: logout,
        register: register,
      }}
    >
      {{ ...props.children }}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

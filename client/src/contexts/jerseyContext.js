import axios from "axios";

import react, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { UserContext } from "./userContext";

export const JerseyContext = createContext();

const JerseyContextProvider = (props) => {
  const [jerseyInfo, setJerseyInfo] = useState(undefined);
  const { user } = useContext(UserContext);
  const [loader, setLoader] = useState(true);

  const fetchJersey = async () => {
    setLoader(true);
    if (user) {
      const config = {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        const { data } = await axios.get("/api/joursey", config);
        // update State
        setJerseyInfo(data);
        setLoader(false);
      } catch (e) {
        setJerseyInfo(undefined);
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  };

  const submitJersey = async (
    jourseyNumber,
    jourseyName,
    paymentMethod,
    txId,
    size,
    sleveSize
  ) => {
    if (
      jourseyNumber &&
      jourseyName &&
      paymentMethod &&
      txId &&
      size &&
      sleveSize
    ) {
      const config = {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      // Login Request
      const jersey = {
        jourseyNumber,
        jourseyName,
        paymentMethod,
        txId,
        size,
        sleveSize,
      };
      try {
        const { data } = await axios.post("/api/joursey", jersey, config);
        console.log(data);
        // update State
        setJerseyInfo(data);
        toast.success("Information Submitted Successful");
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
      toast.error("Something went Wrong in input. Please fill the form again", {
        duration: 1500,
      });
    }
  };

  useEffect(() => {
    fetchJersey();
  }, [user]);

  if (loader) {
    return <Loader />;
  }

  return (
    <JerseyContext.Provider
      value={{
        jersey: jerseyInfo,
        fetchJersey: fetchJersey,
        submitJersey: submitJersey,
      }}
    >
      {{ ...props.children }}
    </JerseyContext.Provider>
  );
};

export default JerseyContextProvider;

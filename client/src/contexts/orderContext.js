import axios from "axios";
import react, { createContext, useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import { UserContext } from "./userContext";

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
  const [orders, setOrders] = useState();
  const { user } = useContext(UserContext);
  const [loader, setLoader] = useState(true);

  const init = async () => {
    setLoader(true);
    if (user) {
      const config = {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        const { data } = await axios.get("/api/orders", config);
        // update State
        setOrders(data);
        setLoader(false);
      } catch (e) {
        setOrders(undefined);
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  };

  useEffect(() => {
    init();
  }, [user]);

  const confirm = async (id) => {
    setLoader(true);
    if (user) {
      const config = {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        const { data } = await axios.post(
          `/api/orders/confirm/${id}`,
          {},
          config
        );

        console.log(data);
        toast.success("Payment Status Updated Successfully");
        // update State
        init();
        setLoader(false);
      } catch (e) {
        setOrders(undefined);
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  };

  const reject = async (id) => {
    setLoader(true);
    if (user) {
      const config = {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        const { data } = await axios.post(
          `/api/orders/reject/${id}`,
          {},
          config
        );

        console.log(data);
        toast.success("Payment Status Updated Successfully");
        // update State
        init();
        setLoader(false);
      } catch (e) {
        setOrders(undefined);
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  };
  return (
    <OrderContext.Provider
      value={{
        orders: orders,
        confirm: confirm,
        reject: reject,
      }}
    >
      {{ ...props.children }}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

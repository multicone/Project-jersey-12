import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { JerseyContext } from "../contexts/jerseyContext";
import { UserContext } from "../contexts/userContext";

const JourseyForm = () => {
  const [jourseyNumber, setJourseyNumber] = useState();
  const [jourseyName, setJourseyName] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const [txId, setTxId] = useState();
  const [size, setSize] = useState();
  const [sleveSize, setSleveSize] = useState();

  const { user } = useContext(UserContext);
  const { jersey, submitJersey } = useContext(JerseyContext);

  const jourseySubmitHandler = async (e) => {
    e.preventDefault();
    if (!jourseyNumber) {
      toast.error("Jersey Number is required");
      return;
    }
    if (!jourseyName) {
      toast.error("Jersey Name is required");
      return;
    }

    if (!paymentMethod) {
      toast.error("Payment Method is required");
      return;
    }

    if (!txId) {
      toast.error("Transaction Id is required");
      return;
    }
    if (!size) {
      toast.error("Size is required");
      return;
    }
    if (!sleveSize) {
      toast.error("Sleve Size required");
      return;
    }

    await submitJersey(
      jourseyNumber,
      jourseyName,
      paymentMethod,
      txId,
      size,
      sleveSize
    );
  };
  return (
    <form className="form-container bg-white rounded-xl mt-28 px-4 py-8 flex flex-col gap-4 shadow-lg">
      <div>
        <input
          type="text"
          placeholder="Desired jersey number"
          className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          value={jourseyNumber}
          onChange={(e) => setJourseyNumber(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Your name in jersey"
          className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          value={jourseyName}
          onChange={(e) => setJourseyName(e.target.value)}
        />
      </div>

      <div>
        <select
          name="paymentMethod"
          id="payment"
          className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="0" selected disabled>
            -- select your payment method --
          </option>
          <option value="Bkash">Bkash</option>
          <option value="DBBL Rocket">DBBL Rocket</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your transaction ID"
          className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          value={txId}
          onChange={(e) => setTxId(e.target.value)}
        />
      </div>
      <div>
        <select
          name="Jersey Size"
          className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          onChange={(e) => setSize(e.target.value)}
        >
          <option disabled selected>
            -- Pick your size --
          </option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <div>
        <select
          name="Jersey Sleve Size"
          className="px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          onChange={(e) => setSleveSize(e.target.value)}
        >
          <option disabled selected>
            -- Pick your sleve size --
          </option>
          <option value="half">Half</option>
          <option value="full">Full</option>
        </select>
      </div>
      <div>
        <button
          onClick={jourseySubmitHandler}
          className="bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default JourseyForm;

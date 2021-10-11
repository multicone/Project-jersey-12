import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { JerseyContext } from "../contexts/jerseyContext";
import { UserContext } from "../contexts/userContext";

const JerseyDetails = () => {
  const { user } = useContext(UserContext);
  const { jersey } = useContext(JerseyContext);
  return (
    <div className="form-container bg-white rounded-xl mt-28 px-4 py-8 flex flex-col gap-4 shadow-lg">
      <div>
        <h1 className="text-2xl font-semibold">Jersey Details</h1>
      </div>
      <div>
        <b>Payment Status : </b>
        <span>{jersey.status.toUpperCase()}</span>
      </div>
      <div>
        <b>Jersey Number : </b>
        <span>{jersey.jourseyNumber}</span>
      </div>
      <div>
        <b>Jersey Name : </b>
        <span>{jersey.jourseyName}</span>
      </div>
      <div>
        <b>Payment Method : </b>
        <span>{jersey.paymentMethod}</span>
      </div>
      <div>
        <b>Transaction Id : </b>
        <span>{jersey.txId}</span>
      </div>
      <div>
        <b>Size : </b>
        <span>{jersey.size}</span>
      </div>
      <div>
        <b>Sleve Size : </b>
        <span>{jersey.sleveSize}</span>
      </div>
    </div>
  );
};

export default JerseyDetails;

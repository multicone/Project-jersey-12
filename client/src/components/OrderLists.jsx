import React, { useContext } from "react";
import { OrderContext } from "../contexts/orderContext";
import Loader from "./Loader";

const OrderLists = () => {
  const { orders, confirm, reject } = useContext(OrderContext);

  if (!orders) {
    return <></>;
  }
  return (
    <div class="container flex overflow-auto">
      <div class="flex flex-col">
        <div class="w-full">
          <table class="">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-2 text-xs text-gray-500">Name</th>
                <th class="px-6 py-2 text-xs text-gray-500">Jersey Details</th>
                <th class="px-6 py-2 text-xs text-gray-500">Payment Info</th>
                <th class="px-6 py-2 text-xs text-gray-500">Payment Status</th>

                <th class="px-6 py-2 text-xs text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              {orders.map((item) => (
                <tr class="" key={item._id}>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">{item.user.name}</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">
                      {item.jourseyName} ({item.jourseyNumber}) - {item.size} -{" "}
                      {item.sleveSize}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">
                      {item.paymentMethod} - {item.txId}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">{item.status}</div>
                  </td>
                  <td class="px-6 py-4">
                    <button
                      onClick={() => confirm(item._id)}
                      class="px-4 py-1 text-sm text-white bg-blue-400 rounded w-20"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => reject(item._id)}
                      class="px-4 py-1 text-sm text-white bg-red-400 rounded w-20 xl:ml-2"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderLists;

import React from "react";
import axios from "axios";
import moment from "moment";

import Title from "../components/Title";

const expenses = ({ expenses }) => {
  return (
    <div>
      <Title title="Expenses" />
      <div className="border-zinc-200 border-solid border-2 mt-5 mx-5 rounded-md bg-white">
        <div className="flex flex-row justify-around bg-[#007EA7] rounded-md text-white">
          <h1>Date</h1>
          <h1>Item</h1>
          <h1>Type</h1>
          <h1>Location</h1>
          <h1>Empolyee</h1>
          <h1>Price</h1>
        </div>
        {expenses.map((cost) => (
          <div key={cost._id} className="flex flex-row text-center">
            <div className="w-1/6">{moment(cost.date).format("M-D-YYYY")}</div>
            <div className="w-1/6">{cost.type}</div>
            <div className="w-1/6">{cost.name}</div>
            <div className="w-1/6">{cost.location}</div>
            <div className="w-1/6">{cost.employee}</div>
            <div className="w-1/6">{cost.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const expenses = await axios.get("http://localhost:5010/expenses");
  return {
    props: {
      expenses: expenses.data,
    },
  };
};

export default expenses;

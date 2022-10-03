import React from "react";
import axios from "axios";
import moment from "moment";

import Title from "../components/Title";

const expenses = ({ expenses }) => {
  return (
    <div>
      <Title title="Expenses" />
      {expenses.map((cost) => (
        <div className="flex flex-row justify-around">
          <div>{moment(cost.date).format("M-D-YYYY")}</div>
          <div>{cost.type}</div>
          <div>{cost.name}</div>
          <div>{cost.location}</div>
          <div>{cost.employee}</div>
        </div>
      ))}
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
